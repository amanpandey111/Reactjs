import DisplayUser from './DisplayUser'
import getUserName from '../api/GetUserName'
import { useDispatch } from 'react-redux'
import { addUser,removeAllUser } from '../store/slices/UserSlice'
import { fetchUser } from '../store/slices/UserSlice'

const UserDetail = () => {
    const dispatch = useDispatch()
    const handleUserName = () => {
        // console.log(getUserName());
        dispatch(addUser(getUserName()))
    }
    const addLocalUser = async() => {
        const data = await dispatch(fetchUser())
        console.log(data.payload);
    }
  return (
    <div>
        <h1>User Details</h1>
        <button onClick={handleUserName} >generate user</button>
        <button onClick={addLocalUser} >add local user</button>
        <DisplayUser/>
        <button onClick={()=>dispatch(removeAllUser())}>clear all</button>
    </div>
  )
}

export default UserDetail