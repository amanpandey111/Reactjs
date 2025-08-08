import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom'

const ViewDetails = () => {
  // const id = useParams()
  // console.log(id.studentid);
  const {studentid} = useParams()                  //! Getting student id
  console.log(studentid);
  const[studentData,setStudentData] = useState(null)
  const getUserData = async() => {
    console.log("let's get user data of id ",studentid);
    let data = await fetch("http://localhost:3000/students")
    data = await data.json()
    let one = data.filter((curEle)=>curEle.id==studentid)
    console.log(one);
    setStudentData(...one)
  }
  useEffect(()=>{
    getUserData()
  },[])
  return (
    
      studentData ? <div className="container student-detail">
        <h1>Student Details</h1>
        <div className="details">
          <p><strong>ID:</strong> {studentData.sid}</p>
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Place:</strong> {studentData.place}</p>
          <p><strong>Phone:</strong> {studentData.phone}</p>
        </div>
        <NavLink className="btn btn-danger" to="/" >Back</NavLink>
      </div> : <p>Loading</p>
    
  )
}

export default ViewDetails