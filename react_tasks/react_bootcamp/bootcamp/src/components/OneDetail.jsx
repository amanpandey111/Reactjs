import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router"
import "./component.css"
import { toggleSignUp} from "../store";
// import { addcourse } from "../action";
import { useState } from "react";

const OneDetail = () => {
    let navigate = useNavigate()
    const userlogin = useSelector((state)=>state.userlogin)   //! to check whether user login or not 
    const user = useSelector((state)=>state.userdetail)       //! Getting the current user who is logged in
    const[bool,setBool] = useState(false)                     //! initially to set the enrolled if we click on enroll now

    let usercourses = JSON.parse(localStorage.getItem("usercourses"))   //! we are getting enttire courses for a users
    console.log(usercourses);
    let transformedUsers=[]
    if(usercourses!==null){
        transformedUsers = usercourses.map(user => ({                 //! here we are getting only email and their courses
        useremail: user.useremail,
        courses: user.usercourse.map(course => course.id)
        }));
    }

    console.log(transformedUsers);
    
    const dispatch = useDispatch()
    let id = useLoaderData()
    const mycourse = useSelector((state)=>state.mycourse)
    let final;  // In this variable we will be having our one individual data to be displayed 
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

    //! To add the courses
    // const handleUserCourse = (course) => {
    //     console.log(user);          //getting current user in array
    //     course.enrolled=false
    //     console.log(course);        //we are getting course in object
    //     let usercourses;
    //     // console.log(localStorage.getItem("usercourses"));
    //     //! storing the courses if the local storage is empty
    //     if(localStorage.getItem("usercourses") == null){
    //         console.log("let's store data");
    //         usercourses = [
    //             {
    //                 useremail:user[0].email,
    //                 usercourse:[
    //                     course
    //                 ]
    //             }
    //         ]
    //         localStorage.setItem("usercourses",JSON.stringify(usercourses))
    //     }
    //     //! If we have courses 
    //     else{
    //         let usercourses = JSON.parse(localStorage.getItem("usercourses"))    //let's Get the Data from our local storage
    //         console.log(usercourses);
    //         console.log(user);
    //         if(usercourses.length==1){                                           //If we have only one user then this will execute
    //             console.log("length is one");
    //             if(usercourses[0].useremail==user[0].email){
    //                 if(usercourses[0].usercourse.length==1){                         //If we have course length only one to one user
    //                     console.log("only one course");
    //                     console.log(usercourses[0].useremail);
    //                     console.log(user[0].email);
    //                     if(usercourses[0].usercourse[0].id==course.id){
    //                         console.log("course is same can't add");
    //                     }
    //                     else{
    //                         if(usercourses[0].useremail==user[0].email){            //ensuring if email same then only add course
    //                             console.log("we can add course");
    //                             console.log("user matches");
    //                             usercourses[0].usercourse.push(course)
    //                         }
    //                     }
    //                 }
    //                 else{                                                          //If a single user has more than one course
    //                     console.log("more than one course");
    //                     let curr_courses = usercourses[0].usercourse
    //                     console.log(curr_courses);
    //                     let bool = curr_courses.some((curEle)=>curEle.id==course.id)
    //                     if(bool){                                                   //If course already exists for a single user
    //                         console.log("course exists");
    //                     }
    //                     else{
    //                         if(usercourses[0].useremail==user[0].email){                                                      //If course doesn't exists for a single user
    //                             console.log("we can add course");
    //                             usercourses[0].usercourse.push(course)
    //                         }
    //                     }
    //                 }
    //             }
    //             //todo : here if we have length one and we got another email so we are just adding 
    //             else{
    //                 let addusercourse = {
    //                     useremail:user[0].email,
    //                     usercourse:[
    //                         course
    //                     ]
    //                 }
    //                 usercourses.push(addusercourse)
    //             }    
    //         }
    //         //todo : suppose the length of usercourse is not 1 means more than one users(email and their courses)
    //         else{
    //             console.log("welcome now we have more than one user");
    //             let s = usercourses.filter((curEle)=>curEle.useremail==user[0].email)    //check if email there in our usercourses or not
    //             if(s.length>=1){
    //                 console.log(s);
    //                 console.log("email exists we can add course");
    //                 let c = s[0].usercourse.some((curEle)=>curEle.id==course.id)
    //                 if(c){
    //                     console.log("course already exists");
    //                 }else{
    //                     console.log("we can add course");
    //                     let index = usercourses.findIndex((curEle)=>curEle.useremail==user[0].email)     //! finding index so we can add course for a prticular index
    //                     console.log(index);
    //                     usercourses[index].usercourse.push(course)
    //                 }
    //             }
    //             else{
    //                 let addusercourse = {
    //                     useremail:user[0].email,
    //                     usercourse:[
    //                         course
    //                     ]
    //                 }
    //                 usercourses.push(addusercourse)
    //             }
    //         }
    //         console.log(usercourses);
    //         localStorage.setItem("usercourses",JSON.stringify(usercourses))      //todo : At last we are adding courses to local storage
    //     }
    //     // console.log(usercourses);
    // }
    // localStorage.removeItem("usercourses")
    // localStorage.removeItem("enrolledcourses")


    //todo : To add the course in single storage only
    const addCourse = (email,course,category) => {
        console.log(email,course,category);
        console.log(email,course,category);
        let userdata = JSON.parse(localStorage.getItem("userdata"))
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

    //! If course is enrolled apply conditional styling
    const handleEnrolled = (id,email) => {
        let bool = false
        console.log(id,email);
        console.log(bool);
        // let usercourses = JSON.parse(localStorage.getItem("usercourses"))   //! we are getting enttire courses for a users
        let userdata = JSON.parse(localStorage.getItem("userdata"))
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
    <section className="individual-section">
        <button onClick={()=>navigate(-1)} className="btn btn-primary">Back</button>
        <div className="individual-div1" >
            <div className="individual-div11">
                <img src={final[0].image} alt="" />
                {
                
                    userlogin ? (
                    bool || handleEnrolled(final[0].id,user[0].email) ? (
                        <p style={{color:"green", fontWeight:"600"}}>Enrolled</p>
                    ) : (
                        <button
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
                        </button>
                    )
                    ) : (
                    <button
                        className="btn btn-primary"
                        onClick={(e) => {
                        e.stopPropagation();
                        dispatch(toggleSignUp("hy"));
                        
                        // dispatch(isUserExists(false))
                        }}
                    >
                        Enroll now
                    </button>
                    )
                
                }
            </div>
            <div>
                <p> <span>course name</span> : {final[0].name}</p>
                <p> <span>Instructor :</span> {final[0].instructor}</p>
                <p> <span>Description :</span> {final[0].description}</p>
                <p> <span>Location :</span> {final[0].location}</p>
                <p> <span>Price :</span> {final[0].price} ₹</p>
                <p> <span>Rating :</span>⭐{final[0].rating}</p>
                <p> <span>ReviewCount :</span> {final[0].reviewCount} Students</p>
            </div>
        </div>
    </section>
  )
}

export default OneDetail