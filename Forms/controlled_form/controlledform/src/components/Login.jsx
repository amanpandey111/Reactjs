import React, { useState } from 'react'

function Login() {
    let[logindetail,setLoginDetail] = useState({
        username : "",
        password : "",
    })
    function handleInputChange(e){
        let{name,value} = e.target
        setLoginDetail((prev)=>({...prev,[name]:value}))
    }
    function handleFormSubmit(e){
        e.preventDefault()
        console.log(logindetail);
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit} >
            <label>User Name :</label>
            <input type="text" name='username' value={logindetail.username} onChange={handleInputChange} />
            <br />
            <label>Password :</label>
            <input type="text" name='password' value={logindetail.password} onChange={handleInputChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login