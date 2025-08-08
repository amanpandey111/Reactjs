import { useState } from "react"

const ValidateForm = () => {
    let[userDetail,setUserDetail] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        re_password:""       
    })
    const[errors,setError] = useState({})

    const formValidate = () => {
        console.log("Let's Validate the form");
        const error = {}
        if(!userDetail.first_name){
            error.first_name = "first name is required"
        }
        if(!userDetail.email){
            error.email = "email field is required"
        }
        if(!userDetail.password){
            error.password="Password is required"
            // if(userDetail.password < 8){
            //     error.password = "password should be of minimum 8 character"
            // }
        }
        if(userDetail.password.length<8){
            error.password = "password should be of minimum 8 character"
        }

        if(userDetail.password.length>8 && userDetail.re_password.length>8){
            if(userDetail.password!=userDetail.re_password){
                error.confirmpass = "password does not match"
            }
        }

        return error
    }

    const handleInputChange = (e) => {
        let {name,value} = e.target
        setUserDetail((prev)=>({...prev,[name]:value}))
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        let isValid = formValidate()
        setError(isValid)
        console.log(userDetail);
    }
    console.log(errors);
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="">First Name :</label>
                <input type="text" name="first_name" value={userDetail.first_name} onChange={handleInputChange} />
                {errors.first_name && <p>fill the first name</p>}
            </div>
            <div>
                <label htmlFor="">Last Name :</label>
                <input type="text" name="last_name" value={userDetail.last_name} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="">Email :</label>
                <input type="email" name="email" value={userDetail.email} onChange={handleInputChange} />
                {errors.email && <p>Email is mandatory</p>}
            </div>
            <div>
                <label htmlFor="">Password :</label>
                <input type="password" name="password" value={userDetail.password} onChange={handleInputChange} />
                {errors.password && <p>{errors.password}</p> }
            </div>
            <div>
                <label htmlFor="">Re-enter Password :</label>
                <input type="password" name="re_password" value={userDetail.re_password} onChange={handleInputChange} />
                {errors.confirmpass && <p>{errors.confirmpass}</p> }
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ValidateForm