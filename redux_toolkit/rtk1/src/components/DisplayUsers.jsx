import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.users
    })
    console.log(data);
    const deleteUser = (index) => {
        console.log(index);
        dispatch(removeUser(index))
    }
  return (
    <Wrapper>
        <div>
            <ul>
                <hr />
                {
                    data.map((name,index)=>{
                        return <div key={index} >
                            <li>
                                <p style={{fontSize:"1.4rem"}}>{name}</p>
                                <MdDeleteForever style={{color:"red", fontSize:"2rem",cursor:"pointer"}}
                                onClick={()=>deleteUser(index)}
                                />
                            </li>
                            <hr />
                        </div>
                    })
                }
                {/* <hr /> */}
            </ul>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
div{
// border:2px solid red;
}
li{
display:flex;
justify-content:space-between;
fontSize:"14rem";
}
`

export default DisplayUsers