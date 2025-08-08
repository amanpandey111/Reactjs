import { NavLink, useNavigate } from "react-router";        //! for navigations purpose
import "./ui.css"                                           //! importing css
import { FaUser } from "react-icons/fa";          //! React Icons
import { IoSearchSharp } from "react-icons/io5";            //! React Icons
import { useDispatch, useSelector } from "react-redux";     //! React router hook for accessing value and action(to change the values)
import { addArray, isUserExists, setInputText, setInputText2, setUserInput, toggleSignIn, toggleSignUp, userLogin } from "../../store";  //! redux actions to change values
import SignUp from "./SignUp";                              //! Signup component where our signup form is present                      
import LogIn from "./LogIn";                                //! Login component where our login form is present
import { useEffect, useState } from "react";                //! React Hooks 

const Header = () => {
    const dispatch = useDispatch()                            //! main thing to make changes in our react-redux 
    const inputText = useSelector((state)=>state.inputText)   //! this is the text in input box
    const[suggestion,setSuggestion] = useState([])            //! Array which contain a suggested courses 
    const[refBool,setRefBool] = useState(false)               //! boolean for the list of suggested Item

    const userinput = useSelector((state)=>state.userinput)   //todo To toggle the input bpx between searching for entire course of usercourses and wishlist
    const userinputtext = useSelector((state)=>state.userinputtext) //todo this text if for another input box which will only search user enrolled courses & wishlist courses
    const userdata = JSON.parse(localStorage.getItem("userdata"))   //todo userdata for getting the course they enrolled and wishlish courses they are enrolled
    const userdetail = useSelector((state)=>state.userdetail)      //todo Getting current user detail so we can suggest the realted courses they enrolled and wishlist
    const[suggestion2,setSuggestion2] = useState([])
    // console.log(userdetail);

    useEffect(()=>{                                           //! This will trigger whenever our input text of input box changes
        if(inputText.trim()==""){
            setRefBool(false)
            return
        }
        setRefBool(true)
    },[inputText])

    const mycourse = useSelector((state)=>state.mycourse)      //! Getting the entire courses for all users
    const signup = useSelector((state)=>state.signup)          //! signup form toggle
    const signin = useSelector((state)=>state.signin)          //! Signin form toggle
    const userlogin = useSelector((state)=>state.userlogin)    //! userlogin toggle to hide signup,signin button and display user logo and logout button
    const navigate = useNavigate()


    //! Let's Get the Related Categories
    const alldata = mycourse.flatMap((curEle)=>curEle.courses)  //! Getting all courses from userdata only courses with the help of flatMap() :- Removes array boundary
    const handleInputChange = (e) => {
        let value = e.target.value
        console.log(value);
        if(value.trim()==""){
            dispatch(setInputText(""))
            setSuggestion([])
            return
        }
        dispatch(setInputText(value))
        const filtered = alldata.filter((curEle)=>curEle.name.toLowerCase().includes(value.toLowerCase()))
        console.log(filtered.slice(0,6));
        setSuggestion(filtered.slice(0,6))
    }
    //! Let's Get the Related Categories for user courses and it's wishlist
    // const alldata2
    let current_user_info = userlogin ? userdata.filter((curEle)=>curEle.email==userdetail[0].email) : []
    console.log(current_user_info);
    const handleInputChange2 = (e) => {
        let val = e.target.value
        dispatch(setInputText2(val))
        console.log(val);
        if(current_user_info[0].courses.length && current_user_info[0].wishlist.length){
            let alldata = [...current_user_info[0].courses,...current_user_info[0].wishlist]
            console.log(alldata);
            let suggestion = alldata.filter((curEle) => curEle.name.toLowerCase().includes(val.toLowerCase()));

            const uniqueIds = new Set();
            const uniqueSuggestions = suggestion.filter((curEle) => {
                if (!uniqueIds.has(curEle.id)) {
                    uniqueIds.add(curEle.id); // Add the ID to the Set
                    return true; // Keep this element
                }
                return false; // This ID has already been seen, so discard this element
            });

            console.log(uniqueSuggestions);
            if(val.trim()==""){
                dispatch(setInputText2(""))
                setSuggestion2([])
            }
            else{
                setSuggestion2(uniqueSuggestions)
            }
        }
    }
  return (
    <header className="header">
        <section className="header-section">
            <div>
                <NavLink to="/"><img src={`logo.png`} alt="" onClick={()=>{dispatch(addArray(true));dispatch(setUserInput(false))}} /></NavLink>
            </div>
            {
                userinput ? <div className="search-input">
                                <input type="text" name="userinputtext"
                                value={userinputtext}
                                placeholder="Search enrolled courses and your wishlist"
                                onChange={(e)=>handleInputChange2(e)}
                                />
                                <IoSearchSharp/>
                                {
                                    userinputtext && <ul className="suggestion2">
                                        {
                                            suggestion2.map((curEle)=><NavLink to={`/${curEle.id}`} 
                                            onClick={()=>dispatch(setInputText2(""))}
                                            ><p>{curEle.name}</p></NavLink>)
                                        }
                                    </ul>
                                }
                            </div>
                            : 
                <div className="search-input">
                                <input type="text" name="inputText" placeholder="Search courses" value={inputText} onChange={(e)=>handleInputChange(e)} />
                                <IoSearchSharp/>
                            </div>
            }
            {
                refBool && <ul className="suggestion">
                            {
                                suggestion.map((curEle)=><NavLink to={`/${curEle.id}`} onClick={()=>dispatch(setInputText(""))}><p style={{color:"black"}}>{curEle.name}</p></NavLink>)
                            }
                        </ul>
            }
            <div>
                {userlogin ? 
                <NavLink to="/userdetail" onClick={(e)=>{e.stopPropagation();dispatch(setUserInput(true));dispatch(setInputText(""))}}><FaUser style={{color:"white", fontSize:"1.8rem",cursor:"pointer" }} className="user-profile"
                
                /></NavLink>
                : <button className="btn btn-primary" onClick={(e)=>{ 
                    e.stopPropagation(); 
                    dispatch(toggleSignUp("hy"));
                    dispatch(toggleSignIn(false));
                    dispatch(isUserExists(false));
                    dispatch(setInputText(""))
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
                    dispatch(setInputText(""))
                    
                }}>Sign in</button>}

                {signin && <LogIn/>}
            </div>
        </section>
        
    </header>
  )
}

export default Header