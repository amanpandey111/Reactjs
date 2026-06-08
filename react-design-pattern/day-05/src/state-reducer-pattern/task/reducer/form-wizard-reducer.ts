import type { ActionType, FormState } from "../type/wizardFormType";

const defaultReducer = (state: FormState, action: ActionType) => {
  switch (action.type) {
    case 'INPUT_CHANGE': {
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload?.formType]: {
            ...state.form[action.payload?.formType],
            [action.payload?.name]: action.payload?.value
          }
        }
      }
    }
    case 'INCREMENT_ACTIVE_STEP':
      return {
        ...state,
        activeStep: state.activeStep + 1
      }
    case 'DECREMENT_ACTIVE_STEP':
      return {
        ...state,
        activeStep: state.activeStep - 1
      }
    default:
      return state;
  }
}

export { defaultReducer }