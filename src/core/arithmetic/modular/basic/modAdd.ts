import { modulo } from './modulo';
import { validateNumber } from '../../../../utils';
/**
 * Performs modular addition.
 * @param a - First number
 * @param b - Second number
 * @param mod - The modulus
 * @returns Result of (a + b) % mod.
 */
function modAdd(a: number, b: number, mod: number): number {
  validateNumber([a, b, mod]);
  return modulo(a + b, mod);
}

export { modAdd };
