import { validateNumber } from '../../../../utils';

/**
 * Computes the factorial of a number `n` modulo `mod`.
 *
 * @param {number} n - The number for which the factorial is to be computed.
 * Must be a non-negative integer.
 *
 * @param {number} mod - The modulus value. Must be a positive integer.
 *
 * @returns {number} - The result of `n! % mod`.
 *
 * @throws {Error} - Throws an error if:
 * - `n` or `mod` are not valid numbers.
 * - `n` is negative (factorial is not defined for negative numbers).
 * - `mod` is less than or equal to zero (modulus must be positive).
 *
 * @example
 * ```typescript
 * import { modFactorial } from './path-to-your-file';
 *
 * console.log(modFactorial(5, 7)); // Output: 3 (since 5! = 120, and 120 % 7 = 3)
 * console.log(modFactorial(0, 10)); // Output: 1 (since 0! = 1)
 * ```
 */
function modFactorial(n: number, mod: number): number {
  // Validate inputs
  validateNumber([n, mod]); // Ensures inputs are numbers
  if (n < 0) {
    throw new Error('Factorial is only defined for non-negative integers.');
  }
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer.');
  }
  if (!Number.isInteger(mod) || mod <= 0) {
    throw new Error('Modulus must be a positive integer.');
  }

  // Initialize the result
  let result = 1;

  // Compute n! % mod iteratively
  for (let i = 2; i <= n; i++) {
    result = (result * i) % mod;
  }

  return result;
}

export { modFactorial };
