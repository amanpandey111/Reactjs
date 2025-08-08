import { useEffect, useState } from "react"
import Section from "./Section"

const Home = () => {
    const[count,setCount] = useState(1)
    useEffect(()=>{
        console.log("Home has re-rendered");
    })
  return (
    <section>
        <h1>Visits : {count}</h1>
        <button onClick={()=>setCount(count+1)} >+</button>
        <Section count={count} />
    </section>
  )
}

export default Home