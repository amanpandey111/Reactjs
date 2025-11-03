import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEmployee } from '../counterSlice'

const EmployeeDisplay = ({employee,setFormType}) => {
  const dispatch = useDispatch()

  function handleDeleteEmployee(id){
    console.log(id)
    dispatch(deleteEmployee(id))
  }

  function handleFormType(curEmpl){
    setFormType({
      type:"edit",
      data:curEmpl
    })
  }
  return (
    <div className='parentdiv' >
      {
        employee?.map((curEmpl,index)=>{
          return(
            <div key={index} >
              <p>Employee Id : {curEmpl.id}</p>
              <p>Employee Name : {curEmpl.name}</p>
              <p>Employee Role : {curEmpl.role}</p>
              <div>
                <button onClick={()=>handleFormType(curEmpl)} >Edit</button>
                <button onClick={()=>handleDeleteEmployee(curEmpl.id)} >Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default EmployeeDisplay