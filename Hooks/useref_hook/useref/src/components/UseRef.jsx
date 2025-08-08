import { useEffect, useRef, useState } from 'react'

const UseRef = () => {
  let [count,setcount] = useState(0)
  let val = useRef(0);
  function handleIncrement(){
    val.current += 1
    console.log("the value of val is ",val.current);
    setcount(count+1)
  }

  let btnRef = useRef();

  //! it runs on every render
  useEffect(()=>{
    console.log("main firse render ho gya hoon");
  },[])

  function chnageColor(){
    btnRef.current.style.backgroundColor="blue"
  }
  return (
    <div>
      <button
       ref={btnRef}
       onClick={handleIncrement}>Increment</button>
      <p>{count}</p>
      <button onClick={chnageColor}>change the color of first button</button>
    </div>
  )
}

export default UseRef