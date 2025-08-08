import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventHandlerOne from './components/EventHandlerOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <EventHandlerOne/>
    </div>
  )
}

export default App
