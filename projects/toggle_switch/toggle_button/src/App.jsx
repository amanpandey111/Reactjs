import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ToggleSwitch/>
    </div>
  )
}

export default App
