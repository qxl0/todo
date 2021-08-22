import React from 'react';
import TodoItem from './TodoItem';
import {  useSelector } from 'react-redux';
import { todolist } from '../redux/todoSlicer';

const TodoList = () => {
	// const todos = useSelector((state) => {
	// 	console.log("state is: ", state);
	// 	return state.todolist.todos
	// });
	const todos = useSelector(todolist);

	console.log("todo", todos);
	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
