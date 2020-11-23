export interface ITodo {
  text: string;
  isChecked: boolean;
}

export class Todo implements ITodo {
  constructor(public text: string, public isChecked: boolean) {}

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
