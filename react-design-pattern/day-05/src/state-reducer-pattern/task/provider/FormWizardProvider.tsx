import { useReducer, type ReactNode } from "react"
import { defaultReducer } from "../reducer/form-wizard-reducer"
import type { ActionType, FormState } from "../type/wizardFormType"
import { FormWizardContext } from "../context";

interface PropTypes {
  reducer?: (state: FormState, action: ActionType) => typeof state;
  children: ReactNode
}

const initialState: FormState = {
  form: {
    employmentDetails: {
      companyName: '',
      department: '',
      role: '',
    },
    personalDetail: {
      name: '',
      email: '',
      phone: '',
    },
    declarations: {
      isAnyCriminalCase: false,
      isAnyMajorIllness: false,
    }
  },
  formErrors: {
    declarations: {},
    employmentDetails: {},
    personalDetail: {},
  },
  activeStep: 1,
}

const FormWizardProvider = ({ reducer=defaultReducer, children }: PropTypes) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <FormWizardContext.Provider value={{state, dispatch}}>
      {children}
    </FormWizardContext.Provider>
  )
}

export default FormWizardProvider;
