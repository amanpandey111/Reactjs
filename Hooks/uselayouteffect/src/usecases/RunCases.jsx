import { useEffect, useLayoutEffect } from "react"

const RunCases = () => {
  useEffect(()=>{
    console.log("First Effect");
  },[])
  useLayoutEffect(()=>{
    console.log("Second Effect");
  },[])
  useEffect(()=>{
    console.log("Third Effect");
  },[])
  return (
    <div>RunCases</div>
  )
}

export default RunCases