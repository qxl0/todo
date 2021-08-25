import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const initialState = { counter: 0};


export default function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const divstyle = {fontSize: '20px', padding: '10px' };
  const buttonstyle = {fontSize: '20px', padding: '10px', margin: '10px' };
  const handleIncrement = () => dispatch({ type: 'increment' });
  const handleDecrement = () => dispatch({ type: 'decrement' });
  return (
    <div>
      <button style={buttonstyle} onClick={handleIncrement}>increase</button>
      <div style={divstyle}>
        Counter: {state.counter}     
      </div>
      <button style={buttonstyle} onClick={handleDecrement}>decrease</button>
    </div>
  )
}
