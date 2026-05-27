import type { ActionType, FormState } from "../type/wizardFormType";

const defaultReducer = (state: FormState, action: ActionType) => {
  switch(action.type) {
    case 'INPUT_CHANGE':
      return state
    default:
      return state;
  }
}

export { defaultReducer }