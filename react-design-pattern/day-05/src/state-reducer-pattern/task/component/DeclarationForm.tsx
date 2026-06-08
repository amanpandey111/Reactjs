import type { Dispatch } from "react"
import type { ActionType, FormState } from "../type/wizardFormType"

const DeclarationForm = ({state, dispatch}: {state: FormState, dispatch: Dispatch<ActionType>}) => {
  console.log(state)
  return (
    <div>DeclarationForm</div>
  )
}

export default DeclarationForm