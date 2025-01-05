import { validateNumber } from '../../../../utils';

/**
 * Performs encryption via modular exponentiation.
 * @param base - The base value to be encrypted.
 * @param key - The encryption key (exponent).
 * @param mod - The modulus for encryption.
 * @returns The encrypted result as (base^key) % mod.
 * @throws Error if any input is invalid or mod is not a positive integer.
 */
function modularEncryption(base: number, key: number, mod: number): number {
  validateNumber([base, key, mod]);

  if (!Number.isFinite(base) || !Number.isFinite(key) || !Number.isFinite(mod)) {
    throw new Error('All inputs must be finite numbers.');
  }

  if (mod <= 0) {
    throw new Error('Modulus must be a positive integer.');
  }

  let result = 1;
  base = base % mod;

  while (key > 0) {
    // If key is odd, multiply base with result
    if (key % 2 === 1) {
      result = (result * base) % mod;
    }

    // Divide key by 2 and square the base
    key = Math.floor(key / 2);
    base = (base * base) % mod;
  }

  return result;
}

export { modularEncryption };
