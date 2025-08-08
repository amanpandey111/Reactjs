import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/UserDetailSlice';
import { useNavigate } from 'react-router-dom';
import "./style.css"

const Create = () => {
    const dispatch = useDispatch()                 //! to call the asynchronous or synchronous function
    const navigate = useNavigate()

    const[users,setUsers] = useState({
      name:"",
      email:"",
      age:"",
    })           //! to get the form data
    const[error,setError] = useState({})

    const getUserData = (e) => {                   //! it is executing for every onchange
        const{name,value} = e.target
        let data = {...users,[name]:value}
        setUsers((prev)=>({...prev,[name]:value}))
        console.log(data);
        let error1 = validateForm(data)
        console.log(error1);
        console.log(Object.keys(error1));
        setError(error1)
    }
    console.log(users);

    const handleKeyDown = (e) => {
    // Prevent 'e', 'E', '+', '-' characters
    if (['e', 'E', '+', '-'].includes(e.key)) {
      e.preventDefault();
    }
  };

    //! Let's Validate the Form
    const validateForm = (data) => {
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      console.log(data.age);
      
      let error = {}
      //  if(users.name==undefined || users.name==""){
      //     error.name="enter your name";
      //   }
      if(data.name==undefined || data.name==""){
        error.name="enter your name";
      }
      // if(users.email==undefined || users.email=="") {
      //   error.email="email is mandatory"
      // }
      if(data.email==undefined || data.email==""){
        error.email="email is mandatory"
      }
      else if(data.email.length>=1){
        console.log("something there");
        if(!regex.test(data.email)){
          error.email="email format is wrong"
        }
      }
      
      if(data.age==undefined || data.age=="") {error.age="age is mandatory"}
      console.log(users.age);
      if(data.age>=100){
        console.log("age is more");
        setUsers((prev)=>({...prev,age:100}))
      }   
      
      // if(users.gender==undefined || users.gender!=="Male" || users.gender!=="Female") error.gender="select gender"
      if(data.gender==undefined || data.gender!=="Male" || data.gender!=="Female") error.gender="select gender"

      // if(users.gender=="Male" || users.gender=="Female") delete error.gender
      if(data.gender=="Male" || data.gender=="Female") delete error.gender
        
      return error
    }

    const handleSubmit = (e) => {                  //! Onsubmit of form
        e.preventDefault()
        console.log(users);
        let error1 = validateForm(users)
        console.log(error1);
        console.log(Object.keys(error1));
        setError(error1)
        if(Object.keys(error1).length==0) {dispatch(createUser(users));navigate("/read")};
    }
  return (
    <div>
      <h2 className="my-2">Fill the data</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder='enter name'
            autoComplete='off'
            onChange={getUserData}
            // required
          />
          <p style={{color:"red"}} >{error.name}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            autoComplete='off'
            type="email"
            name="email"
            className="form-control"
            placeholder='enter email address'
            onChange={getUserData}
            // required
          />
           <p style={{color:"red"}}>{error.email}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            autoComplete='off'
            value={users.age}
            onChange={getUserData}
            placeholder='enter age'
            onKeyDown={handleKeyDown}
            // required
          />
           <p style={{color:"red"}}>{error.age}</p>
        </div>
        <div className="take-gender mb-3">
          <h6 style={{color:"black", fontWeight:"600"}} >Gender :</h6>
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
            // required
          />
          <label className="form-check-label">Male</label>
           <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <p style={{color:"red", position:"relative", bottom:"1.2rem"}}>{error.gender}</p>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create