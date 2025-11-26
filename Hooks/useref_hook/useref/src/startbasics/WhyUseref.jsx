import { useEffect, useRef, useState } from "react"

const WhyUseref = () => {
  const[count, setCount] = useState(0);
  const coutref = useRef(0)

  useEffect(()=>{
    coutref.current += 1
    console.log(`the value of countref is $${coutref.current}`)
  })
  return (
    <div>
      <p>The Count is {count}</p>
      <button onClick={()=>setCount(count+1)} >increment</button>
    </div>
  )
}

export default WhyUseref