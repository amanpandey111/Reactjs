import { useContext } from "react"
import { countContext } from "./ContextProvide"

const PracticeComp = () => {
  const countObj = useContext(countContext)
  console.log("practice component go re-renders")
  return (
    <div>PracticeComp</div>
  )
}

export default PracticeComp