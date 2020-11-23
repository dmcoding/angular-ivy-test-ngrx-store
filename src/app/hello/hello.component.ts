import { Component } from "@angular/core";
import { ITodo } from "../../models/todo.model";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { UpdateAction } from "../../store/actions/todo.action";

@Component({
  selector: "hello",
  templateUrl: "hello.component.html",
  styles: []
})
export class HelloComponent {
  todos$: Observable<ITodo>;

  constructor(private store: Store<{todo: ITodo}>) { 
    this.todos$ = store.select('todo');
  }

}
