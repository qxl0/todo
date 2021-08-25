import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlicer';
import { addTodoAsync } from '../redux/todoSlicer';

const AddTodoForm = () => {
	const [userInput, setUserInput] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodoAsync({title: userInput}));
		setUserInput('');
	}


	return (
		<form onSubmit={handleSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={userInput}
				onChange={(event) => setUserInput(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onAddTodoClick: (task) => {
			dispatch({ type: 'ADD_TODO', payload:  `${task}`  });
		},
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
