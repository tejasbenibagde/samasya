import { Evaluator } from '../../../src';

describe('Evaluator', () => {
  it('should evaluate simple expressions', () => {
    const evaluator = new Evaluator();
    expect(evaluator.evaluate('2 + 3')).toBe(5);
    expect(evaluator.evaluate('10 - 4')).toBe(6);
    expect(evaluator.evaluate('2 * 3')).toBe(6);
    expect(evaluator.evaluate('8 / 2')).toBe(4);
  });

  it('should handle parentheses in expressions', () => {
    const evaluator = new Evaluator();
    expect(evaluator.evaluate('2 + 3 * (4 - 1)')).toBe(11);
    expect(evaluator.evaluate('(2 + 3) * 4')).toBe(20);
  });

  it('should replace variables and evaluate', () => {
    const evaluator = new Evaluator({ x: 5, y: 10 });
    expect(evaluator.evaluate('x + y')).toBe(15);
    expect(evaluator.evaluate('2 * x + y')).toBe(20);
  });
  it('should be able to work with the math constants', () => {
    const evaluator = new Evaluator({ x: 5, y: 10 });
    expect(evaluator.evaluate('x * pi + y')).toBeCloseTo(25.70796, 5);
    expect(evaluator.evaluate('2 + e * x + y')).toBeCloseTo(25.5914091, 7);
  });

  it('should allow setting variables dynamically', () => {
    const evaluator = new Evaluator();
    evaluator.setVariable('a', 7);
    evaluator.setVariable('b', 3);
    expect(evaluator.evaluate('a * b')).toBe(21);
  });

  it('should replace functions and evaluate', () => {
    const evaluator = new Evaluator();
    expect(evaluator.evaluate('sqrt(16)')).toBe(4);
    expect(evaluator.evaluate('abs(-5)')).toBe(5);
    expect(evaluator.evaluate('log(1)')).toBeCloseTo(0, 5);
  });

  it('should allow adding custom functions', () => {
    const evaluator = new Evaluator();
    evaluator.setFunction('double', (x) => x * 2);
    expect(evaluator.evaluate('double(5)')).toBe(10);
  });

  it('should throw an error for invalid expressions', () => {
    const evaluator = new Evaluator();
    expect(() => evaluator.evaluate('2 +')).toThrow('Invalid expression');
    expect(() => evaluator.evaluate('2 + foo')).toThrow('Unrecognized variable(s): foo');
  });

  it('should handle complex nested functions and variables', () => {
    const evaluator = new Evaluator({ x: 9, y: 2 });
    expect(evaluator.evaluate('sqrt(x) + y')).toBe(5);
    evaluator.setFunction('power', (base, exp) => Math.pow(base, exp));
    expect(evaluator.evaluate('power(2, y) + x')).toBe(13);
  });
});
