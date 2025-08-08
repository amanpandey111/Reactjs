import { useDispatch } from "react-redux";
// import { clearAllUsers } from "../store/slices/UserSlice";
import { clearAllUsers } from "../store/actions";

export const DeleteAllUser = () => {
  const dispatch = useDispatch()
  
  return <div>
    <button onClick={()=>dispatch(clearAllUsers())} >clear users</button>
  </div>;
};