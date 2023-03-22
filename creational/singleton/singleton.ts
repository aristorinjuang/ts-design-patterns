class Singleton {
  private static instance: Singleton;
  private data: string;

  private constructor() {
    this.data = "Hello, World!";
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public getData(): string {
    return this.data;
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
if (s1 === s2) {
  console.log("s1 and s2 are the same instance");
} else {
  console.log("s1 and s2 are different instances");
}
console.log(`s1 data: ${s1.getData()}`);
console.log(`s2 data: ${s2.getData()}`);
