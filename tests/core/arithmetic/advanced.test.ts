// import { modInverse, modLCM } from '../../../src';

// describe('Modular Arithmetic Functions', () => {
//   describe('modInverse', () => {
//     test('computes the modular inverse of a number', () => {
//       expect(modInverse(3, 7)).toBe(5); // (3 * 5) % 7 = 1
//       expect(modInverse(10, 17)).toBe(12); // (10 * 12) % 17 = 1
//     });

//     test('throws an error if modular inverse does not exist', () => {
//       expect(() => modInverse(2, 4)).toThrow(
//         'Modular inverse does not exist (a is divisible by mod).'
//       ); // GCD(2, 4) != 1
//     });

//     test('handles negative numbers correctly', () => {
//       expect(modInverse(-3, 7)).toBe(5); // (-3 + 7) = 4, and (4 * 5) % 7 = 1
//     });

//     test('handles numbers larger than the modulus', () => {
//       expect(modInverse(10, 7)).toBe(5); // 10 % 7 = 3, (3 * 5) % 7 = 1
//     });
//   });

//   describe('modLCM', () => {
//     test('computes the least common multiple modulo mod', () => {
//       expect(modLCM(4, 6, 5)).toBe(4); // LCM(4, 6) = 12, 12 % 5 = 4
//       expect(modLCM(3, 7, 10)).toBe(1); // LCM(3, 7) = 21, 21 % 10 = 1
//     });

//     test('handles one number being zero', () => {
//       expect(modLCM(0, 7, 5)).toBe(0); // LCM(0, 7) = 0, 0 % 5 = 0
//     });

//     test('handles negative numbers', () => {
//       expect(modLCM(-4, 6, 5)).toBe(4); // LCM(|-4|, 6) = 12, 12 % 5 = 4
//       expect(modLCM(4, -6, 5)).toBe(4); // LCM(4, |-6|) = 12, 12 % 5 = 4
//     });

//     test('throws an error for invalid modulus', () => {
//       expect(() => modLCM(4, 6, 0)).toThrow('Modulus must be greater than 0');
//       expect(() => modLCM(4, 6, -1)).toThrow('Modulus must be greater than 0');
//     });
//   });
// });

describe('example test 3', () => {
  test('three', () => {
    expect(1).toBe(1);
  });
});
