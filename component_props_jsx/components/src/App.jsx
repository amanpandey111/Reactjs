import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import pic1 from "./assets/pic1.webp"
import shivam from './assets/shivam.webp'
import anand from './assets/anand.png'

function App() {
  const [count, setCount] = useState(0)
  function dynamicFunc(){
    return "aman pandye"
  }

  return (
    <div className='container'>
      <UserCard name="Aman Pandey" style={{"border-radius":"10px"}} desc="Description one" image={pic1}/>
      <UserCard name="Shivam Pandey" style={{"border-radius":"10px"}} desc="Description two" image={shivam}/>
      <UserCard name="Anand Pandey" style={{"border-radius":"10px"}} desc="Description three" image={anand}/>
      <h1>Got Dynamc value from function : {dynamicFunc()}</h1>
      {/* <h1>Hello world</h1> */}
    </div>
  )
}

export default App

