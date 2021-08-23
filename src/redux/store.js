import { createStore } from 'redux';
import { reducer } from './reducer';

const win = window;
// win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__();

const initialState = {
  todos: [
    {id: 1, task: 'Learn React', completed: false},
    {id: 2, task: 'Learn Redux', completed: false},
    {id: 3, task: 'Learn React Native', completed: false}
  ]
};

const store = createStore(reducer, initialState, 
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__());

// connect to redux dev tools

export default store;