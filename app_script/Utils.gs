/**
 * Tạo link với mã hash 9 ký tự từ stt + side + to + message + slot.
 *
 * @customfunction
 */
function GEN_INVITE_URL(stt, side, to, message, slot) {
  const clean = (value) => String(value || '').trim();

  const payload = [
    clean(stt),
    clean(side) || 'groom',
    clean(to),
    clean(message),
    clean(slot),
  ].join('|');

  const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    payload,
    Utilities.Charset.UTF_8
  );

  const invite = Utilities
    .base64EncodeWebSafe(digest)
    .replace(/=+$/, '')
    .slice(0, 9);

  return invite;
}

