import { modInverse, modLCM, modGCD } from '../../../src';

describe('modLCM', () => {
  test('computes LCM of two positive integers under a modulus', () => {
    expect(modLCM(6, 8, 10)).toBe(4); // LCM(6, 8) = 24, 24 % 10 = 4
  });

  test('computes LCM of two coprime integers under a modulus', () => {
    expect(modLCM(3, 5, 7)).toBe(1); // LCM(3, 5) = 15, 15 % 7 = 1
  });

  test('returns 0 when one of the numbers is 0', () => {
    expect(modLCM(0, 10, 12)).toBe(0);
    expect(modLCM(10, 0, 12)).toBe(0);
  });

  test('handles negative numbers correctly', () => {
    expect(modLCM(-6, 8, 10)).toBe(8); // Equivalent to modLCM(6, 8, 10)
  });

  test('throws an error for invalid modulus', () => {
    expect(() => modLCM(6, 8, 0)).toThrowError('Modulus must be greater than 0');
    expect(() => modLCM(6, 8, -10)).toThrowError('Modulus must be greater than 0');
  });
});

describe('modGCD', () => {
  test('computes GCD of two positive numbers', () => {
    expect(modGCD(48, 18)).toBe(6); // GCD of 48 and 18 is 6
  });

  test('computes GCD of a positive and a negative number', () => {
    expect(modGCD(-48, 18)).toBe(6); // GCD of -48 and 18 is 6
  });

  test('computes GCD of two negative numbers', () => {
    expect(modGCD(-48, -18)).toBe(6); // GCD of -48 and -18 is 6
  });

  test('computes GCD when one number is 0', () => {
    expect(modGCD(0, 18)).toBe(18); // GCD of 0 and 18 is 18
    expect(modGCD(48, 0)).toBe(48); // GCD of 48 and 0 is 48
  });

  test('throws an error when both numbers are 0', () => {
    expect(() => modGCD(0, 0)).toThrow('GCD is undefined for a = 0 and b = 0');
  });

  test('computes GCD of two coprime numbers', () => {
    expect(modGCD(17, 19)).toBe(1); // GCD of 17 and 19 is 1
  });

  test('computes GCD of a number and itself', () => {
    expect(modGCD(25, 25)).toBe(25); // GCD of 25 and 25 is 25
  });

  test('computes GCD when both numbers are multiples of each other', () => {
    expect(modGCD(100, 25)).toBe(25); // GCD of 100 and 25 is 25
  });

  test('handles large numbers', () => {
    expect(modGCD(123456789, 987654321)).toBe(9); // GCD of 123456789 and 987654321 is 9
  });
});

describe('modInverse', () => {
  test('computes the modular inverse of a number under a modulus', () => {
    expect(modInverse(3, 11)).toBe(4); // 3 * 4 ≡ 1 (mod 11)
    expect(modInverse(10, 17)).toBe(12); // 10 * 12 ≡ 1 (mod 17)
  });

  test('handles negative numbers correctly', () => {
    expect(modInverse(-3, 11)).toBe(7);
  });

  test('throws an error when a and mod are not coprime', () => {
    // for small numbers
    expect(() => modInverse(6, 9)).toThrow(
      'Modular inverse does not exist (a and mod are not coprime).'
    );
    // for large numbers
    expect(() => modInverse(123456789, 987654321)).toThrow(
      'Modular inverse does not exist (a and mod are not coprime).'
    );
  });

  test('computes modular inverse when a is greater than mod', () => {
    expect(modInverse(13, 11)).toBe(6); // 13 ≡ 2 (mod 11), 2 * 6 ≡ 1 (mod 11)
  });

  test('computes modular inverse when mod is 1', () => {
    expect(modInverse(7, 1)).toBe(0); // Any number mod 1 is 0
  });
});
