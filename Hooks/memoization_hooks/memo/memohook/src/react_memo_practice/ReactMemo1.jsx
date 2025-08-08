import { memo, useState } from "react"

const ReactMemo1 = () => {
  const[count,setCount] = useState(0)
  return (
    <>
      <h1>Let's Practice React.memo</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <ChildComponent/>
    </>
  )
}

export default ReactMemo1

const ChildComponent = memo(() => {
  console.log("got re-rendered");
})