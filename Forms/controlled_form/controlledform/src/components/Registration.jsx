import React, { use, useState } from 'react'

const Registration = () => {
    const[firstname,setFirstName] = useState("")
    const[lastname,setLastName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[phone,setPhone] = useState("")
    function handleInputChange(e){
        let{name,value} = e.target
        switch(name){
            case "firstname":
                setFirstName(value)
                break
            case 'lastname':
                setLastName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            case 'phone':
                setPhone(value)
                break
            
        }

        // setFirstName(e.target.value)
        // setLastName(e.target.value)
        // setEmail(e.target.value)
        // setPassword(e.target.value)
        // setPhone(e.target.value)
    }
    function handleFormSubmit(e){
        e.preventDefault()
        const formdata = {
            firstname,lastname,email,password,phone
        }
        console.log(formdata);
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="">First Name :</label>
            <input type="text" name='firstname' value={firstname} onChange={handleInputChange}  />
            <br />
            <label htmlFor="">Last name :</label>
            <input type="text" name='lastname' value={lastname} onChange={handleInputChange} />
            <br />
            <label htmlFor="">Email :</label>
            <input type="text" name='email' value={email} onChange={handleInputChange} />
            <br />
            <label htmlFor="">Password :</label>
            <input type="text" name='password' value={password} onChange={handleInputChange} />
            <br />
            <label htmlFor="">Phone Number :</label>
            <input type="text" name='phone' value={phone} onChange={handleInputChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
        <p>Hello My name is {firstname+" "+lastname} My Email Address is {email} and my Phone number is {phone}</p>
    </div>
  )
}

export default Registration