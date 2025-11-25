import React, { useEffect, useState } from 'react'
import axios from 'axios'


const newEmployee = {
  id: String(Date.now()),
  name: "rohith kotla"
}

const editEmployee = {
  id: 1763993825292,
  name: "Venkat"
}

const base = axios.create({
  baseURL: 'http://localhost:3000/'
})

const Fetching2 = () => {
  const [data, setData] = useState([])

  async function getApiData() {
    const { data: res } = await base.get("employees")
    setData(res)
  }

  async function postData(newEmployee){
    try {
      const res = await base.post(`employees/`, newEmployee)
      getApiData()
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  async function putData(editEmployee){
    try {
      const res = await base.put(`employees/${editEmployee.id}`,editEmployee)
      getApiData()
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteData(id){
    try{
      const res = await base.delete(`employees/${id}`)
      getApiData()
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getApiData()
  }, [])
  console.log(data)
  return (
    <div>
      <button onClick={() => postData(newEmployee)} >Add Employee</button>
      {
        data.map((curEmp) => {
          return <div key={curEmp.id} >
            <h1>Id is : {curEmp.id}</h1>
            <h2>Name of the EMployee is : {curEmp.name}</h2>
            <button onClick={() => putData(editEmployee)} >edit</button>
            <button onClick={() => deleteData(2)} >delete</button>
          </div>
        })
      }
    </div>
  )
}

export default Fetching2
