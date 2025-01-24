# Tokenizer for Mathematical Expressions

This project contains a function that tokenizes a mathematical expression string into a series of tokens. It breaks down the input into individual components like numbers, operators, and parentheses, making it easier to process for further computation, such as parsing or evaluation.

## Usage

The `tokenize` function can be used to tokenize mathematical expressions represented as strings. It processes the string and returns an array of tokens.

### Example:

```typescript
import { tokenize } from "./tokenizer";

const input = "3 + (4 * 5)";
const tokens = tokenize(input);

console.log(tokens);
// Output:
// [
//   { type: 'NUMBER', value: '3' },
//   { type: 'OPERATOR', value: '+' },
//   { type: 'LEFT_PARENTHESIS', value: '(' },
//   { type: 'NUMBER', value: '4' },
//   { type: 'OPERATOR', value: '*' },
//   { type: 'NUMBER', value: '5' },
//   { type: 'RIGHT_PARENTHESIS', value: ')' }
// ]
```

## API

### `tokenize(input: string): Token[]`

Tokenizes the provided mathematical expression string and returns an array of tokens.

#### Parameters:

- `input` (string): The mathematical expression to tokenize.

#### Returns:

- An array of `Token` objects, where each object contains:
  - `type`: The type of the token (e.g., `NUMBER`, `OPERATOR`, `LEFT_PARENTHESIS`, `RIGHT_PARENTHESIS`).
  - `value`: The value of the token (e.g., `'3'`, `'+'`, `'('`).
