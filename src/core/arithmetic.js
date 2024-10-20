"use strict";
exports.__esModule = true;
exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}
exports.divide = divide;
