import { modExp } from './modExp';
/**
 * Finds modular roots of the equation x^n ≡ a (mod mod).
 * @param a - The number whose root needs to be found.
 * @param n - The degree of the root (e.g., 2 for square root, 3 for cube root).
 * @param mod - The modulus.
 * @returns An array of solutions x such that x^n ≡ a (mod mod).
 * @throws An error if no solutions exist or inputs are invalid.
 */
export function modRoot(a: number, n: number, mod: number): number[] {
  if (mod <= 0) {
    throw new Error('Modulus must be greater than 0');
  }
  if (n <= 0) {
    throw new Error('Root degree must be greater than 0');
  }

  a = ((a % mod) + mod) % mod; // Ensure a is within [0, mod-1]
  const solutions: number[] = [];

  // Brute-force search for small moduli
  for (let x = 0; x < mod; x++) {
    if (modExp(x, n, mod) === a) {
      solutions.push(x);
    }
  }

  if (solutions.length === 0) {
    throw new Error(`No solution exists for x^${n} ≡ ${a} (mod ${mod})`);
  }

  return solutions;
}
