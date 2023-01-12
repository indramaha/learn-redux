import './App.css';
import { useState } from 'react';
import Result from './Components/Result';

function App() {
  const [num, setNum] = useState(0)

  const handlePlus = () => {
    setNum(num+1)
  }

  const handleMinus =() => {
    setNum(num -1)
  }

  const handleColorMinus = num < 0

  return (
    <div className="App">
      <div>
        <div className='btn-bg'>
          <div className='button-bg'>
            <button onClick={handleMinus}>-</button>
          </div>
          <div>
            <h1 className={handleColorMinus ? "red-result" : "normal"}>{num}</h1>
          </div>
          <div className='button-bg'>
            <button onClick={handlePlus}>+</button>
          </div>
        </div>
        <div>
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
