1. Basic Modular Operations
These functions handle the fundamental operations in modular arithmetic:

✅modulo(a, b): number
Computes the remainder when a is divided by b.
Example: modulo(10, 3) => 1

✅modAdd(a, b, mod): number
Adds two numbers modulo mod.
Example: modAdd(5, 7, 6) => 0 (since (5 + 7) % 6 = 0)

✅modSubtract(a, b, mod): number
Subtracts two numbers modulo mod.
Example: modSubtract(7, 5, 6) => 2 (since (7 - 5) % 6 = 2)

✅modMultiply(a, b, mod): number
Multiplies two numbers modulo mod.
Example: modMultiply(5, 7, 6) => 5 (since (5 * 7) % 6 = 5)

✅modDivide(a, b, mod): number
Divides a by b modulo mod (requires modular multiplicative inverse).
Example: modDivide(4, 3, 5) => 3 (since 4 * 3^-1 mod 5 = 3)

2. Exponentiation and Powers
Functions that compute powers or exponents under a modulus:

✅modExp(base, exp, mod): number
Calculates (base^exp) % mod efficiently using modular exponentiation (e.g., repeated squaring).
Example: modExp(2, 10, 1000) => 24 (since (2^10) % 1000 = 24)

✅modRoot(a, n, mod): number[]
Finds the modular roots of a under mod (if they exist).
Example: Solving x^2 ≡ a (mod p) for a quadratic residue a.

3. Advanced Modular Functions
These handle specific advanced cases:

✅modInverse(a, mod): number
Finds the modular multiplicative inverse of a under mod.
Example: modInverse(3, 7) => 5 (since (3 * 5) % 7 = 1)

✅modGCD(a, b): number
Finds the greatest common divisor (GCD) of two numbers using modular arithmetic.
Example: modGCD(9, 6) => 3

✅modLCM(a, b): number
Computes the least common multiple (LCM) modulo mod.
Example: modLCM(4, 6, 5) => 4

4. Residue Classes and Operations
These functions work with equivalence classes of numbers under a modulus:

✅ isCoprime(a, b): boolean
Checks if a and b are coprime (i.e., GCD(a, b) == 1).

✅ findResidue(a, mod): number
Maps a to its residue class modulo mod.
Example: findResidue(-10, 3) => 2 (since -10 ≡ 2 (mod 3))

✅ totient(n): number
Computes Euler’s Totient Function, which gives the count of numbers coprime to n.
Example: totient(9) => 6 (1, 2, 4, 5, 7, 8 are coprime to 9).

✅ 5. Chinese Remainder Theorem (CRT)
Special functions for working with systems of modular equations:

solveCRT(remainders: number[], moduli: number[]): number
Solves a system of simultaneous congruences using the CRT.
Example:
Solve:
lua
Copy code
x ≡ 2 (mod 3)  
x ≡ 3 (mod 5)  
x ≡ 2 (mod 7)  
Output: x = 23

6. Prime and Factorial Functions
These deal with primes or factorial operations under modular constraints:

modFactorial(n, mod): number
Computes n! % mod.
Example: modFactorial(5, 7) => 3 (since 5! = 120, 120 % 7 = 3)

modPrimeTest(n): boolean
Checks if n is prime using modular arithmetic (e.g., Fermat's primality test).

modBinomialCoefficient(n, k, mod): number
Calculates binomial coefficients modulo mod.
Example: modBinomialCoefficient(5, 2, 7) => 3

7. Special Modular Problems
Functions for solving modular-specific problems:

discreteLogarithm(base, result, mod): number
Solves for x in base^x ≡ result (mod mod) (if possible).

modSquareFreePart(a, mod): number
Computes the square-free part of a number modulo mod.

8. Cryptography-Oriented Modular Functions
These are used in cryptographic applications:

modularHash(data: string, mod): number
Hashes data using modular arithmetic.

modularEncryption(base, key, mod): number
Performs encryption via modular exponentiation.

modularDecryption(encrypted, key, mod): number
Decrypts an encrypted value using modular arithmetic.



src/
├── basic/
│   ├── modAdd.ts
│   ├── modSubtract.ts
│   ├── modMultiply.ts
│   ├── modDivide.ts
│   ├── modulo.ts
├── exponentiation/
│   ├── modExp.ts
│   ├── modRoot.ts
├── advanced/
│   ├── modGCD.ts
│   ├── modLCM.ts
│   ├── modInverse.ts
├── residues/
│   ├── isCoprime.ts
│   ├── findResidue.ts
│   ├── totient.ts
├── crt/
│   ├── solveCRT.ts
├── prime-and-factorial/
│   ├── modFactorial.ts
│   ├── modPrimeTest.ts
│   ├── modBinomialCoefficient.ts
├── special-problems/
│   ├── discreteLogarithm.ts
│   ├── modSquareFreePart.ts
├── cryptography/
    ├── modularHash.ts
    ├── modularEncryption.ts
    ├── modularDecryption.ts
