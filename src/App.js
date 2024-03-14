import './App.css';
import { useState } from 'react'

function App(props) {

  let [ count, setCount] = useState(0)
const increment = () => {
    setCount(count++)
  }

  let decrement = () => {
     setCount(count--)
  }
  return (
    <div>
      <h1>Hello, This is a new feature</h1>
      <button onClick={increment}> + </button>
      {`     Count : ${count}      `}
      <button onClick={decrement}> - </button>
    </div>
  );
}

export default App;
