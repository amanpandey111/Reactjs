import { NavLink } from "react-router-dom"
import "./component.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { deleteStudent, fetchStudent } from "../reduxtoolkit/StudentSlice"
// import { useEffect, useState } from "react"
// import { deleteData, fetchData } from "../axios/CrudOperate"

const StudentTable = () => {
  const dispatch = useDispatch()

  const removeDetail = (id) => {
    console.log("Let's Remove the Data",id);
    dispatch(deleteStudent(id))
    window.location.reload()
  }
   let students = useSelector((state)=>state.studentSlice.student)
   console.log(students);
   let res = [...students].sort((a,b)=>a.id-b.id)                     //! Let's sort the array based on id of their object
   console.log(res);
   useEffect(()=>{
    dispatch(fetchStudent())
   },[])

  return (
    <div className="container studenttable">
      <h2 className="text-center">Student Records</h2>
      <div className="table-container">
        <NavLink to="/student/create" className="btn btn-add text-white" style={{backgroundColor:"#614974"}}>Add new Student</NavLink>
        <table className="student-table">
          <thead>
            <tr style={{backgroundColor:"#614974", color:"white"}}>
              <th>ID</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              res.map((item,index)=><tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.place}</td>
              <td>{item.phone}</td>
              <td>
                <NavLink to={`/student/view/${item.id}`} className="btn btn-info" style={{color:"white"}}>View</NavLink>
                <NavLink to={`/students/edit/${item.id}`} className="btn btn-primary" style={{color:"white"}}>Edit</NavLink>
                <NavLink onClick={()=>removeDetail(item.id)} className="btn btn-danger" style={{color:"white"}}>Delete</NavLink>
              </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentTable