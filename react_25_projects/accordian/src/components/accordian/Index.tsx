import { useState } from 'react';
import data from './data.ts'
import type { FaqData } from './data.ts';
import DisplayAccordian from './DisplayAccordian.tsx';


const Index = () => {
  const [selectdId,setSelectedId] = useState([])
  return (
    <div className="w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%]
       border-4 mx-auto p-[8px] ">
      <div className='flex flex-col gap-4' >
        {
          data?.map((curEle:FaqData)=>{
            return(
              <DisplayAccordian key={curEle.id} curData={curEle} selectdId={selectdId} setSelectedId={setSelectedId} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Index