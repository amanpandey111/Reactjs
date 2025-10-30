import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./counterSlice";
import './employee.css'

const Counter = () => {
  const count = useSelector((state)=>state.MyCounter.value)
  const dispatch = useDispatch()
  return (
    <div className="counterdiv" >
      <h1>Counter Application</h1>
      <p>Count is {count}</p>
      <button
      onClick={()=>dispatch(increment())}
      >increment</button>
      <button
      onClick={()=>dispatch(decrement())}
      >decrement</button>
      <button 
      onClick={()=>dispatch(reset())}
      >Reset</button>
    </div>
  )
}

export default Counter