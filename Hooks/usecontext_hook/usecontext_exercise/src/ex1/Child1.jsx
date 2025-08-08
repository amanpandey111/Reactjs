import { useContext } from "react"
import { makeContext } from "./Parent1"

const Child1 = () => {
    const{val,handleState} = useContext(makeContext)
    console.log(val);
  return (
    <>
       <h1 style={{color:`${val}`}}>{val}</h1>
       <button onClick={()=>handleState()}>change color</button>
    </>
  )
}

export default Child1