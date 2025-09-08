import React, { Suspense } from "react"
import { Outlet, useNavigate } from "react-router"
// import Header from "../ui/Header"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setInputText, setInputText2, toggleSignIn, toggleSignUp } from "../../features/UserSlices";

const Header = React.lazy(()=>import("../ui/Header"))

const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/")
  }, []);
  return (
    <section onClick={(e)=>{ dispatch(toggleSignUp(false)) ; dispatch(toggleSignIn(false));dispatch(setInputText(""));dispatch(setInputText2(""))}}>
        <Suspense><Header/></Suspense>
        <Outlet/>
    </section>
  )
}

export default AppLayout


// import { Outlet, useNavigate } from "react-router"
// import Header from "../ui/Header"
// import { useDispatch } from "react-redux"
// import { useEffect } from "react"
// import { setInputText, setInputText2, toggleSignIn, toggleSignUp } from "../../features/UserSlices";

// const AppLayout = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate();
//   useEffect(() => {
//     navigate("/")
//   }, []);
//   return (
//     <section>
        
//         <Header/>
//         <Outlet/>
//     </section>
//   )
// }

// export default AppLayout