import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/UserDetailSlice";

const Update = () => {
  const[error,setError] = useState({})
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(id);
    const[updateData,setUpdateData] = useState();
    const{users,loading} = useSelector((state)=>state.app)
    console.log(users);

    //! Updating the current data (onchange)
    const newData = (e) => {
      let data = {...updateData,[e.target.name]:e.target.value}
      setUpdateData({...updateData,[e.target.name]:e.target.value})
      console.log(data);
      let error = validateForm(data)
      console.log(error);
      setError(error)
    }
    console.log(updateData);

    useEffect(()=>{
      if(id){
        const singleUser = users.filter((ele)=>ele.id==id)
        setUpdateData(singleUser[0])
      }
    },[])
    console.log(updateData);

    //! Let's validate the Edit Form
    const validateForm = (data) => {
      let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      console.log(data);
      let error = {}
      console.log(updateData);
      if(data){
        if(data.name==undefined || data.name==""){
          error.name="Enter name"
        } 
        if(data.email==undefined || data.email==""){
          error.email="Enter Email"
        } 
        else if(data.email.length>=1){
          console.log("the length is more than 1");
          if(!regex.test(data.email)){
            error.email="Format of Email is wrong"
          }
        }
        if(data.age==undefined || data.age==""){
          error.age="enter age"
        }
        
        else if(data.age>100){
          console.log("age is higher");
          setUpdateData((prev)=>({...prev,age:100}))
        } 
      }
      else{
        if(updateData.name==undefined || updateData.name==""){
        error.name="Enter name"
      } 
      if(updateData.email==undefined || updateData.email==""){
        error.email="Enter Email"
      } 
      else if(updateData.email.length>=1){
        console.log("the length is more than 1");
        if(!regex.test(updateData.email)){
          error.email="Format of Email is wrong"
        }
      }
      if(updateData.age==undefined || updateData.age==""){
        error.age="enter age"
      }
       
      else if(updateData.age>100){
        console.log("age is higher");
        setUpdateData((prev)=>({...prev,age:100}))
      } 
      }
      return error
    }

    //! finally submitting the updated data 
    const handleSubmit = (e) => {
      e.preventDefault()
      const error = validateForm()
      console.log(error);
      setError(error)
      if(Object.keys(error).length==0){
        dispatch(updateUser(updateData))
        navigate("/read")
      } 
      // dispatch(updateUser(updateData))
      // navigate("/read")
    }

  return (
    <div>
      <h2 className="my-2">Edit the data</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData && updateData.name}
            onChange={newData}
          />
          <p style={{color:"red"}}>{error.name}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData && updateData.email}
            onChange={newData}
          />
          <p style={{color:"red"}}>{error.email}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={updateData && updateData.age}
            onChange={newData}
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
            checked={updateData && updateData.gender === "Male"}
            onChange={newData}
          />
          <label className="form-check-label">Male</label>
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
    </div>
  );
};

export default Update;            