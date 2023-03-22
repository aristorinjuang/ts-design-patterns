interface Strategy {
  execute(): void;
}

class ConcreteStrategyA implements Strategy {
  execute(): void {
    console.log("Execute strategy A");
  }
}

class ConcreteStrategyB implements Strategy {
  execute(): void {
    console.log("Execute strategy B");
  }
}

class Context {
  private strategy: Strategy;

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public executeStrategy() {
    this.strategy.execute();
  }
}

const context = new Context();
const strategyA = new ConcreteStrategyA();
const strategyB = new ConcreteStrategyB();

context.setStrategy(strategyA);
context.executeStrategy();

context.setStrategy(strategyB);
context.executeStrategy();
