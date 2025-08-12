import { useState } from "react"

const FetchApi1 = () => {
    const[count,setCount] = useState(0) // This line is not used in the current context, but kept for reference.
    const res = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>console.log(data))
  return (
    <div>
        <h1>Simple Fetching Without the interferenc of useEffect</h1>
        <p>Count is {count}</p>
        <button onClick={()=>setCount(count+1)} >increment</button>
    </div>
  )
}

export default FetchApi1