import { useState } from "react"

const PracticeCounter = () => {
    const{count,increment,decrement,reset} = useCount()
    console.log(count);
  return (
    <>
      <h1>Let's Build Custom Counter Application</h1>
      <h1>Count is {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default PracticeCounter

const useCount = () => {
    const[count,setCount] = useState(0)
    const increment = () => {setCount(count+1)}
    const decrement = () => (setCount(count-1))
    const reset = () => {setCount(0)}
    return{count,increment,decrement,reset}
}