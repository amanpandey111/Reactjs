import { useReducer } from "react";
import type { ReactNode } from "react";
import { defaultFormReducer } from "../reducer/form-reducer";
import { FormContext, type InitialStateType } from "../context";

interface PropsTypes {
    reducer?: typeof defaultFormReducer;
    children: ReactNode;
}

const initialState: InitialStateType = {
  values: {
    name: '',
    email: '',
  },
  errors: {},
};

const FormProvider = ({ reducer = defaultFormReducer, children }: PropsTypes) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider;
