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

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodoClick: (task) => {
      dispatch({ type: "ADD_TODO", payload: { task: `${task}` } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

//export default TodoList;
