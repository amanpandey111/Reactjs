import { useRef } from "react";

const Input = () => {
  const inputRef = useRef(null);
  console.log(inputRef.current?.value); // This will log null initially
  return (
    <>
        <input ref={inputRef} type="text" />
        <button onClick={()=>inputRef.current.focus()}>Focus</button>
    </>
  )
}

export default Input