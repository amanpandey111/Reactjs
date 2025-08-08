import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/md";
import { userLogin } from "../../features/UserSlices";
// import { userLogin } from "../../store";

const LogIn = () => {
    // const alldata = useSelector((state)=>state.app.alldata)
    const userlogin = useSelector((state)=>state.app.userlogin)
    console.log(userlogin);

    const dispatch = useDispatch()
    // console.log(alldata);
    const local = JSON.parse(localStorage.getItem("userdata"))
    const [logindata,setLoginData] = useState({
        email:"",
        password:""
    })
    const[error,setError] = useState({})

    const handleInputChange = (e)=> {
        const{name,value} = e.target
        setLoginData((prev)=>({...prev,[name]:value}))
    }
    const handleError = ()=> {
        let message = {}
        if(!logindata.email){
            console.log("email is empty");
            message.email="Enter your email"
            console.log(message);
        }
        if(logindata.email){
            let e = local.some((curEle)=>curEle.email==logindata.email)
            if(!e) message.email = "email doesnt match"
        }
        if(!logindata.password){
            message.password="Enter your Password"
        }
        // checking whether enter login data is there or not
        let some = local.some((curEle)=>curEle.email==logindata.email && curEle.password==logindata.password)
        if(some){
            let d = local.filter((curEle)=>curEle.email==logindata.email && curEle.password==logindata.password)
            console.log(d);
            dispatch(userLogin([true,d]))        // calling when both email and password are correct
        }else{
            dispatch(userLogin(false))
            let email = local.some((curEle)=>curEle.email==logindata.email)
            if(email){
                if(!message.password) message.password="enter correct password"
            }
        }
        return message
    }
    const handleFormSubmit = (e)=> {
        e.preventDefault()
        let error = handleError()
        setError(error)
    }
  return (
    <section className="login-section" onClick={(e)=>e.stopPropagation()} >
        <div>
            <FaUserCircle style={{fontSize:"5rem", color:"#9B8EA3"}} />
        </div>
        <form onSubmit={handleFormSubmit} >
            <div className="input-div">
                <MdAttachEmail style={{color:"#8C4152"}}/>
                <input 
                 type="email" 
                 name="email"
                 value={logindata.email}
                 onChange={handleInputChange}
                 placeholder="Email ID"
                 autoComplete="off"
                 />
            </div>
            {error.email && <p>{error.email}</p> }
            <div className="input-div">
                <RiLockPasswordFill style={{color:"#8C4152"}} />
                <input type="password" 
                 name="password"
                 value={logindata.password}
                 onChange={handleInputChange}
                 placeholder="Password"
                 autoComplete="off"
                 />
            </div>
            {error.password && <p>{error.password}</p> }
            <div>
                <button type="submit">Sign in</button>
            </div>
        </form>
    </section>
  )
}

export default LogIn