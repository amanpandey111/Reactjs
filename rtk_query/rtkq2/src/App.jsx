import { useState } from 'react'
import './App.css'
import MainTodos from './components/MainTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainTodos/>
    </>
  )
}

export default App
