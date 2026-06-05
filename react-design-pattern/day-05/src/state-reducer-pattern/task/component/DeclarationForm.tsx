import { useFormWizardContext } from "../hook/useFormWizardContext"

const DeclarationForm = () => {
  const {state, dispatch} = useFormWizardContext();
  console.log(state)
  return (
    <div>DeclarationForm</div>
  )
}

export default DeclarationForm