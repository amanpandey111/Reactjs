import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './components/Registration'
import RegistrationReact from './components/RegistrationReact'
import Login from './components/Login'
import ContactForm from './components/ContactForm'
import GetCheckBox from './components/GetCheckBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Registration/> */}

      {/* <RegistrationReact/> */}

      {/* <Login/> */}

      {/* <ContactForm/> */}

      <GetCheckBox/>
    </div>
  )
}

export default App
