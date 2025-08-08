import React, { useContext } from 'react'
import { ThemeContext, UserContext} from '../App'

const Childc = () => {
    const user = useContext(UserContext)
    const {theme,setTheme} = useContext(ThemeContext)
    function handleClick(){
        if(theme==='light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    return (
        <div>
            <h1>Hello I am the consumer</h1>
            <h2>data : {theme}</h2>
            <h3>Name :{user.name}</h3>
            <button onClick={handleClick}>change theme</button>
        </div>
    )
}

export default Childc