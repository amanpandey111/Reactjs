import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyAutocomplete from './controlled_autocomplete/MyAutocomplete'
import MyAutoComplete1 from './controlled_autocomplete/MyAutoComplete1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyAutocomplete/> */}
      <MyAutoComplete1/>
    </>
  )
}

export default App
