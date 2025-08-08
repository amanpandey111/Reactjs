import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLocalData, isUserExists, toggleSignIn, toggleSignUp } from "../../store"
import "./ui.css"

const SignUp = () => {
    //! creating a state for the form
    const dispatch = useDispatch()
    const isUser = useSelector((state)=>state.userexists)
    const[userData,setUserData] = useState({
        "firstname":"",
        "lastname":"",
        "email":"",
        "password":"",
        "cpassword":""
    })
    const[error,setError] = useState({})
    const [users, setUser] = useState([]);
    const [submitted, setSubmitted] = useState(false); 

    //todo Let's validate the Form
    const formValidation = () => {
        let error = {valid:true}
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
        let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;
        if(!userData.firstname){
            error.firstname="First Name is Mandatory"
            error.valid=false
        }
        if(!userData.email){
            error.email="email is required"
            error.valid=false
        }else if(userData.email){
            if(!regex.test(userData.email)){
                error.email="email format is wrong"
                error.valid=false
            }
        }
        if(!userData.password){
            error.password = "Password is Required"
            error.valid = false
        }
        else if(userData.password) {
            if(userData.password.length < 8) {
                error.password = "length of password should be minimum 8"
                error.valid = false
            }
            else if(!regexp.test(userData.password)) {
                error.password = "password should contain atleast one uppercase, onelowercase, one digit and one special character"
                error.valid = false
            }
        }
        if(!userData.cpassword) {
            error.cpassword = "Re-enter the password"
            error.valid = false
        }
        else if(userData.cpassword){
            if(userData.cpassword==userData.password){
                
            }else{
                error.cpassword = "password didn't matched"
                error.valid = false
            }
        }
        return error

    }

    //! handling input change and form submit
    const handleInputChange = (e)=> {
        const {name,value} = e.target
        setUserData((prev)=>({...prev,[name]:value}))
    }
    const handleFormSubmit = (e)=> {
        e.preventDefault()
        let error = formValidation()
        setError(error)
        console.log(error);
        if(error.valid){
            setUser((prev)=>[...prev,userData])
            setSubmitted(true)
            console.log(error);
        }else{
            setSubmitted(false)
        }
        console.log(userData);
        
    }
    

    useEffect(()=>{
        if(submitted){
            console.log("let's store data in local stoprage");
            let dd = JSON.parse(localStorage.getItem("userdata"))
            console.log(dd);
            if(dd==null){
                console.log("initial state of storing data");
                console.log(users);
                dispatch(addLocalData(users))
                localStorage.setItem("userdata",JSON.stringify(users))
            }else if(dd.length==1){
                console.log("Let's write the logic for length one");
                console.log(users);
                let user = users.at(-1)
                console.log(user);
                let local = JSON.parse(localStorage.getItem("userdata"))
                console.log(local[0].email);
                console.log(user.email);
                if(local[0].email==user.email){
                    console.log("email matches");
                    dispatch(isUserExists(true))                           //todo : telling user exists and we cannot add data
                    // dispatch(toggleSignUp(false))
                    // dispatch(toggleSignIn(true))
                }else{
                    dispatch(isUserExists(false))                          //todo : telling user does not exists and we can add data
                    console.log("not matches");
                    local.push(user)
                    console.log(local);
                    dispatch(addLocalData(local))                            //todo : here we are calling addLocalData so we can store the entire data in our store
                    localStorage.setItem("userdata",JSON.stringify(local))
                    dispatch(toggleSignUp(false))                     //todo : If user sign up direct to login page
                    dispatch(toggleSignIn("toggle"))                  //todo : enabling login page
                }
            }else if(dd.length>1){
                let user = users.at(-1)
                let local = JSON.parse(localStorage.getItem("userdata"))
                let b = local.some((curEle)=>curEle.email==user.email)
                console.log(b);
                if(b){
                    dispatch(isUserExists(true))                           //todo : telling user exists and we cannot add data
                }
                else{
                    dispatch(isUserExists(false))                          //todo : telling user doesn't exists and we can add data
                    local.push(user)
                    dispatch(addLocalData(local))                                 //todo : here we are calling addLocalData so we can store the entire data in our store
                    localStorage.setItem("userdata",JSON.stringify(local))
                    dispatch(toggleSignUp(false))
                    dispatch(toggleSignIn("toggle"))
                } 
                dispatch(addLocalData(local))                                 //todo : here we are calling addLocalData so we can store the entire data in our store
                localStorage.setItem("userdata",JSON.stringify(local))
            }
        }
    },[users])

    // localStorage.removeItem("userdata")  
  return (
    <section className="signup-form-section" onClick={(e)=>e.stopPropagation()}>
        <div className="ss-div1">
            <h3>Sign Up</h3>
            <p>Please Fill the Form To create an account</p>
        </div>
        <hr />
        <form onSubmit={handleFormSubmit} className="ss-f1">
            <div className="form-div1 flex-div">
                <input
                 type="text"
                 placeholder='First Name' 
                 name="firstname"
                 value={userData.firstname}
                 onChange={handleInputChange}
                 />
                 <input
                 type="text" 
                 placeholder='Last Name' 
                 name="lastname"
                 value={userData.lastname}
                 onChange={handleInputChange}
                 />
            </div>
            
            {error.firstname && <p style={{margin:"0px"}} className="common-invalid-input">{error.firstname}</p>}
            <div className="flex-div">
                <input type="Email"
                 placeholder='Enter email'
                 name="email"
                 value={userData.email}
                 onChange={handleInputChange}
                 />
                 {error.email && <p className="common-invalid-input" >{error.email}</p>}
            </div>
            <div className="flex-div">
                <input type="Password"
                 placeholder='Enter Password' 
                 name="password"
                 value={userData.password}
                 onChange={handleInputChange}
                 />
                 {error.password && <p className="common-invalid-input">{error.password}</p>}
            </div>
            <div className="flex-div">
                <input type="password"
                 placeholder='Re-enter Password' 
                 name="cpassword"
                 value={userData.cpassword}
                 onChange={handleInputChange}
                 />
                 {error.cpassword && <p className="common-invalid-input">{error.cpassword}</p>}
                 {/* {isUser ? <p>User Already Exists</p> : "" } */}
                 {!error.firstname && !error.email && !error.password && !error.cpassword && isUser && <p style={{color:"green", fontSize:"0.9rem"}}>User Already Exists</p> }
            </div>
            <div>
                <button type="submit" className="btn btn-primary" >Sign up</button>
                <p>Already have a account ? <span onClick={(e)=>{
                    e.stopPropagation()
                    dispatch(toggleSignIn("toggle"))
                    dispatch(toggleSignUp(false))
                }} >Sign in</span></p>
            </div>
        </form>
    </section>
  )
}

export default SignUp