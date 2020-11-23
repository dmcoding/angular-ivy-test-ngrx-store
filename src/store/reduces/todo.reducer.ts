import { on, createReducer } from "@ngrx/store";
import { ITodo } from "../../models/todo.model";
import { UpdateAction, RemoveAction, TodoTypes } from "../actions/todo.action";

export const todoState: ITodo = {} as ITodo;

const reducer = createReducer(
  todoState,
  on(UpdateAction, (state, todo) => {
    return todo;
  }),
  on(RemoveAction, (state) => {
    return {} as ITodo;
  }),
);

export function todoReducer(state, action) {
  return reducer(state, action);
}
