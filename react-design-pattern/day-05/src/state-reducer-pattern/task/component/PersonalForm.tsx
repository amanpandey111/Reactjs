import type { Dispatch } from "react";
import type { ActionType, FormState } from "../type/wizardFormType"

const PersonalForm = ({state, dispatch}: {state: FormState, dispatch: Dispatch<ActionType>}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT_CHANGE', payload: { name: e.target.name, value: e.target.value, formType: 'personalDetail' } })
  }
  return (
    <div className="">
      <form>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <input
              className="border border-gray-300 p-1 w-full"
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={state.form.personalDetail.firstName}
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 p-1 w-full"
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={state.form.personalDetail.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-3">
            <input
              className="border border-gray-300 p-1 w-full"
              type="number"
              placeholder="Enter Phone Number"
              name="phone"
              value={state.form.personalDetail.phone}
              onChange={handleChange}
            />
            <input
              className="border border-gray-300 p-1 w-full"
              type="email"
              placeholder="Enter Email Id"
              name="email"
              value={state.form.personalDetail.email}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonalForm