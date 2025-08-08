import { useRef, useState } from "react";

const GuessNumber = () => {
  const random = Math.floor(Math.random() * 10);
  const randomn = useRef(random)
  console.log(randomn);
  const inputnum = useRef(null)

  const[para,setPara] = useState("")
  const GuessNumber = () => {
    console.log(inputnum.current);
    if(inputnum.current.value>randomn.current){
        setPara("Too High")
    }else if(inputnum.current.value<randomn.current){
        setPara("Too Low")
    }else{
        setPara("You win!")
    }
  }
  return (
    <section>
        <input type="text" ref={inputnum} />
        <button onClick={()=>GuessNumber()} >Guess</button>
        <p>{para}</p>
    </section>
  )
}

export default GuessNumber