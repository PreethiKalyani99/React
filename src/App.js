import './App.css';
import { useState } from 'react'

function App() {

  let [ count, setCount] = useState(0)
const increment = () => {
    setCount(count++)
  }

  let decrement = () => {
     setCount(count--)
  }
  return (
    <div>
      <button onClick={increment}> + </button>
      {`     Count : ${count}      `}
      <button onClick={decrement}> - </button>
    </div>
  );
}

export default App;
