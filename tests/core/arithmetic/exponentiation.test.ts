import { modExp, modRoot } from '../../../src';

describe('Modular Arithmetic', () => {
  describe('modExp', () => {
    // Basic functionality
    test('calculates modular exponentiation correctly', () => {
      expect(modExp(2, 3, 5)).toBe(3); // (2^3) % 5 = 8 % 5 = 3
      expect(modExp(3, 4, 7)).toBe(4); // (3^4) % 7 = 81 % 7 = 4
      expect(modExp(10, 5, 17)).toBe(6); // (10^5) % 17 = 100000 % 17 = 6
    });

    // Edge cases
    test('handles 0^0 as 1', () => {
      expect(modExp(0, 0, 5)).toBe(1); // 0^0 is defined as 1
    });

    test('returns 0 for base 0 with positive exponent', () => {
      expect(modExp(0, 5, 7)).toBe(0); // (0^5) % 7 = 0
    });

    test('returns 1 for any number with exponent 0', () => {
      expect(modExp(5, 0, 7)).toBe(1); // (5^0) % 7 = 1
      expect(modExp(123, 0, 10)).toBe(1); // (123^0) % 10 = 1
    });

    test('handles modulus 1 correctly', () => {
      expect(modExp(123, 10, 1)).toBe(0); // Any number % 1 is 0
    });

    test('handles large numbers efficiently', () => {
      expect(modExp(123456789, 100, 98765)).toBe(12651);
    });

    // Invalid inputs
    test('throws an error for negative exponents', () => {
      expect(() => modExp(2, -3, 5)).toThrow(
        'Negative exponents are not supported in modular arithmetic.'
      );
    });

    test('throws an error for modulus <= 0', () => {
      expect(() => modExp(2, 3, 0)).toThrow('Modulus must be a positive integer.');
      expect(() => modExp(2, 3, -5)).toThrow('Modulus must be a positive integer.');
    });

    // Additional scenarios
    test('handles large exponents', () => {
      expect(modExp(2, 50, 13)).toBe(4); // Efficiently calculates large exponents
    });

    test('works with prime modulus', () => {
      expect(modExp(7, 3, 11)).toBe(2); // (7^3) % 11 = 343 % 11 = 2
    });

    test('handles composite modulus', () => {
      expect(modExp(5, 3, 15)).toBe(5); // (5^3) % 15 = 125 % 15 = 5
    });
  });

  describe('modRoot', () => {
    // Test case 1: Single solution for x^2 ≡ 4 (mod 7)
    test('finds modular square roots for small modulus', () => {
      expect(modRoot(4, 2, 7)).toEqual([2, 5]); // Both 2^2 and 5^2 ≡ 4 (mod 7)
    });

    // Test case 2: Multiple solutions for x^3 ≡ 1 (mod 7)
    test('finds modular cube roots for small modulus', () => {
      expect(modRoot(1, 3, 7)).toEqual([1, 2, 4]); // 1^3, 2^3, 4^3 ≡ 1 (mod 7)
    });

    // Test case 3: No solution exists
    test('throws an error when no solution exists', () => {
      expect(() => modRoot(5, 2, 7)).toThrowError('No solution exists for x^2 ≡ 5 (mod 7)');
    });

    // Test case 4: Invalid modulus (<= 0)
    test('throws an error for invalid modulus', () => {
      expect(() => modRoot(4, 2, 0)).toThrowError('Modulus must be greater than 0');
      expect(() => modRoot(4, 2, -5)).toThrowError('Modulus must be greater than 0');
    });

    // Test case 5: Invalid root degree (<= 0)
    test('throws an error for invalid root degree', () => {
      expect(() => modRoot(4, 0, 7)).toThrowError('Root degree must be greater than 0');
      expect(() => modRoot(4, -2, 7)).toThrowError('Root degree must be greater than 0');
    });

    // Test case 6: Large modulus
    test('handles larger modulus values correctly', () => {
      expect(modRoot(16, 2, 17)).toEqual([4, 13]); // 4^2 and 13^2 ≡ 16 (mod 17)
    });

    // Test case 7: Edge case with a = 0
    test('handles edge case where a = 0', () => {
      expect(modRoot(0, 2, 7)).toEqual([0]); // 0^2 ≡ 0 (mod 7)
    });

    // Test case 8: Edge case with modulus = 1
    test('handles edge case where modulus = 1', () => {
      expect(modRoot(0, 2, 1)).toEqual([0]); // Only solution is 0 for any x^n ≡ 0 (mod 1)
    });

    // Test case 9: Edge case with root degree = 1
    test('handles edge case where root degree = 1', () => {
      expect(modRoot(3, 1, 7)).toEqual([3]); // x ≡ 3 (mod 7) has only one solution
    });
  });
});
