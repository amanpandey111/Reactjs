import React, { useState } from 'react'

const ControlledForm = () => {
    let[name,setName] = useState("")
    let[number,setNumber] = useState(0)

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(name," ",number);
    }

  return (
    <div>
        <h1>Controlled Component</h1>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="">Name :</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <br />
            <label htmlFor="">Mobile No :</label>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm