import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addCount, decreaseCount, resetCount } from "../redux_store/store"

const CounterApp = () => {
    const count = useSelector((state)=>state.value)
    const dispatch = useDispatch()
    console.log(count);
  return (
    <div>
        <p>count is {count}</p>
        <button onClick={()=>dispatch(addCount())} >increment</button>
        <button onClick={()=>dispatch(decreaseCount())} >decrement</button>
        <button onClick={()=>dispatch(resetCount())} >reset</button>
    </div>
  )
}

export default CounterApp