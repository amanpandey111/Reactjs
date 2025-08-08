import { useEffect, useState } from 'react'
import faq from '../api/faq.json'
import FAQ from './UI/FAQ'

const Accordian = ()=> {
    //console.log(faq[0]); //! success data is coming
    const[activeId,setActiveId] = useState(false) 

    const[data,setData] = useState([])
    useEffect(()=>{
        setData(faq)
    },[])

    // console.log(data);
    const handleToggle = (id) => {
       setActiveId((prevId) => (prevId === id ? false : id));
    };

    return(
        <>
           <h1>React Accordian</h1>
           <ul className='section-accordion'> 
             {
                data.map((curEle)=>{
                    return(
                        <FAQ key={curEle.id} curEle={curEle}  isActive={activeId === curEle.id} onToggle={() => handleToggle(curEle.id)} />
                    )
                })
             }
           </ul>
        </>
    )
}
export default Accordian