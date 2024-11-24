import { add, subtract, multiply, divide } from '../../src';

describe('Arithmetic operations', () => {
  describe('add', () => {
    test('adds two numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
    });

    test('adds an array of numbers', () => {
      expect(add([1, 4, 6, -2])).toBe(9);
      expect(add([0, 0, 0])).toBe(0);
      expect(add([-1, -2, -3])).toBe(-6);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(1, 1)).toBe(0);
    });

    test('subtracts an array of numbers', () => {
      expect(subtract([10, 2, 1])).toBe(7); // 10 - 2 - 1
      expect(subtract([0, 5, 5])).toBe(-10); // 0 - 5 - 5
      expect(subtract([100])).toBe(100); // Single element remains unchanged
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(-1, 5)).toBe(-5);
    });

    test('multiplies an array of numbers', () => {
      expect(multiply([2, 3, 4])).toBe(24); // 2 * 3 * 4
      expect(multiply([1, -1, 2])).toBe(-2); // 1 * -1 * 2
      expect(multiply([5])).toBe(5); // Single element remains unchanged
    });
  });

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(divide(6, 2)).toBe(3);
      expect(divide(5, 2)).toBe(2.5);
      expect(() => divide(1, 0)).toThrow('Division by zero is not allowed');
    });

    test('divides an array of numbers', () => {
      expect(divide([100, 2, 5])).toBe(10); // 100 / 2 / 5
      expect(divide([50, 5, 2])).toBe(5); // 50 / 5 / 2
      expect(() => divide([50, 0, 2])).toThrow('Division by zero in array is not allowed');
    });
  });
});
