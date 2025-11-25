function DisplayInputs({ inputVal, handleInputVal, input5, input4, input3, input2, input1 }){
  function handlePress(e, nextRed, prevRef, inpName){
    if(e.key=='Backspace'){
      if(inputVal[inpName] !== '') return
      if(inpName==="inp1") return
      prevRef.current.focus()
    }
  }
  return (
    <div>
      <input ref={input1} type="text" name="inp1" value={inputVal.inp1} onChange={(e)=>handleInputVal(e, input2)} autoFocus 
      onKeyDown={(e)=>handlePress(e,input2,input5,"inp1")} />
      <input ref={input2} type="text" name="inp2" value={inputVal.inp2} onChange={(e)=>handleInputVal(e, input3)} 
      onKeyDown={(e)=>handlePress(e,input3,input1,"inp2")} />
      <input ref={input3} type="text" name="inp3" value={inputVal.inp3} onChange={(e)=>handleInputVal(e, input4)} 
      onKeyDown={(e)=>handlePress(e,input4,input2,"inp3")} />
      <input ref={input4} type="text" name="inp4" value={inputVal.inp4} onChange={(e)=>handleInputVal(e, input5)} 
      onKeyDown={(e)=>handlePress(e,input5,input3,"inp4")} />
      <input ref={input5} type="text" name="inp5" value={inputVal.inp5} onChange={(e)=>handleInputVal(e, input1)} 
      onKeyDown={(e)=>handlePress(e,input1,input4,"inp5")} />
    </div>
  )
}

export default DisplayInputs;
