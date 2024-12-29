import { validateNumber } from '../../../../utils';
import { modGCD } from './modGCD'; // Import the GCD function

/**
 * Finds the modular inverse of a number using the Extended Euclidean Algorithm.
 * @param a - The number to find the inverse of
 * @param mod - The modulus
 * @returns The modular inverse of a under the modulus
 * @throws Error if the modular inverse does not exist
 */
function modInverse(a: number, mod: number): number {
  validateNumber([a, mod]);
  if (mod === 1) {
    return 0; // In modular arithmetic with mod = 1, any number's inverse is 0
  }

  // Ensure a is within the range of mod
  a = ((a % mod) + mod) % mod; // Adjust negative numbers

  // Check if a and mod are coprime (i.e., gcd(a, mod) should be 1)
  if (modGCD(a, mod) !== 1) {
    throw new Error('Modular inverse does not exist (a and mod are not coprime).');
  }

  const m0 = mod;
  let x0 = 0;
  let x1 = 1;

  while (a > 1) {
    const q = Math.floor(a / mod);
    [a, mod] = [mod, a % mod];
    [x0, x1] = [x1 - q * x0, x0];
  }

  if (x1 < 0) {
    x1 += m0;
  }

  return x1;
}

export { modInverse };
