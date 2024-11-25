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

export { validateNumber };
