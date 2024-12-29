import { modInverse } from '../advanced';
import { modMultiply } from './modMultiply';

/**
 * Performs modular division (a / b) % mod by finding the modular inverse of b.
 * Assumes mod is a prime number for simplicity (ensuring modular inverses exist).
 *
 * @param a - The dividend
 * @param b - The divisor
 * @param mod - The modulus
 * @returns Result of (a / b) % mod
 * @throws Error if the modular inverse does not exist
 */
function modDivide(a: number, b: number, mod: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  const bInverse = modInverse(b, mod);
  return modMultiply(a, bInverse, mod);
}

export { modDivide };
