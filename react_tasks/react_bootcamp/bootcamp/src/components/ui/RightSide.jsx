import { useDispatch, useSelector } from 'react-redux'
import "./ui.css"
import { NavLink } from 'react-router'
import { FaHeart } from "react-icons/fa";
import {  toggleSignUp } from '../../store';
import { useState } from 'react';

const RightSide = () => {
    const[finalbool,setFinalBool] = useState(true)
    const[bool,setBool] = useState("")
    const mycourse = useSelector((state)=>state.mycourse)     //! here will have 
    const courses = useSelector((state)=>state.course_array)  //! particular courses for a related category
    const userlogin = useSelector((state)=>state.userlogin)   //! If user login we will add the particular course in whishlist for a particular user
     const user = useSelector((state)=>state.userdetail)       //! Getting the current user who is logged in
    
    const dispatch = useDispatch()
    //! To make the wishlist change conditionally
    const handleWishList = (id,email) => {
        let bool = false
        let userdata = JSON.parse(localStorage.getItem("userdata"))
        let index = userdata.findIndex((curEle)=>curEle.email==email)
        if(userdata[index].wishlist && index>=0){
            let some = userdata[index].wishlist.some((curEle)=>curEle.id==id)
            if(some) bool=true
        }
        return bool
    }
    //! To make the wishlist change conditionally first time
    const handleInitilWish = (id) => {
        console.log(id);
        setBool(!bool)
    }
    // let userdata = JSON.parse(localStorage.getItem("userdata"))
    // let individual = userdata.filter((curEle)=>curEle.email==email)

    //todo : Adding wishlist course in my single data storage
    const addWishCourse = (email,course,category) => {
        console.log(email,course,category);
        let userdata = JSON.parse(localStorage.getItem("userdata"))
        let individual = userdata.filter((curEle)=>curEle.email==email)
        if(individual[0].wishlist==undefined || individual[0].wishlist==null){
            individual[0].wishlist = [course]
        }
        else{
            if(individual[0].wishlist.length==1){
                console.log("length is one");
                if(individual[0].wishlist[0].id!==course.id){
                    individual[0].wishlist.push(course)
                }
                else{
                    console.log("Hello we are same");
                    individual[0].wishlist.splice(0,1)
                    setBool(false)
                    console.log(individual[0].wishlist.length);
                    // setFinalBool(false)
                    // setBool(false)
                }
            }
            else{
                console.log("length is more than one");
                console.log(individual[0].wishlist);
                let bool = individual[0].wishlist.some((curEle)=>curEle.id==course.id)
                console.log(bool);
                if(!bool){
                    individual[0].wishlist.push(course)
                }
                else{
                    // console.log(id);
                    console.log(individual[0].wishlist);
                    let index = individual[0].wishlist.findIndex((curEle)=>{return curEle.id==course.id})
                    console.log(index);
                    individual[0].wishlist.splice(index,1)
                    setBool(false)
                    // setFinalBool(false)
                }
            }
        }
        console.log(individual);
        console.log(userdata);
        // dispatch(enrollWishCourse(email,course,category))
        localStorage.setItem("userdata",JSON.stringify(userdata))
    }
    // localStorage.removeItem("wishlist")
  return (
    <>
       {courses.length >=1 ? 
        <section className='right-section-main' >
            <div>
                <ul>
                    {
                        courses.map((curEle)=>{
                            return <li key={curEle.id}>
                                            <div className="card right-cart" style={{width:"23rem"}}>
                                                <NavLink to={`/${curEle.id}`}><img src={curEle.image} className="card-img-top" alt="..."/></NavLink>
                                                {/* <img src={curEle.image} className="card-img-top" alt="..."/> */}
                                                <div className="card-body">
                                                    <h5 className="card-title">{curEle.name}</h5>
                                                    <p className="card-text">{curEle.description}</p>
                                                    <div className='flex-div-cart' onClick={(e)=>e.stopPropagation()}>
                                                        <NavLink to={`/${curEle.id}`} className="btn btn-primary">For more Details</NavLink>
                                                        <p style={{margin:"auto"}}>{curEle.price} ₹</p>
                                                        <p style={{margin:"auto"}}>⭐{curEle.rating}</p>

                                                        {/*//! check if user is login then we can add it to whishlist */}
                                                        {userlogin?  
                                                        <FaHeart 
                                                        style={{fontSize:"1.4rem"}} 
                                                        className={(handleWishList(curEle.id,user[0].email)) || bool?"success_wish":"whishlist"} onClick={(e)=>{ 
                                                            e.stopPropagation(); 
                                                            addWishCourse(user[0].email,curEle,"wishcourse")
                                                            handleInitilWish(curEle.id)
                                                            // dispatch(toggleSignUp("hy"));
                                                        }} />
                                                        :<FaHeart style={{fontSize:"1.4rem"}} className='whishlist' onClick={(e)=>{ 
                                                            e.stopPropagation(); 
                                                            dispatch(toggleSignUp("hy"));
                                                        }} />}

                                                    </div>
                                                </div>
                                            </div>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </section>
        : <section className='right-section-main' >
        <div>
            <ul>
                {
                    mycourse.map((curEle)=>{
                        return curEle.courses.map((curEle)=>{
                            return <li key={curEle.id}>
                                         <div className="card right-cart" style={{width:"23rem"}}>
                                             <NavLink to={`/${curEle.id}`}><img src={curEle.image} className="card-img-top" alt="..."/></NavLink>
                                            <div className="card-body">
                                                <h5 className="card-title">{curEle.name}</h5>
                                                <p className="card-text">{curEle.description}</p>
                                                {/* <a href="#" className="btn btn-primary">For more Details</a> */}
                                                <div className='flex-div-cart'>
                                                    <NavLink to={`/${curEle.id}`} className="btn btn-primary">For more Details</NavLink>
                                                    <p style={{margin:"auto"}}>{curEle.price} ₹</p>
                                                    <p style={{margin:"auto"}}>⭐{curEle.rating}</p>
                                                    {userlogin?
                                                        <FaHeart 
                                                        style={{fontSize:"1.4rem"}} 
                                                        className={(handleWishList(curEle.id,user[0].email))?"success_wish":"whishlist"} onClick={(e)=>{ 
                                                            e.stopPropagation(); 
                                                            // addWishListCourse(curEle)
                                                            addWishCourse(user[0].email,curEle,"wishcourse")
                                                            handleInitilWish(curEle.id)
                                                            // dispatch(toggleSignUp("hy"));
                                                        }} />
                                                        :<FaHeart style={{fontSize:"1.4rem"}} className='whishlist' onClick={(e)=>{ 
                                                            e.stopPropagation(); 
                                                            dispatch(toggleSignUp("hy"));
                                                        }} />}
                                                </div>
                                            </div>
                                         </div>
                                  </li>
                        })
                    })
                }
            </ul>
        </div>
    </section>}
    </>
  )
}

export default RightSide