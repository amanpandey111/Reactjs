import { useSelector } from "react-redux"
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux"
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.users)
    console.log(data);
    const removeSingleUser = (index) => {
        console.log(index);
        dispatch(removeUser(index))
    }
  return (
    <div>
        <ul>
            {
                data.map((name,index)=> <li key={index}>
                    <p>{name}</p>
                    <MdDeleteForever onClick={()=>removeSingleUser(index)} />
                </li> )
            }
        </ul>
    </div>
  )
}

export default DisplayUsers