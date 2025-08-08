import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomCounter from './components/CustomCounter'
import CustomApi from './components/CustomApi'
import PracticeCounter from './practice_custom/PracticeCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CustomApi/> */}
      {/* <CustomCounter/> */}
      <PracticeCounter/>
    </>
  )
}

export default App
