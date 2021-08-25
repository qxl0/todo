import { configureStore } from '@reduxjs/toolkit';
import todolistReducer from './todoSlicer';


export const store = configureStore({
  reducer: {
    todolist: todolistReducer
  }
});

