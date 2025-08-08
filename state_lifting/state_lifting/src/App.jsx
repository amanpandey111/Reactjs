import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState("")

  return (
    <div>
       {/* <p>hello ji</p> */}
       <Card title="card1" name={name} setName={setName}/>
       <Card title="card2" name={name} setName={setName}/>
       {/* <p>I am inside parent component and value of name variable is {name}</p> */}
    </div>
  )
}

export default App
