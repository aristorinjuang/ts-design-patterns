interface Product {
  use(): void;
}

class ConcreteProduct1 implements Product {
  use(): void {
    console.log("Using ConcreteProduct1");
  }
}

class ConcreteProduct2 implements Product {
  use(): void {
    console.log("Using ConcreteProduct2");
  }
}

interface Creator {
  factoryMethod(): Product;
}

class ConcreteCreator1 implements Creator {
  factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 implements Creator {
  factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
