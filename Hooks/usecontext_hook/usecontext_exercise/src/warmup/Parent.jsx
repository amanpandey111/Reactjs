import { createContext } from "react"

export const likecontext = createContext()

const Parent = ({children}) => {
    let l = ".parseFunctionBx.js:12035:24)"
  return (
    <likecontext.Provider value={{l}}>
        {children}
    </likecontext.Provider>
  )
}

export default Parent