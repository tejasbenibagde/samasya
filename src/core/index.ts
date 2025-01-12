/**
 * @module Core
 *
 * This module serves as an entry point for all core mathematical operations
 * in the Samasya library. It aggregates and re-exports all functionalities
 * defined in the 'core' directory.
 *
 * Available Exports:
 * - Arithmetic Functions
 * - add(a: number, b: number): number
 * - subtract(a: number, b: number): number
 * - multiply(a: number, b: number): number
 * - divide(a: number, b: number): number
 *
 * Chaining Functionality:
 * - Chain(2).add(3).subtract(5)
 *
 * Note:
 * - Purpose of this file is to simplify and keep track of all the exports happening
 *   in 'core' directory and should not contain any logic other than exporting functions or classes.
 */

export * from './chaining';
export * from './arithmetic';
export * from './algebra';
