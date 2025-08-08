import { NavLink, useNavigate } from "react-router-dom"
import "./component.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchStudent, storeStudent } from "../reduxtoolkit/StudentSlice"
// import { addData, fetchData } from "../axios/CrudOperate"

const CreateStudent = () => {
    const dispatch = useDispatch()
    const student = useSelector((state)=>state.studentSlice.student)
    console.log(student);
    const navigate = useNavigate()
    // const[student,setStudent] = useState([])
    const[error,setError] = useState({})
    const[validation,setValidation] = useState(false)
    const[updatedata,setUpdateData] = useState({
        id:"",
        name:"",
        place:"",
        phone:""
    })

    // ! getting the students data
    useEffect(()=>{
        dispatch(fetchStudent())
    },[])

    //todo applying changes for every type
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
                // console.log("Let's do the changes in phone number");
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
                let bool = student.some((item)=>item.id==value)
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
        console.log(updatedata);
        let e1 = Object.keys(error)
        console.log(e1);
        if(!e1.length>=1){
            // addData(updatedata)
            dispatch(storeStudent(updatedata))
            navigate("/")
            window.location.reload()
        }
        // navigate("/")
        // window.location.reload()
    }
    
    console.log(error);
    // console.log(updatedata);
    // console.log(validation);
  return (
    <div className="container addnewstudent">
        <h2 style={{textAlign:"center", fontSize:"1.6rem"}}>Add New Student</h2>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="id">ID:</label> <br />
            <input type="number" id="id" name="id" required autoComplete="off" value={updatedata.id} onChange={handleInputChange}
            onKeyDown={(e) => {
                if (["e", "E", "+", "-"].includes(e.key)) {
                e.preventDefault();
                }
            }}
            /> <br />
            {updatedata.id.length==0 && validation ? <p>Enter Id</p> : (error.id ? <p>{error.id}</p> : "" ) }
            {/* {updatedata.id.length==0 && validation && <p>Enter Id</p>} */}

            <label>Name:</label> <br />
            <input type="text" pattern="[A-Za-z]+" id="id" name="name" required autoComplete="off" value={updatedata.name} onChange={handleInputChange} /> <br />
            {updatedata.name.length==0 && validation && <p>Enter name</p>}

            <label >Place:</label> <br />
            <input type="text" id="id" name="place" required autoComplete="off" value={updatedata.place} onChange={handleInputChange} /> <br />
            {updatedata.place.length==0 && validation && <p>enter place</p>}

            <label >Phone:</label> <br />
            <input type="number" id="id" name="phone" required autoComplete="off" value={updatedata.phone} onChange={handleInputChange} 
            onKeyDown={(e) => {
                if (["e", "E", "+", "-"].includes(e.key)) {
                e.preventDefault();
                }
            }}
            />
            {updatedata.phone.length==0 && validation ? <p>enter phone</p> : updatedata.phone.length==10 && !error.phone ? " " : (updatedata.phone.length==0  || (error.phone ? <p>{error.phone}</p> : <p>enter phone</p>)) }

            <div style={{color:"white", marginTop:"1rem", display:"flex", gap:"0.5rem"}}>
                <button className="btn" style={{ backgroundColor:"#614974", color:"white"}}>Save</button>
                <NavLink to="/" className="btn btn-danger">Back</NavLink>
            </div>
        </form>
    </div>
  )
}

export default CreateStudent