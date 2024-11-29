/**
 * Calculates the modulo operation, handling negative numbers correctly.
 * @param a - Dividend
 * @param b - Divisor
 * @returns Remainder when `a` is divided by `b`.
 */
function modulo(a: number, b: number): number {
  return ((a % b) + b) % b;
}

export { modulo };
