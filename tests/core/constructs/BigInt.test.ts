import { BigInt } from '../../../src';

describe('BigInt Class - Arithmetic and Comparisons', () => {
  test('Arithmetic: addition', () => {
    const num1 = new BigInt(100);
    const num2 = new BigInt(50);
    expect(num1.add(num2).toString()).toBe('150');
  });

  test('Arithmetic: subtraction', () => {
    const num1 = new BigInt(100);
    const num2 = new BigInt(50);
    expect(num1.subtract(num2).toString()).toBe('50');
  });

  test('Arithmetic: multiplication', () => {
    const num1 = new BigInt(20);
    const num2 = new BigInt(5);
    expect(num1.multiply(num2).toString()).toBe('100');
  });

  test('Arithmetic: division', () => {
    const num1 = new BigInt(100);
    const num2 = new BigInt(4);
    expect(num1.divide(num2).toString()).toBe('25');
  });

  test('Arithmetic: modulo', () => {
    const num1 = new BigInt(10);
    const num2 = new BigInt(3);
    expect(num1.mod(num2).toString()).toBe('1');
  });

  test('Comparison: greater than', () => {
    const num1 = new BigInt(20);
    const num2 = new BigInt(10);
    expect(num1.isGreaterThan(num2)).toBe(true);
  });

  test('Comparison: equal to', () => {
    const num1 = new BigInt(15);
    const num2 = new BigInt(15);
    expect(num1.isEqualTo(num2)).toBe(true);
  });

  test('Comparison: less than', () => {
    const num1 = new BigInt(5);
    const num2 = new BigInt(10);
    expect(num1.isLessThan(num2)).toBe(true);
  });

  test('Arithmetic with large numbers', () => {
    const num1 = new BigInt('100000000000000000000');
    const num2 = new BigInt('200000000000000000000');
    expect(num1.add(num2).toString()).toBe('300000000000000000000');
    expect(num2.subtract(num1).toString()).toBe('100000000000000000000');
  });

  test('Division by zero throws error', () => {
    const num1 = new BigInt(100);
    const num2 = new BigInt(0);
    expect(() => num1.divide(num2)).toThrow('Division by zero');
  });

  test('Modulo by zero throws error', () => {
    const num1 = new BigInt(10);
    const num2 = new BigInt(0);
    expect(() => num1.mod(num2)).toThrow('Division by zero');
  });
});
