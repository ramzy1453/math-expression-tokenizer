import { evaluate } from "./evaluator";
import { tokenize } from "./lexer";
import { parse } from "./parser";

/**
 * This main function takes a mathematical expression as a string,
 * tokenizes it, parses it into an abstract syntax tree (AST), and evaluates the expression.
 *
 * @param input - A string representing a mathematical expression (e.g., "5 + 3 * 2").
 * @returns The result of evaluating the expression.
 *
 * Steps:
 * 1. `tokenize` - Converts the input string into a list of tokens (lexical units).
 * 2. `parse` - Constructs an abstract syntax tree (AST) from the tokens.
 * 3. `evaluate` - Traverses the AST to compute the final result.
 */
export function calculate(input: string): number {
  return evaluate(parse(tokenize(input)));
}
