interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

class ConcreteAggregate implements Aggregate<number> {
  private numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  createIterator(): Iterator<number> {
    return new ConcreteIterator(this);
  }

  getNumbers(): number[] {
    return this.numbers;
  }
}

class ConcreteIterator implements Iterator<number> {
  private collection: ConcreteAggregate;
  private index: number;

  constructor(collection: ConcreteAggregate) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.collection.getNumbers().length;
  }

  next(): number {
    if (!this.hasNext()) {
      return null;
    }
    const num = this.collection.getNumbers()[this.index];
    this.index++;
    return num;
  }
}

const concreteAggregate = new ConcreteAggregate([1, 2, 3, 4, 5]);
const iterator = concreteAggregate.createIterator();
while (iterator.hasNext()) {
  const num = iterator.next();
  console.log(num);
}
