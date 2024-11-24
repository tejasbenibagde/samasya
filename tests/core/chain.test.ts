import { Chain } from '../../src';

describe('Chainable Arithmetic Operations', () => {
  // Basic operations
  test('chain with initial value', () => {
    expect(new Chain(2).add(2).subtract(3).divide(4).getResult()).toBe(0.25);
  });

  test('chain with initial value of 0', () => {
    const chain = new Chain(0);
    expect(chain.add(2).subtract(3).divide(4).getResult()).toBe(-0.25);
  });

  test('chain with positive initial value', () => {
    const chain = new Chain(10);
    expect(chain.add(5).subtract(3).multiply(2).divide(4).getResult()).toBe(6);
  });

  test('chain with negative initial value', () => {
    const chain = new Chain(-5);
    expect(chain.add(10).subtract(3).multiply(2).divide(2).getResult()).toBe(2);
  });

  // Edge cases
  test('chain with floating-point precision', () => {
    const chain = new Chain(0.1);
    expect(chain.add(0.2).getResult()).toBeCloseTo(0.3, 5);
  });

  test('chain with large numbers', () => {
    const chain = new Chain(1e10);
    expect(chain.add(1e10).divide(2).getResult()).toBe(1e10);
  });

  test('chain with extremely small numbers', () => {
    const chain = new Chain(1e-10);
    expect(chain.add(1e-10).getResult()).toBeCloseTo(2e-10, 10);
  });

  // Extended scenarios
  test('chain with multiple operations', () => {
    const chain = new Chain(5);
    expect(chain.add(3).subtract(2).multiply(4).divide(2).getResult()).toBe(12);
  });

  test('chain with a long chain of operations', () => {
    const chain = new Chain(1);
    expect(chain.add(2).multiply(3).subtract(4).divide(2).add(10).multiply(5).getResult()).toBe(
      62.5
    );
  });

  // Division by zero handling
  test('chain with division by zero', () => {
    const chain = new Chain(10);
    expect(() => chain.divide(0)).toThrow('Division by zero');
  });

  // State immutability
  test('chain does not mutate original instance', () => {
    const chain = new Chain(5);
    const newChain = chain.add(3);
    expect(chain.getResult()).toBe(5);
    expect(newChain.getResult()).toBe(8);
  });

  // Chaining only specific operations
  test('chain with only addition', () => {
    const chain = new Chain(1);
    expect(chain.add(2).add(3).getResult()).toBe(6);
  });

  test('chain with only subtraction', () => {
    const chain = new Chain(10);
    expect(chain.subtract(2).subtract(3).getResult()).toBe(5);
  });

  test('chain with only multiplication', () => {
    const chain = new Chain(2);
    expect(chain.multiply(3).multiply(4).getResult()).toBe(24);
  });

  test('chain with only division', () => {
    const chain = new Chain(100);
    expect(chain.divide(2).divide(5).getResult()).toBe(10);
  });
});
