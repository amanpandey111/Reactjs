import { useDispatch, useSelector } from 'react-redux'
import "./ui.css"
import { NavLink } from 'react-router'
import { FaHeart } from "react-icons/fa";
import { toggleSignUp } from '../../store';
import { useState } from 'react';

const RightSide = () => {
    const[id,setBool] = useState("")                     //! initially to set the whishlist if we click on whishlist symbol
    const mycourse = useSelector((state)=>state.mycourse)     //! here will have 
    const courses = useSelector((state)=>state.course_array)  //! particular courses for a related category
    const userlogin = useSelector((state)=>state.userlogin)   //! If user login we will add the particular course in whishlist for a particular user
     const user = useSelector((state)=>state.userdetail)       //! Getting the current user who is logged in
    
    // let enroll = JSON.parse(localStorage.getItem("enrolledcourses"))
    // console.log(enroll);
    const dispatch = useDispatch()
    // console.log(courses);

    const addWishListCourse = (course) => {
        console.log("wishlis course add");
        // console.log(course);
        // console.log(user[0]);
        let wishlist = JSON.parse(localStorage.getItem("wishlist"))   //todo this is the first step
        if(wishlist==null){                                           //todo checking whether data present 
            wishlist = [
                {
                    email:user[0].email,
                    wishcourse:[course]
                }
            ]
        }
        else{
            if(wishlist.length==1){
                // ! Here if the length is one as well email also matches
                if(wishlist[0].email==user[0].email){
                    if(wishlist[0].wishcourse.length==1){
                        if(wishlist[0].wishcourse[0].id!==course.id){
                            wishlist[0].wishcourse.push(course)
                        }
                    }
                    else{
                        let bool = wishlist[0].wishcourse.some((curEle)=>curEle.id==course.id)
                        console.log(bool);
                        if(!bool){
                            wishlist[0].wishcourse.push(course)
                        }
                    }
                }
                else{
                    let adduser={
                        email:user[0].email,
                        wishcourse:[course]
                    }
                    wishlist.push(adduser)
                }
            }
            else{
                let index=wishlist.findIndex((curEle)=>curEle.email==user[0].email)
                console.log(index);
                if(index>=0){
                    console.log("we found the email");
                    if(wishlist[index].wishcourse.length==1){
                        if(wishlist[index].wishcourse[0].id!==course.id){
                            wishlist[index].wishcourse.push(course)
                        }
                    }
                    else{
                        let bool = wishlist[index].wishcourse.some((curEle)=>curEle.id==course.id)
                        if(!bool) wishlist[index].wishcourse.push(course)
                    }
                }
                else{
                    let adduser={
                        email:user[0].email,
                        wishcourse:[course]
                    }
                    wishlist.push(adduser)
                }
            }
        }
        console.log(wishlist);
        localStorage.setItem("wishlist",JSON.stringify(wishlist))
    }
    // localStorage.removeItem("wishlist")
    const handleWishList = (id) => {
        let wishlist = JSON.parse(localStorage.getItem("wishlist"))
        // console.log(wishlist);
        let bool=false
        if(wishlist && wishlist.length>=1){
            let email_some = wishlist.findIndex((curEle)=>curEle.email==user[0].email)
            // console.log(email_some);
            if(email_some>=0){
                // console.log("email found");
                let course_id = wishlist[email_some].wishcourse.some((curEle)=>curEle.id==id)
                if(course_id){
                    bool=true
                }
            }
        }
        
        // console.log(id);
        // console.log(user[0].email);
        return bool
    }
    const handleInitilWish = (id) => {
        console.log(id);
        setBool(id)
    }
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
                                                        <FaHeart style={{fontSize:"1.4rem"}} className={id==curEle.id || handleWishList(curEle.id)?"success_wish":"whishlist"} onClick={(e)=>{ 
                                                            e.stopPropagation(); 
                                                            addWishListCourse(curEle)
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
                                                        <FaHeart style={{fontSize:"1.4rem"}} className={id==curEle.id || handleWishList(curEle.id)?"success_wish":"whishlist"} onClick={(e)=>{ 
                                                            e.stopPropagation(); 
                                                            addWishListCourse(curEle)
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