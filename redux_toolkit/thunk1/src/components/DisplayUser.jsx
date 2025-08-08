import { useDispatch, useSelector } from "react-redux"
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUser = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.users)
    console.log(data.users_name);
  return (
    <div>
        <ul>
            {
                data.users_name.map((name,index)=> <li>
                    <p>{name}</p>
                    <MdDeleteForever onClick={()=>dispatch(removeUser(index))} />
                </li> )
            }
        </ul>
    </div>
  )
}

export default DisplayUser