import { add, subtract, multiply, divide } from '../../src/core/arithmetic';

describe('Arithmetic operations', () => {
  test('add', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('subtract', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(1, 1)).toBe(0);
  });

  test('multiply', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 5)).toBe(-5);
  });

  test('divide', () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(5, 2)).toBe(2.5);
    expect(() => divide(1, 0)).toThrow('Division by zero');
  });
});
