/**
 * Computes Euler's Totient Function, which gives the count of numbers less than or equal to `n`
 * that are coprime to `n`.
 * @param n - The input number.
 * @returns The count of numbers coprime to `n`.
 * @throws Will throw an error if `n` is not a positive integer.
 */
function totient(n: number): number {
    if (n <= 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a positive integer.");
    }

    let result = n;

    // Loop through all integers from 2 to sqrt(n) to calculate prime factors
    for (let p = 2; p * p <= n; p++) {
        // If `p` is a prime factor of `n`
        if (n % p === 0) {
            // Update `result` using the formula: result *= (1 - 1/p)
            result *= (1 - 1 / p);

            // Remove all occurrences of `p` from `n`
            while (n % p === 0) {
                n /= p;
            }
        }
    }

    // If `n` is still greater than 1, it must be a prime factor
    if (n > 1) {
        result *= (1 - 1 / n);
    }

    return Math.floor(result); // Totient function always returns an integer
}

export { totient };
