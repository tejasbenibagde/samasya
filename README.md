# Samasya

[![NPM Version](https://img.shields.io/npm/v/samasya)](https://www.npmjs.com/package/samasya)
[![License](https://img.shields.io/npm/l/samasya)](https://github.com/tejasbenibagde/samasya/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/samasya)](https://www.npmjs.com/package/samasya)

Samasya is a TypeScript-based mathematical library inspired by math.js, designed to provide a comprehensive set of mathematical functions and utilities for JavaScript and TypeScript projects.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Arithmetic Operations](#basic-arithmetic-operations)
  - [Modular Arithmetic Operations](#modular-arithmetic-operations)
  - [Power and Roots Operations](#power-and-roots)
  - [Chaining Arithmetic Operations](#chaining-arithmetic-operations)
- [API Reference](#api-reference)
  - [Basic Arithmetic Operations](#basic-arithmetic-operations)
  - [Modular Arithmetic Operations](#modular-arithmetic-operations)
  - [Chaining Class](#chaining-class)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Support](#support)
- [Acknowledgements](#acknowledgements)
- [Roadmap](#roadmap)

## Features

- **Basic Arithmetic Operations:** Addition, subtraction, multiplication, and division for both numbers and arrays.
- **Modular Arithmetic Operations:** Operations such as modulo, modular addition, subtraction, multiplication, exponentiation, and more.
- **Power and Root Calculations:** Compute powers and nth roots of numbers.
- **Chaining Operations:** Chain multiple arithmetic operations in a fluent API style.
- **Error Handling:** Comprehensive error handling for invalid inputs and edge cases.

## Installation

You can install Samasya using npm:

```bash
npm install samasya
```

## Usage

### Basic Arithmetic Operations

Samasya supports the following basic arithmetic operations with both individual numbers and arrays of numbers:

```typescript
import { add, multiply, divide, subtract } from 'samasya';

// Using two numbers
console.log(add(2, 3)); // Output: 5
console.log(multiply(4, 5)); // Output: 20
console.log(divide(10, 2)); // Output: 5
console.log(subtract(7, 3)); // Output: 4

// Using an array of numbers
console.log(add([1, 2, 3, 4])); // Output: 10
console.log(multiply([2, 3, 4])); // Output: 24
console.log(subtract([10, 2, 1])); // Output: 7
console.log(divide([100, 2, 5])); // Output: 10
```

### Modular Arithmetic Operations

Samasya now supports modular arithmetic operations for handling operations within a modulus. Here's how you can use these functions:

```typescript
import { modulo, modAdd, modMultiply, modExp } from 'samasya';

// Basic modulo operation
console.log(modulo(10, 3)); // Output: 1
console.log(modulo(-10, 3)); // Output: 2

// Modular addition
console.log(modAdd(5, 7, 6)); // Output: 0 ( (5 + 7) % 6 )

// Modular multiplication
console.log(modMultiply(5, 7, 6)); // Output: 5 ( (5 * 7) % 6 )

// Modular exponentiation
console.log(modExp(2, 10, 1000)); // Output: 24 ( (2^10) % 1000 )
```

### Power and Roots

Samasya supports power and root calculations:

#### Power

The `power` function raises a base number to a specified exponent.

```typescript
import { power } from 'samasya';

console.log(power(2, 3)); // Output: 8 (2^3 = 8)
console.log(power(5, 0)); // Output: 1 (Any number^0 = 1)
console.log(power(3, -2)); // Output: 0.111... (~1/9)
```

#### Roots

The `root` function calculates the nth root of a number.

```typescript
import { root } from 'samasya';

console.log(root(9, 2)); // Output: 3 (Square root of 9)
console.log(root(27, 3)); // Output: 3 (Cube root of 27)
console.log(root(16, 4)); // Output: 2 (Fourth root of 16)
console.log(root(16, -2)); // Output: 0.25 (Inverse square root)
```

- Edge Cases:
  - If `root` is `0`, the function throws an error: `"Root cannot be zero."`

### Chaining Arithmetic Operations

- Samasya supports chaining arithmetic operations for more complex calculations. Here's how you can chain operations:

```typescript
import { Chain } from 'samasya';

const result = new Chain(5).add(3).multiply(2).subtract(4).divide(2).getResult();

console.log(result); // Output: 6
```

In this example, `5 + 3 = 8`, then `8 \* 2 = 16`, then `16 - 4 = 12`, and finally `12 / 2 = 6`.

- You can also chain power and root operations:

```typescript
import { Chain } from 'samasya';

const powerResult = new Chain(2).power(3).getResult();
console.log(powerResult); // Output: 8 (2^3)

const rootResult = new Chain(16).root(4).getResult();
console.log(rootResult); // Output: 2 (Fourth root of 16)
```

## API Reference

### Basic Arithmetic Operations

- `add(a: number | number[], b?: number): number`
- `subtract(a: number | number[], b?: number): number`
- `multiply(a: number | number[], b?: number): number`
- `divide(a: number | number[], b?: number): number`
- `power(base: number, exponent: number): number` - Raises `base` to the power of `exponent`.
- `root(value: number, n: number): number` - Calculates the nth root of `value`. Throws an error if `n` is 0.

### Modular Arithmetic Operations

- `modulo(a: number, b: number): number`
- `modAdd(a: number, b: number, mod: number): number`
- `modSubtract(a: number, b: number, mod: number): number`
- `modMultiply(a: number, b: number, mod: number): number`
- `modDivide(a: number, b: number, mod: number): number`
- `modExp(base: number, exponent: number, mod: number): number`
- `modRoot(value: number, n: number, mod: number): number`
- `modGCD(a: number, b: number): number`
- `modLCM(a: number, b: number): number`
- `modInverse(a: number, mod: number): number`

### Chaining Class

- `Chain(value: number): Initializes a chainable arithmetic value.`
- `.add(value: number): Adds a number to the current value.`
- `.subtract(value: number): Subtracts a number from the current value.`
- `.multiply(value: number): Multiplies the current value by a number.`
- `.divide(value: number): Divides the current value by a number.`
- `.power(exponent: number): Raises the current value to the specified exponent.`
- `.root(nthRoot: number): Calculates the nth root of the current value.`
- `.getResult(): Returns the final value after all operations.`

## Development

To set up the project for development:

1. Clone the repository:

   ```bash
   git clone https://github.com/tejasbenibagde/samasya.git
   cd samasya
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests:

   ```bash
   npm test
   ```

4. Build the project:
   ```bash
   npm run build
   ```

## Contributing

We welcome contributions to Samasya! Please see our [Contributing Guide](CONTRIBUTING.md) for more details on how to get started.

## License

Samasya is [MIT licensed](LICENSE).

## Author

Samasya is created and maintained by [Tejas Benibagde](https://github.com/tejasbenibagde).

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub issues page](https://github.com/tejasbenibagde/samasya/issues).

## Acknowledgements

This project is inspired by [math.js](https://mathjs.org/). We're grateful to the math.js team for their excellent work, which has served as a reference for many of the features planned for Samasya.

## Roadmap

- Add expression parsing and evaluation
- Develop unit conversion capabilities
- Implement matrix and vector operations
- Add complex number support
- Develop statistical functions
- Implement symbolic computation features

Stay tuned for updates!
