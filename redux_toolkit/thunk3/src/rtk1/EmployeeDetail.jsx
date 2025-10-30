import { useDispatch, useSelector } from "react-redux"
import { deleteEmployee, getEmployee } from "./counterSlice";
import { useEffect } from "react";
import EmployeeDisplay from "./EmployeeDisplay";
import './employee.css'

const EmployeeDetail = () => {
  const employee = useSelector((state)=>state.MyCounter.employee)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getEmployee())
  },[])
  return (
    <div className="mainemployeediv" >
      <div className="employeeheader" >
        <h2>Employee Details</h2>
      </div>
      <div>
        <EmployeeDisplay employee={employee} />
      </div>
    </div>
  )
}

export default EmployeeDetail