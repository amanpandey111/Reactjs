    import React, { useState } from 'react'

const ContactForm = () => {
    let[contactdetial,setContactDetail] = useState({
        username:"",
        password:""
    })
    function handleInputChange(e){
        let{name,value} = e.target
        setContactDetail((prev)=>({...prev,[name]:value}))
    }
    function handleFormSubmit(e){
        e.preventDefault()
        console.log(contactdetial);
    }
  return (
    <div>
        <h1>Contact Form</h1>
        <form onSubmit={handleFormSubmit} >
            <label htmlFor="username">Username :</label>
            <input type="text" name='username' value={contactdetial.username} autoComplete='off' onChange={handleInputChange} />
            <br />
            <label htmlFor="password">Password :</label>
            <input type="text" name='password' value={contactdetial.password} autoComplete='off' onChange={handleInputChange} />
            <br />
            <label htmlFor="message">Message</label>
            <textarea name="message" required autoComplete='off' rows={6} onChange={handleInputChange}></textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm