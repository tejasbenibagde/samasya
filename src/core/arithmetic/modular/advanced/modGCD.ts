/**
 * Computes the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 * Handles edge cases for negative numbers and zero values.
 *
 * @param a - The first number
 * @param b - The second number
 * @returns The GCD of a and b
 * @throws Error if both numbers are 0 (undefined GCD).
 */
function modGCD(a: number, b: number): number {
  if (a === 0 && b === 0) {
    throw new Error('GCD is undefined for a = 0 and b = 0');
  }

  // Ensure inputs are non-negative
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  return a; // GCD is always non-negative
}

export { modGCD };
