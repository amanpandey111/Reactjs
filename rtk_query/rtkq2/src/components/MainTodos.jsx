import { useState } from "react"
import { useAddTodoMutation, useDeleteTodoMutation, useEditTodoMutation, useGetAllTodoQuery, useLazyGetTodoQuery } from "../store3/apiSlice"
import "./component.css"

const MainTodos = () => {
    const[editdata, setEditData] = useState({
        completed:false,
        id:"1",
        todo:"",
        userId:120
    })

    const mydata = useGetAllTodoQuery()
    const [deleteFunc, restdata] = useDeleteTodoMutation()
    const [editFunc, restdata1] = useEditTodoMutation()
    const [trigger, result] = useLazyGetTodoQuery()
    const [adddata, restdata2] = useAddTodoMutation()
    console.log(result.data);

    const allTodos = mydata?.data?.todos
    function handleDelete(id){
        console.log("object");
        deleteFunc(id)
    }
    // console.log(editdata);

    function handleInputChange(e){
        const {name,value} = e.target
        setEditData((prev)=>({...prev,[name]:value}))
    }

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(editdata);
        editFunc(editdata)
        // adddata(editdata)
    }
  return (
    <section>
        <form onSubmit={handleFormSubmit} >
            <div>
                <input type="text" value={editdata.todo} name="todo" onChange={(e)=>handleInputChange(e)} />
                {/* <input type="text" value={editdata.id} name="id" onChange={(e)=>handleInputChange(e)} /> */}
                <button>Add</button>
            </div>
        </form>
        <ul>
            {
            allTodos?.map((todo)=>{
                    return(
                        <li key={todo.id} >
                            <p>{todo.todo}</p>
                            <button onClick={()=>handleDelete(todo.id)} >delete</button>
                            <button onClick={()=>setEditData(todo)} >Edit</button>
                            <button onClick={()=>trigger(todo.id)} >Get</button>
                        </li>
                    )
                })
            }
        </ul>
    </section>
  )
}

export default MainTodos