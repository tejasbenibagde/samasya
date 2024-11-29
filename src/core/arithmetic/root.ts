/**
 * Calculates the nth root of a number.
 * Handles edge cases such as negative values, zero, and fractional roots.
 * @param value - The number to find the root of.
 * @param root - The degree of the root (e.g., 2 for square root, 3 for cube root).
 * @returns The nth root of the value.
 * @throws Error if root is 0 or if trying to calculate an even root of a negative number.
 */
function root(value: number, root: number): number {
  if (root === 0) throw new Error('Root cannot be zero.');

  // Handle negative value with even root
  if (value < 0 && root % 2 === 0) {
    throw new Error('Even root of a negative number is not defined in the real number system.');
  }

  // Handle negative value with odd root
  if (value < 0 && root % 2 !== 0) {
    return -Math.pow(-value, 1 / root); // Handle negative roots for odd values
  }

  // Handle negative roots (reciprocal of the positive root)
  if (root < 0) {
    return 1 / Math.pow(value, 1 / Math.abs(root));
  }

  // Standard case for fractional and positive roots
  return Math.pow(value, 1 / root);
}

export { root };
