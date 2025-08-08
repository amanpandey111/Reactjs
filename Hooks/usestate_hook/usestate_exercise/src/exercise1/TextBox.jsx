import { useState } from "react"

const TextBox = () => {
    const[text,setText] = useState("")
  return (
    <section>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      {text.length>=1 ? <h1>{text}</h1> : <h1>Type Something</h1> }
    </section>
  )
}

export default TextBox