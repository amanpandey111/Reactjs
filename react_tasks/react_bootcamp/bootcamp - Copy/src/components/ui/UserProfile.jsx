import { useDispatch, useSelector } from "react-redux"
import { FaUserTie } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
// enrollCourses 
import { deleteCourse } from "../../store";
import { useState } from "react";

const UserProfile = () => {
  const[checkbox,setCheckBox] = useState({
    email:"",
    course:[]
  })
  const[updatewish,setUpdateWish] = useState([])   //! I am not using It's value just to re-render the page i used
  const dispatch = useDispatch()
  const maincourses = useSelector((state)=>state.usercourses)     //! see we are not using data but it causes the re-render for every time local storage change     
    const userdetail = useSelector((state)=>state.userdetail)              //! Getting user detail
    let usercourses = JSON.parse(localStorage.getItem("usercourses"))      //! getting complete courses for all users 
    console.log(userdetail);

    //todo Let me start writing the code for wishlist
    let wishlist = JSON.parse(localStorage.getItem("wishlist"))
    let wishcourse1;
    if(wishlist!==null && userdetail.length>=1){
      wishcourse1=wishlist.filter((curEle)=>curEle.email==userdetail[0].email)
      // console.log(wishcourse1[0].wishcourse);
    }


    // let u = userdetail[0]
    console.log(usercourses);
    let display_course;
    if(usercourses!==null && userdetail.length>=1){
      display_course = usercourses.filter((curEle)=>curEle.useremail==userdetail[0].email)    //! Getting course for a particular user based on email
      console.log(display_course);
      
    }
    // console.log(display_course[0].usercourse);

    if(checkbox.course.length){
      console.log("true");
    }else{
      console.log("false");
    }

    //! Let's write the logic to delete the course from a particular user courses list
    const handleRemoveCourse = (data) => {
      dispatch(deleteCourse(data,userdetail))
    }
    const handleChange = (e,data) => {
      let c = e.target.checked
      console.log(checkbox);
      if(c){
        if(checkbox.email==""){
          setCheckBox({
            email:userdetail[0].email,
            course:[data.id]
          })
        }
        else{
          setCheckBox((prev)=>({...prev,course:[...checkbox.course,data.id]}))
        }
      }
      else{
        console.log("let's write logic to remove the item");
        console.log(checkbox.course);
        let index = checkbox.course.findIndex((id)=>id==data.id)
        if(index>=0){
          checkbox.course.splice(index,1)
          console.log(checkbox.course);
          setCheckBox((prev)=>({...prev,course:checkbox.course}))
        }
      }
      
    }
    console.log(checkbox);
    //! Let's delete the courses(checkboc=>one or many) from a particular user
    const deleteCheckBox = () => {
      console.log(checkbox);
      const usercourses = JSON.parse(localStorage.getItem("usercourses"))
      console.log(usercourses);
      let email = usercourses.filter((curEle)=>curEle.useremail==userdetail[0].email)
      console.log(email[0].usercourse);   //! particular courses for matched email
      // let r = []
      let new_set = new Set(checkbox.course)
      console.log(new_set);
      email[0].usercourse = email[0].usercourse.filter((curEle)=>!new_set.has(curEle.id))
      console.log(email);
      console.log(usercourses);
      localStorage.setItem("usercourses",JSON.stringify(usercourses))
      setUpdateWish(usercourses)
      setCheckBox({
        email:"",
        course:[]
      })
    }

    //! Removing from wishlist
    const handleRemoveWish = (data) => {
      let wishlist2 = JSON.parse(localStorage.getItem("wishlist"))
      console.log(data,userdetail[0].email);
      let email_index = wishlist2.findIndex((curEle)=>curEle.email==userdetail[0].email)
      console.log(email_index);
      let course_index = wishlist2[email_index].wishcourse.findIndex((curEle)=>curEle.id==data)
      console.log(course_index);
      wishlist2[email_index].wishcourse.splice(course_index,1)
      console.log(wishlist2);
      localStorage.setItem("wishlist",JSON.stringify(wishlist2))
      setUpdateWish(wishlist2)     //! I am not using It's value just to re-render the page i used
    }
  return (
    <section className="userprofile-section" onClick={(e)=>e.stopPropagation()}>
        <div className="profile-div1">
          <div>
            {/* <h5>Student Detail</h5> */}
            <FaUserTie style={{fontSize:"4rem"}}/>
          </div>
          <div>
            <div>
              {userdetail[0] && <p><span>Student Name</span> : {userdetail[0].firstname} {userdetail[0].lastname}</p>}
              {userdetail[0] && <p><span>Student email</span> : {userdetail[0].email}</p>}
            </div>
            <div></div>
          </div>
        </div>
        {userdetail[0] && display_course && display_course[0] && display_course[0].usercourse.length>=1 ? 
        <div className="profile-div2">
          <h2 style={{margin:"auto", width:"16.7rem", fontWeight:"600"}}>Enrolled Courses</h2>
          {checkbox.course.length>=1 && <button style={{backgroundColor:"red", color:"white", border:"none",width:"13rem",height:"2rem"}}
          onClick={()=>{deleteCheckBox()}}
          >Disenroll checked courses</button> }
          <div className="course_div">
            {userdetail[0] && display_course && display_course[0] && <div>
              {display_course[0].usercourse.map((curEle,index)=>{
                return <div className="course-group" key={curEle.id}>
                  <input type="checkbox" onChange={(e)=>handleChange(e,curEle)} />
                  <img src={curEle.image} alt="" />
                  <div>
                    <p>{curEle.name}</p>
                    <p>{curEle.instructor}</p>
                    <p>{curEle.location}</p>
                    <p style={{color:"green"}} >enrolled</p>
                  </div>
                  <button style={{backgroundColor:"red", color:"white", border:"none", width:"5rem", height:"2rem"}} 
                  onClick={()=>{handleRemoveCourse(curEle);}}
                  >Disenroll</button>
                </div>
              })}
            </div> }
          </div>
        </div>
        : <h3 style={{width:"28rem",margin:"auto",marginTop:"1rem", marginBottom:"1rem"}}>You haven't enrolled in any courses</h3> }

        <div className="wishlist-div">
          {wishcourse1 && wishcourse1[0] && wishcourse1[0].wishcourse.length>=1 ? 
          <h2 style={{margin:"auto", width:"17.6rem", fontWeight:"600"}}>Whishlist Courses</h2> :
          <h3 style={{width:"28rem",margin:"auto",marginTop:"1rem", marginBottom:"1rem"}}>You don't have wishlist courses</h3>
          }
          {/* <h2 style={{margin:"auto", width:"17.6rem", fontWeight:"600"}}>Whishlist Courses</h2> */}
          <div>
            {
              wishcourse1 && wishcourse1[0] && wishcourse1[0].wishcourse.length>=1 &&  (
                wishcourse1[0].wishcourse.map((curEle)=>{
                  return <div>
                    <FaHeart style={{color:"red", fontSize:"2rem",cursor:"pointer"}} onClick={()=>{handleRemoveWish(curEle.id)}} />
                    <img src={curEle.image} alt="" />
                    <p style={{margin:"0px",padding:"0px",lineHeight:"15px"}}>{curEle.name}</p>
                    <p style={{margin:"0px",padding:"0px",lineHeight:"15px"}}>{curEle.instructor}</p>
                    <p style={{margin:"0px",padding:"0px",lineHeight:"15px"}}>Price : ₹{curEle.price}</p>
                  </div>
                })
              )
            }
          </div>
        </div>
    </section>
  )
}

export default UserProfile
// {userdetail[0] && <h2>{userdetail[0].firstname} {userdetail[0].lastname}</h2>}