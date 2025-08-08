import { useContext } from "react"
import { likecontext } from "./Parent"

const Child = () => {
    const l = useContext(likecontext)
    console.log(l.l);
  return (
    <>
      <h1>Here is the data from parent component : {l.l} </h1>
    </>
  )
}

export default Child