import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClickCounter/>
      <HoverCounter/>
    </>
  )
}

export default App
