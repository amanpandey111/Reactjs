import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, updateData } from '../counterSlice'
import { toast } from 'react-toastify'

function checkIdThere(employee, value) {
  let bool = employee.some((curEle) => curEle.id == value)
  return bool
}

const AddEditEmployee = ({ formType, setFormType }) => {
  console.log(formType)

  const [formdata, setFormData] = useState({
    id: formType.type=="edit" ? formType.data.id : "",
    name: formType.type=="edit" ? formType.data.name : "",
    role: formType.type=="edit" ? formType.data.role : ""
  })
  const [error, setError] = useState({})
  const employee = useSelector((state) => state.MyCounter.employee)
  const dispatch = useDispatch()

  function handleInputChange(e) {
    const { name, value } = e.target
    let boolId;
    if (name == "id") {
      boolId = checkIdThere(employee, value)
      console.log(boolId)
      if (boolId) {
        console.log("let's set erro")
        setError((prev) => ({ ...prev, id: "ID already exists" }))
      } else {
        setError((prev) => {
          const { id, ...rest } = prev
          return rest
        })
      }
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    let canWePass = true
    if (formdata.id.trim().length < 1) {
      setError((prev) => ({ ...prev, id: "Id is Mandatory" }))
      canWePass = false
    } else {
      let bool = employee.some((curEmp) => curEmp.id == formdata.id)
      if (bool) {
        console.log("hey")
        setError((prev) => ({ ...prev, id: "ID already Exists" }))
      } else {
        console.log("come here")
      }
    }
    if (formdata.name.trim().length < 1) {
      setError((prev) => ({ ...prev, name: "Name Of the Employee is mandatory" }))
      canWePass = false
    } else {
      setError((prev) => {
        const { name, ...rest } = prev
        canWePass = canWePass === false ? false : true
        console.log(rest)
        return rest
      })
    }
    if (formdata.role.trim().length < 1) {
      setError((prev) => ({ ...prev, role: "Name Of the Employee is mandatory" }))
      canWePass = false
    } else {
      setError((prev) => {
        const { role, ...rest } = prev
        canWePass = canWePass === false ? false : true
        return rest
      })
    }
    if (canWePass && !error.id) {
      console.log("Yes we can pass the data", formdata)
      if(formType.type=="edit"){
        dispatch(updateData(formdata))
        toast("Data Updated Successfully")
        setFormType({type:"",data:""})
      }else{
        dispatch(addData(formdata))
        toast("Data Added Successfully")
        setFormType({type:"",data:""})
      }
      // dispatch(addData(formdata))
      // setFormData({
      //   id: "",
      //   name: "",
      //   role: ""
      // })
    }
  }
  console.log(error)
  return (
    <div className='formdiv' >
      <form onSubmit={(e) => handleFormSubmit(e)} >
        <div>
          <input disabled = {formType.type=="edit"} type="number" placeholder='Enter Id' name='id' value={formdata.id} onChange={(e) => handleInputChange(e)} />
          {error?.id && <p style={{ color: "red", margin: "0px", marginTop: "5px" }} >{error.id}</p>}
        </div>
        <div>
          <input type="text" placeholder='Employee Name' name='name' value={formdata.name} onChange={(e) => handleInputChange(e)} />
          {error?.name && <p style={{ color: "red", margin: "0px", marginTop: "5px" }} >{error.name}</p>}
        </div>
        <div>
          <input type="text" placeholder='Employee Role' name='role' value={formdata.role} onChange={(e) => handleInputChange(e)} />
          {error?.role && <p style={{ color: "red", margin: "0px", marginTop: "5px" }} >{error.role}</p>}
        </div>
        <div>
          <button type='submit' >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddEditEmployee
