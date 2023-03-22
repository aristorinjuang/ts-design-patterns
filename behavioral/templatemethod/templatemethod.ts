abstract class AbstractClass {
  public TemplateMethod(): void {
    console.log("AbstractClass: template method starts");
    this.PrimitiveOperation1();
    this.PrimitiveOperation2();
    console.log("AbstractClass: template method ends");
  }

  protected abstract PrimitiveOperation1(): void;
  protected abstract PrimitiveOperation2(): void;
}

class ConcreteClass extends AbstractClass {
  protected PrimitiveOperation1(): void {
    console.log("ConcreteClass: primitive operation 1");
  }

  protected PrimitiveOperation2(): void {
    console.log("ConcreteClass: primitive operation 2");
  }
}

const concrete = new ConcreteClass();
concrete.TemplateMethod();
