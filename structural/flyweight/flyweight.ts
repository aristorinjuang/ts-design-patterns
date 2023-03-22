interface Flyweight {
  operation(): void;
}

class ConcreteFlyweight implements Flyweight {
  private state: string;

  constructor(state: string) {
      this.state = state;
  }

  public operation(): void {
      console.log(`ConcreteFlyweight: ${this.state}`);
  }
}

class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  public getFlyweight(key: string): Flyweight {
      if (key in this.flyweights) {
          return this.flyweights[key];
      }
      const flyweight = new ConcreteFlyweight(key);
      this.flyweights[key] = flyweight;
      return flyweight;
  }

  public getFlyweightCount(): number {
      return Object.keys(this.flyweights).length;
  }
}

const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight("key1");
const flyweight2 = factory.getFlyweight("key2");
const flyweight3 = factory.getFlyweight("key1");

flyweight1.operation();
flyweight2.operation();
flyweight3.operation();

console.log(factory.getFlyweightCount());
