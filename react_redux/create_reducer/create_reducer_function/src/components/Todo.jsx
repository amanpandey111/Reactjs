import "./todo.css"
import { useSelector,useDispatch } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { addTask, deleteTask, fetchTask } from "../store";

export const Todo = ()=> {
    const[task,setTask] = useState("")

    // const state = useSelector((state)=>state)
    const tasks = useSelector((state)=>state.task)
    const dispatch = useDispatch()
    // console.log(state);
    // console.log(state.task);

    const handleFormSubmit = (e)=> {
        e.preventDefault()
        dispatch(addTask(task))
        return setTask("")
    }

    const handleDeleteTask = (index)=>{
        console.log(index);
        return dispatch(deleteTask(index))

    }

    const handleFetchtask = ()=> {
        dispatch(fetchTask())
    }
    
    return <>
       <section>
         <div>
            <div>
                <h1>To-do List :</h1>
                <div>
                    <form onSubmit={handleFormSubmit} >
                        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
                        <button>Add Task</button>
                    </form>
                </div>
            </div>
            <button onClick={handleFetchtask}>Fetch Task</button>
            <div>
                <ul className="ul-class">
                    {
                        tasks.map((curEle,index)=>{
                            return <li key={index}>
                                <p>{index}</p>
                                <p>{curEle}</p>
                                <MdDelete onClick={()=>handleDeleteTask(index)} />
                            </li>
                        })
                    }
                </ul>
            </div>
         </div>
       </section>
    </>
}