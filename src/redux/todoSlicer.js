import { createSlice } from "@reduxjs/toolkit";

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
  }
});

export const todolist = (state) => state.todolist.todos;
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

