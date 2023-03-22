interface State {
  handle(): void;
}

class ConcreteStateA implements State {
  handle(): void {
    console.log("Handle request with ConcreteStateA");
  }
}

class ConcreteStateB implements State {
  handle(): void {
    console.log("Handle request with ConcreteStateB");
  }
}

class Context {
  private state: State;

  public setState(state: State) {
    this.state = state;
  }

  public request() {
    this.state.handle();
  }
}

const context = new Context();
const stateA = new ConcreteStateA();
const stateB = new ConcreteStateB();

context.setState(stateA);
context.request();

context.setState(stateB);
context.request();
