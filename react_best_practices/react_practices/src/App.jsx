import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollTracker from './components/namedfunction/ScrollTracker'
import TimerWithoutCleanup from './components/namedfunction/TimerWithoutCleanup'
import TimerWithCleanup from './components/namedfunction/TimerWithCleanup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ScrollTracker/> */}
      {/* <TimerWithoutCleanup/> */}
      <TimerWithCleanup/>
    </>
  )
}

export default App
