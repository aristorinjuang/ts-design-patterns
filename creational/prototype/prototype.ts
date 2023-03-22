interface Prototype {
  clone(): Prototype;
}

class ConcretePrototype1 implements Prototype {
  constructor(public property1: string, public property2: number) {}

  public clone(): Prototype {
    return new ConcretePrototype1(this.property1, this.property2);
  }
}

class ConcretePrototype2 implements Prototype {
  constructor(public property1: number, public property2: number) {}

  public clone(): Prototype {
    return new ConcretePrototype2(this.property1, this.property2);
  }
}

class Client {
  public static operation(prototype: Prototype): void {
    const clone = prototype.clone();
    console.log(`Cloned object: ${JSON.stringify(clone)}`);
  }
}

const prototype1 = new ConcretePrototype1("hello", 123);
Client.operation(prototype1);

const prototype2 = new ConcretePrototype2(456, 789);
Client.operation(prototype2);
