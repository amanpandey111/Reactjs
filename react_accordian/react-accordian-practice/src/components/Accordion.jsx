import { useEffect, useState } from 'react'
import faq from '../api/faq.json'
import FAQ from './UI/FAQ'

const Accordion = () => {
    
    const[data,setData] = useState([])
    const[activeId,setActiveId] = useState(false)

    useEffect(()=>{
        setData(faq)
    },[])
    // console.log(data);

    function handleButton(id){
        setActiveId((prevId)=>prevId===id?false:id)
    }
  return (
    <>
      <h1>React Accordion</h1>
      <ul className='section-accordion'>
        {
            data.map((curEle)=>{
                return(
                    <FAQ key={curEle.id} curEle={curEle} isActive={activeId===curEle.id} isToggle={()=>handleButton(curEle.id)} />
                )
            })
        }
      </ul>
    </>
  )
}

export default Accordion