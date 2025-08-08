import { useDispatch, useSelector } from "react-redux"  // React router hook for accessing value and action(to change the values)
import { FaUserTie } from "react-icons/fa6";            // React-icon
import { FaHeart } from "react-icons/fa";               // React-icon
import { useState } from "react";                       // React hook       
import { setInputText2 } from "../../store";            // importing the text from my second input(only for user's course or wishlist)
import { NavLink } from "react-router";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const UserProfile = () => {
  // const { pathname } = useLocation()
  // let h = document.documentElement.scrollHeight
  // console.log(h);
  const dispatch = useDispatch()
  // Here we will store the objects of courses which are checked
  const[checkbox,setCheckBox] = useState({
    email:"",
    course:[]
  })

    const[updatewish,setUpdateWish] = useState([])                         // I am not using It's value just to re-render the page i used
    // const dispatch = useDispatch()
    const maincourses = useSelector((state)=>state.usercourses)            // see we are not using data but it causes the re-render for every time local storage change     
    const userdetail = useSelector((state)=>state.userdetail)              // Getting user detail
    let usercourses = JSON.parse(localStorage.getItem("usercourses"))      // getting complete courses for all users 
    console.log(userdetail);

    /* Let's Get the courses data for a particualr user */
    let userdata = JSON.parse(localStorage.getItem("userdata"))            // Getting the userdetails with their personal detail as well courses & wishlist
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
      display_course = usercourses.filter((curEle)=>curEle.useremail==userdetail[0].email)    //! Getting course for a particular user based on email
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
    // useEffect(() => {
    //     window.scrollTo(0, 0); 
    // }, [pathname]);
  return (
    <Box sx={{bgcolor:"#F2F2F2",height:"100vh",overflow:"auto"}}>
      <div style={{height:"4rem"}} ></div>
      <Box 
        sx={{bgcolor:"#F2F2F2"}}
        className="userprofile-section" onClick={(e)=>{e.stopPropagation();dispatch(setInputText2(""))}}>
        <Stack direction="row" className="profile-div1"
        sx={{border:"1px solid #718092",width:"40%",m:"auto",mt:"2.3rem",gap:"2rem",justifyContent:"center",paddingTop:"0.7rem",borderRadius:"0.5rem"}}
        >
          <div>
            <FaUserTie className="user-icon" style={{fontSize:"4rem"}}/>
          </div>
          <div>
            <div>
              {userdetail[0] && <p><Typography variant="" sx={{display:"inline",fontWeight:"600"}} >Student Name</Typography> : {userdetail[0].firstname} {userdetail[0].lastname}</p>}
              {userdetail[0] && <p><Typography variant="" sx={{display:"inline",fontWeight:"600"}} >Student email</Typography> : {userdetail[0].email}</p>}
            </div>
            {/* <div></div> */}
          </div>
        </Stack>

        {my && my[0].courses && my[0].courses.length>=1 ? 
        <Box className="profile-div2"
        sx={{mt:"2rem"}}
        >
          <h2 style={{margin:"auto", width:"16.7rem", fontWeight:"600", textAlign:"center"}}>Enrolled Courses</h2>
          {checkbox.course.length>=1 && <Box sx={{width:"90%",m:"auto",display:"flex",justifyContent:"flex-end"}} >
            <Button variant="contained" sx={{bgcolor:"red",mt:"0.7rem"}}
          onClick={()=>{deleteCheckBox()}}
          className="disenroll-checked"
          >Disenroll checked courses</Button>
          </Box> }
          <Paper elevation={4} className="course_div"
          sx={{width:"90%",m:"auto",mt:"1rem",pt:"1rem",borderRadius:"1rem",bgcolor:"#F2F2F2"}}
          >
            {my[0].courses.length>=1 && <Grid container style={{}} >
              {my[0].courses.map((curEle,index)=>{
                return <Grid size={{lg:12,md:12,sm:12,xs:12}} sx={{placeItems:"center"}} className="course_grid" >
                    <Stack direction="row" className="course-group" key={curEle.id}
                          sx={{width:"90%",alignItems:"center",justifyContent:"space-between",m:"auto",mb:"1rem"}}
                          // sx={{border:"1px solid red"}}
                        >
                    <input type="checkbox" onChange={(e)=>handleChange(e,curEle)} />
                    <NavLink to={`/${curEle.id}`}>
                      {/* <img src={curEle.image} alt="" className="enroll-img" /> */}
                      <CardMedia
                      className="enroll-img"
                      component="img"
                      image={curEle.image}
                      sx={{borderRadius:"1rem",height:"10rem",width:"20rem"}}
                      />
                    </NavLink>
                    <Stack sx={{lineHeight:"0.7rem",width:"15rem",pt:"0.6rem",textAlign:'center'}} className="course_para" >
                      <p>{curEle.name}</p>
                      <p>{curEle.instructor}</p>
                      <p>{curEle.location}</p>
                      <p style={{color:"green"}} >enrolled</p>
                    </Stack>
                    <button style={{backgroundColor:"red", color:"white", border:"none", width:"5rem", height:"2rem"}} 
                    onClick={()=>{handleRemoveCourse(curEle);}}
                    >Disenroll</button>
                  </Stack>
                </Grid>
              })}
            </Grid> }
          </Paper>
        </Box>
        : <Box component="h3" style={{marginTop:"1rem", marginBottom:"1rem",textAlign:"center"}}>You haven't enrolled in any courses</Box> }

        <Box className="wishlist-div"
        sx={{mt:"2rem",mb:"5rem"}}
        >
          {my && my[0].wishlist && my[0].wishlist.length>=1 ? 
          <h2 style={{margin:"auto", width:"17.6rem", fontWeight:"600", textAlign:"center"}}>Whishlist Courses</h2> :
          <Box component="h3" sx={{marginTop:"1rem",marginBottom:"1rem",textAlign:"center"}}>You don't have wishlist courses</Box>
          }
          <Grid container spacing={3} className="wishlist-grid" 
          sx={{width:"90%",m:"auto",textAlign:"center"}} 
          >
            {
              my && my[0].wishlist && my[0].wishlist.length>=1 &&  (
                my[0].wishlist.map((curEle)=>{
                  return <Grid size={{xl:3,lg:4,md:6,sm:12,xs:12}} key={curEle.id} className="wishlist-one-grid"
                           sx={{mt:"1.5rem",gap:"0.6rem",width:"22rem",placeItems:"center"}}
                           >
                           <FaHeart style={{color:"red", fontSize:"1.5rem",cursor:"pointer"}} onClick={()=>{handleRemoveWish(curEle.id)}} />
                           <NavLink to={`/${curEle.id}`}>
                             <CardMedia
                               className="enroll-img"
                               component="img"
                               image={curEle.image}
                               sx={{borderRadius:"1rem",height:"10rem",width:"20rem",mt:"0.6rem",mb:"0.5rem"}}
                             />
                           </NavLink>
                           <Stack spacing={2} >
                            <Typography style={{margin:"0px",padding:"0px",lineHeight:"26px"}}  >{curEle.name}</Typography>
                            <Typography style={{margin:"0px",padding:"0px",lineHeight:"26px"}}  >{curEle.instructor}</Typography>
                            <Typography style={{margin:"0px",padding:"0px",lineHeight:"26px"}}  >Price : ₹{curEle.price}</Typography>
                           </Stack>
                    </Grid>
                })
              )
            }
          </Grid>
        </Box>
    </Box>
    </Box>
  )
}

export default UserProfile