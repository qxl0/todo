import React, { useState } from 'react';
import { connect } from 'react-redux';

const AddTodoForm = (props) => {

	const [value, setValue] = useState('');
	const {onAddTodoClick} = props;

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(value);
		onAddTodoClick(value);
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
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
