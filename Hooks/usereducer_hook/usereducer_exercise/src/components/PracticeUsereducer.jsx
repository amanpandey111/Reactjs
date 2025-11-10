import { useReducer } from 'react'

function myFunction(fiber, action){
  console.log(fiber.count)
  switch (action) {
    case "add":
      return {
        ...fiber,
        count : fiber.count+1
      }
  
    default:
      return fiber
  }
}

const PracticeUsereducer = () => {
  let initialState = {
    count:0,
    text:""
  }
  const[myReducerValue, dispatch] = useReducer(myFunction, initialState)
  return (
    <div>
      <h1>Let's Practice UseReducer Hook Now</h1>
      <p>Count is {myReducerValue.count}</p>
      <button onClick={()=>dispatch("add")} >once Click</button>
    </div>
  )
}

export default PracticeUsereducer