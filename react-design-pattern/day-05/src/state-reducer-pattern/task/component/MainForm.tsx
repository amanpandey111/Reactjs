import { useFormWizardContext } from "../hook/useFormWizardContext"

const MainForm = () => {
  const {state, dispatch} = useFormWizardContext();
  console.log(state, dispatch);
  return (
    <div>MainForm</div>
  )
}

export default MainForm;
