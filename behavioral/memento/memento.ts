class Editor {
  private text: string = '';

  write(text: string) {
    this.text += text;
  }

  read(): string {
    return this.text;
  }
}

class Memento {
  constructor(private text: string) {}

  getText(): string {
    return this.text;
  }
}

class Caretaker {
  private memento: Memento | null = null;

  save(editor: Editor) {
    this.memento = new Memento(editor.read());
  }

  restore(editor: Editor) {
    if (this.memento) {
      editor.write(this.memento.getText());
    }
  }
}

const editor = new Editor();
const caretaker = new Caretaker();

editor.write('Hello, ');
caretaker.save(editor);

editor.write('world!');
console.log(editor.read());

caretaker.restore(editor);
console.log(editor.read());
