import { useState } from "react"
import PopupMessage from "./PopupMessage"

const CustomPopup = () => {
    const [isPopup, setIspopup] = useState(false)
  return (
    <div>
        <div className="text-center my-2" >
            <button onClick={()=>setIspopup((prev)=>!prev)} type="button" className=" cursor-pointer text-white bg-blue-700 hover:bg-blue-800 p-2  " >Open Modal Popup</button>
        </div>
        { isPopup && <PopupMessage/> }
    </div>
  )
}

export default CustomPopup