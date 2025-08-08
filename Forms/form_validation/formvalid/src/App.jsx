import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormValidation from './components/FormValidation'
import ValidateForm from './components/ValidateForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Let's Validate Form</h1>
       <FormValidation/>
       {/* <ValidateForm/> */}
    </>
  )
}

export default App
