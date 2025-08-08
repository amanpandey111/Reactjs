import React, { useCallback, useState } from 'react'

const UseCallbackPractice1 = () => {
    const[count,setCount] = useState(0)
    // function handleClick(){
    //     setCount(count+1)
    // }

    const handleClick = useCallback(()=>{
        console.log("call back executed");
        // setCount((prev)=>prev+1)
        setCount(count+1)
    },[])
  return (
    <>
      <h3>Count is : {count}</h3>
      <button onClick={handleClick}>Increment</button> <br /> <br />
      <UseCallbackChild1 buttonName="click me" handleClick={handleClick} />
    </>
  )
}

export default UseCallbackPractice1

const UseCallbackChild1 = React.memo((props)=> {
    console.log("Got re-rendered");
    return(
        <>
          <button onClick={props.handleClick} >{props.buttonName}</button>
        </>
    )
})