class Product {
  private parts: string[];

  constructor() {
    this.parts = [];
  }

  addPart(part: string): void {
    this.parts.push(part);
  }

  getParts(): string[] {
    return this.parts;
  }
}

interface Builder {
  buildPart1(): void;
  buildPart2(): void;
  buildPart3(): void;
  getResult(): Product;
}

class ConcreteBuilder1 implements Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  buildPart1(): void {
    this.product.addPart("Part 1 of ConcreteBuilder1");
  }

  buildPart2(): void {
    this.product.addPart("Part 2 of ConcreteBuilder1");
  }

  buildPart3(): void {
    this.product.addPart("Part 3 of ConcreteBuilder1");
  }

  getResult(): Product {
    return this.product;
  }
}

class ConcreteBuilder2 implements Builder {
  private product: Product;

  constructor() {
    this.product = new Product();
  }

  buildPart1(): void {
    this.product.addPart("Part 1 of ConcreteBuilder2");
  }

  buildPart2(): void {
    this.product.addPart("Part 2 of ConcreteBuilder2");
  }

  buildPart3(): void {
    this.product.addPart("Part 3 of ConcreteBuilder2");
  }

  getResult(): Product {
    return this.product;
  }
}

class Director {
  construct(builder: Builder): Product {
    builder.buildPart1();
    builder.buildPart2();
    builder.buildPart3();
    return builder.getResult();
  }
}
