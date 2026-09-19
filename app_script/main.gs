
const SPREADSHEET_ID = '13STSwTczleGNIC47uafPS34Z6iS6iWKUljBadPqhjfM';
const REQUIRED_HEADERS = ['stt', 'side', 'to', 'message', 'slot', 'invite'];
const RSVP_HEADERS = ['tên khách', 'số lượng', 'lời chúc', 'có tham dự'];
const INVITE_CACHE_SECONDS = 900;

function doGet(e) {
  const invite = String(e.parameter.invite || '').trim();
  const payload = findGuestByInvite_(invite);
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
    } finally {
      lock.releaseLock();
    }

    return jsonResponse_({ ok: true });
  } catch {
    return jsonResponse_({ ok: false, error: 'server_error' });
  }
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
  if (!/^[A-Za-z0-9_-]{9}$/.test(invite)) return null;

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheets().find((candidate) => {
    if (candidate.getLastColumn() < REQUIRED_HEADERS.length) return false;
    const headers = candidate
      .getRange(1, 1, 1, candidate.getLastColumn())
      .getDisplayValues()[0]
      .map((header) => String(header).trim().toLowerCase());
    return [...REQUIRED_HEADERS, ...RSVP_HEADERS].every((header) =>
      headers.includes(header)
    );
  });
  if (!sheet || sheet.getLastRow() < 2) return null;

  const values = sheet.getDataRange().getDisplayValues();
  const headers = values[0].map((header) => String(header).trim().toLowerCase());
  const index = Object.fromEntries(headers.map((header, position) => [header, position]));
  const rowOffset = values.slice(1).findIndex((entry) => {
    const storedInvite = String(entry[index.invite] || '').trim();
    if (storedInvite === invite) return true;
    const match = storedInvite.match(/[?&]invite=([^&]+)/);
    return match && decodeURIComponent(match[1]) === invite;
  });
  if (rowOffset < 0) return null;

  return { sheet, index, row: values[rowOffset + 1], rowNumber: rowOffset + 2 };
}

function jsonResponse_(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
