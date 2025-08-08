import { data, NavLink } from "react-router-dom"
import "./component.css"
import { useEffect, useState } from "react"

const StudentTable = () => {
  const[students,setStudent] = useState([])

  const fetchMyApi = async() => {
    let data = await fetch("http://localhost:3000/students")
    data =await data.json()
    setStudent(data)
  }
  useEffect(()=>{
    fetchMyApi()
  },[])
  console.log(students);
  const removeDetail = (id) => {
    console.log("Let's Remove the Data",id);
    if(window.confirm("are you sure you want to delete")){
      fetch(`http://localhost:3000/students/${id}`,{
        method:"DELETE",
      })
      .then((res)=>{
        alert("removed data successfully")
        window.location.reload()
      })
    }
  }
  return (
    students.length>=1 ? <div className="container studenttable">
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
              students.map((item)=><tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.place}</td>
              <td>{item.phone}</td>
              <td>
                <NavLink to={`/student/view/${item.id}`} className="btn btn-info" style={{color:"white"}}>View</NavLink>
                <NavLink to={`/student/edit/${item.id}`} className="btn btn-primary" style={{color:"white"}}>Edit</NavLink>
                <NavLink onClick={()=>removeDetail(item.id)} className="btn btn-danger" style={{color:"white"}}>Delete</NavLink>
              </td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </div> : <h1>Lading Data</h1>
  )
}

export default StudentTable