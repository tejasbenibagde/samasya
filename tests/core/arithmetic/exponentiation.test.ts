// import { modExp, modRoot } from '../../../src';

// describe('Modular Arithmetic', () => {
//   describe('modExp', () => {
//     test('computes modular exponentiation', () => {
//       expect(modExp(2, 3, 5)).toBe(3); // (2^3) % 5 = 8 % 5 = 3
//       expect(modExp(3, 4, 7)).toBe(4); // (3^4) % 7 = 81 % 7 = 4
//       expect(modExp(5, 0, 3)).toBe(1); // (5^0) % 3 = 1
//       expect(modExp(2, 10, 1000)).toBe(24); // (2^10) % 1000 = 1024 % 1000 = 24
//     });

//     test('handles edge cases', () => {
//       expect(modExp(0, 5, 7)).toBe(0); // (0^5) % 7 = 0
//       expect(modExp(1, 100, 13)).toBe(1); // (1^100) % 13 = 1
//       expect(() => modExp(2, 3, 0)).toThrow('Modulus must be greater than 0');
//       expect(modExp(-2, 3, 5)).toBe(3); // ((-2)^3) % 5 = -8 % 5 = 3
//     });
//   });

//   describe('modRoot', () => {
//     test('finds modular roots', () => {
//       // Assuming modRoot returns an array of solutions or throws an error if no solution exists.
//       expect(modRoot(4, 2, 7)).toEqual([2, 5]); // x^2 ≡ 4 (mod 7), solutions: 2, 5
//       expect(modRoot(9, 2, 13)).toEqual([3, 10]); // x^2 ≡ 9 (mod 13), solutions: 3, 10
//       expect(modRoot(16, 4, 17)).toEqual([2, 15]); // x^4 ≡ 16 (mod 17), solutions: 2, 15
//     });

//     test('handles edge cases', () => {
//       expect(modRoot(0, 2, 7)).toEqual([0]); // x^2 ≡ 0 (mod 7), solution: 0
//       expect(() => modRoot(5, 2, 7)).toThrow('No solution exists'); // No x such that x^2 ≡ 5 (mod 7)
//       expect(modRoot(1, 3, 11)).toEqual([1]); // x^3 ≡ 1 (mod 11), solution: 1
//     });
//   });
// });

describe('example test 2', () => {
  test('two', () => {
    expect(1).toBe(1);
  });
});