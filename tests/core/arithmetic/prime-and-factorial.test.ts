import { modFactorial } from '../../../src';

describe('modFactorial', () => {
  it('should compute the factorial modulo correctly for small values', () => {
    expect(modFactorial(5, 7)).toBe(1); // 5! = 120, 120 % 7 = 1
    expect(modFactorial(4, 10)).toBe(4); // 4! = 24, 24 % 10 = 4
    expect(modFactorial(0, 10)).toBe(1); // 0! = 1
    expect(modFactorial(1, 5)).toBe(1); // 1! = 1
  });

  it('should handle large values of n with a modulus', () => {
    expect(modFactorial(10, 13)).toBe(6); // 10! = 3628800, 3628800 % 13 = 6
    expect(modFactorial(20, 19)).toBe(0); // 20! % 19 = 0
  });

  it('should throw an error for negative values of n', () => {
    expect(() => modFactorial(-1, 10)).toThrow(
      'Factorial is only defined for non-negative integers.'
    );
  });

  it('should throw an error for zero or negative modulus', () => {
    expect(() => modFactorial(5, 0)).toThrow('Modulus must be a positive integer.');
    expect(() => modFactorial(5, -5)).toThrow('Modulus must be a positive integer.');
  });

  it('should throw an error for non-integer n or modulus', () => {
    expect(() => modFactorial(4.5, 10)).toThrow('Input must be an integer.');
    expect(() => modFactorial(5, 10.5)).toThrow('Modulus must be a positive integer.');
  });

  it('should handle edge cases correctly', () => {
    expect(modFactorial(0, 100)).toBe(1); // Edge case: 0! % mod
    expect(modFactorial(1, 100)).toBe(1); // Edge case: 1! % mod
  });
});
