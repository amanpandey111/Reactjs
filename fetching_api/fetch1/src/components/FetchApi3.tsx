import { useEffect, useState } from "react";

const FetchApi3 = () => {
    const [count,setCount] = useState(0)
    const fetchdata = async()=>{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await res.json()
        console.log(data);
    }
    useEffect(()=>{
        fetchdata();
    },[])
  return (
    <div>
        <h1>Fetching APi with interference of async await and useEffect</h1>
        <p>Count is {count}</p>
        <button onClick={()=>setCount(count+1)} >Increment</button>
    </div>
  )
  
}

export default FetchApi3