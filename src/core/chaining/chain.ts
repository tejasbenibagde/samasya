class Chain {
  private readonly value: number;

  /**
   * Initializes the chain with an initial value.
   * @param initialValue - The initial value of the chain.
   * @throws Error if the input is not a number.
   */
  constructor(initialValue: number) {
    if (!Chain.isNumber(initialValue)) {
      throw new Error('Invalid input: initialValue must be a number');
    }
    this.value = initialValue;
  }

  /**
   * Adds a number to the current value.
   * @param num - The number to add.
   * @returns A new `Chain` instance with the updated value.
   * @throws Error if the input is not a number.
   */
  add(num: number): Chain {
    this.validateNumber(num, 'add');
    return new Chain(this.value + num);
  }

  /**
   * Subtracts a number from the current value.
   * @param num - The number to subtract.
   * @returns A new `Chain` instance with the updated value.
   * @throws Error if the input is not a number.
   */
  subtract(num: number): Chain {
    this.validateNumber(num, 'subtract');
    return new Chain(this.value - num);
  }

  /**
   * Multiplies the current value by a number.
   * @param num - The number to multiply by.
   * @returns A new `Chain` instance with the updated value.
   * @throws Error if the input is not a number.
   */
  multiply(num: number): Chain {
    this.validateNumber(num, 'multiply');
    return new Chain(this.value * num);
  }

  /**
   * Divides the current value by a number.
   * @param num - The divisor.
   * @returns A new `Chain` instance with the updated value.
   * @throws Error if the input is not a number or if dividing by zero.
   */
  divide(num: number): Chain {
    if (num === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.validateNumber(num, 'divide');
    return new Chain(this.value / num);
  }

  /**
   * Gets the result of the chain.
   * @returns The current value of the chain.
   */
  getResult(): number {
    return this.value;
  }

  /**
   * Validates if a value is a number.
   * @param value - The value to validate.
   * @returns True if the value is a number, otherwise false.
   */
  private static isNumber(value: unknown): value is number {
    return typeof value === 'number' && !isNaN(value);
  }

  /**
   * Validates the input for a specific operation.
   * @param num - The input number.
   * @param operation - The name of the operation being performed.
   * @throws Error if the input is not a number.
   */
  private validateNumber(num: number, operation: string): void {
    if (!Chain.isNumber(num)) {
      throw new Error(`Invalid input for ${operation}: must be a number`);
    }
  }
}

export { Chain };
