import { useState } from "react"

const CustomCounter = ()=> {
  const {count,incrementCount,decrementCount} = useCounter()
  return(
    <div>
      <h1>Let's Build custom counter application</h1>
      <h2>Count is : {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}
export default CustomCounter

const useCounter = () => {
  const[count,setCount] = useState(0);
  const incrementCount = () => setCount(count+1)
  const decrementCount = () => setCount(count-1)
  return{count,incrementCount,decrementCount}
}