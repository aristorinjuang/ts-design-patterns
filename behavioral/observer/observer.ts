interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(message: string): void;
}

interface Observer {
  update(message: string): void;
}

class MessagePublisher implements Subject {
  private observers: Observer[] = [];

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  detach(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(message: string) {
    this.observers.forEach(observer => observer.update(message));
  }
}

class MessageSubscriber implements Observer {
  constructor(private name: string) {}

  update(message: string) {
    console.log(`${this.name} received message: ${message}`);
  }
}

const publisher = new MessagePublisher();

const subscriber1 = new MessageSubscriber('Subscriber 1');
const subscriber2 = new MessageSubscriber('Subscriber 2');

publisher.attach(subscriber1);
publisher.attach(subscriber2);

publisher.notify('Hello, world!');

publisher.detach(subscriber2);

publisher.notify('How are you doing?');
