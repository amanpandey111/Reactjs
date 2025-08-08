import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { addData, deleteData, fetchData, saveChange } from "../axios/CrudOperate";

const EditStudent = () => {
  const navigate = useNavigate()
  const[error,setError] = useState({})
  const[student,setStudent] = useState([])
  const {studentid} = useParams()                                     //! Getting the id of a student
  const getMyData = async() => {
          let res = await fetchData()
          // console.log(res.data);
          setStudent(res.data)
      }
  
      useEffect(()=>{
          getMyData()
      },[])
      // console.log(student);

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
            setValidation(false)
            setError((prev)=>({...prev,id:"enter your id"}))
            setUpdateData((prev)=>({...prev,[name]:""}))
         }
        else{
            setValidation(true)
            let res = updatedata.phone
            if(name=="phone"){
                console.log("Let's do the changes in phone number");
                if(updatedata.phone==""){
                    setError((prev)=>({...prev,phone:"Enter phone number"}))
                }
                if(value.length==1){
                    console.log("length is 1");
                    if(['6','7','8','9'].includes(value)){
                        delete error.phone
                        setError(error)
                    }else{
                        setError((prev)=>({...prev,phone:"starts with 6 or 7 or 8 or 9"}))
                    }
                }
                else if(value.length<10){
                    setError((prev)=>({...prev,phone:"length should be 10"}))
                }
                else if(value.length==10){
                    if(['6','7','8','9'].includes(value.slice(0,1))){
                        delete error.phone
                        setError(error)
                    }else{
                        setError((prev)=>({...prev,phone:"should starts with 6 or 7 or 8 or 9"}))
                    }
                }
            
                 
            }
            else if(name=="id"){
                console.log("Let's validate id",value);
                console.log(student);
                if(updatedata.id==" "){
                    console.log("nothing");
                }
                console.log(studentid);
                let bool = student.some((item)=>item.id==studentid ? "" : item.id==value)
                if(bool){
                    setError((prev)=>({...prev,id:"Id already exists"}))
                }else{
                    delete error.id
                    setError(error)
                }
            }
            else if(name=="name" || name=="place"){
                const onlyLetters = /^[A-Za-z\s]*$/;
                if (!onlyLetters.test(value)) {
                    if(value.length>1){
                        value=value.slice(0,value.length-1)
                    }else{
                        value=""
                    }
                }
            }
            setUpdateData((prev)=>({...prev,[name]: name=="phone" ? value.slice(0,10) : value}))
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(updatedata,studentid);
        if(updatedata.id==studentid){
          console.log("id matches");
          saveChange(studentid,updatedata)
          navigate("/")
          window.location.reload()
        }
        else{
          console.log("id does not matches",updatedata);
          addData(updatedata)
          deleteData(studentid)
          navigate("/")
          window.location.reload()
        }
    }
  return (
    <div className="container addnewstudent">
        <h2 style={{textAlign:"center", fontSize:"1.6rem"}}>Edit Student Data</h2>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="id">ID:</label> <br />
            <input type="number" id="id" name="id" required value={updatedata.id} onChange={handleInputChange} onMouseDown={()=>setValidation(true)} 
            onKeyDown={(e)=>{
                if(['E','e','+','-'].includes(e.key)){
                    e.preventDefault()
                }
            }}
            /> <br />
            {/* {updatedata.id.length==0 && validation && <p>Enter Id</p>} */}
            {updatedata.id.length==0 && validation ? <p>Enter Id</p> : (error.id ? <p>{error.id}</p> : "" ) }

            <label>Name:</label> <br />
            <input type="text" id="id" name="name" required value={updatedata.name} onChange={handleInputChange} onMouseDown={()=>setValidation(true)} /> <br />
            {updatedata.name.length==0 && validation && <p>Enter name</p>}

            <label >Place:</label> <br />
            <input type="text" id="id" name="place" required value={updatedata.place} onChange={handleInputChange} onMouseDown={()=>setValidation(true)} /> <br />
            {updatedata.place.length==0 && validation && <p>enter place</p>}

            <label >Phone:</label> <br />
            <input type="text" id="id" name="phone" required value={updatedata.phone} onChange={handleInputChange} onMouseDown={()=>setValidation(true)}
            onKeyDown={(e)=>{
                if(['e','E','+','-'].includes(e.key)){
                    e.preventDefault()
                }
            }}
            />
            {/* {updatedata.phone.length==0 && validation && <p>enter phone</p>} */}
            {updatedata.phone.length==0 && validation ? <p>enter phone</p> : updatedata.phone.length==10 && !error.phone ? " " : (updatedata.phone.length==0  || (error.phone ? <p>{error.phone}</p> : <p>enter phone</p>)) }


            <div style={{color:"white", marginTop:"1rem", display:"flex", gap:"0.5rem"}}>
                <button className="btn" style={{ backgroundColor:"#614974", color:"white"}}>Save</button>
                <NavLink to="/" className="btn btn-danger">Back</NavLink>
            </div>
        </form>
    </div>
  )
}

export default EditStudent