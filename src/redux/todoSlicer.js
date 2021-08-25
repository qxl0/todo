import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', 
  async () => {
  const response = await fetch('http://localhost:7000/todos');
  if (response.ok) {
    const todos = await response.json();
    return { todos: todos };
  }
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync',
  async (payload) => {
    const response = await fetch('http://localhost:7000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: payload.title})
    });
    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  });

export const toggleTodoAsync = createAsyncThunk('todos/toggleTodoAsync',
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({completed: payload.completed})
    });
    if (response.ok) {
      const todo = await response.json();
      return { todo };
    }
  });

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodoAsync',
  async (payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      return { id: payload.id };
    }
  });

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      { id: 1, title: "todo1", completed: false },
      { id: 2, title: "todo2", completed: false },
      { id: 3, title: "todo3", completed: true }
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload.title,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const index = state.todos.findIndex(
          todo => todo.id === action.payload.id);
      state.todos[index].completed = !state.todos[index].completed;
    },
    deleteTodo: (state, action) => {
      const todos = state.todos.filter(todo=> todo.id !== action.payload.id);
      return {todos};
    }
  },
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      console.log('fetching data...');
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      console.log('data fetched');
      return {todos: action.payload.todos};
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.todos.push(action.payload.todo);
    },
    [toggleTodoAsync.fulfilled]: (state, action) => {
      const index = state.todos.findIndex(
          todo => todo.id === action.payload.todo.id);
      state.todos[index].completed = action.payload.todo.completed;
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      const todos = state.todos.filter(todo=> todo.id !== action.payload.id);
      return {todos};
    }

  }
});

export const todolist = (state) => state.todolist.todos;
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

