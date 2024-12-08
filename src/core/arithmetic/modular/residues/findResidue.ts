/**
 * Maps a number to its residue class modulo `mod`.
 * @param a - The number to be mapped.
 * @param mod - The modulus.
 * @returns The residue of `a` modulo `mod`.
 * @throws Will throw an error if `mod` is not a positive number.
 */
function findResidue(a: number, mod: number): number {
  if (mod <= 0 || !Number.isFinite(mod)) {
    throw new Error('The modulus must be a positive finite number.');
  }
  const residue = ((a % mod) + mod) % mod;
  return residue;
}

export { findResidue };
