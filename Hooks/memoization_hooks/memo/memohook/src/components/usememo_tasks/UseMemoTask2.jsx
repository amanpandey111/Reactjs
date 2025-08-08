import React, { useMemo, useState } from 'react'

const users = ['Aman', 'Alex', 'Alfred', 'John', 'Mike', 'Jordan', 'Amelia'];

const UseMemoTask2 = () => {
    const[search,setSearch] = useState("")
    const searchedValue = useMemo(()=>{
            console.log("filtering users");
            return users.filter(user=>user.toLowerCase().includes(search.toLowerCase()))
    },[search])
  return (
    <div>
        <h1>Let's Apply Filtertaion</h1>
        <input type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)} />
        <h3>search :{search}</h3>
        <ul>
            {
                searchedValue.map((curEle)=>{
                    return <li>{curEle}</li>
                })
            }
        </ul>
    </div>
  )
}

export default UseMemoTask2