import { modularHash, modularEncryption, modularDecryption } from '../../../src';

describe('modularHash', () => {
  test('should correctly hash a string using modular arithmetic', () => {
    expect(modularHash('hello', 97)).toBe(95);
    expect(modularHash('world', 101)).toBe(34);
    expect(modularHash('abc', 31)).toBe(6);
  });

  test('should return 0 for an empty string', () => {
    expect(modularHash('', 13)).toBe(0);
  });

  test('should handle single-character strings', () => {
    expect(modularHash('a', 31)).toBe(97 % 31); // ASCII of 'a' is 97
    expect(modularHash('z', 101)).toBe(122 % 101); // ASCII of 'z' is 122
  });

  test('should throw an error if data is not a string', () => {
    expect(() => modularHash(123 as unknown as string, 97)).toThrow('Data must be a string.');
    expect(() => modularHash({} as unknown as string, 97)).toThrow('Data must be a string.');
  });

  test('should throw an error if mod is not a positive integer', () => {
    expect(() => modularHash('test', 0)).toThrow('Modulus must be a positive integer.');
    expect(() => modularHash('test', -7)).toThrow('Modulus must be a positive integer.');
    expect(() => modularHash('test', NaN)).toThrow('Invalid input: must be a number.');
    expect(() => modularHash('test', Infinity)).toThrow('Modulus must be a finite number.');
  });

  test('should handle strings with non-alphanumeric characters', () => {
    expect(modularHash('hello@123', 97)).toBe(20);
    expect(modularHash('!@#$%^&*()', 101)).toBe(8);
  });

  test('should produce different hashes for different inputs', () => {
    expect(modularHash('hello', 97)).not.toBe(modularHash('world', 97));
    expect(modularHash('abc', 31)).not.toBe(modularHash('abcd', 31));
  });

  test('should handle large modulus values', () => {
    expect(modularHash('hello', 1_000_000_007)).toBe(99162322);
  });
});

describe('modularEncryption', () => {
  test('should correctly compute modular encryption for valid inputs', () => {
    expect(modularEncryption(2, 10, 5)).toBe(4); // (2^10) % 5 = 1024 % 5 = 4
    expect(modularEncryption(3, 7, 13)).toBe(3); // (3^7) % 13 = 2187 % 13 = 3
    expect(modularEncryption(5, 0, 11)).toBe(1); // (5^0) % 11 = 1
  });

  test('should handle edge cases like base 0 or key 0', () => {
    expect(modularEncryption(0, 10, 7)).toBe(0); // (0^10) % 7 = 0
    expect(modularEncryption(5, 0, 7)).toBe(1); // (5^0) % 7 = 1
  });

  test('should throw an error for invalid modulus', () => {
    expect(() => modularEncryption(5, 3, 0)).toThrow('Modulus must be a positive integer.');
    expect(() => modularEncryption(5, 3, -1)).toThrow('Modulus must be a positive integer.');
  });

  test('should throw an error for invalid inputs', () => {
    expect(() => modularEncryption(5, Infinity, 7)).toThrow('All inputs must be finite numbers.');
    expect(() => modularEncryption(Infinity, 3, 7)).toThrow('All inputs must be finite numbers.');
    expect(() => modularEncryption(5, 3, NaN)).toThrow('Invalid input: must be a number.');
    expect(() => modularEncryption(5, 3, '7' as unknown as number)).toThrow(
      'Invalid input: must be a number.'
    );
  });

  test('should handle large exponents efficiently', () => {
    expect(modularEncryption(2, 1000, 7)).toBe(2); // (2^1000) % 7 = 2
    expect(modularEncryption(12345, 67890, 98765)).toBe(83815); // Large base and exponent
  });
});

describe('modularDecryption', () => {
  test('should correctly decrypt a value using modular arithmetic', () => {
    expect(modularDecryption(4, 3, 5)).toBe(4); // 4^3 % 5 = 4
    expect(modularDecryption(8, 2, 7)).toBe(1); // 8^2 % 7 = 1
    expect(modularDecryption(9, 3, 11)).toBe(3); // 9^3 % 11 = 3
  });

  test('should return 1 for decryption with key 0 (identity)', () => {
    expect(modularDecryption(10, 0, 7)).toBe(1); // 10^0 % 7 = 1
  });

  test('should handle large keys and values efficiently', () => {
    expect(modularDecryption(123456, 98765, 10007)).toBe(9487);
  });

  test('should throw an error for invalid inputs', () => {
    expect(() => modularDecryption(-5, 3, 7)).toThrow(
      'Encrypted value must be a positive integer.'
    );
    expect(() => modularDecryption(4, -1, 7)).toThrow('Key must be a positive integer.');
    expect(() => modularDecryption(4, 3, -7)).toThrow('Modulus must be a positive integer.');
    expect(() => modularDecryption(4, 3, 0)).toThrow('Modulus must be a positive integer.');
  });

  test('should correctly handle edge cases with mod 1', () => {
    expect(modularDecryption(123, 456, 1)).toBe(0); // Any value mod 1 = 0
  });
});
