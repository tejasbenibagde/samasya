/**
 * Calculates the nth root of a number.
 * Handles edge cases such as negative values, zero, and fractional roots.
 * @param value - The number to find the root of.
 * @param n - The degree of the root (e.g., 2 for square root, 3 for cube root).
 * @returns The nth root of the value.
 * @throws Error if root is 0 or if trying to calculate an even root of a negative number.
 */
function root(value: number, n: number): number {
  if (n === 0) throw new Error('Root cannot be zero.');

  // Handle negative value with even root
  if (value < 0 && n % 2 === 0) {
    throw new Error('Even root of a negative number is not defined in the real number system.');
  }

  // Handle negative value with odd root
  if (value < 0 && n % 2 !== 0) {
    return -Math.pow(-value, 1 / n); // Handle negative roots for odd values
  }

  // Handle negative roots (reciprocal of the positive root)
  if (n < 0) {
    return 1 / Math.pow(value, 1 / Math.abs(n));
  }

  // Standard case for fractional and positive roots
  return Math.pow(value, 1 / n);
}

export { root };
