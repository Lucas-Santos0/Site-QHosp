export const resetCodes = {}; // { email: { code, expiresAt } }

export function generateCode(email) {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutos
  resetCodes[email] = { code, expiresAt };
  return code;
}

export function verifyCode(email, code) {
  const data = resetCodes[email];
  if (!data) return false;
  const valid = data.code === code && data.expiresAt > Date.now();
  if (valid) delete resetCodes[email];
  return valid;
}
