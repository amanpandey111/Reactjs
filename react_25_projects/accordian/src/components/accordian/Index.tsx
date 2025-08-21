import { useState } from 'react';
import data from './data.ts'
import type { FaqData } from './data.ts';
import DisplayAccordian from './DisplayAccordian.tsx';


const Index = () => {
  const [selectdId,setSelectedId] = useState<string | string[]>()
  const [isMultiAcc,setIsMultiAcc] = useState(false)
  function handleAccordian(){
    setIsMultiAcc((prev)=>!prev)
    if(isMultiAcc){
      setSelectedId("")
    }else{
      setSelectedId([])
    }
  }
  console.log(isMultiAcc);
  return (
    <div className="w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%]
       mx-auto p-[8px] ">
        <p className='border-2 w-max m-auto cursor-pointer bg-[#6A5B7B] text-[white] p-2' onClick={handleAccordian} >{ isMultiAcc ? "switch to single accordion" : "switch to multiple accordion" }</p>
      <div className='flex flex-col gap-4]' >
        {
          data?.map((curEle:FaqData)=>{
            return(
              <DisplayAccordian key={curEle.id} curData={curEle} selectdId={selectdId} setSelectedId={setSelectedId} isMultiAcc={isMultiAcc} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Index