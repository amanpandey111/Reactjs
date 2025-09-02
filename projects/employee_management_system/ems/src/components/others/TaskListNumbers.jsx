
const TaskListNumbers = (props) => {
   const{data}=props
   // console.log(data);
  return (
    <div className="flex mt-10 justify-between gap-5" >
        <div className="py-6 px-9 w-[45%] bg-red-400 rounded-xl" >
           <h2 className="text-2xl font-semibold" >{data?.taskCounts.newTask}</h2>
           <h3 className="text-xl font-medium" >New Task</h3>
        </div>
        <div className="py-6 px-9 w-[45%] bg-blue-400 rounded-xl" >
           <h2 className="text-2xl font-semibold" >{data?.taskCounts.completed}</h2>
           <h3 className="text-xl font-medium" >Completed Task</h3>
        </div>
        <div className="py-6 px-9 w-[45%] bg-green-400 rounded-xl" >
           <h2 className="text-2xl font-semibold" >{data?.taskCounts.active}</h2>
           <h3 className="text-xl font-medium" >Accepted Task</h3>
        </div>
        <div className="py-6 px-9 w-[45%] bg-yellow-400 rounded-xl" >
           <h2 className="text-2xl font-semibold" >{data?.taskCounts.failed}</h2>
           <h3 className="text-xl font-medium" >Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers