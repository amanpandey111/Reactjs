import { useDispatch, useSelector } from "react-redux"
import { deleteEmployee, getEmployee } from "../counterSlice";
import { useEffect, useState } from "react";
import EmployeeDisplay from "../employees/EmployeeDisplay";
import '../employee.css'
import AddEditEmployee from "./AddEditEmployee";

const EmployeeDetail = () => {
  const employee = useSelector((state)=>state.MyCounter.employee)
  const[formType, setFormType] = useState({
    type:"",
    data:{}
  })
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getEmployee())
  },[])
  function handleAddEmployee(){
    setFormType((prev)=>({...prev,type:"add"}))
  }
  return (
    <div className="mainemployeediv" >
      <div className="employeeheader" >
        <h2>Employee Details</h2>
        <button onClick={()=>handleAddEmployee()} >Add Employee</button>
      </div>
      <div>
        { formType.type && <AddEditEmployee formType={formType} setFormType={setFormType} /> }
      </div>
      <div>
        <EmployeeDisplay employee={employee} setFormType={setFormType} />
      </div>
    </div>
  )
}

export default EmployeeDetail