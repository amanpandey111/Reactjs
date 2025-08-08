import { data, NavLink } from "react-router-dom"
import "./component.css"
import { useEffect, useState } from "react"
import { deleteData, fetchData } from "../axios/CrudOperate"

const StudentTable = () => {
    const[students,setStudent] = useState([])
    const getMyData = async() => {
        let res = await fetchData()
        // let asc = res.data.arrayOfObject.sort((a,b)=>a.id-b.id)
        // console.log(res.data);
        // console.log(asc);
        setStudent(res.data)
    }

    useEffect(()=>{
        getMyData()
    },[])

    let res = [...students].sort((a,b)=>a.id-b.id)

  const removeDetail = (id) => {
    console.log("Let's Remove the Data",id);
    deleteData(id)
    window.location.reload()
  }

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