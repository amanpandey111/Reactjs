import { Children, createContext, useState } from "react"

export const themeContext = createContext()

const ThemeContext = ({children}) => {
    const[theme,setTheme] = useState("light")
    const setThemeDark = () => {
        theme=="light" ? setTheme("black") : setTheme("light")
    }
  return (
    <themeContext.Provider value={{theme,setThemeDark}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeContext