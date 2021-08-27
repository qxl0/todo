import React from 'react'
import TodoList from './TodoList';
import TotalCompleteItems from './TotalCompleteItems';
import { TodoListContextProvider } from './TodoListContext';
import Footer from './Footer';
import AddTodoForm from './AddTodoForm';


export default function TodoListMain() {
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
  )
}
