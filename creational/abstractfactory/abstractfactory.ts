interface ProductA {
  doSomething(): void;
}

interface ProductB {
  doSomethingElse(): void;
}

class ConcreteProductA1 implements ProductA {
  doSomething(): void {
    console.log("Doing something in ConcreteProductA1");
  }
}

class ConcreteProductB1 implements ProductB {
  doSomethingElse(): void {
    console.log("Doing something else in ConcreteProductB1");
  }
}

class ConcreteProductA2 implements ProductA {
  doSomething(): void {
    console.log("Doing something in ConcreteProductA2");
  }
}

class ConcreteProductB2 implements ProductB {
  doSomethingElse(): void {
    console.log("Doing something else in ConcreteProductB2");
  }
}

interface AbstractFactory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA(): ProductA {
    return new ConcreteProductA1();
  }

  createProductB(): ProductB {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  createProductA(): ProductA {
    return new ConcreteProductA2();
  }

  createProductB(): ProductB {
    return new ConcreteProductB2();
  }
}

function getFactory(factoryType: string): AbstractFactory | null {
  switch (factoryType) {
    case "Factory1":
      return new ConcreteFactory1();
    case "Factory2":
      return new ConcreteFactory2();
    default:
      return null;
  }
}
