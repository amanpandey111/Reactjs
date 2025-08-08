import { useDispatch } from "react-redux"
// import { removeAllUser } from "../store/slices/UserSlice"  //! Now we are not taking from slice
import { removeAllUser } from "../store/actions"

const DeleteUsers = () => {
    const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(removeAllUser())}>DeleteUsers</button>
  )
}

export default DeleteUsers