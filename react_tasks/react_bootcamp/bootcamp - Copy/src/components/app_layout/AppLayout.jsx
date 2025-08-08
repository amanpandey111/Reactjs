import { Outlet, useLocation, useNavigate } from "react-router"
import Header from "../ui/Header"
import { useDispatch } from "react-redux"
import { toggleSignIn, toggleSignUp } from "../../store"
import { useEffect } from "react"

const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/")
  }, []);
  return (
    <section onClick={(e)=>{ dispatch(toggleSignUp(false)) ; dispatch(toggleSignIn(false))}}>
        <Header/>
        <Outlet/>
    </section>
  )
}

export default AppLayout