import uuid from "uuid";
import { GET_TODOS, ADD_TODO, DELETE_TODO } from "../actions/types";
const InitialState = {
  todos: [
    {
      id: uuid(),
      todo: "pay bills"
    },
    {
      id: uuid(),
      todo: "do laundry"
    }
  ]
};

export default function(state = InitialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return state;

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    default:
      return state;
  }
}
