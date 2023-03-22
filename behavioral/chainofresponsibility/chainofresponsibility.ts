interface Handler {
  handleRequest(request: number): void;
  setNextHandler(handler: Handler): void;
}

class ConcreteHandler1 implements Handler {
  private nextHandler: Handler;

  public handleRequest(request: number): void {
    if (request >= 0 && request < 10) {
      console.log(`Request ${request} handled by ConcreteHandler1`);
    } else if (this.nextHandler != null) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log("Request cannot be handled by any handler");
    }
  }

  public setNextHandler(handler: Handler): void {
    this.nextHandler = handler;
  }
}

class ConcreteHandler2 implements Handler {
  private nextHandler: Handler;

  public handleRequest(request: number): void {
    if (request >= 10 && request < 20) {
      console.log(`Request ${request} handled by ConcreteHandler2`);
    } else if (this.nextHandler != null) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log("Request cannot be handled by any handler");
    }
  }

  public setNextHandler(handler: Handler): void {
    this.nextHandler = handler;
  }
}

class Client {
  private handler: Handler;

  constructor(handler: Handler) {
    this.handler = handler;
  }

  public makeRequest(request: number): void {
    this.handler.handleRequest(request);
  }
}

const handler1: Handler = new ConcreteHandler1();
const handler2: Handler = new ConcreteHandler2();

handler1.setNextHandler(handler2);

const client: Client = new Client(handler1);

client.makeRequest(5);
client.makeRequest(15);
client.makeRequest(25);