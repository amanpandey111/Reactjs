import { useEffect } from "react"
import { useLazyGetTodoQuery } from "../../store1/apiSlice"
import { useDeleteTodoMutation } from "../../store1/deleteApiSlice"
import "./todoitem.css"

const TodoRow = ({datadisplay}) => {
    const {id,todo,completed,userId} = datadisplay
    const [ trigger, result ] = useLazyGetTodoQuery()

    // console.log("Remaining Data",result.isError);
    // console.log(result?.error?.data?.message);

    //! this is the not resommended way
    const mutation = useDeleteTodoMutation()
    const [deleteTodoFn, deleteResult] = useDeleteTodoMutation()
    // console.log(deleteResult);

    useEffect(()=>{
      if(deleteResult.isSuccess){
        console.log("todo deleted");
        alert("Todo deleted successfully")
      }
    },[deleteResult.isSuccess])

    function handleDelete() {
      console.log("delete",id);
      deleteTodoFn(id)
    }

    const handleGetStatus = () => {
      // trigger("id")
      trigger(id)
    }

    function getStatus(isCompleted){
      let status = "completed"
      if(!isCompleted){
        status = "Pending...";
      }
      return status
    }

  return (
    <div>
        <span>{todo}</span>
        <button onClick={handleDelete} >delete</button>
        <button onClick={handleGetStatus} >get status</button>
        { result?.isLoading && <span>Loading...</span> }
        { result?.data?.id && getStatus(result?.data?.completed) }
        { result?.isError && <span>Error: {result?.error?.data?.message}</span> }
    </div>
  )
}

export default TodoRow