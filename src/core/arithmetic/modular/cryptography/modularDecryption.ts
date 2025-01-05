import { validateNumber } from '../../../../utils';

/**
 * Decrypts an encrypted value using modular arithmetic.
 * @param encrypted - The encrypted value to decrypt.
 * @param key - The decryption key (modular multiplicative inverse of encryption key if applicable).
 * @param mod - The modulus used during encryption.
 * @returns The decrypted value.
 * @throws Error if inputs are invalid or modulus is not positive.
 */
function modularDecryption(encrypted: number, key: number, mod: number): number {
  validateNumber([encrypted, key, mod]);

  if (encrypted <= 0 || !Number.isInteger(encrypted)) {
    throw new Error('Encrypted value must be a positive integer.');
  }
  if (mod <= 0 || !Number.isInteger(mod)) {
    throw new Error('Modulus must be a positive integer.');
  }

  if (key < 0 || !Number.isInteger(key)) {
    throw new Error('Key must be a positive integer.');
  }

  let result = 1;
  encrypted = encrypted % mod;

  // Perform modular exponentiation
  while (key > 0) {
    if (key % 2 === 1) {
      result = (result * encrypted) % mod;
    }
    encrypted = (encrypted * encrypted) % mod;
    key = Math.floor(key / 2);
  }

  return result;
}

export { modularDecryption };
