import { useDispatch, useSelector } from "react-redux"
import { decrementCount, incrementCount, inputChange } from "../store";

const Counter = () => {
    const count = useSelector((state)=>state.taskReducer.count)
    // const count = useSelector((state)=>state[0].count)
    const inputText = useSelector((state)=>state.taskReducerInput.inputText)

    const dispatch = useDispatch()
  return (
    <>
      <p>Perform count by </p> <input type="number" value={inputText} onChange={(e)=>dispatch(inputChange(e.target.value))} />
      <button onClick={()=>dispatch(incrementCount(Number(inputText)))}>increment by {inputText}</button>
      <button onClick={()=>dispatch(decrementCount(Number(inputText)))}>decrement by {inputText}</button>
      <p>{count}</p>
      <button onClick={()=>dispatch(incrementCount())}>Increment</button>
      <button onClick={()=>dispatch(decrementCount())} >Decrement</button>
    </>
  )
}

export default Counter