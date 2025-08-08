import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router"
import "./component.css"
// import { toggleSignUp} from "../store";
// import { addcourse } from "../action";
import { useState } from "react";
import { toggleSignUp } from "../features/UserSlices";

const OneDetail = () => {
    let navigate = useNavigate()
    const userlogin = useSelector((state)=>state.app.userlogin)   // to check whether user login or not 
    const user = useSelector((state)=>state.app.userdetail)       // Getting the current user who is logged in
    const[bool,setBool] = useState(false)                         // initially to set the enrolled if we click on enroll now
    console.log(userlogin);
    
    const dispatch = useDispatch()
    // let id = useLoaderData()
    let {id} = useParams()
    console.log(id);
    const mycourse = useSelector((state)=>state.app.mycourse)
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
        console.log(final[0]);
    }


    // To add the course in single storage only
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

    // If course is enrolled apply conditional styling
    const handleEnrolled = (id,email) => {
        let bool = false
        console.log(id,email);
        console.log(bool);
        // let usercourses = JSON.parse(localStorage.getItem("usercourses"))   // we are getting enttire courses for a users
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
                    ) :
                     (
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