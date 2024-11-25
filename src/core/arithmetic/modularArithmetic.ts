// src/functions/modularArithmetic.ts

/**
 * Calculates the modulo operation, handling negative numbers correctly.
 * @param a - Dividend
 * @param b - Divisor
 * @returns Remainder when `a` is divided by `b`.
 */
export function modulo(a: number, b: number): number {
  return ((a % b) + b) % b;
}

/**
 * Performs modular addition.
 * @param a - First number
 * @param b - Second number
 * @param mod - The modulus
 * @returns Result of (a + b) % mod.
 */
export function modAdd(a: number, b: number, mod: number): number {
  return modulo(a + b, mod);
}

/**
 * Performs modular multiplication.
 * @param a - First number
 * @param b - Second number
 * @param mod - The modulus
 * @returns Result of (a * b) % mod.
 */
export function modMultiply(a: number, b: number, mod: number): number {
  return modulo(a * b, mod);
}

/**
 * Performs modular exponentiation efficiently.
 * @param base - The base number
 * @param exp - The exponent
 * @param mod - The modulus
 * @returns Result of (base^exp) % mod.
 */
export function modExp(base: number, exp: number, mod: number): number {
  let result = 1;
  base = modulo(base, mod);
  while (exp > 0) {
    if (exp % 2 === 1) result = modMultiply(result, base, mod);
    exp = Math.floor(exp / 2);
    base = modMultiply(base, base, mod);
  }
  return result;
}
