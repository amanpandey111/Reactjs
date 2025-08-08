import { NavLink, useNavigate } from "react-router-dom"
import "./component.css"
import { useState } from "react"

const CreateStudent = () => {
    const navigate = useNavigate()
    const[validation,setValidation] = useState(false)
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
        fetch("http://localhost:3000/students",{                                //! adding the data in our api
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedata)
        })
        .then((res)=> {
            alert("student data saved successfully")
            navigate("/")
        } )
        .catch((res)=>console.log(res.message))
    }
    // console.log(updatedata);
  return (
    <div className="container addnewstudent">
        <h2 style={{textAlign:"center", fontSize:"1.6rem"}}>Add New Student</h2>
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

export default CreateStudent