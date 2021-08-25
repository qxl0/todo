import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { TodoListContextProvider } from './components/TodoListContext';
import Footer from './components/Footer';

const App = () => {
	return (
		<TodoListContextProvider>
		 <div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
				<AddTodoForm />
				<TodoList />
				<TotalCompleteItems />
			</div> 
			<div className="container bg-white p-2 mt-5">
				<Footer />
			</div>
		</TodoListContextProvider>
	);
};

export default App;
