import { createContext, type Dispatch } from "react";

type Actions = 'CHANGE_FIELD'

export type ActionType = {
    type: Actions,
    payload: {
        name: string,
        value: string,
    }
}

export type InitialStateType = {
    values: {
        name: string, email: string,
    },
    errors: {
        [key: string] : string 
    }
}

type FormContextType = {
  state: InitialStateType,
  dispatch: Dispatch<ActionType>
}

const FormContext = createContext<FormContextType | null>(null);

export { FormContext }