import { Outlet, useNavigate } from "react-router"
import Header from "../ui/Header"
import { useDispatch } from "react-redux"
import { setInputText, setInputText2, toggleSignIn, toggleSignUp } from "../../store"
import { useEffect } from "react"
// import { toggleSignUp } from "../../store"

const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/")
  }, []);
  return (
    <section onClick={(e)=>{ dispatch(toggleSignUp(false)) ; dispatch(toggleSignIn(false));dispatch(setInputText(""));dispatch(setInputText2(""))}}
    style={{overflow:"hidden"}}
    >
        <Header/>
        <Outlet/>
    </section>
  )
}

export default AppLayout