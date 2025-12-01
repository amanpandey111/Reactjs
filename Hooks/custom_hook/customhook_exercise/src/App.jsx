import { useState } from 'react'
import './App.css'
import Home from './warmup/Home'
import Home1 from './ex1/Home1'
import Home2 from './ex2/Home2'
import ThemeSwitcher from './tapascript/components/ThemeSwitcher'
import LocalStorage from './tapascript/components/LocalStorage'

function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <Home1/> */}
      {/* <Home2/> */}

      {/* <ThemeSwitcher/> */}
      <LocalStorage />
    </>
  )
}

export default App
