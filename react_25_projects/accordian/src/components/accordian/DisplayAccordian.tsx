//! this is for single accordian
// const DisplayAccordian = (props:any) => {
    
//     const { curData, selectdId, setSelectedId } = props
//     function handleSelection(id:string){
//         if(id==selectdId){
//             setSelectedId("")
//         }else{
//             setSelectedId(id)
//         }
//     }
//     let icon = selectdId==curData.id ? "-" : "+"
//   return (
//     <div>
//         <div className='flex justify-between' >
//             <p>{curData.question}</p>
//             <button onClick={()=>handleSelection(curData.id)} className='cursor-pointer text-[25px]' > {icon} </button>
//         </div>
//         { selectdId==curData.id && <p>{curData.answer}</p> }
//     </div>
//   )
// }

// export default DisplayAccordian

//! this is for multiple accordian
const DisplayAccordian = (props:any) => {
    
    const { curData, selectdId, setSelectedId } = props
    // console.log(selectdId);
    function handleSelection(id:string){
        const idBool = selectdId.indexOf(id)
        if(idBool>=0){
            console.log("Id is present");
            selectdId.splice(idBool,1)
            console.log(selectdId);           //! try to implement using filter too because it's a good practice
            setSelectedId([...selectdId])
        }else{
            setSelectedId((prev:[])=>([...prev,id]))
        }
    }
    console.log(selectdId);
    const idBool = selectdId.some((id:string)=>id==curData.id)
    let icon = idBool ? "-" : "+"
  return (
    <div>
        <div className='flex justify-between' >
            <p>{curData.question}</p>
            <button onClick={()=>handleSelection(curData.id)} className='cursor-pointer text-[25px]'> {icon} </button>
        </div>
        { idBool && <p>{curData.answer}</p> }
    </div>
  )
}

export default DisplayAccordian