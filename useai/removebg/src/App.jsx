import { useState } from 'react'
import './App.css'
import RemoveBg from './components/RemoveBg'
import ImageBackgroundRemover from './components/ImageBackgroundRemover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RemoveBg/> */}
      <ImageBackgroundRemover/>
    </>
  )
}

export default App
