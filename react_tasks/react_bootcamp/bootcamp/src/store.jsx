//todo : importing actions
import { addcourse, addlocaldata, signuptoggle,signintoggle,exists,loginuser,addInputText,userinputbox,addInputText2} from "./action"

//! getting the course json data
import mycourse from "./api/mycourse.json"           //! importing my entire course
import { configureStore } from '@reduxjs/toolkit'


//! preparing my state where all the data will be there
let initialstate = {
    mycourse,   //todo : don't be confused this is imported
    course_array:[],   // course data
    alldata:[],      // all the data
    signup:false,    //signup toggle based on boolean 
    userexists:false, //to check whether user exists in local storage or not
    signin:false,    //sigin toggle based on boolean
    currentId:"",     //getting the current Id when user click on particular category
    userlogin:false,   //if user credential put true else false so we can display logout and user logo,
    userdetail:[],      //here we will store the data of user who login
    usercourses:[],      //cusercourses after deletion anyway we won't use just for that our component get rendered
    inputText:"",         // to toggle the ul 
    userinput:false,     //! to toggle among the input(which search all courses) and input(which searches user enrolled and wishlist courses)
    userinputtext:""
}

//! create reducer function so we can perform task
let stateReduce = (state=initialstate,action) => {
    switch (action.type) {
        //! Adding the courses related to category
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
        case addInputText:
            return{
                ...state,
                inputText:action.payload
            }
        case userinputbox:
            return{
                ...state,
                userinput:action.payload
            }
        case addInputText2:
            console.log(action.payload);
            return {
                ...state,
                userinputtext:action.payload
            }
        default:
            return state
    }
}


//  creating my store using configureStore
const store = configureStore({
    reducer: stateReduce
})


// Let's Create action creator

// todo : adding all courses related to a particular category
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

// todo : let's toggle the login page
export const toggleSignIn = (data) => {
    console.log("let's toggle sign in button");
    console.log(data);
    return{type:signintoggle,payload:data}
}

// todo : Let's handle user login or logout
export const userLogin = (bool,user) => {
    console.log("user Logined");
    console.log(user);
    return{type:loginuser,payload:bool,user}
}

//todo : Let's set the input text 
export const setInputText = (val) => {
    return{type:addInputText,payload:val}
}

//todo : this is setting up bool value so two input can toggle
export const setUserInput = (bool) => {
    return{type:userinputbox,payload:bool}
}

//todo : to store the second input value
export const setInputText2 = (val) => {
    console.log(val);
    return{type:addInputText2,payload:val}
} 

export default store 