import React, { useEffect, useState } from "react"
import axios from "axios"

function PracticeAxios() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // useEffect(()=>{
  //   axios
  //   .get("https://jsonplaceholder.typicode.com//posts")
  //   .then((res)=>{
  //     setData(res)
  //     setLoading(false)
  //   })
  //   .catch((err)=>{
  //     setError(err.message)
  //     setLoading(false)
  //   })
  // },[])

  useEffect(async () => {
    fetch("https://jsonplaceholder.typicode.com//posts")
      .then((res) => {
        setData(res.json())
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  console.log(data)
  return <div>
    <h1>Let's Practice Axios</h1>
  </div>
}

export default PracticeAxios