import { useState } from "react"

const ControllForm = ()=> {
    const[first_name,changeFirstName] = useState("")
    const[last_name,changeLastName] = useState("")
    const[email,changeEmail] = useState("")
    const[password,changePassword] = useState("")
    
    const handleFormSubmit = (e)=> {
        e.preventDefault()
        console.log("form submitted");
        console.log(first_name,last_name,email,password);
    }

    return(
        <div>
            <h1>Hey Let's Practice controlled Form</h1>
            <form onSubmit={handleFormSubmit} >
                <label htmlFor="">First Name : </label>
                <input type="text" placeholder="Enter First Name" value={first_name} onChange={(e)=>changeFirstName(e.target.value)} /> <br /><br />

                <label htmlFor="">Last Name : </label>
                <input type="text" placeholder="Enter Last Name" value={last_name} onChange={(e)=>changeLastName(e.target.value)} /> <br /><br />

                <label htmlFor="">Email : </label>
                <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>changeEmail(e.target.value)} /> <br /><br />

                <label htmlFor="">Password : </label>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>changePassword(e.target.value)} /> <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ControllForm