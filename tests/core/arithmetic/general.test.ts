import { add, subtract, multiply, divide, power, root } from '../../../src';

describe('General Arithmetic operations', () => {
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

  describe('power function', () => {
    // Test standard cases
    test('calculates positive power of a positive base', () => {
      expect(power(2, 3)).toBe(8); // 2^3 = 8
    });

    test('calculates positive power of a negative base', () => {
      expect(power(-2, 3)).toBe(-8); // (-2)^3 = -8
    });

    test('calculates zero power of a positive base', () => {
      expect(power(5, 0)).toBe(1); // 5^0 = 1
    });

    test('calculates zero power of a negative base', () => {
      expect(power(-5, 0)).toBe(1); // (-5)^0 = 1
    });

    // Test special case 0^0
    test('calculates 0^0 as 1', () => {
      expect(power(0, 0)).toBe(1); // 0^0 is typically defined as 1
    });

    // Test negative exponents
    test('calculates negative exponent for a positive base', () => {
      expect(power(2, -3)).toBe(0.125); // 2^-3 = 1 / 8 = 0.125
    });

    test('calculates negative exponent for a negative base', () => {
      expect(power(-2, -3)).toBe(-0.125); // (-2)^-3 = 1 / (-2)^3 = -0.125
    });

    test('throws error for negative exponent with base 0', () => {
      expect(() => power(0, -2)).toThrow(
        'Division by zero is not allowed when the base is 0 and the exponent is negative.'
      );
    });

    // Test edge cases for base 0
    test('calculates zero raised to a positive exponent', () => {
      expect(power(0, 3)).toBe(0); // 0^3 = 0
    });

    test('calculates zero raised to a negative exponent (throws error)', () => {
      expect(() => power(0, -1)).toThrow(
        'Division by zero is not allowed when the base is 0 and the exponent is negative.'
      );
    });

    // Test edge case for large exponents
    test('calculates large exponent for a positive base', () => {
      expect(power(2, 1000)).toBeGreaterThan(1e300); // 2^1000 is a large number
    });

    // Test edge case for large negative exponents
    test('calculates large negative exponent for a positive base', () => {
      expect(power(2, -1000)).toBeLessThan(1e-300); // 2^-1000 is a very small number
    });
  });

  describe('root function', () => {
    // Test standard positive numbers
    test('calculates the square root of a positive number', () => {
      expect(root(16, 2)).toBe(4);
    });

    test('calculates the cube root of a positive number', () => {
      expect(root(27, 3)).toBe(3);
    });

    test('calculates the 4th root of a positive number', () => {
      expect(root(16, 4)).toBe(2);
    });

    // Test negative numbers with odd roots
    test('calculates the cube root of a negative number', () => {
      expect(root(-8, 3)).toBe(-2); // (-2)^3 = -8
    });

    // Test negative numbers with even roots (should throw an error)
    test('throws error when trying to calculate the square root of a negative number', () => {
      expect(() => root(-16, 2)).toThrow(
        'Even root of a negative number is not defined in the real number system.'
      );
    });

    // Test the zero value
    test('calculates the square root of zero', () => {
      expect(root(0, 2)).toBe(0);
    });

    // Test negative roots (fractional roots)
    test('calculates negative roots (reciprocal)', () => {
      expect(root(8, -3)).toBe(1 / 2); // Reciprocal of cube root of 8
    });

    // Test edge case for root being zero (should throw an error)
    test('throws error when root is zero', () => {
      expect(() => root(8, 0)).toThrow('Root cannot be zero.');
    });

    // Test fractional roots (cube root of 8)
    test('calculates a fractional root (like 1/3 root)', () => {
      expect(root(8, 1 / 3)).toBe(512); // 8^(1/(1/3)) = 8^3 = 512
    });

    // Test square roots of fractional values (e.g., sqrt(2))
    test('calculates a square root of a fractional value', () => {
      expect(root(2, 0.5)).toBe(4); // 2^(1/0.5) = 4
    });
  });
});
