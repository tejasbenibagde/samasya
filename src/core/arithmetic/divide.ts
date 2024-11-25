import { validateNumber } from '../../utils';
/**
 * Divides numbers. Accepts either two numbers or an array of numbers.
 * @param a - The first number or an array of numbers.
 * @param b - The second number (optional, if `a` is a single number).
 * @returns The result of division.
 * @throws Error if inputs are invalid or division by zero occurs.
 */
function divide(a: number | number[], b?: number): number {
  if (Array.isArray(a)) {
    a.forEach((num) => {
      validateNumber(num, 'divide');
      if (num === 0) throw new Error('Division by zero in array is not allowed');
    });
    return a.reduce((result, num) => result / num);
  }

  validateNumber(a, 'divide');
  validateNumber(b, 'divide');
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / (b as number);
}

export { divide };
