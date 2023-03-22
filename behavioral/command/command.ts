interface Command {
  execute(): void;
}

class ConcreteCommand implements Command {
  constructor(private message: string) {}

  execute(): void {
    console.log(this.message);
  }
}

class Invoker {
  private command: Command;

  setCommand(c: Command) {
    this.command = c;
  }

  executeCommand() {
    this.command.execute();
  }
}

const concreteCommand = new ConcreteCommand('Hello World!');
const invoker = new Invoker();
invoker.setCommand(concreteCommand);
invoker.executeCommand();
