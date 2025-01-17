import { BigNumber } from '../../../src';
import Decimal from 'decimal.js';
describe('BigNumber Class', () => {
  test('Initializes with a number', () => {
    const num = new BigNumber(42);
    expect(num.toString()).toBe('42');
  });

  test('Initializes with a string', () => {
    const num = new BigNumber('3.14');
    expect(num.toString()).toBe('3.14');
  });

  test('Initializes with a Decimal instance', () => {
    const decimalInstance = new Decimal(42);
    const num = new BigNumber(decimalInstance);
    expect(num.toString()).toBe('42');
  });

  test('Adds two BigNumber instances', () => {
    const num1 = new BigNumber(10);
    const num2 = new BigNumber(20);
    const result = num1.add(num2);
    expect(result.toString()).toBe('30');
  });

  test('Subtracts two BigNumber instances', () => {
    const num1 = new BigNumber(20);
    const num2 = new BigNumber(10);
    const result = num1.subtract(num2);
    expect(result.toString()).toBe('10');
  });

  test('Multiplies two BigNumber instances', () => {
    const num1 = new BigNumber(5);
    const num2 = new BigNumber(4);
    const result = num1.multiply(num2);
    expect(result.toString()).toBe('20');
  });

  test('Divides two BigNumber instances', () => {
    const num1 = new BigNumber(20);
    const num2 = new BigNumber(4);
    const result = num1.divide(num2);
    expect(result.toString()).toBe('5');
  });

  test('Handles division by zero', () => {
    const num1 = new BigNumber(20);
    const num2 = new BigNumber(0);
    expect(() => num1.divide(num2)).toThrow('Division by zero');
  });

  test('Handles large numbers', () => {
    const num1 = new BigNumber('123456789123456789');
    const num2 = new BigNumber('987654321987654321');
    const result = num1.add(num2);
    expect(result.toString()).toBe('1111111111111111110');
  });

  test('Handles decimals correctly', () => {
    const num1 = new BigNumber('1.5');
    const num2 = new BigNumber('2.3');
    const result = num1.add(num2);
    expect(result.toString()).toBe('3.8');
  });

  describe('BigNumber Precision Tests', () => {
    it('should correctly add 0.1 and 0.2 to equal 0.3', () => {
      const a = new BigNumber(0.1);
      const b = new BigNumber(0.2);
      const sum = a.add(b);

      expect(sum.toString()).toBe('0.3');
    });
  });

  test('Supports comparisons: greater than', () => {
    const num1 = new BigNumber(10);
    const num2 = new BigNumber(5);
    expect(num1.isGreaterThan(num2)).toBe(true);
  });

  test('Supports comparisons: equal to', () => {
    const num1 = new BigNumber(10);
    const num2 = new BigNumber(10);
    expect(num1.isEqualTo(num2)).toBe(true);
  });

  test('Supports comparisons: less than', () => {
    const num1 = new BigNumber(5);
    const num2 = new BigNumber(10);
    expect(num1.isLessThan(num2)).toBe(true);
  });
});
