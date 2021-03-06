import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { todolist } from "../redux/todoSlicer";
import { getTodosAsync } from "../redux/todoSlicer";

const TodoList = () => {
	const dispatch = useDispatch();
  // const todos = useSelector((state) => {
  // 	console.log("state is: ", state.todolist);
  // 	return state.todolist.todos
  // });
  const todos = useSelector(todolist);

	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

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

export default TodoList;
