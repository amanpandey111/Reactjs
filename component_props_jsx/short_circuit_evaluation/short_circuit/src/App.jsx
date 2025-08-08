import { useState } from 'react'
import './App.css'
import ShortCircuit from './components/ShortCircuit'
import ShortCircuitPractice from './components/ShortCircuitPractice'
import Assignment from './components/Assignment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ShortCircuit/>

      <ShortCircuitPractice/>

      <Assignment/>
    </div>
  )
}

export default App
