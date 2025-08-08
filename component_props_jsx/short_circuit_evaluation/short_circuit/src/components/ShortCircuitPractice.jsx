import React, { useState } from 'react'

const ShortCircuitPractice = () => {
    const[isLoggedIn,setIsLoggedIn] = useState(true)
    const[user,setUser] = useState("")
  return (
    <div>
        <h2>Welcome to short circuit evaluation</h2>
        {isLoggedIn && <p>You are logged in</p>}
        <p>{user?`hello ${user}`:"please Log in"}</p>
        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle Login state</button>
        <button onClick={()=>setUser("aman pandey")}>set user</button>
        <button onClick={()=>setUser("")} >clear user</button>
    </div>
  )
}

export default ShortCircuitPractice