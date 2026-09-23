
const SPREADSHEET_ID = '13STSwTczleGNIC47uafPS34Z6iS6iWKUljBadPqhjfM';
const REQUIRED_HEADERS = ['stt', 'side', 'to', 'message', 'slot', 'invite'];
const RSVP_HEADERS = ['tên khách', 'số lượng', 'lời chúc', 'có tham dự'];
const INVITE_CACHE_SECONDS = 900;
const GUESTBOOK_CACHE_SECONDS = 60;

function doGet(e) {
  const action = String(e.parameter.action || '').trim();
  const payload = action === 'guestbook'
    ? getGuestbookEntries_()
    : findGuestByInvite_(String(e.parameter.invite || '').trim());
  const callback = String(e.parameter.callback || '');

  // JSONP lets a static site call this Web App without CORS configuration.
  if (/^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback)) {
    return ContentService.createTextOutput(
      `${callback}(${JSON.stringify(payload)});`
    ).setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const invite = String(data.invite || '').trim();
    const attendance = String(data.attendance || '').trim();
    const count = Number(data.count);
    const name = String(data.name || '').trim();
    const message = String(data.message || '').trim();
    const allowedAttendance = [
      'Chắc chắn tham dự',
      'Chưa chắc chắn',
      'Không thể tham dự',
    ];

    if (
      !name ||
      !Number.isInteger(count) ||
      count < 1 ||
      count > 3 ||
      !allowedAttendance.includes(attendance)
    ) {
      return jsonResponse_({ ok: false, error: 'invalid_request' });
    }

    const lock = LockService.getScriptLock();
    if (!lock.tryLock(5000)) {
      return jsonResponse_({ ok: false, error: 'busy' });
    }

    try {
      const record = findGuestRecord_(invite);
      if (!record) return jsonResponse_({ ok: false, error: 'not_found' });

      const { sheet, index, rowNumber } = record;
      const rsvpIndexes = RSVP_HEADERS.map((header) => index[header]);
      const firstColumn = Math.min(...rsvpIndexes);
      const areAdjacent = rsvpIndexes.every(
        (column, position) => column === firstColumn + position
      );

      if (areAdjacent) {
        sheet
          .getRange(rowNumber, firstColumn + 1, 1, RSVP_HEADERS.length)
          .setValues([[name, count, message, attendance]]);
      } else {
        sheet.getRange(rowNumber, index['tên khách'] + 1).setValue(name);
        sheet.getRange(rowNumber, index['số lượng'] + 1).setValue(count);
        sheet.getRange(rowNumber, index['lời chúc'] + 1).setValue(message);
        sheet.getRange(rowNumber, index['có tham dự'] + 1).setValue(attendance);
      }

      const timestampIndex = getTimestampIndex_(index);
      if (timestampIndex !== -1) {
        sheet.getRange(rowNumber, timestampIndex + 1).setValue(new Date());
      }
      CacheService.getScriptCache().remove('guestbook');
    } finally {
      lock.releaseLock();
    }

    return jsonResponse_({ ok: true });
  } catch {
    return jsonResponse_({ ok: false, error: 'server_error' });
  }
}

function getGuestbookEntries_() {
  const cache = CacheService.getScriptCache();
  const cacheKey = 'guestbook';
  const cached = cache.get(cacheKey);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch {
      cache.remove(cacheKey);
    }
  }

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = findGuestSheet_(spreadsheet);
  if (!sheet || sheet.getLastRow() < 2) return { ok: true, entries: [] };

  const values = sheet.getDataRange().getValues();
  const headers = values[0].map((header) => String(header).trim().toLowerCase());
  const index = Object.fromEntries(headers.map((header, position) => [header, position]));
  const timestampIndex = getTimestampIndex_(index);
  const entries = values
    .slice(1)
    .map((row, offset) => ({
      name: String(row[index['tên khách']] || '').trim(),
      message: String(row[index['lời chúc']] || '').trim(),
      createdAt: timestampIndex !== -1 && row[timestampIndex] instanceof Date
        ? row[timestampIndex].toISOString()
        : '',
      rowNumber: offset + 2,
    }))
    .filter((entry) => entry.name && entry.message)
    .sort((first, second) => {
      const firstTime = Date.parse(first.createdAt) || 0;
      const secondTime = Date.parse(second.createdAt) || 0;
      return secondTime - firstTime || second.rowNumber - first.rowNumber;
    })
    .map(({ rowNumber, ...entry }) => entry);

  const result = { ok: true, entries };
  cache.put(cacheKey, JSON.stringify(result), GUESTBOOK_CACHE_SECONDS);
  return result;
}

function findGuestByInvite_(invite) {
  const cache = CacheService.getScriptCache();
  const cacheKey = `invite:${invite}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch {
      cache.remove(cacheKey);
    }
  }

  const record = findGuestRecord_(invite);
  if (!record) return { ok: false };

  const { row, index } = record;

  const result = {
    ok: true,
    side: row[index.side],
    to: row[index.to],
    message: row[index.message],
    slot: row[index.slot],
  };
  cache.put(cacheKey, JSON.stringify(result), INVITE_CACHE_SECONDS);
  return result;
}

function findGuestRecord_(invite) {
  const parsedInvite = parseInvite_(invite);
  if (!parsedInvite) return null;

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = findGuestSheet_(spreadsheet);
  if (!sheet || sheet.getLastRow() < 2) return null;

  const headers = sheet
    .getRange(1, 1, 1, sheet.getLastColumn())
    .getDisplayValues()[0]
    .map((header) => String(header).trim().toLowerCase());
  const index = Object.fromEntries(headers.map((header, position) => [header, position]));
  const sttCell = sheet
    .getRange(2, index.stt + 1, sheet.getLastRow() - 1, 1)
    .createTextFinder(parsedInvite.stt)
    .matchEntireCell(true)
    .findNext();
  if (!sttCell) return null;

  const rowNumber = sttCell.getRow();
  const row = sheet
    .getRange(rowNumber, 1, 1, headers.length)
    .getDisplayValues()[0];

  // STT chooses the row quickly; hashes make sure the URL belongs to that row.
  if (
    INVITE_HASH(row[index.side]) !== parsedInvite.sideHash ||
    INVITE_HASH(row[index.to]) !== parsedInvite.toHash
  ) {
    return null;
  }

  return { sheet, index, row, rowNumber };
}

function findGuestSheet_(spreadsheet) {
  return spreadsheet.getSheets().find((candidate) => {
    if (candidate.getLastColumn() < REQUIRED_HEADERS.length) return false;
    const headers = candidate
      .getRange(1, 1, 1, candidate.getLastColumn())
      .getDisplayValues()[0]
      .map((header) => String(header).trim().toLowerCase());
    return [...REQUIRED_HEADERS, ...RSVP_HEADERS].every((header) =>
      headers.includes(header)
    );
  });
}

function getTimestampIndex_(index) {
  return ['thời gian', 'timestamp', 'created at']
    .map((header) => index[header])
    .find((value) => Number.isInteger(value)) ?? -1;
}

function parseInvite_(invite) {
  const value = String(invite || '').trim();
  if (!/^[A-Za-z0-9_-]{9,11}$/.test(value)) return null;

  const stt = value.slice(4, -4);
  if (!/^([1-9]\d?|100)$/.test(stt)) return null;

  return {
    sideHash: value.slice(0, 4),
    stt,
    toHash: value.slice(-4),
  };
}

function jsonResponse_(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
