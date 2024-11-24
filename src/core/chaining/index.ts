/**
 * @module Chaining
 *
 * This module serves as an entry point for all chaining functionalities
 * in the Samasya library. It aggregates and re-exports the Chain class,
 * which allows for chaining of arithmetic operations.
 *
 * Available Exports:
 * - Chain Class
 * - Chain.add(num: number): this
 * - Chain.subtract(num: number): this
 * - Chain.multiply(num: number): this
 * - Chain.divide(num: number): this
 * - Chain.getResult(): number
 *
 * Note:
 * - The purpose of this file is to simplify and keep track of all the
 *   exports related to chaining functionality and should not contain any
 *   logic other than exporting functions or classes.
 */

export * from './chain';
