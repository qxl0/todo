import React from 'react';
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../redux/todoSlicer';


const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const handleClick = () => { 
		dispatch(
			toggleTodo({id: id, completed: !completed})
		); 
	};
	const handleDeleteClick = () => {
		dispatch(
			deleteTodo({id: id})
		)
	};
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' 
						onChange={handleClick}
						checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger'
					onClick={handleDeleteClick}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
