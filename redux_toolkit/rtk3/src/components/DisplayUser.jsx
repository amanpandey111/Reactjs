import { useDispatch, useSelector } from "react-redux"
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice"

const DisplayUser = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.users)
    console.log(data);
  return (
    <div>
        <ul>
            {
                data.map((name,index)=> <li key={index}>
                    <p>{name}</p>
                    <MdDeleteForever onClick={()=>dispatch(removeUser(index))} />
                </li> )
            }
        </ul>
    </div>
  )
}

export default DisplayUser