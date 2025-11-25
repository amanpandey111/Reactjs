import { useEffect, useState } from "react"

const Fetching1 = () => {
  const[apiData, setApiData] = useState([])

  async function fetchMyApi(){
    let data = await fetch("https://jsonplaceholder.typicode.com/todos")
    let res = await data.json()
    setApiData(res)
  }

  useEffect(()=>{
    fetchMyApi()
  },[])

  console.log(apiData);
  return (
    <div>Fetching1</div>
  )
}

export default Fetching1