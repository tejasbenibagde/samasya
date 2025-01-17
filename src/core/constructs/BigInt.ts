class MyBigInt {
  private value: bigint;

  constructor(value: string | number | bigint) {
    // Ensure `value` is always converted to a `bigint`
    if (typeof value === 'string' || typeof value === 'number') {
      this.value = BigInt(value);
    } else {
      this.value = value;
    }
  }

  add(other: MyBigInt): MyBigInt {
    return new MyBigInt(this.value + other.value);
  }

  subtract(other: MyBigInt): MyBigInt {
    return new MyBigInt(this.value - other.value);
  }

  multiply(other: MyBigInt): MyBigInt {
    return new MyBigInt(this.value * other.value);
  }

  divide(other: MyBigInt): MyBigInt {
    if (other.value === 0n) throw new Error('Division by zero');
    return new MyBigInt(this.value / other.value);
  }

  mod(other: MyBigInt): MyBigInt {
    if (other.value === 0n) throw new Error('Division by zero');
    return new MyBigInt(this.value % other.value);
  }

  toString(): string {
    return this.value.toString();
  }

  getRawValue(): bigint {
    return this.value;
  }

  // Comparison Methods
  isGreaterThan(other: MyBigInt): boolean {
    return this.value > other.value;
  }

  isEqualTo(other: MyBigInt): boolean {
    return this.value === other.value;
  }

  isLessThan(other: MyBigInt): boolean {
    return this.value < other.value;
  }
}

export { MyBigInt as BigInt };
