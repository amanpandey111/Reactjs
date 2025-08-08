import { createContext, useState } from "react"

export const makeContext1 = createContext()
export const makeContext2 = createContext()

const Parent2 = ({children}) => {
    const[str,setStr] = useState("Hello World")
    const[num,setNum] = useState(0)
  return (
    <makeContext1.Provider value={{str,setStr}}>
        <makeContext2.Provider value={{num,setNum}}>
           {children}
        </makeContext2.Provider>
    </makeContext1.Provider>
  )
}

export default Parent2