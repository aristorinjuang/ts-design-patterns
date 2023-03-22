interface Expression {
  interpret(): number;
}

class Value implements Expression {
  value: number;
  
  constructor(value: number) {
    this.value = value;
  }

  interpret(): number {
    return this.value;
  }
}

class Add implements Expression {
  left: Expression;
  right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}

class Subtract implements Expression {
  left: Expression;
  right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.left.interpret() - this.right.interpret();
  }
}

class Multiply implements Expression {
  left: Expression;
  right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.left.interpret() * this.right.interpret();
  }
}

class Divide implements Expression {
  left: Expression;
  right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.left.interpret() / this.right.interpret();
  }
}

const expression: Expression = new Add(
  new Value(10),
  new Multiply(
    new Value(2),
    new Subtract(new Value(5), new Value(3)),
  ),
);

const result: number = expression.interpret();
console.log(`Result: ${result}`);
