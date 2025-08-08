import { useDispatch, useSelector } from 'react-redux'
import "./ui.css"
import { addArray } from '../../features/UserSlices'
import { GiHamburgerMenu } from "react-icons/gi";              // react icon 
import { useState } from 'react';

const LeftSide = () => {
    const dispatch = useDispatch()                                  // From this component we will dispatch the clicked categories courses 
    const mycourse = useSelector((state)=>state.app.mycourse)       // Getting my entire courses data
    const[toggle,setToggle] = useState(false)
    const currentId = useSelector((state)=>state.app.currentId)     // Getting the current ID so we can apply style conditionally to each categorie when they got clicked
    console.log(currentId);
    console.log(toggle);
    // console.log(isCurrent);

    // console.log(mycourse);
    const handleClick = (data)=> {
        dispatch(addArray(data))
    }
  return (
    <section className='left-main-section'>
        <GiHamburgerMenu className='hamburg' onClick={()=>setToggle(!toggle)} />
        <div className={toggle ? 'list-items' : 'list-item-false'}>
            <ul>
                {
                    mycourse.map((curEle)=>{
                        return <li key={curEle.id} onClick={()=>{
                            handleClick(curEle);
                        }} className={currentId==curEle.id ? "current" : ""} >{curEle.category}</li>
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default LeftSide