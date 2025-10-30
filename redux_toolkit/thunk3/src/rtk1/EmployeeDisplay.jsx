import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEmployee } from './counterSlice'

const EmployeeDisplay = ({employee}) => {
  const dispatch = useDispatch()
  dispatch(deleteEmployee(1))
  return (
    <div className='parentdiv' >
      {
        employee?.map((curEmpl,index)=>{
          return(
            <div key={index} >
              <p>Employee Id : {curEmpl.employeeid}</p>
              <p>Employee Name : {curEmpl.name}</p>
              <p>Employee Role : {curEmpl.role}</p>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default EmployeeDisplay