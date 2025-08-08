import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardDetail from './components/CardDetail'

//! Importing the files for my components
import nature from './assets/nature.jpg'

function App() {
  const [count, setCount] = useState(0)
  let name = "Into the wild"
  let rating = 4.9
  let summary = "Based on a true story, the film follows Christopher McCandless, a young man who leaves behind his family, money, and possessions to explore the American wilderness. His journey leads him to Alaska, where he seeks freedom and meaning in a life close to nature—but ultimately faces the harsh realities of survival."
  let genre  = "🌍 Adventure"
  let age = 16

  return (
   <div>
      <CardDetail img={nature} name={name} rating={rating} summary={summary} genre={genre} age={age}/>
      <CardDetail img={nature} name={name} rating={rating} summary={summary} genre={genre} age={age}/>
      <CardDetail img={nature} name={name} rating={rating} summary={summary} genre={genre} age={age}/>
      <CardDetail img={nature} name={name} rating={rating} summary={summary} genre={genre} age={age}/>
   </div>
  )
}

export default App
