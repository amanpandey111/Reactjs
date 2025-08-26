import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HandleForm from './components/HandleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HandleForm/>
    </>
  )
}

export default App
