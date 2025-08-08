import { useState } from "react"
import Button from "./Button"

const Profile = () => {
    const[loged,setLoged] = useState("Logged In")
    const handleLogin = () => {
        loged == "Logged In" ? setLoged("Log Out") : setLoged("Logged In")
    }
  return (
    <section>
        <p>{loged}</p>
        <Button handleLogin={handleLogin} />
    </section>
  )
}

export default Profile