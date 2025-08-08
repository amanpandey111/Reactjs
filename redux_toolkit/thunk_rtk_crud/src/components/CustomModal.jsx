import { useSelector } from "react-redux";
import "./CustomModal.css"
import { ImCross } from "react-icons/im";
import { useEffect } from "react";

const CustomModal = ({id,showPopup,setShowPopup}) => {
    console.log(showPopup.current);
    const allusers = useSelector((state)=>state.app.users)
    const singleUser = allusers.filter((curEle)=>curEle.id==id)
    console.log(singleUser);
    // useEffect(()=>{
    //     console.log("I got executed");
    // },[showPopup.current])
    const updateRef = () => {
        console.log("updating ref");
        showPopup.current=false
        console.log(showPopup.current);
    }
  return (
        <div className="modalBackground" onClick={()=>setShowPopup(false)}>
            <div className="modalContainer">
                <ImCross className="cross-icon" style={{color:"red", cursor:"pointer", fontSize:"1.5rem"}} onClick={()=>setShowPopup(false)} />
                <h2>{singleUser[0].name}</h2>
                <h3>{singleUser[0].email}</h3>
                <h4>{singleUser[0].age}</h4>
                <p>{singleUser[0].gender}</p>
                <button
                // onClick={()=>setShowPopup(false)}
                onClick={()=>setShowPopup(false)}
                className="btn btn-primary"
                >Close</button>
            </div>
        </div>
    );
}

export default CustomModal