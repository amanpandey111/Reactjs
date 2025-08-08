import { useDispatch } from "react-redux"
import { clearAllUsers } from "../store/slices/UserSlice"

const DeleteAllUsers = () => {
    const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(clearAllUsers())}>clear user</button>
  )
}

export default DeleteAllUsers