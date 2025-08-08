import { useSelector,useDispatch } from "react-redux"
import { increment,decrement,reset } from "../store/slices/UserSlice"
import { removeAllUser } from "../store/actions"

const CounterApp = () => {
    const count = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
  return (
    <section>
        <h1>Counter Application</h1>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())} >Increment</button>
        <button onClick={()=>dispatch(decrement())} >Decrement</button>
        <button onClick={()=>dispatch(reset())} >Reset</button> <br /><br />
        <button onClick={()=>dispatch(removeAllUser())}>remove all users</button>
    </section>
  )
}
    
export default CounterApp