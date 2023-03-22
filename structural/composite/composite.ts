interface Component {
  operation(): void;
}

class Leaf implements Component {
  operation() {
    console.log("Leaf Operation");
  }
}

class Composite implements Component {
  private children: Component[] = [];

  add(child: Component) {
    this.children.push(child);
  }

  remove(child: Component) {
    const index = this.children.indexOf(child);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  operation() {
    console.log("Composite Operation");
    this.children.forEach(child => child.operation());
  }
}

const root: Composite = new Composite();
root.add(new Leaf());
const branch: Composite = new Composite();
branch.add(new Leaf());
branch.add(new Leaf());
root.add(branch);
root.operation();
