interface Target {
  request(): void;
}

class Adaptee {
  public specificRequest(): void {
    console.log("Adaptee's specific request");
  }
}

class Adapter implements Target {
  constructor(private adaptee: Adaptee) {}

  public request(): void {
    console.log("Adapter's request");
    this.adaptee.specificRequest();
  }
}

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

adapter.request();
