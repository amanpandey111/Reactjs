import userGenarate from "../api/FakeUserName"
import { useDispatch } from "react-redux"
import { addUser } from "../store/slices/UserSlice"
import DisplayUser from "./DisplayUser"
import DeleteUsers from "./DeleteUsers"

const UserDetails = () => {
    const dispatch = useDispatch()
    const fakeUserGenarate = (payload) => {
        console.log(payload);
        dispatch(addUser(payload))
    }
  return (
    <div>
        <button onClick={()=>fakeUserGenarate(userGenarate())}>click to generate user</button>
        <DisplayUser/>
        <DeleteUsers/>
    </div>
  )
}

export default UserDetails