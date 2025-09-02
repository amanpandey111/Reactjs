import { useState } from "react";
import { setData } from "../../rtk/AuthSlice";
import { useDispatch } from "react-redux";

const CreateTask = () => {
    const[taskTitle, setTaskTitle] = useState("")
    const[taskDate, setTaskDate] = useState('')
    const[assignTo, setAssignTo] = useState('')
    const[category, setCategory] = useState('')
    const[taskDescription, setTaskDescription] = useState("")
    const[task, setTask] = useState({})
    const dispatch = useDispatch()

    function submitHandler(e){
        e.preventDefault()
        console.log("submit handler",{taskTitle,taskDate,assignTo,category,taskDescription});
        setTask({taskTitle,taskDate,assignTo,category,taskDescription,active:false,newTask:true,failed:true,completed:false})
        const data = JSON.parse(localStorage.getItem("employees"))
        // console.log(data);
        data.forEach((curEle)=>{
            // console.log(curEle.firstName);
            if( assignTo.toLowerCase() == curEle.firstName.toLowerCase() ){
                console.log("yahi hai vo",curEle);
                curEle.tasks.push({taskTitle,taskDate,category,taskDescription,active:false,newTask:true,failed:false,completed:false})
                curEle.taskCounts.newTask = curEle.taskCounts.newTask+1
                console.log(curEle);
            }
        })
        setTaskTitle(""); setTaskDate(""); setAssignTo(""); setCategory(""); setTaskDescription("")
        localStorage.setItem("employees",JSON.stringify(data))
        dispatch(setData())
    }
    
    // console.log(task);

    return (
        <div className="p-6 bg-[#1C1C1C] mt-5 rounded" >
            <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between" >
                <div className="w-1/2 flex flex-col gap-3" >
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5" >Task Title</h3>
                        <input required type="text" placeholder="Make a UI design"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                            value={taskTitle}
                            onChange={(e)=>setTaskTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5" >Date</h3>
                        <input required type="date"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                            value={taskDate}
                            onChange={(e)=>setTaskDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5" >Assign to</h3>
                        <input required type="text" placeholder="employee name"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                            value={assignTo}
                            onChange={(e)=>setAssignTo(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5" >Category</h3>
                        <input required type="text" placeholder="design, dev, etc.."
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-start" >
                    <h3 className="text-sm text-gray-300 mb-0.5" >Description</h3>
                    <textarea required name="" id="" cols='30' rows='10'
                        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]"
                        value={taskDescription}
                        onChange={(e)=>setTaskDescription(e.target.value)}
                    ></textarea>
                   <button className="bg-emerald-500 py-2 px-3 hover:bg-emerald-600 text-sm mt-4 w-full cursor-pointer rounded" >create task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask