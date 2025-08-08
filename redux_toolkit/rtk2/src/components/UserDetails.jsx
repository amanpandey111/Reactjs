import { fakeUserData } from "../api"
import { addUser } from "../store/slices/UserSlice"
import DeleteAllUsers from "./DeleteAllUsers"
import DisplayUsers from "./DisplayUsers"
import { useDispatch } from "react-redux"

const UserDetails = () => {
    const dispatch = useDispatch()
    const addNewUser = (payload) => {
        console.log(payload);
        dispatch(addUser(payload))
    }
  return (
    <section>
        <h2>User Details</h2>
        <button onClick={()=>addNewUser(fakeUserData())}>add user</button>
        <DisplayUsers/>
        <DeleteAllUsers/>
    </section>
  )
}

export default UserDetails