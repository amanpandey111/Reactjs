import { NavLink, useRouteError, useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate();
    const handleGoBack = ()=> {
        navigate("/")  //! It will go to home page
        // navigate(-2)
    }
    console.log(error);
    if(error.status===404){
        return(
            <section className="section-error">
                <div className="div-error">
                    <figure>
                        <img src="https://cdn.pixabay.com/animation/2024/04/24/06/51/06-51-07-721_512.gif" alt="" />
                    </figure>
                    <div>
                        <p>..The Page You are Looking could not be found</p>
                        <p>...Back to Previous Page</p>
                    </div>
                </div>
                <NavLink to="/" className="btn btn-danger" >Go to Home Page</NavLink>
                <button className="btn btn-primary" onClick={handleGoBack}>Go Back</button>
            </section>
        )
    }
  return (
    <div>
        <h1>The Page You are Looking Does Not Exists</h1>
        {/* <p>{error.ErrorResponseImpl.status}</p> */}
    </div>
  )
}

export default ErrorPage