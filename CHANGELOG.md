# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.1.0-beta.2]  - 2024-12-01

### Added

- **Chain Class**:
  - `power(value: number)`: Raises the current value to the power of the given value.
  - `root(value: number)`: Calculates the nth root of the current value based on the given value.
- **Modular Operations**:

  - `modAdd`: Performs modular addition of two numbers.
  - `modSubtract`: Performs modular subtraction of two numbers.
  - `modMultiply`: Performs modular multiplication of two numbers.
  - `modDivide`: Performs modular division of two numbers.
  - `modulo`: Computes the modulo of a number by another number.

- **Exponentiation Operations**:

  - `modExp`: Performs modular exponentiation.
  - `modRoot`: Calculates modular roots.

- **Advanced Modular Operations**:
  - `modGCD`: Computes the greatest common divisor of two numbers using the modulus.
  - `modLCM`: Computes the least common multiple of two numbers using the modulus.
  - `modInverse`: Computes the modular inverse of a number under a given modulus.

## [1.1.0-beta.1] - 2024-11-24

### Added

- Initial release of the `Samasya` library as a beta version.
- Basic arithmetic operations: addition, subtraction, multiplication, division.
- Support for arithmetic operations with both numbers and arrays.
- Chainable arithmetic operations with the `Chain` class.
- API methods:
  - `add(a: number | number[], b?: number): number`
  - `subtract(a: number | number[], b?: number): number`
  - `multiply(a: number | number[], b?: number): number`
  - `divide(a: number | number[], b?: number): number`
  - `Chain(value: number)` for chaining operations.
  - `.add(value: number)`, `.subtract(value: number)`, `.multiply(value: number)`, `.divide(value: number)`, `.getResult()` for chaining arithmetic.