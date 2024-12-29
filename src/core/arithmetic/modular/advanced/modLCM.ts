import { validateNumber } from '../../../../utils';
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
  validateNumber([a, b, mod]);

  if (mod <= 0) {
    throw new Error('Modulus must be greater than 0');
  }

  // Normalize inputs to [0, mod-1]
  a = ((a % mod) + mod) % mod;
  b = ((b % mod) + mod) % mod;

  // Calculate GCD
  const gcd = modGCD(a, b);

  if (gcd === 0) {
    throw new Error('GCD is zero, cannot compute LCM');
  }

  // Compute LCM using modular arithmetic
  const lcm = ((Math.abs(a) % mod) * (Math.abs(b) / gcd)) % mod;

  return lcm;
}
