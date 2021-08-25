import React, { useReducer } from "react";
import { CHANGE_FILTER } from "./Footer";
import { VisibilityFilter } from './Constants';


export const TodoListContext = React.createContext();

export const initialState = {
  visibilityFilter: VisibilityFilter.SHOW_ALL,
  todos: [
    { id: 1, title: "HTML", completed: true },
    { id: 2, title: "CSS", completed: true },
    { id: 3, title: "Javascript", completed: false },
    { id: 4, title: "React", completed: false },
    { id: 5, title: "Redux", completed: false },
    { id: 6, title: "Node", completed: false },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      const todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload}
          : todo
      );
      const newState = { ...state, todos };
      return newState;
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        visibilityFilter: action.payload,
      };
    default:
      return state;
  }
};

export function TodoListContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <TodoListContext.Provider value={value}>
      {props.children}
    </TodoListContext.Provider>
  );
}
