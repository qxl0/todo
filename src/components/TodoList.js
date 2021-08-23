import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

const TodoList = (props) => {
  const todos = props.todos;

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem  
					key={todo.id}
					id={todo.id} title={todo.task} 
					completed={todo.completed} />
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
