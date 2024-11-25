// src/tests/modularArithmetic.test.ts
import { modulo, modAdd, modMultiply, modExp } from '../../src';

describe('Modular Arithmetic', () => {
  test('modulo', () => {
    expect(modulo(10, 3)).toBe(1);
    expect(modulo(-10, 3)).toBe(2);
  });

  test('modAdd', () => {
    expect(modAdd(5, 7, 6)).toBe(0); // (5 + 7) % 6 = 0
  });

  test('modMultiply', () => {
    expect(modMultiply(5, 7, 6)).toBe(5); // (5 * 7) % 6 = 5
  });

  test('modExp', () => {
    expect(modExp(2, 10, 1000)).toBe(24); // (2^10) % 1000 = 24
  });
});
