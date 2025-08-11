import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import Parent1 from './practice_11_8_25/Parent1'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    setCount(count+1)
  }
  function handleClick1(){
    setCount(count-1)
  }
  return (
    //! passing prop as a children 
    // <div>
    //   <Card name="Shashank singh"> 
    //     <h1>ReactJs</h1>
    //     <p>Welcome to Reactjs course</p>
    //     <p>We will complete soon</p>
    //   </Card>
    // </div>

    //! passing prop as a function
    // <div>
    //   <Button incrementCount={handleClick} decrement={handleClick1} text="click me">
    //     <h1>{count}</h1>
    //   </Button>
    // </div>

    <>
      {/* //! Familiar Prop  */}
      {/* <Parent1/> */}

      {/* //! Passing Prop to a Child Component */}
      <Parent1/>
    </>
  )
}

export default App
