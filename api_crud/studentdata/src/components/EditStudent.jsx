import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom"

const EditStudent = () => {
    const navigate = useNavigate()
  const {studentid} = useParams()                                     //! Getting the id of a student
  const[studentData,setStudentData] = useState(null)

  const getUserData = async() => {                                   //! here we will fetch the all data and from that matched data with received id
    console.log("let's get user data of id ",studentid);
    let data = await fetch("http://localhost:3000/students")
    data = await data.json()
    let one = data.filter((curEle)=>curEle.id==studentid)
    console.log(one);
    // setStudentData(...one)
    setUpdateData(...one)                                           //! Setting up the data in the form
  }

  useEffect(()=>{                                                  //! whenever render getting the current id data
    getUserData()
  },[])

  const[validation,setValidation] = useState(false)                //!
    const[updatedata,setUpdateData] = useState({
        id:"",
        name:"",
        place:"",
        phone:""
    })
    const handleInputChange = (e) => {
        let{name,value} = e.target
        if(value==" "){
            setUpdateData((prev)=>({...prev,[name]:""}))
        }
        else{
            setUpdateData((prev)=>({...prev,[name]:value}))
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(updatedata);
        fetch(`http://localhost:3000/students/${studentid}`,{                                //! adding the data in our api
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedata)
        })
        .then((res)=> {
            alert("student data updated successfully")
            navigate("/")
        } )
        .catch((res)=>console.log(res.message))
    }
  return (
    <div className="container addnewstudent">
        <h2 style={{textAlign:"center", fontSize:"1.6rem"}}>Edit Student Data</h2>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="id">ID:</label> <br />
            <input type="text" id="id" name="id" required value={updatedata.id} onChange={handleInputChange} onMouseDown={()=>setValidation(true)} /> <br />
            {updatedata.id.length==0 && validation && <p>Enter Id</p>}

            <label>Name:</label> <br />
            <input type="text" id="id" name="name" required value={updatedata.name} onChange={handleInputChange} onMouseDown={()=>setValidation(true)} /> <br />
            {updatedata.name.length==0 && validation && <p>Enter name</p>}

            <label >Place:</label> <br />
            <input type="text" id="id" name="place" required value={updatedata.place} onChange={handleInputChange} onMouseDown={()=>setValidation(true)} /> <br />
            {updatedata.place.length==0 && validation && <p>enter place</p>}

            <label >Phone:</label> <br />
            <input type="text" id="id" name="phone" required value={updatedata.phone} onChange={handleInputChange} onMouseDown={()=>setValidation(true)} />
            {updatedata.phone.length==0 && validation && <p>enter phone</p>}

            <div style={{color:"white", marginTop:"1rem", display:"flex", gap:"0.5rem"}}>
                <button className="btn" style={{ backgroundColor:"#614974", color:"white"}}>Save</button>
                <NavLink to="/" className="btn btn-danger">Back</NavLink>
            </div>
        </form>
    </div>
  )
}

export default EditStudent