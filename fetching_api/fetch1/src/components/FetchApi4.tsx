import axios from "axios"
import { useEffect } from "react";

const FetchApi4 = () => {
    const fetchaxios = async()=>{
        const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(data.data);
    }
    useEffect(()=>{
        fetchaxios();
    },[])

  return (
    <div>
        <h1>Fetching Data using Axios</h1>
    </div>
  )
}

export default FetchApi4