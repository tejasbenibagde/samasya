import { gcd, isCoprime, findResidue, totient } from '../../../src';

describe('gcd function', () => {
    it('should return the correct GCD for positive numbers', () => {
        expect(gcd(48, 18)).toBe(6);
        expect(gcd(101, 103)).toBe(1);
        expect(gcd(12, 4)).toBe(4);
    });

    it('should return the correct GCD for negative numbers', () => {
        expect(gcd(-48, 18)).toBe(6);
        expect(gcd(48, -18)).toBe(6);
        expect(gcd(-48, -18)).toBe(6);
    });

    it('should return the correct GCD when one number is zero', () => {
        expect(gcd(0, 18)).toBe(18);
        expect(gcd(48, 0)).toBe(48);
    });

    it('should throw an error when both numbers are zero', () => {
        expect(() => gcd(0, 0)).toThrow('GCD is undefined for both inputs as zero.');
    });

    it('should throw an error for non-finite inputs', () => {
        expect(() => gcd(Infinity, 5)).toThrow('Inputs must be finite numbers.');
        expect(() => gcd(5, NaN)).toThrow('Inputs must be finite numbers.');
    });
});

describe('isCoprime function', () => {
    it('should return true for coprime numbers', () => {
        expect(isCoprime(17, 4)).toBe(true); // GCD = 1
        expect(isCoprime(101, 103)).toBe(true); // Both are primes
    });

    it('should return false for non-coprime numbers', () => {
        expect(isCoprime(48, 18)).toBe(false); // GCD = 6
        expect(isCoprime(12, 4)).toBe(false); // GCD = 4
    });

    it('should handle negative inputs correctly', () => {
        expect(isCoprime(-17, 4)).toBe(true);
        expect(isCoprime(48, -18)).toBe(false);
    });

    it('should return false when one number is zero (not coprime)', () => {
        expect(isCoprime(0, 18)).toBe(false);
        expect(isCoprime(48, 0)).toBe(false);
    });

    it('should throw an error for non-finite inputs', () => {
        expect(() => isCoprime(Infinity, 5)).toThrow('Inputs must be finite numbers.');
        expect(() => isCoprime(5, NaN)).toThrow('Inputs must be finite numbers.');
    });
});

describe('findResidue function', () => {
    it('should return the correct residue for positive numbers', () => {
        expect(findResidue(10, 3)).toBe(1);
        expect(findResidue(15, 4)).toBe(3);
        expect(findResidue(20, 7)).toBe(6);
    });

    it('should return the correct residue for negative numbers', () => {
        expect(findResidue(-10, 3)).toBe(2); // -10 ≡ 2 (mod 3)
        expect(findResidue(-15, 4)).toBe(1); // -15 ≡ 1 (mod 4)
        expect(findResidue(-20, 7)).toBe(1); // -20 ≡ 1 (mod 7)
    });

    it('should handle zero correctly', () => {
        expect(findResidue(0, 3)).toBe(0);
        expect(findResidue(-0, 3)).toBe(0);
    });

    it('should throw an error for invalid modulus values', () => {
        expect(() => findResidue(10, 0)).toThrow("The modulus must be a positive finite number.");
        expect(() => findResidue(10, -3)).toThrow("The modulus must be a positive finite number.");
        expect(() => findResidue(10, Infinity)).toThrow("The modulus must be a positive finite number.");
    });

    it('should handle large numbers correctly', () => {
        expect(findResidue(123456789, 97)).toBe(39);
        expect(findResidue(-987654321, 97)).toBe(67);
    });
});

describe("totient function", () => {
    it("should compute the totient of small numbers correctly", () => {
        expect(totient(1)).toBe(1); // Only 1 is coprime with itself
        expect(totient(2)).toBe(1); // Only 1 is coprime with 2
        expect(totient(3)).toBe(2); // 1 and 2 are coprime with 3
        expect(totient(9)).toBe(6); // 1, 2, 4, 5, 7, 8 are coprime with 9
    });

    it("should handle prime numbers correctly", () => {
        expect(totient(7)).toBe(6); // All numbers from 1 to 6 are coprime with 7
        expect(totient(13)).toBe(12); // 1 to 12 are coprime with 13
    });

    it("should handle composite numbers correctly", () => {
        expect(totient(12)).toBe(4); // 1, 5, 7, 11 are coprime with 12
        expect(totient(30)).toBe(8); // 1, 7, 11, 13, 17, 19, 23, 29 are coprime with 30
    });

    it("should handle edge cases", () => {
        expect(() => totient(0)).toThrow("Input must be a positive integer.");
        expect(() => totient(-5)).toThrow("Input must be a positive integer.");
        expect(() => totient(1.5)).toThrow("Input must be a positive integer.");
    });

    it("should handle large numbers correctly", () => {
        expect(totient(100)).toBe(40); // Coprime count for 100
        expect(totient(101)).toBe(100); // 101 is prime
    });
});