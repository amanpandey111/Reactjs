import React, { useState } from 'react'

const RegistrationReact = () => {
    const[user,setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        phone:"",
    })
    
    function handleInputChange(e){
        let{name,value} = e.target
        //! setUser((prev)=>console.log(prev))

        setUser((prev)=>({...prev,[name]:value}))

        // setFirstName(e.target.value)
        // setLastName(e.target.value)
        // setEmail(e.target.value)
        // setPassword(e.target.value)
        // setPhone(e.target.value)
    }
    function handleFormSubmit(e){
        e.preventDefault()
        // const formdata = {
        //     firstname,lastname,email,password,phone
        // }
        console.log(user);
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="">First Name :</label>
            <input type="text" name='firstname' value={user.firstname} onChange={handleInputChange}  />
            <br />
            <label htmlFor="">Last name :</label>
            <input type="text" name='lastname' value={user.lastname} onChange={handleInputChange} />
            <br />
            <label htmlFor="">Email :</label>
            <input type="text" name='email' value={user.email} onChange={handleInputChange} />
            <br />
            <label htmlFor="">Password :</label>
            <input type="text" name='password' value={user.password} onChange={handleInputChange} />
            <br />
            <label htmlFor="">Phone Number :</label>
            <input type="text" name='phone' value={user.phone} onChange={handleInputChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
        <p>Hello My name is {user.firstname+" "+user.lastname} My Email Address is {user.email} and my Phone number is {user.phone}</p>
    </div>
  )
}

export default RegistrationReact