import { useState } from 'react';
import './App.css';
import Register from './Register';

function App() {

  const [counter, setCounter] = useState<number>(0)
  const handleOnClick = (count: number): void => {
    if (count === +1) {
      setCounter(counter + 1)
    } else {
      setCounter(counter - 1)
    }
  }
  return (
    <div className='main'>
      <h1>COUNTER</h1>
      <div className='Box'>
        <button onClick={(): void => handleOnClick(-1)} >-</button>
        <p className='display'>{counter}</p>
        <button onClick={(): void => handleOnClick(+1)}>+</button>
      </div>
      <Register />
    </div>

  );
}

export default App;
