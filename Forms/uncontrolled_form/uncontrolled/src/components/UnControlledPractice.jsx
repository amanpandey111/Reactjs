import React, { useRef } from 'react'

const UnControlledPractice = () => {
    let nameRef = useRef()
    let emailRef = useRef()
    function handleFormSubmit(e){
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value 
        console.log(`name is ${name} and email is ${email}`);
    }
    return (
        <div>
            <h1>UnControlledPractice</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="">Enter your name : </label>
                <input type="text" ref={nameRef} />
                <br /><br />
                <label>Enter Your Email : </label>
                <input type="email" ref={emailRef} /> <br /><br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default UnControlledPractice