/**
 * The `Evaluator` class is designed to evaluate mathematical expressions with support for variables and functions.
 */
class Evaluator {
  private variables: { [key: string]: number }; // Stores variable mappings (name -> value)
  private functions: { [key: string]: (...args: number[]) => number }; // Stores function mappings (name -> implementation)

  /**
   * Constructor for the Evaluator class.
   * @param variables - An optional object containing initial variable mappings.
   */
  constructor(variables: { [key: string]: number } = {}) {
    this.variables = variables;
    this.functions = {
      sqrt: Math.sqrt, // Square root function
      sin: Math.sin, // Sine function
      cos: Math.cos, // Cosine function
      log: Math.log, // Natural logarithm function
      abs: Math.abs, // Absolute value function
      tan: Math.tan, // Tangent function
      exp: Math.exp, // Exponential function (e^x)
      round: Math.round, // Round to nearest integer
      floor: Math.floor, // Round down to nearest integer
      ceil: Math.ceil, // Round up to nearest integer
      max: Math.max, // Maximum of the given numbers
      min: Math.min, // Minimum of the given numbers
      pow: Math.pow, // Power function (x^y)
      random: Math.random, // Random number generator between 0 and 1
      pi: () => Math.PI, // Pi constant
      e: () => Math.E, // Euler's number
    };
  }

  /**
   * Evaluates a mathematical expression.
   * @param expression - The expression to evaluate.
   * @returns The numerical result of the expression.
   * @throws Error if the expression is invalid or contains unrecognized variables/functions.
   */
  evaluate(expression: string): number {
    this.validateExpression(expression); // Ensure the expression contains only allowed characters
    const processedExpression = this.replaceVariablesAndFunctions(expression); // Replace variables and functions

    try {
      return this.safeEval(processedExpression); // Safely evaluate the processed expression
    } catch (error) {
      throw new Error(`Invalid expression: ${expression}`);
    }
  }

  /**
   * Replaces variables and functions in the expression with their respective values or implementations.
   * @param expression - The expression to process.
   * @returns The processed expression with variables and functions replaced.
   * @throws Error if there are unrecognized variables after processing.
   */
  private replaceVariablesAndFunctions(expression: string): string {
    // Replace variables
    for (const [key, value] of Object.entries(this.variables)) {
      const regex = new RegExp(`\\b${key}\\b`, 'g');
      expression = expression.replace(regex, value.toString());
    }

    // Replace functions
    for (const [key, func] of Object.entries(this.functions)) {
      // Special case for constants like pi and e (no parentheses)
      if (key === 'pi' || key === 'e') {
        const regex = new RegExp(`\\b${key}\\b`, 'g');
        expression = expression.replace(regex, func().toString());
      } else {
        // For functions with arguments, e.g., sqrt(), sin()
        const regex = new RegExp(`\\b${key}\\(([^)]+)\\)`, 'g');
        expression = expression.replace(regex, (_, args) =>
          func(...args.split(',').map((arg: string) => this.safeEval(arg))).toString()
        );
      }
    }

    // Identify unrecognized variables after processing
    const unrecognizedVars = expression.match(/\b[a-zA-Z]+\b/g);
    if (unrecognizedVars) {
      throw new Error(`Unrecognized variable(s): ${unrecognizedVars.join(', ')}`);
    }

    return expression;
  }

  /**
   * Validates the syntax of the input expression.
   * @param expression - The expression to validate.
   * @throws Error if the expression contains invalid characters.
   */
  private validateExpression(expression: string): void {
    const allowedChars = /^[a-zA-Z\d+\-*/()., ]+$/; // Allowed characters in expressions
    if (!allowedChars.test(expression)) {
      throw new Error('Expression contains invalid characters');
    }
  }

  /**
   * Safely evaluates a processed mathematical expression.
   * @param expression - The processed expression to evaluate.
   * @returns The numerical result of the expression.
   * @throws Error if the expression contains invalid characters.
   */
  private safeEval(expression: string): number {
    const allowedChars = /^[\d+\-*/()., ]+$/; // Allowed characters in processed expressions
    if (!allowedChars.test(expression)) {
      throw new Error('Expression contains invalid characters after processing');
    }
    return Function(`'use strict'; return (${expression})`)(); // Safely evaluate the expression
  }

  /**
   * Adds or updates a variable in the evaluator.
   * @param name - The name of the variable.
   * @param value - The value of the variable.
   */
  setVariable(name: string, value: number): void {
    this.variables[name] = value;
  }

  /**
   * Adds or updates a custom function in the evaluator.
   * @param name - The name of the function.
   * @param func - The implementation of the function.
   */
  setFunction(name: string, func: (...args: number[]) => number): void {
    this.functions[name] = func;
  }
}

export { Evaluator };
