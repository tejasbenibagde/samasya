import { modulo } from '../basic/modulo';
/**
 * Finds the modular inverse of a number using the Extended Euclidean Algorithm.
 * @param a - The number to find the inverse of
 * @param mod - The modulus
 * @returns The modular inverse of a under the modulus
 * @throws Error if the modular inverse does not exist
 */
function modInverse(a: number, mod: number): number {
  let m0 = mod;
  let x0 = 0;
  let x1 = 1;

  a = modulo(a, mod);
  if (a === 0) {
    throw new Error('Modular inverse does not exist (a is divisible by mod).');
  }

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
