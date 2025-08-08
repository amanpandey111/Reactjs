import { useState } from 'react'
import './App.css'
import ChildOne from './components/ChildOne'
import Box from './components/Box'

function App() {
  const[count,setCount] = useState(0)

  return (
    <>
       {/* <ChildOne>
          <p>Count is {count}</p>
          <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
          <h1>I am Inside the children this.props.first</h1>
       </ChildOne> */}
       <Box title="Welcome Box" name="shivam pandey">
        <p>This content is inside the box.</p>
      </Box>

      <Box title="Another Box">
        <ul>
          <li>Item One</li>
          <li>Item Two</li>
        </ul>
      </Box>
    </>
  )
}

export default App