import React from 'react'
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({index,curTask,handleDeleteTodo,onHandleCheckedTodo,checked}) => {
  return (
    <li key={index} className='todo-item' >
        <span className={checked?"checkList":"notCheckList"} >{curTask}</span>
        <button className='check-btn' onClick={()=>onHandleCheckedTodo(curTask)} >
            <MdCheck/>
        </button>
        <button className='delete-btn' onClick={()=>handleDeleteTodo(curTask)}>
            <MdDeleteForever/>
        </button>
    </li>
  )
}

export default TodoList