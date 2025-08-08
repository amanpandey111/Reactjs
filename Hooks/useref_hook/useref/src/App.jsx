import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRef from './components/UseRef'
import StopWatch from './components/StopWatch'
import UseRefThapa from './components/thapa_component/UseRefThapa'
import ForwardRef from './components/thapa_component/ForwardRef'
import Practice from './practice_ref/Practice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <UseRef/> */}
      {/* <StopWatch/> */}

      {/* <UseRefThapa/> */}

      <ForwardRef/>
      {/* <Practice/> */}
    </div>
  )
}

export default App
