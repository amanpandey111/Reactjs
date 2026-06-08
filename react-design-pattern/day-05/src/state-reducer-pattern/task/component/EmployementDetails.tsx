import { type Dispatch } from 'react'
import type { ActionType, FormState } from '../type/wizardFormType'

const EmployementDetails = ({ state, dispatch }: { state: FormState, dispatch: Dispatch<ActionType> }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT_CHANGE', payload: { name: e.target.name, value: e.target.value, formType: 'employmentDetails' } })
  }
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder='Enter Your Company Name'
              name="companyName"
              value={state.form.employmentDetails.companyName}
              onChange={handleChange}
              className="border border-gray-300 p-1 w-full placeholder:text-sm"
            />
            <input
              type="number"
              placeholder='Enter Your Employee Id'
              name="employeeId"
              value={state.form.employmentDetails.employeeId}
              onChange={handleChange}
              className="border border-gray-300 p-1 w-full placeholder:text-sm"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder='Enter Your Role'
              name="role"
              value={state.form.employmentDetails.role}
              onChange={handleChange}
              className="border border-gray-300 p-1 w-full placeholder:text-sm"
            />
            <input
              type="text"
              aria-label='fkvjf'
              placeholder='Enter Your Department'
              name="department"
              value={state.form.employmentDetails.department}
              onChange={handleChange}
              className="border border-gray-300 p-1 w-full placeholder:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default EmployementDetails;
