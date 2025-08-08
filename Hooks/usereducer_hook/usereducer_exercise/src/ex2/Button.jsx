import { useReducer } from "react"

const Button = ({text,dispatch}) => {
  return (
    <>
       <button onClick={dispatch}>{text}</button>
    </>
  )
}

export default Button