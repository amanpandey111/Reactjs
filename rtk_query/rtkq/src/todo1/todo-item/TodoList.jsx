import React, { useState } from 'react'
import TodoRow from './TodoRow';
import { useAddTodoMutation, useGetAllTodosQuery } from '../../store1/apiSlice';

const TodoList = ({todos}) => {
  const queryObj = useGetAllTodosQuery()
  const {data, isLoading, error, refetch} = queryObj
  console.log(queryObj);
  const [ enteredTodo, setEnteredTodo ] = useState("");
  const [ addTodo] = useAddTodoMutation()
  // console.log(data);
  // console.log({isLoading});
  // console.log({error});
  const handleAddTodo = () => {
    console.log(enteredTodo);
    addTodo({todo: enteredTodo, completed: false, userId: 31}).unwrap().then((data)=>{ console.log(data) })
  }
  return (
    <div className='todo-card' >
      <div>
        <input type="text" placeholder='enter todo...' value={enteredTodo} onChange={(e)=>setEnteredTodo(e.target.value)} />
        <button onClick={handleAddTodo} >Add Todo</button>
      </div>
        {
          data?.map((todo)=>{
              return <TodoRow key={todo.id} datadisplay={todo} />
          })
        }
    </div>
  )
}

export default TodoList