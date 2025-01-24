import { ASTNode } from "./types";

/**
 * Evaluates an Abstract Syntax Tree (AST) node to compute the final value of the mathematical expression.
 *
 * @param node - The root AST node representing the parsed mathematical expression.
 * @returns The numerical result of evaluating the expression represented by the AST.
 *
 * Steps:
 * 1. If the node is a `Literal`, return its numeric value directly.
 * 2. If the node is a `BinaryOperation`:
 *    - Recursively evaluate the left and right child nodes.
 *    - Apply the operator (+, -, *, /) to the evaluated left and right values.
 * 3. Throw an error if the node type or operator is unknown.
 */
export function evaluate(node: ASTNode): number {
  if (node.type === "Literal") {
    return node.value;
  } else if (node.type === "BinaryOperation") {
    const left = evaluate(node.left);
    const right = evaluate(node.right);

    if (node.operator === "+") return left + right;
    else if (node.operator === "-") return left - right;
    else if (node.operator === "*") return left * right;
    else if (node.operator === "/") return left / right;
    else throw new Error(`Unknown operator: ${node.operator}`);
  } else {
    throw new Error(`Unknown node type: ${(node as ASTNode).type}`);
  }
}
