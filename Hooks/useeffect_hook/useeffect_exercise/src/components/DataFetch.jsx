import { useEffect, useState } from 'react'

function DataFetch(){
  const[fetchData, setFectData] = useState([])

  async function fetchDataNow(){
    let res = await fetch("https://fakestoreapi.com/products")
    res = await res.json()
    setFectData(res)
  }

  useEffect(()=>{
    fetchDataNow()
  },[])

  console.log(fetchData)
  return(
    <div>
      <h1>Fetching Data Using useEffect</h1>
    </div>
  )
}

export default DataFetch