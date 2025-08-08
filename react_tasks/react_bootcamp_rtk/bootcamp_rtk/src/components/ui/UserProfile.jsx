import { useDispatch, useSelector } from "react-redux"     // React router hook for accessing value and action(to change the values)
import { FaUserTie } from "react-icons/fa6";               // React-icon
import { FaHeart } from "react-icons/fa";                  // React-icon
import { useState } from "react";                          // React hook       
// import { setInputText2 } from "../../store";            // importing the text from my second input(only for user's course or wishlist)
import { NavLink } from "react-router";
import { setInputText2 } from "../../features/UserSlices";

const UserProfile = () => {
  const dispatch = useDispatch()
  // Here we will store the objects of courses which are checked
  const[checkbox,setCheckBox] = useState({
    email:"",
    course:[]
  })

  const[updatewish,setUpdateWish] = useState([])                        // I am not using It's value just to re-render the page i used
  // const dispatch = useDispatch()
  const maincourses = useSelector((state)=>state.usercourses)           // see we are not using data but it causes the re-render for every time local storage change     
    const userdetail = useSelector((state)=>state.app.userdetail)       // Getting user detail
    let usercourses = JSON.parse(localStorage.getItem("usercourses"))   // getting complete courses for all users 
    console.log(userdetail);

    /* Let's Get the courses data for a particualr user */
    let userdata = JSON.parse(localStorage.getItem("userdata"))          // Getting the userdetails with their personal detail as well courses & wishlist
    console.log(userdata);
    // console.log(userdetail[0].email);
    let my;
    if(userdata && userdetail[0]){
      my = userdata.filter((curEle)=>curEle.email==userdetail[0].email)
    }
    

    // Let me start writing the code for wishlist
    let wishlist = JSON.parse(localStorage.getItem("wishlist"))
    let wishcourse1;
    if(wishlist!==null && userdetail.length>=1){
      wishcourse1=wishlist.filter((curEle)=>curEle.email==userdetail[0].email)
      // console.log(wishcourse1[0].wishcourse);
    }


    // let u = userdetail[0]
    // Let's Get usercourses


    console.log(usercourses);
    let display_course;
    if(usercourses!==null && userdetail.length>=1){
      display_course = usercourses.filter((curEle)=>curEle.useremail==userdetail[0].email)    // Getting course for a particular user based on email
      console.log(display_course);
      
    }
    // console.log(display_course[0].usercourse);

    if(checkbox.course.length){
      console.log("true");
    }else{
      console.log("false");
    }

    // Let's write the logic to delete the course from a particular user courses list
    const handleRemoveCourse = (data) => {
      console.log(data);
      let index = my[0].courses.findIndex((curEle)=>curEle.id==data.id)
      console.log(index);
      my[0].courses.splice(index,1)
      console.log(my);
      console.log(userdata);
      localStorage.setItem("userdata",JSON.stringify(userdata))
      setUpdateWish(my[0].courses)
    }
    // if value is checked adding data , if unchecked removing the data
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
    // Let's delete the courses(checkboc=>one or many) from a particular user
    const deleteCheckBox = () => {
      console.log(checkbox);
      console.log(my[0].courses);
      let new_set = new Set(checkbox.course)
      console.log(new_set);
      my[0].courses = my[0].courses.filter((curEle)=>!new_set.has(curEle.id))
      console.log(my[0].courses);
      console.log(userdata);
      localStorage.setItem("userdata",JSON.stringify(userdata))
      setUpdateWish(usercourses)
      setCheckBox({
        email:"",
        course:[]
      })
    }
    // Removing from wishlist course
    const handleRemoveWish = (id) => {
      console.log(id);
      console.log(my[0].wishlist);
      let index = my[0].wishlist.findIndex((curEle)=>curEle.id==id)
      console.log(index);
      my[0].wishlist.splice(index,1)
      console.log(my);
      console.log(userdata);
      localStorage.setItem("userdata",JSON.stringify(userdata))
      setUpdateWish(my[0].courses)
      setUpdateWish(my[0].wishlist)     // I am not using It's value just to re-render the page i used
    }
  return (
    <section className="userprofile-section" onClick={(e)=>{e.stopPropagation();dispatch(setInputText2(""))}}>
        <div className="profile-div1">
          <div>
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

        {my && my[0].courses && my[0].courses.length>=1 ? 
        <div className="profile-div2">
          <h2 style={{margin:"auto", width:"16.7rem", fontWeight:"600"}}>Enrolled Courses</h2>
          {checkbox.course.length>=1 && <button 
          onClick={()=>{deleteCheckBox()}}
          className="disenroll-checked"
          >Disenroll checked courses</button> }
          <div className="course_div">
            {my[0].courses.length>=1 && <div>
              {my[0].courses.map((curEle,index)=>{
                return <div className="course-group" key={curEle.id}>
                  <input type="checkbox" onChange={(e)=>handleChange(e,curEle)} />
                  <NavLink to={`/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
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
          {my && my[0].wishlist && my[0].wishlist.length>=1 ? 
          <h2 style={{margin:"auto", width:"17.6rem", fontWeight:"600"}}>Whishlist Courses</h2> :
          <h3 style={{width:"28rem",margin:"auto",marginTop:"1rem", marginBottom:"1rem"}}>You don't have wishlist courses</h3>
          }
          <div>
            {
              my && my[0].wishlist && my[0].wishlist.length>=1 &&  (
                my[0].wishlist.map((curEle)=>{
                  return <div>
                    <FaHeart style={{color:"red", fontSize:"1.5rem",cursor:"pointer"}} onClick={()=>{handleRemoveWish(curEle.id)}} />
                    <NavLink to={`/${curEle.id}`}><img src={curEle.image} alt="" /></NavLink>
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