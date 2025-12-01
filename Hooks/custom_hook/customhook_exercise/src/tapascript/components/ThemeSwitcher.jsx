import { useToggle } from "../hooks/useToggle"

function ThemeSwitcher(){
  const[isdark, toggleTheme] = useToggle()
  console.log(isdark)
  return(
    <div>
      <h1>Custom Hook For Toggle</h1>
      <button onClick={toggleTheme} >toggleIt</button>
    </div>
  )
}
export default ThemeSwitcher