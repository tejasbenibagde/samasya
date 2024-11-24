/**
 * Adds numbers. Accepts either two numbers or an array of numbers.
 * @param a - The first number or an array of numbers.
 * @param b - The second number (optional, if `a` is a single number).
 * @returns The sum of the numbers.
 * @throws Error if inputs are invalid.
 */
export function add(a: number | number[], b?: number): number {
  if (Array.isArray(a)) {
    a.forEach((num) => validateNumber(num, 'add'));
    return a.reduce((sum, num) => sum + num, 0);
  }

  validateNumber(a, 'add');
  validateNumber(b, 'add');
  return a + (b as number);
}

/**
 * Subtracts numbers. Accepts either two numbers or an array of numbers.
 * @param a - The first number or an array of numbers.
 * @param b - The second number (optional, if `a` is a single number).
 * @returns The result of subtraction.
 * @throws Error if inputs are invalid.
 */
export function subtract(a: number | number[], b?: number): number {
  if (Array.isArray(a)) {
    a.forEach((num) => validateNumber(num, 'subtract'));
    return a.reduce((result, num) => result - num);
  }

  validateNumber(a, 'subtract');
  validateNumber(b, 'subtract');
  return a - (b as number);
}

/**
 * Multiplies numbers. Accepts either two numbers or an array of numbers.
 * @param a - The first number or an array of numbers.
 * @param b - The second number (optional, if `a` is a single number).
 * @returns The product of the numbers.
 * @throws Error if inputs are invalid.
 */
export function multiply(a: number | number[], b?: number): number {
  if (Array.isArray(a)) {
    a.forEach((num) => validateNumber(num, 'multiply'));
    return a.reduce((product, num) => product * num, 1);
  }

  validateNumber(a, 'multiply');
  validateNumber(b, 'multiply');
  return a * (b as number);
}

/**
 * Divides numbers. Accepts either two numbers or an array of numbers.
 * @param a - The first number or an array of numbers.
 * @param b - The second number (optional, if `a` is a single number).
 * @returns The result of division.
 * @throws Error if inputs are invalid or division by zero occurs.
 */
export function divide(a: number | number[], b?: number): number {
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

/**
 * Validates if a value is a number.
 * @param value - The value to validate.
 * @param operation - The name of the operation being performed.
 * @throws Error if the value is not a number.
 */
function validateNumber(value: unknown, operation: string): void {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error(`Invalid input for ${operation}: must be a valid number`);
  }
}
