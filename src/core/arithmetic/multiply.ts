import { validateNumber } from '../../utils';

/**
 * Multiplies numbers. Accepts either two numbers or an array of numbers.
 * @param a - The first number or an array of numbers.
 * @param b - The second number (optional, if `a` is a single number).
 * @returns The product of the numbers.
 * @throws Error if inputs are invalid.
 */
function multiply(a: number | number[], b?: number): number {
  if (Array.isArray(a)) {
    a.forEach((num) => validateNumber(num, 'multiply'));
    return a.reduce((product, num) => product * num, 1);
  }

  validateNumber(a, 'multiply');
  validateNumber(b, 'multiply');
  return a * (b as number);
}

export { multiply };