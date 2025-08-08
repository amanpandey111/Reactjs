import React, { useEffect, useState } from 'react'

const Home = () => {
    useRerenderLogger()
    const[count,setCount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)} >Go Up</button>
    </>
  )
}

export default Home

const useRerenderLogger = () => {
  useEffect(()=>{
    console.log("component has mounted");
  },[])
  useEffect(()=>{
    console.log("component will re-render");
  })
}
