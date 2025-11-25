import { useEffect, useState } from "react"

const newEmployee = {
  id: Date.now(),
  name: "srinivas"
}

const editEmployee = {
  id: 4,
  name: 'edited name'
}

const Fetching1 = () => {
  const[apiData, setApiData] = useState([])

  async function fetchAPi(){
    const res = await fetch("http://localhost:3000/employees")
    const data =await res.json()
    setApiData(data)
  }

  async function postApi(newEmployee){
    try {
      const res = await fetch("http://localhost:3000/employees",{
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newEmployee)
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function editApi(editEmployee){
    try{
      const res = await fetch(`http://localhost:3000/employees/${editEmployee.id}`,{
        method: "PUT",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(editEmployee)
      })
    }catch(error){
      console.log(error)
    }
  }

  async function deleteApi(id){
    try {
      const res = await fetch(`http://localhost:3000/employees/${id}`,{
        method: "DELETE",
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchAPi()
  },[])
  return (
    <div>
      <button onClick={()=>postApi(newEmployee)} >Add Employee</button>
      {
        apiData.map((curEmp)=>{
          return <div key={curEmp.id} >
            <h1>Id is : {curEmp.id}</h1>
            <h2>Name of the EMployee is : {curEmp.name}</h2>
            <button onClick={()=>editApi(editEmployee)} >edit</button>
            <button onClick={()=>deleteApi(1)} >delete</button>
          </div>
        })
      }
    </div>
  )
}

export default Fetching1