import React, { useState } from 'react'

const ControlledPractice = () => {
    let[userDetail,setUserDetail]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })
    function handleInputChange(e){
        let{name,value} = e.target
        setUserDetail((prev)=>({...prev,[name]:value}))
    }
    function handleFormSubmit(e){
        e.preventDefault()
        console.log(userDetail);
    }
  return (
    <div>
        <h1>Controlled Practice</h1>
        <form onSubmit={handleFormSubmit}>
            <label>First Name: </label>
            <input type="text" name='firstname' value={userDetail.firstname} onChange={handleInputChange} autoComplete='true' /> <br /><br />
            <label>Last Name: </label>
            <input type="text" name='lastname' value={userDetail.lastname} onChange={handleInputChange} autoComplete='true' /> <br /><br />
            <label>Email: </label>
            <input type="text" name='email' value={userDetail.email} onChange={handleInputChange} autoComplete='true' /> <br /><br />
            <label>Password: </label>
            <input type="text" name='password' value={userDetail.password} onChange={handleInputChange} autoComplete='true' /> <br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ControlledPractice