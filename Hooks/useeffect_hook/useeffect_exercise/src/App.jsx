import './App.css'
import CountdownTimer from './components/CountdownTimer'
import DataFetch from './components/DataFetch'
import InputValidate from './components/InputValidate'
import WindowResize from './components/WindowResize'
import Interval from './exercise1/Interval'
import Home from './exercise2/Home'
import Pokemon from './exercise3/Pokemon'
import Counter from './warmup/Counter'

function App() {

  return (
    <>
      <h1 style={{textAlign:"center", padding:"2rem"}}>Let's Do Exercise On UseEffect Hook</h1>
      {/* <Counter/> */}
      {/* <Interval/> */}
      {/* <Home/> */}
      {/* <Pokemon/> */}

      {/* <DataFetch /> */}
      {/* <CountdownTimer /> */}
      {/* <WindowResize /> */}
      <InputValidate />
    </>
  )
}

export default App
