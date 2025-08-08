import { useDispatch, useSelector } from 'react-redux'
import "./ui.css"
import { addArray } from '../../store'

const LeftSide = () => {
    const mycourse = useSelector((state)=>state.mycourse)
    const currentId = useSelector((state)=>state.currentId)
    console.log(currentId);
    // console.log(isCurrent);
    const dispatch = useDispatch()

    // console.log(mycourse);
    const handleClick = (data)=> {
        dispatch(addArray(data))
    }
  return (
    <section className='left-main-section'>
        <div>
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