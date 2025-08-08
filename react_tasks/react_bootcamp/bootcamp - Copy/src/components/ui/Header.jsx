import { NavLink, useNavigate } from "react-router";
import "./ui.css"
import { FaRegUser,FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addArray, isUserExists, toggleSignIn, toggleSignUp, userLogin } from "../../store";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const Header = () => {
    const signup = useSelector((state)=>state.signup)
    const signin = useSelector((state)=>state.signin)
    const userlogin = useSelector((state)=>state.userlogin)
    const navigate = useNavigate()
    console.log(userlogin);
    const dispatch = useDispatch()
  return (
    <header className="header">
        <section className="header-section">
            <div>
                <NavLink to="/"><img src={`logo.png`} alt="" onClick={()=>dispatch(addArray(true))} /></NavLink>
            </div>
            <div className="search-input">
                <input type="text" />
                <IoSearchSharp/>
            </div>
            <div>
                {userlogin ? 
                <NavLink to="/userdetail" onClick={(e)=>e.stopPropagation()}><FaUser style={{color:"white", fontSize:"1.8rem",cursor:"pointer" }} className="user-profile"
                
                /></NavLink>
                : <button className="btn btn-primary" onClick={(e)=>{ 
                    e.stopPropagation(); 
                    dispatch(toggleSignUp("hy"));
                    dispatch(toggleSignIn(false));
                    dispatch(isUserExists(false))
                    }} >Sign Up</button>}
                    
                {signup && <SignUp/>}

                {userlogin ? <button className="btn btn-primary" onClick={(e)=>{
                    e.stopPropagation()
                    dispatch(userLogin(false))
                    navigate("/")
                }} >Log out</button> : <button className="btn btn-primary" onClick={(e)=>{
                    e.stopPropagation()
                    dispatch(toggleSignIn("toggle"))
                    dispatch(toggleSignUp(false))
                    
                }}>Sign in</button>}

                {signin && <LogIn/>}
            </div>
        </section>
        
    </header>
  )
}

export default Header