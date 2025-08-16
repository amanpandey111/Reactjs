import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../store2/counterSlice";

const MyCounter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    console.log(count);
  return (
    <div>
        <p>Count is {count}</p>
        <button onClick={()=>dispatch(increment())} >increment</button>
        <button onClick={()=>dispatch(decrement())} >decrement</button>
        <button onClick={()=>dispatch(reset())} >reset</button>
    </div>
  )
}

export default MyCounter