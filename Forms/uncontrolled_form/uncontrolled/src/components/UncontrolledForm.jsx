import React from 'react'

const UncontrolledForm = () => {
    function handleUncontrollForm(e){
        e.preventDefault()
        let name = document.getElementById("nameInput")
        console.log(name.value);
    }
  return (
    <div>
        <form onSubmit={handleUncontrollForm} >
            <label>Name :</label>
            <input type="text" id='nameInput' />
            <br />
            <button type="submit">Submit form</button>
        </form>
    </div>
  )
}

export default UncontrolledForm