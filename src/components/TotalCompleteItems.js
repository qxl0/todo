import React from 'react';
import { useSelector } from 'react-redux';


const TotalCompleteItems = () => {
	const total = useSelector(state => state.todolist.todos.filter(
		todo => todo.completed === true).length);
	return <h4 className='mt-3'>Total Complete Items: {total}</h4>;
};

export default TotalCompleteItems;
