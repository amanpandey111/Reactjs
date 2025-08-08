//todo : importing actions
import { addcourse, addlocaldata, signuptoggle,signintoggle,exists,loginuser,deletecourse} from "./action"

//! getting the course json data
import mycourse from "./api/mycourse.json"
import { configureStore } from '@reduxjs/toolkit'



//! preparing my state where all the data will be there
let initialstate = {
    mycourse,   //here all my data
    course_array:[],   // course data
    alldata:[],      // all the data
    signup:false,    //signup toggle based on boolean 
    userexists:false, //to check whether user exists in local storage or not
    signin:false,    //sigin toggle based on boolean
    currentId:"",     //getting the current Id when user click on particular category
    userlogin:false,   //if user credential put true else false so we can display logout and user logo,
    userdetail:[],      //here we will store the data of user who login
    usercourses:[],      //cusercourses after deletion anyway we won't use just for that our component get rendered
    wishcourse:[]     //! Will store the wishcourses
}

//! create reducer function so we can perform task
let stateReduce = (state=initialstate,action) => {
    switch (action.type) {
        case addcourse:
            if(action.payload==true){
                return{
                    ...state,
                    course_array:action.payload,
                    currentId:"action.payload.id"
                }
            }else{
                return{
                    ...state,
                    course_array:action.payload.courses,
                    currentId:action.payload.id
                }
            }
        case addlocaldata:
            return{
                ...state,
                alldata:action.payload
            }
        case signuptoggle:
            if(action.payload == false){
                console.log("I got executed");
                return{
                    ...state,
                    signup:false
                }
            }
            else if(action.payload=="hy"){
                console.log("else if got executed");
                return{
                    ...state,
                    signup:!state.signup
                }
            }
        case exists:
            return {
                ...state,
                userexists:action.payload
            }
        case signintoggle:
            if(action.payload=="toggle"){
                return{
                    ...state,
                    signin:!state.signin
                }
            }else{
                return{
                    ...state,
                    signin:false
                }
            }
        case loginuser:
            if(action.payload){
                return {
                    ...state,
                    userlogin:true,
                    signin:false,
                    userdetail:action.user
                }
            }else{
                return {
                    ...state,
                    userlogin:false
                }
            }
        case deletecourse:
            return {...state,
                usercourses:action.payload
            }
        
        default:
            return state
    }
}


//! creating my store using configureStore
const store = configureStore({
    reducer: stateReduce
})


//! Let's Create action creator

//todo : adding all courses related to a particular category
export const addArray = (data)=> {
    console.log(data);
    return {type:addcourse,payload:data}
}

//todo : getting the local storage data so in Login or anywhere in the app we can use
export const addLocalData = (data)=> {
    console.log("local data");
    return{type:addlocaldata,payload:data}
}

//todo : toggle signup button
export const toggleSignUp = (data)=> {
    console.log(data);
    return{type:signuptoggle, payload:data}
}

//todo : user exists or not
export const isUserExists = (bool) => {
    console.log(bool);
    return {type:exists,payload:bool}
}

//todo : let's toggle the login page
export const toggleSignIn = (data) => {
    console.log("let's toggle sign in button");
    console.log(data);
    return{type:signintoggle,payload:data}
}

//todo : Let's handle user login or logout
export const userLogin = (bool,user) => {
    console.log("user Logined");
    console.log(user);
    return{type:loginuser,payload:bool,user}
}

//todo : Let's handle the courses for a prticualr user
export const deleteCourse = (data,userdetail) =>{
    const usercourses = JSON.parse(localStorage.getItem("usercourses"))
    console.log(usercourses);
    console.log(data);
    console.log(userdetail);
    console.log("hy");
    let userreplace = usercourses.filter((curEle)=>curEle.useremail==userdetail[0].email)
    if(userreplace){
        console.log(userreplace);
        console.log(userreplace[0].usercourse);
        userreplace[0].usercourse = userreplace[0].usercourse.filter((curEle)=>curEle.id!==data.id)
        console.log(userreplace[0].usercourse);
        console.log(userreplace);
        let i = usercourses.findIndex((curEle)=>curEle.useremail==userdetail[0].email)
        console.log(i);
        usercourses[i]=userreplace[0]
        console.log(usercourses);
    }
    localStorage.setItem("usercourses",JSON.stringify(usercourses))
    return{type:deletecourse,payload:usercourses}
}

//todo : Let's write logic to enroll the courses for a particular user


export default store 