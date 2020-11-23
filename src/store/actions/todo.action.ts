import { createAction, props } from "@ngrx/store";
import { ITodo } from "../../models/todo.model";

export enum TodoTypes {
  Remove = "[Remove Todo] Todo",
  Update = "[Update Todo] Todo"
}

export const RemoveAction = createAction(TodoTypes.Remove, props<ITodo>());

export const UpdateAction = createAction(TodoTypes.Update, props<ITodo>());
