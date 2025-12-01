import { useState } from "react"
import { useLocalstorage } from "../hooks/useLocalstorage"

const LocalStorage = () => {
  const[email, setEmail] = useState("")
  const[data, setData] = useLocalstorage()
  
  function handleSubmit(e){
    e.preventDefault()
    setData({"email": email})
  }

  return (
    <div>
      <h1>I have builded a custom hook to store the value in local storage</h1>
      <form onSubmit={handleSubmit} >
        <input type="email" placeholder="Enter Your Email to store in localstorage"
        name="email"
        onChange={(e)=>setEmail(e.target.value)}
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default LocalStorage