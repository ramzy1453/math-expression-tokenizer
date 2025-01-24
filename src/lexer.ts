import { Token, TokenType } from "./types";

/**
 * Tokenizes a mathematical expression string into an array of tokens.
 *
 * The function scans the input string for numbers, operators (+, -, *, /), and parentheses
 * and classifies each part into a corresponding token type:
 * - `NUMBER`: for numeric values
 * - `OPERATOR`: for arithmetic operators (+, -, *, /)
 * - `LEFT_PARENTHESIS`: for opening parentheses '('
 * - `RIGHT_PARENTHESIS`: for closing parentheses ')'
 *
 * If an unrecognized token is found, an error is thrown.
 *
 * @param input - The mathematical expression to tokenize.
 * @returns An array of tokens representing the parsed components of the input expression.
 */
export function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  const regex = /\d+|\+|\-|\*|\/|\(|\)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    const value = match[0];
    let type: TokenType;

    if (!isNaN(parseFloat(value))) type = TokenType.NUMBER;
    else if ("+-*/".includes(value)) type = TokenType.OPERATOR;
    else if (value === "(") type = TokenType.LEFT_PARENTHESIS;
    else if (value === ")") type = TokenType.RIGHT_PARENTHESIS;
    else throw new Error(`Unknown token: ${value}`);

    tokens.push({ type, value });
  }

  return tokens;
}
