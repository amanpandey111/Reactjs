import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  const[count, setCount] = useOutletContext()
  console.log(count)
  return (
    <div>
      <h1>This is Home And Here we have used UseOutletContex</h1>
      <ul>
        <li>This is used to get the prop from parent compoent of router</li>
        <li>Ex:Here I have taken a count, setCount in parent and passed in a prop</li>
        <li>Then in child with the help of useOutletContext I grab the props</li>
      </ul>
      <div>
        <p>The Count is {count}</p>
        <button onClick={()=>setCount((prev)=>prev+1)} >Increment</button>
      </div>
    </div>
  )
}

export default Home