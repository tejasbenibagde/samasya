/**
 * Raises a number to a specified power.
 * Handles edge cases such as zero base, zero exponent, and negative exponents.
 * @param base - The base number.
 * @param exponent - The power to raise the base to.
 * @returns The result of base^exponent.
 */
function power(base: number, exponent: number): number {
  // Special case: 0^0 is generally defined as 1 in programming
  if (base === 0 && exponent === 0) {
    return 1;
  }

  // Handle negative exponents
  if (exponent < 0) {
    if (base === 0) {
      throw new Error(
        'Division by zero is not allowed when the base is 0 and the exponent is negative.'
      );
    }
    return 1 / Math.pow(base, -exponent);
  }

  return Math.pow(base, exponent);
}

export { power };
