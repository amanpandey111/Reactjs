import { NavLink } from "react-router-dom"

const Header = ()=> {
    return(
        <div className="header-container container-fluid">
            <div className="header-container-one">
                <div className="not-align">
                    <p>Get The Premium Membership with 20% discount</p>
                </div>
                <div className="header-button">
                    <NavLink to="" className="text-white text-decoration-none">Sign up</NavLink>
                    <NavLink to="" className="text-white text-decoration-none">Login</NavLink>
                </div>
            </div>
            <div className="header-container-two">
                <div className="not-align">
                    <p>AmanFlix</p>
                </div>
                <div>
                    <ul>
                        <li> <NavLink className="header-navlink" to="/" >Home</NavLink></li>
                        <li> <NavLink className="header-navlink" to="/about" >About</NavLink></li>
                        <li> <NavLink className="header-navlink" to="/movie" >Movies</NavLink></li>
                        <li> <NavLink className="header-navlink" to="/contact" >Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header