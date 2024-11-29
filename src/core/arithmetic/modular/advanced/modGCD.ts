/**
 * Computes the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 * @param a - The first number
 * @param b - The second number
 * @returns The GCD of a and b
 */
function modGCD(a: number, b: number): number {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a); // Ensure GCD is non-negative
}

export { modGCD };
