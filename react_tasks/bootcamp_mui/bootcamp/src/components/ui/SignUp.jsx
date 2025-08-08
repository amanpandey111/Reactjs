import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLocalData, isUserExists, toggleSignIn, toggleSignUp } from "../../store"
import "./ui.css"
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from "@mui/material/InputAdornment";

const SignUp = () => {
    const[displayPass,setDisplayPass] = useState(true)
    const[displayPass1,setDisplayPass1] = useState(true)
    // creating a state for the form
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

    console.log(error);
    // Let's validate the Form
    const formValidation = (name,value,error) => {
        console.log(error);
        let error1 = {valid:true,...error}
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
        let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;
        console.log(name);
        if(name=="firstname"){
            if(value.length==0){
                error1.firstname="First Name is Mandatory"
                error1.valid=false
            }
            else{
                delete error1.firstname
                error1.valid=true
            }
        }
        if(name=="email"){
            console.log(error.firstname);
            if(value.length===0){
                error1.email="email is required1"
                error1.valid=false
            }
            else if(!regex.test(value)){
                error1.email="email format is wrong"
                error1.valid=false
            }
            else{
                delete error1.email
                error1.valid=true
            }  
        }
        if(name=="password"){
            console.log(value);
            console.log("let's edit password");
            if(value.length<1){
                error1.password = "Password is Mandatory"
                error1.valid = false
            }else if(value.length<8){
                error1.password = "length of password should be minimm 8"
                error1.valid = false
            }else if(!regexp.test(value)){
                error1.password = "password should contain atleast one uppercase, onelowercase, one digit and one special character"
                error1.valid = false
            }else{
                delete error1.password
                error1.valid = true
            }
        }
        if(name=="cpassword"){
            console.log("let's validate cpassword");
            if(value.length==0){
                error1.cpassword = "Enter your password Again"
            }else if(value!==userData.password){
                error1.cpassword = "Password Didn't match"
            }else{
               delete error1.cpassword
            }
        }
        if(name==undefined){
            if(!userData.firstname){
                console.log("hello");
                error1.firstname = "First Name is Mandatory1"
                error1.valid=false
            }
            if(!userData.email){
                error1.email="email is required"
                error1.valid=false
            }else if(userData.email){
                if(!regex.test(userData.email)){
                    error1.email="email format is wrong"
                    error1.valid=false
                }
            }

            if(!userData.password){
                error1.password = "Password is Required"
                error1.valid = false
            }
            else if(userData.password) {
                if(userData.password.length < 8) {
                    error1.password = "length of password should be minimum 8"
                    error1.valid = false
                }
                else if(!regexp.test(userData.password)) {
                    error1.password = "password should contain atleast one uppercase, onelowercase, one digit and one special character"
                    error1.valid = false
                }
            }
            if(!userData.cpassword) {
                error1.cpassword = "Re-enter the password"
                error1.valid = false
            }
            else if(userData.cpassword){
                if(userData.cpassword==userData.password){
                    
                }else{
                    error1.cpassword = "password didn't matched"
                    error1.valid = false
                }
            }
        }

        return error1

    }

    // handling input change and form submit
    const handleInputChange = (e)=> {
        const {name,value} = e.target
        setUserData((prev)=>({...prev,[name]:value}))
        console.log("hey");
        let error2 = formValidation(name,value,error)
        console.log(error2);
        setError(error2)
    }
    const handleFormSubmit = (e)=> {
        e.preventDefault()
        console.log("hy");
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
    // console.log("hello world");
  return (
    <Box className="signup-form-section" onClick={(e)=>e.stopPropagation()}
    sx={{position:"absolute",top:"50%",right:"50%",transform:"translate(50%,35%)",bgcolor:"white",fontFamily:"'Times New Roman', Times, serif",width:"30rem",borderRadius:"2rem"}}
    >
        <Stack sx={{m:"1.3rem 2.8rem"}} className="ss-div1">
            <h3>Sign Up</h3>
            <p>Please Fill the Form To create an account</p>
        </Stack>
        <hr />
        <Box component="form" onSubmit={handleFormSubmit} className="ss-f1"
        sx={{m:"1.3rem 2.8rem"}}
        >
            <Stack direction="row" spacing={3} className="form-div1 flex-div">
                {/* <input
                 type="text"
                 placeholder='First Name' 
                 name="firstname"
                 value={userData.firstname}
                 onChange={handleInputChange}
                 /> */}
                 <TextField 
                    size="small"
                    variant="filled"
                    type="text" 
                    name="firstname"
                    value={userData.firstname}
                    onChange={handleInputChange}
                    // onChange={handleFormSubmit}
                    placeholder='First Name'
                    autoComplete="off"
                    InputProps={{
                        disableUnderline:"true"
                    }}
                    sx={{
                        m:"auto",width:"100%",
                        '& .MuiInputBase-input':{
                            fontFamily:"sans-serif",
                            height:"2rem",
                            pt:"1rem"
                        }
                    }}
                 />
                 {/* <input
                 type="text" 
                 placeholder='Last Name' 
                 name="lastname"
                 value={userData.lastname}
                 onChange={handleInputChange}
                 /> */}
                 <TextField 
                    size="small"
                    variant="filled"
                    type="text" 
                    name="lastname"
                    value={userData.lastname}
                    onChange={handleInputChange}
                    placeholder='Last Name'
                    autoComplete="off"
                    InputProps={{
                        disableUnderline:"true"
                    }}
                    sx={{
                        m:"auto",width:"100%",
                        '& .MuiInputBase-input':{
                            fontFamily:"sans-serif",
                            height:"2rem",
                            pt:"1rem"
                        }
                    }}
                 />
            </Stack>
            
            {error.firstname && <Typography variant="body1" style={{margin:"0px"}} className="common-invalid-input"
            sx={{fontSize:"small",color:"red"}}
            >{error.firstname}</Typography>}
            <Box sx={{mt:"0.8rem",height:"minimum"}} className="flex-div">
                {/* <input type="Email"
                 placeholder='Enter email'
                 name="email"
                 value={userData.email}
                 onChange={handleInputChange}
                 /> */}
                 <TextField 
                    size="small"
                    variant="filled"
                    type="email" 
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    // onChange={handleFormSubmit}
                    placeholder='Enter email'
                    autoComplete="off"
                    InputProps={{
                        
                        disableUnderline:"true"
                    }}
                    sx={{
                        width:"100%",m:"auto",
                        '& .MuiInputBase-input':{
                            fontFamily:"sans-serif",
                            height:"2rem",
                            pt:"1rem"
                        }
                    }}
                 />
                 {error.email && <Typography variant="body1" style={{margin:"0px"}} className="common-invalid-input"
            sx={{fontSize:"small",color:"red"}}>{error.email}</Typography>}
            </Box>
            <Box sx={{mt:"0.8rem",height:"minimum"}} className="flex-div">
                 <TextField 
                    size="small"
                    variant="filled"
                    type={ displayPass ? "password" : "text" } 
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    // onChange={handleFormSubmit}
                    placeholder='Enter Password'
                    autoComplete="off"
                    InputProps={{
                        disableUnderline:"true",
                        endAdornment:(
                            <InputAdornment position="end" sx={{
                                cursor:"pointer"
                            }} >
                                {displayPass ? <VisibilityOffIcon onClick={()=>setDisplayPass(prev=>!prev)} /> : <VisibilityIcon onClick={()=>setDisplayPass(prev=>!prev)} /> }
                            </InputAdornment>
                        )
                    }}
                    sx={{
                        m:"auto",width:"100%",
                        '& .MuiInputBase-input':{
                            fontFamily:"sans-serif",
                            height:"2rem",
                            pt:"1rem"
                        }
                    }}
                 />
                 {error.password && <Typography variant="body1" style={{margin:"0px"}} className="common-invalid-input"
            sx={{fontSize:"small",color:"red"}}>{error.password}</Typography>}
            </Box>
            <Box sx={{mt:"0.8rem",height:"minimum"}} className="flex-div">
                 <TextField 
                    size="small"
                    variant="filled"
                    type={ displayPass1 ? "password" : "text" } 
                    name="cpassword"
                    value={userData.cpassword}
                    onChange={handleInputChange}
                    // onChange={handleFormSubmit}
                    placeholder='Re-enter Password'
                    autoComplete="off"
                    InputProps={{
                        disableUnderline:"true",
                        endAdornment:(
                            <InputAdornment position="end" sx={{
                                cursor:"pointer"
                            }} >
                                {displayPass1 ? <VisibilityOffIcon onClick={()=>setDisplayPass1(prev=>!prev)} /> : <VisibilityIcon onClick={()=>setDisplayPass1(prev=>!prev)} /> }
                            </InputAdornment>
                        )
                    }}
                    sx={{
                        m:"auto",width:"100%",
                        '& .MuiInputBase-input':{
                            fontFamily:"sans-serif",
                            height:"2rem",
                            pt:"1rem"
                        }
                    }}
                 />
                 {error.cpassword && <Typography variant="body1" style={{margin:"0px"}} className="common-invalid-input"
            sx={{fontSize:"small",color:"red"}}>{error.cpassword}</Typography>}
                 {/* {isUser ? <p>User Already Exists</p> : "" } */}
                 {!error.firstname && !error.email && !error.password && !error.cpassword && isUser && <p style={{color:"green", fontSize:"0.9rem"}}>User Already Exists</p> }
            </Box>
            <Stack sx={{justifyContent:"flex-start",alignItems:"flex-start",mt:"1rem"}} >
                <Button variant="contained" type="submit" sx={{width:"100%"}} >Sign up</Button>
                <Typography sx={{mt:"0.5rem",fontFamily:"sans-serif"}} >Already have a account ? <Box component="span" sx={{color:"#0A5ED7",cursor:"pointer",textDecoration:"underline"}} onClick={(e)=>{
                    e.stopPropagation()
                    dispatch(toggleSignIn("toggle"))
                    dispatch(toggleSignUp(false))
                }} >Sign in</Box></Typography>
            </Stack>
        </Box>
    </Box>
  )
}

export default SignUp