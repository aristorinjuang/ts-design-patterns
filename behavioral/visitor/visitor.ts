interface Visitor {
  visitConcreteElementA(element: ConcreteElementA): void;
  visitConcreteElementB(element: ConcreteElementB): void;
}

interface Element {
  accept(visitor: Visitor): void;
}

class ConcreteElementA implements Element {
  accept(visitor: Visitor): void {
    visitor.visitConcreteElementA(this);
  }

  operationA(): void {
    console.log("ConcreteElementA: operation A");
  }
}

class ConcreteElementB implements Element {
  accept(visitor: Visitor): void {
    visitor.visitConcreteElementB(this);
  }

  operationB(): void {
    console.log("ConcreteElementB: operation B");
  }
}

class ConcreteVisitor1 implements Visitor {
  visitConcreteElementA(element: ConcreteElementA): void {
    console.log("ConcreteVisitor1: visiting ConcreteElementA");
    element.operationA();
  }

  visitConcreteElementB(element: ConcreteElementB): void {
    console.log("ConcreteVisitor1: visiting ConcreteElementB");
    element.operationB();
  }
}

class ConcreteVisitor2 implements Visitor {
  visitConcreteElementA(element: ConcreteElementA): void {
    console.log("ConcreteVisitor2: visiting ConcreteElementA");
    element.operationA();
  }

  visitConcreteElementB(element: ConcreteElementB): void {
    console.log("ConcreteVisitor2: visiting ConcreteElementB");
    element.operationB();
  }
}

const elements: Element[] = [new ConcreteElementA(), new ConcreteElementB()];

const visitor1: Visitor = new ConcreteVisitor1();
const visitor2: Visitor = new ConcreteVisitor2();

for (const element of elements) {
  element.accept(visitor1);
  element.accept(visitor2);
}
