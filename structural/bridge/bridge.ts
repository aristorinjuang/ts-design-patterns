interface Abstraction {
  operation(): void;
}

class ConcreteAbstractionA implements Abstraction {
  constructor(private implementation: Implementation) {}

  public operation(): void {
    this.implementation.operationImplementation();
  }
}

class ConcreteAbstractionB implements Abstraction {
  constructor(private implementation: Implementation) {}

  public operation(): void {
    this.implementation.operationImplementation();
  }
}

interface Implementation {
  operationImplementation(): void;
}

class ConcreteImplementationA implements Implementation {
  public operationImplementation(): void {
    console.log("ConcreteImplementationA operation");
  }
}

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): void {
    console.log("ConcreteImplementationB operation");
  }
}

const concreteImplementationA = new ConcreteImplementationA();
const concreteImplementationB = new ConcreteImplementationB();

const concreteAbstractionA = new ConcreteAbstractionA(concreteImplementationA);
const concreteAbstractionB = new ConcreteAbstractionB(concreteImplementationB);

concreteAbstractionA.operation();
concreteAbstractionB.operation();
