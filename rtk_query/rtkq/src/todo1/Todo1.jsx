// import { useEffect, useState } from "react"
// import axios from "axios"
// import TodoList from "./todo-item/TodoList";

// const Todo1 = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [data, setData] = useState([])
//     const [error, setError] = useState("")
//     useEffect(()=>{
//         setIsLoading(true)
//         let data = axios.get("https://dummyjson.com/todos")
//         .then((res)=>{setData(res?.data?.todos)})
//         .catch((err)=> { console.log("error"); setError("error occured")})
//         .finally(()=>{setIsLoading(false)})
//     },[])
//     console.log(data)
//     if(isLoading) return <h1>Data Loading...</h1>
//   return (
//     <section>
//         <h1>Let's Learn RTK query</h1>
//         <TodoList todos={data} />
//     </section>
//   )
// }

// export default Todo1


import { useEffect, useState } from "react"
import axios from "axios"
import TodoList from "./todo-item/TodoList";

const Todo1 = () => {
    // const [isLoading, setIsLoading] = useState(false);
    // const [data, setData] = useState([])
    // const [error, setError] = useState("")
    // useEffect(()=>{
    //     setIsLoading(true)
    //     let data = axios.get("https://dummyjson.com/todos")
    //     .then((res)=>{setData(res?.data?.todos)})
    //     .catch((err)=> { console.log("error"); setError("error occured")})
    //     .finally(()=>{setIsLoading(false)})
    // },[])
    // console.log(data)
    // if(isLoading) return <h1>Data Loading...</h1>
  return (
    <section>
        <h1>Let's Learn RTK query</h1>
        <TodoList/>
    </section>
  )
}

export default Todo1