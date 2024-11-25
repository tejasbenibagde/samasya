import { validateNumber } from '../../utils';

/**
 * Subtracts numbers. Accepts either two numbers or an array of numbers.
 * @param a - The first number or an array of numbers.
 * @param b - The second number (optional, if `a` is a single number).
 * @returns The result of subtraction.
 * @throws Error if inputs are invalid.
 */
function subtract(a: number | number[], b?: number): number {
  if (Array.isArray(a)) {
    a.forEach((num) => validateNumber(num, 'subtract'));
    return a.reduce((result, num) => result - num);
  }

  validateNumber(a, 'subtract');
  validateNumber(b, 'subtract');
  return a - (b as number);
}

export { subtract };
