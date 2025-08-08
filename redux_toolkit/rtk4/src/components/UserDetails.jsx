import { useDispatch } from "react-redux"
import getUserName from "../api/GetUserName"
import DisplayUser from "./DisplayUser"
import { addUsers } from "../store/slices/UserSlice"
import DeleteAll from "./DeleteAll"

const UserDetails = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(addUsers(getUserName()))}>Add User</button>
        <DisplayUser/>
        <DeleteAll/>
    </div>
  )
}

export default UserDetails