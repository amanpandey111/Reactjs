import React, { useState } from 'react'

const ShortCircuit = () => {
    const[isLoggedIn,setIsLoggedIn] = useState(true)
    const[user,setUser] = useState("")
  return (
    <div>
        <section className="container">
            <h1>Welcome to short circuit evaluation</h1>
            {/* <p>{isLoggedIn?"You are logged in":"Please Log in"}</p> */}

            {/* //! AND operation  */}
            { isLoggedIn && <p>You are logged in</p>}

            {user?`Hello ${user}`:"please Log in"}
            <div className="grid-three-cols">
                <button onClick={()=>setIsLoggedIn(!isLoggedIn)} >Toggle Login state</button>
                <button onClick={()=>setUser("aman pandey")}>Set User</button>
                <button onClick={()=>setUser("")}>Clear User</button>
            </div>
        </section>
    </div>
  )
}

export default ShortCircuit