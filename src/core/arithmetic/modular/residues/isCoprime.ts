/**
 * Computes the greatest common divisor (GCD) of two numbers using the Euclidean algorithm.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The GCD of a and b.
 * @throws Will throw an error if either input is not a finite number.
 */
function gcd(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Inputs must be finite numbers.');
  }

  a = Math.abs(a);
  b = Math.abs(b);

  // Handle edge cases where one or both inputs are zero
  if (a === 0 && b === 0) {
    throw new Error('GCD is undefined for both inputs as zero.');
  }
  if (a === 0) return b;
  if (b === 0) return a;

  // Euclidean algorithm
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * Checks if two numbers are coprime (i.e., their GCD is 1).
 * @param a - The first number.
 * @param b - The second number.
 * @returns True if a and b are coprime, false otherwise.
 * @throws Will throw an error if either input is not a finite number.
 */
function isCoprime(a: number, b: number): boolean {
  return gcd(a, b) === 1;
}

export { gcd, isCoprime };
