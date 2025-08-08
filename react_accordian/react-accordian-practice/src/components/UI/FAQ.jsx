const FAQ = ({curEle,isActive,isToggle}) => {
    // ! Here this approach won't work because it will create a indivisual state for every li
    // const[isActive,setIsActive] = useState(false)
    // let checkIsActive = isActive === curEle.id
    // const handleIsActive = (id)=> {
    //     setIsActive((prevId)=>prevId===id?false:id)
        
    // }
    
  return (
    <li key={curEle.id}>
        <div className="accordion-grid" >
            <p className="accordion-question">{curEle.question}</p>
            <button onClick={isToggle} className={isActive?"active-btn":""} >{ isActive ?"close":"show"}</button>
        </div>
        { isActive &&<p>{curEle.answer}</p>}
    </li>
  )
}

export default FAQ