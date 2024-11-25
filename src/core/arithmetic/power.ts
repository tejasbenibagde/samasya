/**
 * Raises a number to a specified power.
 * @param base - The base number.
 * @param exponent - The power to raise the base to.
 * @returns The result of base^exponent.
 */
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

/**
 * Calculates the nth root of a number.
 * @param value - The number to find the root of.
 * @param root - The degree of the root (e.g., 2 for square root, 3 for cube root).
 * @returns The nth root of the value.
 */
function root(value: number, root: number): number {
  if (root === 0) throw new Error('Root cannot be zero.');
  return Math.pow(value, 1 / root);
}

export { power, root };
