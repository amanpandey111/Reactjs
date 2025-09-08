import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = (props) => {
    const{data}=props
    // console.log(data);
    
  return (
    <div id='tasklist' className='h-[45%] w-full mt-10 py-5 flex items-center justify-start gap-5 overflow-x-auto px-5' >
        {/* <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <FailedTask/> */}
        {
            data?.tasks?.map((elem,index)=>{
                if(elem.active){
                    return <AcceptTask key={index} data={elem} />
                }
                if(elem.newTask){
                    return <NewTask key={index} data={elem} />
                }
                if(elem.completed){
                    return <CompleteTask key={index} data={elem} />
                }
                if(elem.failed){
                    return <FailedTask key={index} data={elem} />
                }
            })
        }
    </div>
  )
}

export default TaskList