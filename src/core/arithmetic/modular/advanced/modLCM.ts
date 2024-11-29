import { modGCD } from './modGCD';

/**
 * Computes the Least Common Multiple (LCM) of two numbers under a modulus.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @param mod - The modulus to use for the computation.
 * @returns The LCM of `a` and `b` modulo `mod`.
 * @throws Error if `mod` is less than or equal to 0.
 */
export function modLCM(a: number, b: number, mod: number): number {
  if (mod <= 0) {
    throw new Error('Modulus must be greater than 0');
  }

  // Calculate GCD
  const gcd = modGCD(a, b);

  // Compute LCM using the formula: LCM(a, b) = |a * b| / GCD(a, b)
  // Apply modulus during calculation to avoid overflow
  const lcm = ((Math.abs(a) / gcd) * Math.abs(b)) % mod;

  return lcm;
}
