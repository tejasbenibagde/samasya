# Samasya

Samasya is a TypeScript-based mathematical library inspired by math.js, designed to provide a comprehensive set of mathematical functions and utilities for JavaScript and TypeScript projects.

## Features

- Basic arithmetic operations (`addition`, `subtraction`, `multiplication`, `division`)
- Support for both `numbers` and `arrays` in arithmetic operations
- `Chainable` arithmetic operations for streamlined calculations
- Expression parsing and evaluation **_(coming soon)_**
- Unit conversions **_(coming soon)_**
- Matrix and vector operations **_(coming soon)_**
- Complex number support **_(coming soon)_**
- Statistical functions **_(coming soon)_**
- Symbolic computation **_(coming soon)_**

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

### Chaining Arithmetic Operations

Samasya supports chaining arithmetic operations for more complex calculations. Here's how you can chain operations:

```typescript
import { Chain } from 'samasya';

const result = new Chain(5).add(3).multiply(2).subtract(4).divide(2).getResult();

console.log(result); // Output: 6
```

In this example, 5 + 3 = 8, then 8 \* 2 = 16, then 16 - 4 = 12, and finally 12 / 2 = 6.

## API Reference

### Basic Arithmetic Operations

- `add(a: number | number[], b?: number): number`
- `subtract(a: number | number[], b?: number): number`
- `multiply(a: number | number[], b?: number): number`
- `divide(a: number | number[], b?: number): number`

### Chaining Class

- `Chain(value: number): Initializes a chainable arithmetic value.`
- `.add(value: number): Adds a number to the current value.`
- `.subtract(value: number): Subtracts a number from the current value.`
- `.multiply(value: number): Multiplies the current value by a number.`
- `.divide(value: number): Divides the current value by a number.`
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

- Implement advanced mathematical functions
- Add expression parsing and evaluation
- Develop unit conversion capabilities
- Implement matrix and vector operations
- Add complex number support
- Develop statistical functions
- Implement symbolic computation features

Stay tuned for updates!
