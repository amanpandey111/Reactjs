import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HowNotToFetch from './components/HowNotToFetch'
import HowNotFetchPractice from './components/practice/HowNotFetchPractice'
import AsyncAwait from './components/practice/AsyncAwait'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      {/* <HowNotToFetch/> */}

      {/* <HowNotFetchPractice/> */}
      
      <AsyncAwait/>
   </div>
  )
}

export default App
