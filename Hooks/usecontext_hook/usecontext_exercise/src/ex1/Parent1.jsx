import { createContext, useState } from "react"

export const makeContext = createContext()

const Parent1 = ({children}) => {
    const[val,setVal] = useState("black")
    const handleState = () => {
        val == "black" ? setVal("red") : setVal("black")
    }
  return (
    <makeContext.Provider value={{val,handleState}} >
        {children}
    </makeContext.Provider>
  )
}

export default Parent1