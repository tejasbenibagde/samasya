import { validateNumber } from '../../../../utils';

/**
 * Hashes a string using modular arithmetic.
 * @param data - The input string to hash.
 * @param mod - The modulus for the hash function.
 * @returns A number representing the hash of the input data modulo mod.
 * @throws Error if the modulus is invalid or not a positive integer.
 */
function modularHash(data: string, mod: number): number {
  if (typeof data !== 'string') {
    throw new Error('Data must be a string.');
  }
  validateNumber(mod);
  if (mod <= 0) {
    throw new Error('Modulus must be a positive integer.');
  }

  if (!Number.isFinite(mod)) {
    throw new Error('Modulus must be a finite number.');
  }

  let hash = 0;

  for (let i = 0; i < data.length; i++) {
    // Perform modular addition with the character's ASCII value
    hash = (hash * 31 + data.charCodeAt(i)) % mod;
  }

  return hash;
}

export { modularHash };
