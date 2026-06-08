import type { Dispatch } from "react"
import type { ActionType, FormState } from "../type/wizardFormType"

const DeclarationForm = ({ state, dispatch }: { state: FormState, dispatch: Dispatch<ActionType> }) => {
  console.log(state.form);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT_CHANGE', payload: { name: e.target.name, value: e.target.checked, formType: 'declarations' } })
  }
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-2">
          <div className="flex align-middle gap-1">
            <label htmlFor="crimicalcase" className="cursor-pointer">Is Any Criminal Case</label>
            <input
              type="radio"
              name="isAnyCriminalCase"
              id="crimicalcase"
              className="cursor-pointer"
              checked={state.form.declarations.isAnyCriminalCase}
              onChange={handleChange}
            />
          </div>
          <div className="flex align-middle gap-1">
            <label htmlFor="medical" className="cursor-pointer">Is Any Severe Surgey</label>
            <input
              type="radio"
              name="isAnyMajorIllness"
              id="medical"
              className="cursor-pointer"
              checked={state.form.declarations.isAnyMajorIllness}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default DeclarationForm