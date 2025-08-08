import React, { useState } from 'react'
import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';

const Todo = () => {
    const[inputValue,setInputValue] = useState({})
    const[task,setTask] = useState([])

    function handleInputChange(value){
        setInputValue({id:value,content:value,checked:false});
    }

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(inputValue);
        const {id,content,checked} = inputValue

        //! to check if the input field is empty or not
        if(!content) return;

        // if(task.includes(inputValue)){
        //     setInputValue("")
        //     return;
        // }

        //! to check the duplicacy of a value
        const ifTodoContentMatched = task.find(
            (curTask) => curTask.content == content
        );
        if(ifTodoContentMatched) return;

        setTask((prev)=>[...prev,{id:id,content:content,checked:checked}]);
        setInputValue({id:"",content:"",checked:false})
    }


    function handleDeleteTodo(value){
        console.log(value);
        const updatedTask = task.filter((curTask)=>curTask.content!==value)
        setTask(updatedTask)
    }

    function handleClearTodoData(){
        setTask(()=>[])
    }

    function handleCheckedTodo(content){
        const updatedTask = task.map((curTask)=>{
            if(curTask.content==content){
                return {...curTask,checked:!curTask.checked}
            }else{
                return curTask;
            }
        })
        setTask(updatedTask)
        console.log(updatedTask);
    }
  return (
    <section className='todo-container' >
        <header>
            <h1>Todo List</h1>
            <TodoDate/>
        </header>
        <TodoForm handleFormSubmit={handleFormSubmit} inputValue={inputValue.content} handleInputChange={handleInputChange}/>
        <section className='myUnOrdList'>
            <ul>
                {
                    task.map((curTask)=>{
                        return (
                            <TodoList key={curTask.id} curTask={curTask.content} handleDeleteTodo={handleDeleteTodo} 
                             checked={curTask.checked}
                             onHandleCheckedTodo={handleCheckedTodo} />
                        )
                    })
                }
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={handleClearTodoData} >Clear all</button>
        </section>
    </section>
  )
}

export default Todo