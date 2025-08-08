import { createSlice } from "@reduxjs/toolkit";
import mycourse from "../api/mycourse.json"         // importing my entire course

const userSlice = createSlice({
    name:"userSlice",
    initialState : {
        mycourse,               // here all my data categories and their courses
        course_array:[],        // Individual category courses
        alldata:[],             // all the data
        signup:false,           //signup toggle based on boolean 
        userexists:false,       // to check whether user exists in local storage or not
        signin:false,           //sigin toggle based on boolean
        currentId:"",           //getting the current Id when user click on particular category
        userlogin:false,        //if user credential put true else false so we can display logout and user logo,
        userdetail:[],          //here we will store the data of user who login
        usercourses:[],         //cusercourses after deletion anyway we won't use just for that our component get rendered
        inputText:"",           // to toggle the ul 
        userinput:false,        // to toggle among the input(which search all courses) and input(which searches user enrolled and wishlist courses)
        userinputtext:""        // userInput for the specific user to search their enrolled courses and wishlist courses 
    },
    reducers:{
        addArray:(state,action)=>{
            console.log(action.payload);
            if(action.payload==true){                     // The reason why we use if because if user click on logo I need to display the entire courses
                return{
                    ...state,
                    course_array:action.payload,
                    currentId:"action.payload.id"
                }
            }else{                                        // else we will display the courses related to that categories
                return{
                    ...state,
                    course_array:action.payload.courses,
                    currentId:action.payload.id
                }
            }
        },
        addLocalData:(state,action)=>{
            return{
                ...state,
                alldata:action.payload
            }
        },
        // while Signup cecking whether user exists or not
        isUserExists:(state,action)=>{
            return {
                ...state,
                userexists:action.payload
            }
        },
        toggleSignUp:(state,action)=>{
            console.log(action.payload);
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
        },
        toggleSignIn:(state,action)=>{
            console.log("let's toggle sign in button");
             console.log(action.payload);
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
        },
        userLogin:(state,action)=>{
            console.log(action.payload[1]);
            if(action.payload[1]){
                return {
                    ...state,
                    userlogin:true,
                    signin:false,
                    userdetail:action.payload[1]
                }
            }else{
                return {
                    ...state,
                    userlogin:false
                }
            }
        },
        setUserInput:(state,action)=>{
            return{
                ...state,
                userinput:action.payload
            }
        },
        setInputText:(state,action)=>{
            return{
                ...state,
                inputText:action.payload
            }
        },
        setInputText2:(state,action)=>{
            return {
                ...state,
                userinputtext:action.payload
            }
        }
    }
})

export default userSlice.reducer
export const { addArray,addLocalData,isUserExists,toggleSignUp,toggleSignIn,userLogin,setUserInput,setInputText,setInputText2 } = userSlice.actions