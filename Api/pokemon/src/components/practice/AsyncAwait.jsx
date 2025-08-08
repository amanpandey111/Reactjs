import { useEffect, useState } from "react"

const AsyncAwait = () => {
    //! Here we just simple fetch but did,t go for loading and error handling
    const[apiData,setApiData] = useState([])
    const fetchApiData = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        console.log(data);
        setApiData(data)
        // console.log(apiData);
    }
    console.log(apiData);
    useEffect(()=>{
        fetchApiData()
    },[])
    return(
        <h1>Welcome Let's Fetch Data using Async Await Method</h1>
    )

    //todo Here we will do both async 
}
export default AsyncAwait