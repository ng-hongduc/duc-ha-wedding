/** Trả về 4 ký tự hash web-safe cho một giá trị. */
function INVITE_HASH(value) {
  const digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    String(value || '').trim(),
    Utilities.Charset.UTF_8
  );

  return Utilities
    .base64EncodeWebSafe(digest)
    .replace(/=+$/, '')
    .slice(0, 4);
}

/**
 * Tạo mã invite theo dạng: hash(side) + STT + hash(to).
 * Ví dụ: Ab1Q12z9X_ (STT = 12). Message và slot không làm đổi mã.
 *
 * @customfunction
 */
function GEN_INVITE_URL(stt, side, to) {
  const cleanStt = String(stt || '').trim();
  const cleanSide = String(side || 'groom').trim();
  const cleanTo = String(to || '').trim();

  if (!/^[1-9]\d*$/.test(cleanStt)) return '';
  return `${INVITE_HASH(cleanSide)}${cleanStt}${INVITE_HASH(cleanTo)}`;
}
