export enum TokenType {
  NUMBER = "NUMBER",
  OPERATOR = "OPERATOR",
  LEFT_PARENTHESIS = "LEFT_PARENTHESIS",
  RIGHT_PARENTHESIS = "RIGHT_PARENTHESIS",
}

export interface Token {
  type: TokenType;
  value: string;
}

export interface LiteralNode {
  type: "Literal";
  value: number;
}

export interface BinaryOperationNode {
  type: "BinaryOperation";
  operator: string;
  left: ASTNode;
  right: ASTNode;
}

export type ASTNode = LiteralNode | BinaryOperationNode;
