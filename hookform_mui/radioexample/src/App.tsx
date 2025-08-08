import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RadioFormExample from './components/RadioFormExample'
import RadioFormExample1 from './components/RadioFormExample1'
// import CheckboxFormExample from './components/CheckboxFormExample'
import CheckboxFormExample1 from './components/CheckboxFormExample1'
import CheckboxFormExample2 from './components/CheckboxFormExample2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RadioFormExample/> */}
      {/* <RadioFormExample1/> */}

      {/* <CheckboxFormExample/> */}
      {/* <CheckboxFormExample1/> */}
      <CheckboxFormExample2/>
    </>
  )
}

export default App
