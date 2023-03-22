interface Mediator {
  sendMessage(sender: Colleague, message: string): void;
}

class ConcreteMediator implements Mediator {
  private colleague1!: Colleague;
  private colleague2!: Colleague;

  setColleague1(colleague: Colleague): void {
    this.colleague1 = colleague;
  }

  setColleague2(colleague: Colleague): void {
    this.colleague2 = colleague;
  }

  sendMessage(sender: Colleague, message: string): void {
    if (sender === this.colleague1) {
      this.colleague2.notify(message);
    } else {
      this.colleague1.notify(message);
    }
  }
}

interface Colleague {
  sendMessage(message: string): void;
  notify(message: string): void;
}

class ConcreteColleague1 implements Colleague {
  private mediator!: Mediator;

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  sendMessage(message: string): void {
    this.mediator.sendMessage(this, message);
  }

  notify(message: string): void {
    console.log(`ConcreteColleague1 received message: ${message}`);
  }
}

class ConcreteColleague2 implements Colleague {
  private mediator!: Mediator;

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  sendMessage(message: string): void {
    this.mediator.sendMessage(this, message);
  }

  notify(message: string): void {
    console.log(`ConcreteColleague2 received message: ${message}`);
  }
}

const mediator: Mediator = new ConcreteMediator();
const colleague1: Colleague = new ConcreteColleague1();
const colleague2: Colleague = new ConcreteColleague2();

mediator.setColleague1(colleague1);
mediator.setColleague2(colleague2);

colleague1.setMediator(mediator);
colleague2.setMediator(mediator);

colleague1.sendMessage("Hello, colleague2!");
colleague2.sendMessage("Hi there, colleague1!");
