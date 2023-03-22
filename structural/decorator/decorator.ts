interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  operation() {
    return "ConcreteComponent";
  }
}

interface Decorator extends Component {
  setComponent(component: Component): void;
}

class ConcreteDecoratorA implements Decorator {
  private component: Component;

  setComponent(component: Component) {
    this.component = component;
  }

  operation() {
    return `ConcreteDecoratorA(${this.component.operation()})`;
  }
}

class ConcreteDecoratorB implements Decorator {
  private component: Component;

  setComponent(component: Component) {
      this.component = component;
  }

  operation() {
    return `ConcreteDecoratorB(${this.component.operation()})`;
  }
}

const component: Component = new ConcreteComponent();
const decoratorA: Decorator = new ConcreteDecoratorA();
const decoratorB: Decorator = new ConcreteDecoratorB();

decoratorA.setComponent(component);
decoratorB.setComponent(decoratorA);

const result: string = decoratorB.operation();
console.log(result);
