import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router"
import "./component.css"
import { toggleSignIn, toggleSignUp} from "../store";
// import { addcourse } from "../action";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import type { one_course } from "./ui/Header";
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
interface one_course{
  description : string,
  enrolled : boolean,
  id : string,
  image : string,
  instructor : string,
  location : string,
  name : string,
  price : number,
  rating : number
  reviewCount : number
}
interface allcourse{
    category:string,
    id:string,
    courses:one_course[]
}
interface userdetail1{    // this is of userdata
  courses : one_course[],
  cpassword : string,
  email : string,
  firstname : string,
  lastname : string,
  password : string,
  wishlist : []
}

const OneDetail = () => {
    let navigate = useNavigate()
    const userlogin = useSelector((state:globalstore)=>state.userlogin)             // to check whether user login or not 
    const user : userdetail1[] = useSelector((state:globalstore)=>state.userdetail)                 // Getting the current user who is logged in
    const[bool,setBool] = useState(false)                               // initially to set the enrolled if we click on enroll now
    console.log(user);

    // let usercourses = JSON.parse(localStorage.getItem("usercourses") ?? "null" )   // we are getting enttire courses for a users
    // console.log(usercourses);
    // let transformedUsers=[]
    // if(usercourses!==null){
    //     transformedUsers = usercourses.map(user => ({                   // here we are getting only email and their courses
    //     useremail: user.useremail,
    //     courses: user.usercourse.map(course => course.id)
    //     }));
    // }

    // console.log(transformedUsers);
    
    const dispatch = useDispatch()
    let id = useLoaderData()
    const mycourse : allcourse[] = useSelector((state:globalstore)=>state.mycourse)
    console.log(mycourse);
    let final:any;                                                          // In this variable we will be having our one individual data to be displayed 
    if(id>=100){
        const oneData = mycourse.filter((curEle)=>curEle.id==id.slice(0,2))
        console.log(oneData);
        final = oneData[0].courses.filter((curEle)=>curEle.id==id)
        console.log(final);
    }else{
        const oneData = mycourse.filter((curEle)=>curEle.id==id[0])
        console.log(oneData);
        final = oneData[0].courses.filter((curEle)=>curEle.id==id)
        console.log(final);
    }
    console.log(final);

    
    // localStorage.removeItem("usercourses")
    // localStorage.removeItem("enrolledcourses")


    // To add the course in single storage only
    const addCourse = (email:string,course:one_course,category:string) => {
        console.log(email,course,category);
        console.log(email,course,category);
        let userdata:userdetail1[] = JSON.parse(localStorage.getItem("userdata") ?? "null")
        let individual = userdata.filter((curEle)=>curEle.email==email)
        if(individual[0].courses==undefined){
            individual[0].courses = [course]
        }
        else{
            if(individual[0].courses.length==1){
                if(individual[0].courses[0].id!==course.id){
                    individual[0].courses.push(course)
                }
            }
            else{
                let bool = individual[0].courses.some((curEle)=>curEle.id==course.id)
                if(!bool){
                    individual[0].courses.push(course)
                }
            }
        }
        console.log(individual);
        console.log(userdata);
        // dispatch(enrollWishCourse(email,course,category))
        localStorage.setItem("userdata",JSON.stringify(userdata))
    }

    // If course is enrolled apply conditional styling
    const 
    handleEnrolled = (id?:string,email?:string) => {
        let bool = false
        console.log(id,email);
        console.log(bool);
        // let usercourses = JSON.parse(localStorage.getItem("usercourses"))   // we are getting enttire courses for a users
        let userdata:userdetail1[] = JSON.parse(localStorage.getItem("userdata") ?? "null" )
        console.log(userdata);
        let index = userdata.findIndex((curEle)=>curEle.email==email)
        console.log(index);
        if(userdata[index] && userdata[index].courses && index>=0){
            let some = userdata[index].courses.some((curEle)=>curEle.id==id)
            console.log(some);
            if(some) bool=true
        }
        return bool
    }
    // console.log(handleEnrolled(final[0]));
  return (
    <Box sx={{bgcolor:"#F2F2F2",height:"100vh"}} >
        <Stack spacing={3} sx={{p:{xl:"7rem 10rem !important",lg:"7rem 10rem !important",md:"7rem 0rem !important",sm:"7rem 0rem !important",xs:"7rem 0rem !important",},
    // border:"2px solid",
    width:"90% !important",m:"auto !important"}} className="individual-section">
        <Button variant="contained" sx={{fontFamily:"sans-serif",width:"10rem",p:"0.4rem !important"}} onClick={()=>navigate(-1)}>Back</Button>
        <Paper elevation={4} sx={{p:"1.3rem !important",mt:"2rem !important",bgcolor:"#F2F2F2",display:"flex !important",justifyContent:"center !important",gap:"2rem !important"}} className="individual-div1" >
            <Stack spacing={2.5} sx={{alignItems:"center !important"}} className="individual-div11">
                <CardMedia
                sx={{width:"25rem",height:"13rem",borderRadius:"1rem"}}
                component="img" image={final[0].image} alt="" />
                {
                
                    userlogin ? (
                    bool || handleEnrolled(final[0].id,user[0].email) ? (
                        <p style={{color:"green", fontWeight:"600"}}>Enrolled</p>
                    ) : (
                        <Button variant="contained" sx={{width:"10rem",p:"0.3rem !important",mt:"1rem !important"}}
                            className="btn btn-primary"
                            onClick={(e) => {
                            e.stopPropagation();
                            // handleUserCourse(final[0]);
                            addCourse(user[0].email,final[0],"addcourse")
                            setBool(true)
                            // dispatch(toggleSignUp("hy"));
                            }}
                        >
                            {bool || handleEnrolled(final[0]) ? "enrolled":"enroll now"}
                        </Button>
                    )
                    ) : (
                    <Button variant="contained" sx={{fontFamily:"sans-serif",width:"10rem !important",p:"0.4rem !important",mt:"1rem !important"}}
                        // className="btn btn-primary"
                        onClick={(e) => {
                        e.stopPropagation();
                        dispatch(toggleSignUp("hy"));
                        dispatch(toggleSignIn(false));
                        // dispatch(isUserExists(false))
                        }}
                    >
                        Enroll now
                    </Button>
                    )
                
                }
            </Stack>
            <div style={{textAlign:"left"}} >
                <Typography variant="body1" sx={{fontFamily:"sans-serif",lineHeight:"2.3rem",color:"grey"}} > <Box component="span" sx={{color:"black",fontWeight:"700",fontSize:"1.2rem"}} >course name</Box> : {final[0].name}</Typography>
                <Typography variant="body1" sx={{fontFamily:"sans-serif",lineHeight:"2.3rem",color:"grey"}} > <Box component="span" sx={{color:"black",fontWeight:"700",fontSize:"1.2rem"}} >Instructor :</Box> {final[0].instructor}</Typography>
                <Typography variant="body1" sx={{fontFamily:"sans-serif",lineHeight:"2.3rem",color:"grey"}} > <Box component="span" sx={{color:"black",fontWeight:"700",fontSize:"1.2rem"}} >Description :</Box> {final[0].description}</Typography>
                <Typography variant="body1" sx={{fontFamily:"sans-serif",lineHeight:"2.3rem",color:"grey"}} > <Box component="span" sx={{color:"black",fontWeight:"700",fontSize:"1.2rem"}} >Location :</Box> {final[0].location}</Typography>
                <Typography variant="body1" sx={{fontFamily:"sans-serif",lineHeight:"2.3rem",color:"grey"}} > <Box component="span" sx={{color:"black",fontWeight:"700",fontSize:"1.2rem"}} >Price :</Box> {final[0].price} ₹</Typography>
                <Typography variant="body1" sx={{fontFamily:"sans-serif",lineHeight:"2.3rem",color:"grey"}} > <Box component="span" sx={{color:"black",fontWeight:"700",fontSize:"1.2rem"}} >Rating :</Box>⭐{final[0].rating}</Typography>
                <Typography variant="body1" sx={{fontFamily:"sans-serif",lineHeight:"2.3rem",color:"grey"}} > <Box component="span" sx={{color:"black",fontWeight:"700",fontSize:"1.2rem"}} >ReviewCount :</Box> {final[0].reviewCount} Students</Typography>
            </div>
        </Paper>
    </Stack>
    </Box>
  )
}

export default OneDetail