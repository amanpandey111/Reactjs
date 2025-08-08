import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dynamic from './usefieldarray/Dynamic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dynamic/>
    </>
  )
}

export default App
