import React, { useRef } from 'react'

const UseRefThapa = () => {
    let username = useRef()
    let password = useRef()
    function handleFormSubmit(e){
        e.preventDefault()
        console.log(username.current.value,password.current.value);
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="">Username : </label>
            <input type="text" ref={username}
              placeholder='enter username' />
            <br /><br />
            <label>Password : </label>
            <input type="text" ref={password}
              placeholder='enter password' />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UseRefThapa