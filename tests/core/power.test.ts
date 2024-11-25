import { power, root } from '../../src';

describe('Power Function', () => {
  test('Raises a number to a positive power', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('Raises a number to zero power', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('Handles negative powers', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });
});

describe('Root Function', () => {
  test('Calculates square roots', () => {
    expect(root(9, 2)).toBe(3);
  });

  test('Calculates cube roots', () => {
    expect(root(27, 3)).toBe(3);
  });

  test('Calculates nth roots', () => {
    expect(root(16, 4)).toBe(2);
  });

  test('Throws an error for zero root', () => {
    expect(() => root(16, 0)).toThrow('Root cannot be zero.');
  });
});
