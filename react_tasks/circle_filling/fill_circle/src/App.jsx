import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CircleFill from './components/CircleFill'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CircleFill/>
    </div>
  )
}

export default App
