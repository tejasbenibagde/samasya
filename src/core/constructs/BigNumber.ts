import Decimal from 'decimal.js';

class BigNumber {
  private value: Decimal;

  constructor(value: string | number | Decimal) {
    // Ensure `value` is always converted to a `Decimal`
    this.value = new Decimal(value);
  }

  add(other: BigNumber): BigNumber {
    return new BigNumber(this.value.plus(other.value));
  }

  subtract(other: BigNumber): BigNumber {
    return new BigNumber(this.value.minus(other.value));
  }

  multiply(other: BigNumber): BigNumber {
    return new BigNumber(this.value.times(other.value));
  }

  divide(other: BigNumber): BigNumber {
    if (other.value.isZero()) throw new Error('Division by zero');
    return new BigNumber(this.value.div(other.value));
  }

  toString(): string {
    return this.value.toString();
  }

  // Optional: Expose the raw Decimal value if needed for advanced operations
  getRawValue(): Decimal {
    return this.value;
  }

  // Comparison Methods
  isGreaterThan(other: BigNumber): boolean {
    return this.value.gt(other.value);
  }

  isEqualTo(other: BigNumber): boolean {
    return this.value.eq(other.value);
  }

  isLessThan(other: BigNumber): boolean {
    return this.value.lt(other.value);
  }
}

export { BigNumber };
