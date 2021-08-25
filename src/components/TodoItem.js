import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TodoListContext } from "./TodoListContext";

const TodoItem = ({ id, title, completed }) => {
	const { dispatch } = useContext(TodoListContext);
	const handleClick = () => {
		console.log("clicked:", id);
		dispatch({ type: "TOGGLE_TODO", 
		payload: { id, completed: !completed }});
	};
	const handleDeleteClick = () => {
		dispatch({ type: "DELETE_TODO", payload: { id } });
	};
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input type="checkbox" className="mr-3" checked={completed}
						onChange={handleClick}></input>
          {title}
        </span>
        <button className="btn btn-danger"
					onClick = {handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

TodoItem.prototype = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
};
export default TodoItem;
