import type { ActionType, FormState } from "../type/wizardFormType";

const defaultReducer = (state: FormState, action: ActionType) => {
  switch(action.type) {
    case 'INPUT_CHANGE':
      return state
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