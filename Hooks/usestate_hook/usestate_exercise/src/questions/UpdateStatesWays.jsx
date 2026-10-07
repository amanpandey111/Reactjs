import { useState } from "react";

const UpdateStatesWays = () => {
  const [count, setCount] = useState(0)
  
  //todo : update using current state value
  const incrementCount = () => {
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
  }

  //todo : update using latest state value
  const incrementCount1 = () => {
    setCount((prev) => prev+1)
    setCount((prev) => prev+1)
    setCount((prev) => prev+1)
  }

  //todo : Here we got the result
  console.log('Here I have my result ', count)
  return (
    <div>
      <h1>Hey Let's Practice a Question</h1>
      <h2>setState(count + 1) : Uses the current value of count from that render.</h2>
      <h2>setState(prev ={'>'} prev + 1) : Uses the current value of count from that render.</h2>
      <div style={{marginTop: 10}}>
        <p>the count is {count}</p>
        <button onClick={incrementCount}>Increment</button>
        {/* <button onClick={incrementCount1}>Increment</button> */}
      </div>
    </div>
  )
}

export default UpdateStatesWays;
