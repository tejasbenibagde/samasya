import { modulo } from '../basic/modulo';
import { modMultiply } from '../';
import { validateNumber } from '../../../../utils';

/**
 * Performs modular exponentiation efficiently.
 * Handles edge cases such as negative exponents, zero base, zero exponent, and modulus 1.
 * @param base - The base number
 * @param exp - The exponent
 * @param mod - The modulus
 * @returns Result of (base^exp) % mod.
 * @throws Error for invalid modulus values (mod <= 0).
 */
function modExp(base: number, exp: number, mod: number): number {
  validateNumber([base, exp, mod]);
  if (mod <= 0) {
    throw new Error('Modulus must be a positive integer.');
  }

  // Handle 0^0 (typically defined as 1 in programming)
  if (base === 0 && exp === 0) {
    return 1;
  }

  // Handle base = 0 (result is always 0 for positive exponent)
  if (base === 0) {
    return 0;
  }

  // Handle exp = 0 (any number to the power of 0 is 1)
  if (exp === 0) {
    return 1;
  }

  // Handle negative exponents
  if (exp < 0) {
    throw new Error('Negative exponents are not supported in modular arithmetic.');
  }

  let result = 1;
  base = modulo(base, mod);

  while (exp > 0) {
    // If exp is odd, multiply base with the result
    if (exp % 2 === 1) {
      result = modMultiply(result, base, mod);
    }

    // Reduce the exponent by half
    exp = Math.floor(exp / 2);

    // Square the base
    base = modMultiply(base, base, mod);
  }

  return result;
}

export { modExp };
