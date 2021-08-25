import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoListContext } from "./TodoListContext";
import { VisibilityFilter } from "./Constants";

const TodoList = () => {
  const { state } = useContext(TodoListContext);
	const todos = applyFilter(state); 
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

const applyFilter = (state) => {
	const { todos, visibilityFilter } = state;

	switch (visibilityFilter) {
		case VisibilityFilter.SHOW_ALL:
			return todos;
		case VisibilityFilter.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed);
		case VisibilityFilter.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed);
		default:
			throw new Error('Unknown filter: ' + visibilityFilter);
	}
};

export default TodoList;
