import React from 'react'

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const divstyle = {fontSize: '20px', padding: '10px' };
  const buttonstyle = {fontSize: '20px', padding: '10px', margin: '10px' };
  return (
    <div>
      <button style={buttonstyle} onClick={increase}>increase</button>
      <div style={divstyle}>
        Counter: {count}     
      </div>
      <button style={buttonstyle} onClick={decrease}>decrease</button>
    </div>
  )
}
