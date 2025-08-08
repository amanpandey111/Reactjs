import { useState } from 'react'
import './App.css'
import Index from './components/Index'
import Home from './components/Home'
import About from './components/About'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <Index>
        <Home/>
        <About/>
        <Counter/>
      </Index>
    </>
  )
}

export default App
