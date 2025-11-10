import { useDispatch, useSelector } from "react-redux"
import { addCount } from "../../redux_store/store"
import { minusCount } from "../redux_store/store"
import { resetCount } from "../../redux_store/store"

const UseRedux = () => {
  const myCount = useSelector((state)=>state.value)
  const dispatch = useDispatch()
  console.log(myCount)
  return (
    <div>
      <h2>Let's Learn The React Redux</h2>
      <p>The Count is {myCount}</p>
      <button onClick={ ()=> dispatch(addCount()) } >Increment</button>
      <button onClick={ ()=>dispatch(minusCount())} >Decrement</button>
      <button onClick={ ()=>dispatch(resetCount())} >Reset</button>
    </div>
  )
}

export default UseRedux