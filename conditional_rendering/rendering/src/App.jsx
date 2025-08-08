import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogOut from './components/LogOut';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  //! Using && operator
  return (
    <div>
      <h1>Welcome to react community</h1>
      <div>
        {isLoggedIn && <LogOut/>}
      </div>
    </div>
  )

  //! Using Ternary Operator
  // return (
  //   <div>
  //     {isLoggedIn?<LogOut/>:<LoginBtn/>}
  //   </div>
  // )

  //! First way simple if else 
  // if(isLoggedIn){
  //   return (
  //     <LogOut/>
  //   )
  // }
  // else{
  //   return (
  //     <LoginBtn/>
  //   )
  // }
}

export default App
