import React, { useContext } from "react";
import { TodoListContext } from "./TodoListContext";

const TotalCompleteItems = () => {
  const { state } = useContext(TodoListContext);
  const count = state.todos.filter((todo) =>
		 todo.completed).length;
  return (
    <h4 className="mt-3">
      Total Complete Items:
      {count}
    </h4>
  );
};

export default TotalCompleteItems;
