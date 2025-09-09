import { NavLink } from "react-router-dom"
import Home from '../pages/Home'

const Navbar = () => {
  return (
    <nav className="navbar" >
        <NavLink to="/" ><p className="text-2xl font-bold text-gradient" >RESUMIND</p></NavLink>
        <button className="primary-button w-fit" >Upload Resume</button>
    </nav>
  )
}

export default Navbar