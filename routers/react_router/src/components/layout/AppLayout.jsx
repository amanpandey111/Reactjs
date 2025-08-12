import { Outlet, useNavigation } from "react-router-dom"
import Home from "../../pages/Home"
import Footer from "./Footer"
import Header from "./Header"
import Loading from "./Loading"

const AppLayout = ()=> {
    const navigation = useNavigation();
    // console.log(navigation);
    if(navigation.state==="loading"){
        console.log("I am In loading state");
        return(
            <Loading/>
            // <h1>Loading...</h1>
        )
    }
    return(
        <>
          <Header/>
          <div className="outlet-container">
             <Outlet/>
          </div>
          <Footer/>
        </>
    )
}
export default AppLayout