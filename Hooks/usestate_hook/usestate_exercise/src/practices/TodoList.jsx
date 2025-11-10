import { useState } from "react"

function TodoList(){
  const[todo, setTodo] = useState("")
  const[todoItem, setTodoItem] = useState([])

  function addTodo(str){
    setTodoItem((prev)=>([...prev,{
      id:Date.now(),
      todo:str
    }]))
  }
  
  function deleteTodo(index){
    setTodoItem((Items)=>{
      return Items.filter((curEle)=>curEle.id!==index)
    })  
  }

  console.log(todoItem)

  return<div>
    <input type="text" placeholder="add todo" name="todo" value={todo} onChange={(e)=>setTodo(e.target.value)}  />
    <button disabled={todo.length==0} onClick={()=>addTodo(todo)}>add todo</button>
    {
      todoItem?.map((curItem,index)=>{
        return<div key={index} >
          <p>{curItem.todo}</p>
          <button onClick={()=>deleteTodo(curItem.id)}>delete</button>
        </div>
      })
    }
  </div>
}

export default TodoList