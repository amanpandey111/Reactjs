import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FaUserCircle } from "react-icons/fa";
import { toggleSignIn, toggleSignUp, userLogin } from "../../store";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import InputAdornment from "@mui/material/InputAdornment";
// import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
interface globalstore{
    mycourse:[],
    course_array:[],
    alldata:[],
    signup:boolean,
    userexists:boolean,
    signin:boolean,
    currentId:string,
    userlogin:boolean,
    userdetail:[],     // here we will store the data of user who login
    usercourses:[],    // cusercourses after deletion anyway we won't use just for that our component get rendered
    inputText:string,
    userinput:boolean,
    userinputtext:string
}
interface errorobject{
    [key:string]:string|boolean
}
interface localuser{
    courses:[],
    cpassword:string,
    email:string,
    firstname:string,
    lastname:string,
    password:string,
    wishlist:[]
}

const LogIn = () => {
    // const alldata = useSelector((state)=>state.alldata)
    const[displayPass,setDisplayPass] = useState(true)
    const userlogin = useSelector((state:globalstore)=>state.userlogin)
    console.log(userlogin);

    const dispatch = useDispatch()
    // console.log(alldata);
    const local = JSON.parse(localStorage.getItem("userdata") ?? "null" )
    const [logindata,setLoginData] = useState({
        email:"",
        password:""
    })
    const[error,setError] = useState<errorobject>({})

    const handleInputChange = (e:any)=> {
        const{name,value} = e.target
        setLoginData((prev)=>({...prev,[name]:value}))
        let error1 = handleError(value,name,error)
        setError(error1)
    }
    const handleError = (value?:any,name?:string,error?:errorobject)=>{
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
        let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;
        let message : {[key:string]:string|boolean} = {...error}
        console.log(error);
        if(name=="email"){
            console.log(value);
            console.log("Let's validate email");
            if(value?.length==0){
                console.log("Length is 0");
                message.email="Enter your email"    
            }else if(!regex.test(value)){
                message.email="email format is wrong"
                message.valid=false
            }
            else{
                delete message.email
            }
        }
        else if(name=="password"){
            console.log("let's justify password");
            if(value.length<1){
                message.password = "Password is Mandatory"
                message.valid = false
            }else if(value.length<8){
                message.password = "length of password should be minimm 8"
                message.valid = false
            }else if(!regexp.test(value)){
                message.password = "password should contain atleast one uppercase, onelowercase, one digit and one special character"
                message.valid = false
            }else{
                delete message.password
                // error1.valid = true
            }
        }

        if(name==undefined){
            if(!logindata.email){
                console.log("email is empty");
                message.email="Enter your email"
                console.log(message);
            }
            if(logindata.email){
                let e = local.some((curEle:localuser)=>curEle.email==logindata.email)
                if(!e) message.email = "email doesn't match"
            }
            if(!logindata.password){
                message.password="Enter your Password"
            }
            // checking whether enter login data is there or not
            let some = local.some((curEle:localuser)=>curEle.email==logindata.email && curEle.password==logindata.password)
            if(some){
                let d = local.filter((curEle:localuser)=>curEle.email==logindata.email && curEle.password==logindata.password)
                console.log(d);
                dispatch(userLogin(true,d))        // calling when both email and password are correct
            }else{
                dispatch(userLogin(false))
                let email = local.some((curEle:localuser)=>curEle.email==logindata.email)
                if(email){
                    if(!message.password) message.password="enter correct password"
                }
            }
        }
        return message
    }
    const handleFormSubmit = (e:any)=> {
        e.preventDefault()
        let error = handleError()
        setError(error)
    }
    console.log(error);
  return (
        <Stack className="login-section" onClick={(e)=>e.stopPropagation()} 
        sx={{bgcolor:"white",alignItems:"center",gap:"1rem",borderRadius:"2.5rem",p:"2rem 0rem !important",position:"absolute",top:"50%",right:"50%",transform:"translate(50%,70%)",width:"30rem"}}
        >
            <FaUserCircle style={{fontSize:"5rem", color:"#F2F2F2"}} />
            <Box component="form" sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"}} onSubmit={handleFormSubmit} >
                    {/* <MdAttachEmail style={{color:"grey"}}/> */}
                    {/* <input 
                    type="email" 
                    name="email"
                    value={logindata.email}
                    onChange={handleInputChange}
                    placeholder="Email ID"
                    autoComplete="off"
                    /> */}
                    <TextField
                    className="login_input" 
                    size="small"
                    variant="filled"
                    type="email" 
                    name="email"
                    value={logindata.email}
                    onChange={handleInputChange}
                    placeholder="Email ID"
                    autoComplete="off"
                    InputProps={{
                        // startAdornment:(
                        //     <InputAdornment position="start" >
                        //         <AttachEmailIcon/>
                        //     </InputAdornment>
                        // ),
                        disableUnderline:true
                    }}
                    sx={{
                        width:"70%",m:"auto",bgcolor:"",
                        '& .MuiInputBase-input':{
                            fontFamily:"sans-serif",
                            height:"3.5rem",
                            pt:"1rem",
                            pl:"0.6rem !important"
                        }
                    }}
                    />
                {error.email && <Typography variant="body1" sx={{color:"red",fontSize:"0.8rem",width:"70%"}} className="login_error" >{error.email}</Typography> }
                    {/* <input type="password" 
                    name="password"
                    value={logindata.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    autoComplete="off"
                    /> */}
                    <TextField
                        className="login_input"
                        size="small"
                        variant="filled"
                        type={ displayPass ? "password" : "text" } 
                        name="password"
                        value={logindata.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        autoComplete="off"
                        InputProps={{
                            endAdornment:(
                                <InputAdornment position="end" sx={{
                                    cursor:"pointer"
                                }} >
                                    {displayPass ? <VisibilityOffIcon onClick={()=>setDisplayPass(prev=>!prev)} /> : <VisibilityIcon onClick={()=>setDisplayPass(prev=>!prev)} /> }
                                </InputAdornment>
                            ),
                            disableUnderline:true
                        }}
                        sx={{
                            width:"70%",m:"auto",bgcolor:"",
                            '& .MuiInputBase-input':{
                                fontFamily:"sans-serif",
                                height:"3.5rem",
                                pt:"1rem",
                                // border:"1px solid red",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                pl:"0.6rem !important"
                            },
                            '& .MuiInputBase-root':{
                                // bgcolor:"white"
                                // pt:"0rem",
                                // border:"1px solid",
                                // height:"2rem"
                                display:"flex",
                                justifyContent:"space-around",
                                alignItems:"center"
                            }
                        }}
                    />
                {error.password && <Typography variant="body1" className="login_error" sx={{color:"red",fontSize:"0.8rem",width:"70%",m:"0px !important"}} >{error.password}</Typography>}
                
                {/* <Button type="submit" variant="contained" className="sigin_button"
                sx={{width:"70%",borderRadius:"0.3rem",fontFamily:"sans-serif",p:"0.4rem 0rem !important"}}
                >Sign in</Button> */}
                <Stack sx={{justifyContent:"flex-start",alignItems:"flex-start",mt:"1rem ",width:"70%"}} >
                    <Button variant="contained" type="submit" sx={{width:"100%",py:"0.2rem !important"}} >Sign in</Button>
                    <Typography sx={{mt:"0.5rem !important",fontFamily:"sans-serif"}} >Don't have account ? <Box component="span" sx={{color:"#0A5ED7",cursor:"pointer",textDecoration:"underline"}} onClick={(e)=>{
                        e.stopPropagation()
                        dispatch(toggleSignIn(true))
                        dispatch(toggleSignUp("hy"))
                    }} >Sign up</Box></Typography>
                </Stack>
            </Box>
        </Stack>
  )
}

export default LogIn
// #8C4152 : color for icons