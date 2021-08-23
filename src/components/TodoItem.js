import React from 'react';
import { connect } from 'react-redux';

const TodoItem = ({ id, title, completed, onToggleTodoClick, onDeleteTodoClick }) => {
	const handleCheckClick = () => {
		onToggleTodoClick(id);
	};
	const handleDeleteClick = () => {
		onDeleteTodoClick(id);
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' 
					onChange={handleCheckClick}
					checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger'
					onClick={handleDeleteClick}>Delete</button>
			</div>
		</li>
	);
};



const mapDispatchToProps = (dispatch) => {
	return {
		onToggleTodoClick: (id) => {
			dispatch({ type: 'TOGGLE_TODO', payload: { id }});
		},
		onDeleteTodoClick: (id) => {
			dispatch({ type: 'DELETE_TODO', payload: { id }});
		},
	};
};

export default connect(null, mapDispatchToProps)(TodoItem);

