import './App.css';
// import Result from './Components/Result';
import { useDispatch, useSelector } from 'react-redux';

function App() { 
  const state = useSelector((rootReducer) => rootReducer)
  const dispatch = useDispatch()

  const handlePlus = () => {
    let total = state.counter.number + 1

    dispatch({
      type: "TAMBAH",
      payload: total
    })
  }

  const handleMinus = () => {
    let total = state.counter.number - 1

    dispatch({
      type: "KURANG",
      payload: total,
    })
  }

  // console.log(state)

  // const {isLogin} = useSelector((rootReducer) =>rootReducer.login )

  return (
    <div className="App">
      <div>
        <div className='btn-bg'>
          <div className='button-bg'>
            <button onClick={handleMinus}>-</button>
          </div>
          <div>
            <h1 >{state.counter.number}</h1>
          </div>
          <div className='button-bg'>
            <button onClick={handlePlus}>+</button>
          </div>
        </div>
        <div>
          {(() => {
            if (state.login.isLogin === true) {
              return(
                <div>
                  <h1>Selamat, anda telah login!</h1>
                </div>
              )
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default App;
