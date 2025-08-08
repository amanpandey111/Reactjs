import { useDispatch } from "react-redux"
// import { removeAllUser } from "../store/slices/UserSlice"
import { deleteAllUsers } from "../store/actions/Action"

const DeleteAll = () => {
    const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(deleteAllUsers())}>DeleteAll</button>
  )
}

export default DeleteAll