import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { ITodo } from "../models/todo.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todo: FormControl;

  constructor(private store: Store<{todo: ITodo}>) {
    this.todo = new FormControl("", [
      Validators.minLength(1),
      Validators.required
    ]);
  }

  save() {}
}
