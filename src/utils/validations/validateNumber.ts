/**
 * Validates if a value is a number.
 * @param value - The value to validate.
 * @param operation - The name of the operation being performed.
 * @throws Error if the value is not a number.
 */
function validateNumber(value: unknown): void {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      throw new Error(`Invalid input: array cannot be empty`);
    }
    value.forEach((item) => {
      if (typeof item !== 'number' || isNaN(item)) {
        throw new Error(`Invalid input: must be a number.`);
      }
    });
  } else if (typeof value !== 'number' || isNaN(value)) {
    throw new Error(`Invalid input: must be a number.`);
  }
}

export { validateNumber };
