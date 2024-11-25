import { validateNumber } from '../../utils';

/**
 * Adds numbers. Accepts either two numbers or an array of numbers.
 * @param a - The first number or an array of numbers.
 * @param b - The second number (optional, if `a` is a single number).
 * @returns The sum of the numbers.
 * @throws Error if inputs are invalid.
 */
function add(a: number | number[], b?: number): number {
  if (Array.isArray(a)) {
    a.forEach((num) => validateNumber(num, 'add'));
    return a.reduce((sum, num) => sum + num, 0);
  }

  validateNumber(a, 'add');
  validateNumber(b, 'add');
  return a + (b as number);
}

export { add };
