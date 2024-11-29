import { modulo } from './modulo';
/**
 * Performs modular addition.
 * @param a - First number
 * @param b - Second number
 * @param mod - The modulus
 * @returns Result of (a + b) % mod.
 */
function modAdd(a: number, b: number, mod: number): number {
  return modulo(a + b, mod);
}

export { modAdd };
