import { NavLink, useNavigate, useRouteError } from "react-router-dom"
import './Page.css'

const ErrorPage = () => {
    const navigate = useNavigate()
    const error = useRouteError()
    const handleNavigate = () => {
        navigate(-1)
    }
    const handleNavigate1 = () => {
        navigate("/")
    }
    const handleNavigate2 = () => {
        navigate("/about")
    }
    const handleNavigate3 = () => {
        navigate("/movie")
    }
    const handleNavigate4 = () => {
        navigate("/contact")
    }
    console.log(error);
    if(error.status===404){
        return(
            <div className="error-div">
                <img src="https://blog-cdn.lottiefiles.com/2022/08/Taras-Migulko.gif" alt="" />
                <p>The Page You are Looking is currently unavailable</p>
                {/* <button className="btn btn-success"> <NavLink className="text-white text-decoration-none" to="/" >Go Back to Hme</NavLink> </button> */}
                <button className="btn btn-secondary" onClick={handleNavigate} >Back to previous page</button>
                <button className="btn btn-primary" onClick={handleNavigate1} >Back to Home</button>
                <button className="btn btn-danger" onClick={handleNavigate2} >Back to About</button>
                <button className="btn btn-warning" onClick={handleNavigate3} >Back to Movies</button>
                <button className="btn btn-secondary" onClick={handleNavigate4} >Back to Contact</button>
            </div> 
        )
    }
    return(
        <h1>Handled Error Page</h1>
    )
}
export default ErrorPage