import { useEffect, useState } from "react"

const FetchApi2 = () => {
    const[count, setCount] = useState(0)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data)=>console.log(data))
    },[])
  return (
    <div>
        <h1>Fetch API With Interference of useEffect</h1>
        <p>Count is {count}</p>
        <button onClick={()=>setCount(count+1)} >Increment</button>
    </div>
  )
}

export default FetchApi2