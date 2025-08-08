import { useState } from "react"

const ControllFormThree = ()=> {
    const[user,setUser] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    })
    
    const handleFormSubmit = (e)=> {
        e.preventDefault()
        console.log("form submitted");
        console.log(first_name,last_name,email,password);
    }

    const handleInputChange = (e)=> {
        // changeFirstName(e.target.value);
        // changeLastName(e.target.value)
        // changeEmail(e.target.value)
        // changePassword(e.target.value)
        // console.log(e.target);

        // const{name,value} = e.target
        // switch (name) {
        //     case "first_name":
        //         changeFirstName(value)
        //         break
        //     case "last_name":
        //         changeLastName(value)
        //         break
        //     case "email":
        //         changeEmail(value)
        //         break
        //     case "password":
        //         changePassword(value)
        //         break
        //     default:
        //         break;
        // }

        const{name,value} = e.target
        setUser((prev)=>({...prev,[name]:value}))
    }

    return(
        <div>
            <h1>Hey Let's Practice Third way of controlled Form</h1>
            <form onSubmit={handleFormSubmit} >
                <label htmlFor="">First Name : </label>
                <input type="text" name="first_name" placeholder="Enter First Name" value={user.first_name} onChange={handleInputChange} /> <br /><br />

                <label htmlFor="">Last Name : </label>
                <input type="text" name="last_name" placeholder="Enter Last Name" value={user.last_name} onChange={handleInputChange} /> <br /><br />

                <label htmlFor="">Email : </label>
                <input type="email" name="email" placeholder="Enter Email" value={user.email} onChange={handleInputChange} /> <br /><br />

                <label htmlFor="">Password : </label>
                <input type="password" name="password" placeholder="Enter Password" value={user.password} onChange={handleInputChange} /> <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ControllFormThree