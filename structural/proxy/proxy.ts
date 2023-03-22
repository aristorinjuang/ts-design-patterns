interface Subject {
  do(): string;
}

class RealSubject implements Subject {
  public do(): string {
    return "RealSubject: doing something";
  }
}

class _Proxy implements Subject {
  private realSubject: RealSubject | null = null;

  public do(): string {
    if (!this.realSubject) {
      this.realSubject = new RealSubject();
    }
    let result = "Proxy: calling the real subject to execute a task\n";
    result += this.realSubject.do();
    return result;
  }
}

const subject: Subject = new _Proxy();
const result = subject.do();
console.log(result);
