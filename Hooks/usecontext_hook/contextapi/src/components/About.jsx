import { useContext } from "react"
import { BioContext } from "./Index"

const About = () => {
  const{myName,college} = useContext(BioContext)
  return (
    <div>
        <h3>{myName}</h3>
        <h3>{college}</h3>
    </div>
  )
}

export default About