import './todo.css'
import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import { addTask, deleteTask, fetchTask } from '../store';

const Todo = () => {
    const[work,setWork] = useState("")

    const task = useSelector((state)=>state.task)
    const dispatch = useDispatch()
    console.log(task);

    const handleFormSubmit = (e)=> {
        e.preventDefault()
        dispatch(addTask(work))
        return setWork("")
    }

    const handleDeleteTask = (id)=> {
        console.log(id);
        dispatch(deleteTask(id))
    }

    const handleFetchTask = ()=> {
        console.log("fetch executed");
        dispatch(fetchTask())
    }
  return (
    <section>
        <div><h1>Todo Using React Redux</h1></div>
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={work} onChange={(e)=>setWork(e.target.value)} />
                <button>Add Task</button>
            </form>
        </div>
        <button onClick={handleFetchTask}>Fetch Task</button>
        <div>
            <ul>
                {
                    task.map((curEle,index)=>{
                        return(
                            <li key={index} className='li-items'>
                                <p>{index}</p>
                                <p>{curEle}</p>
                                <p onClick={()=>handleDeleteTask(index)}><MdDelete/></p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Todo