import { modulo } from '../basic/modulo';
import { modMultiply } from '../';

/**
 * Performs modular exponentiation efficiently.
 * @param base - The base number
 * @param exp - The exponent
 * @param mod - The modulus
 * @returns Result of (base^exp) % mod.
 */
function modExp(base: number, exp: number, mod: number): number {
  let result = 1;
  base = modulo(base, mod);
  while (exp > 0) {
    if (exp % 2 === 1) result = modMultiply(result, base, mod);
    exp = Math.floor(exp / 2);
    base = modMultiply(base, base, mod);
  }
  return result;
}

export { modExp };
