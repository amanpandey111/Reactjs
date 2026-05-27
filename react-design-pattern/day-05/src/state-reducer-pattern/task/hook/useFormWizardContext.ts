import { useContext } from "react";
import { FormWizardContext } from "../context";

const useFormWizardContext = () => {
  const context = useContext(FormWizardContext)
  if(!context) {
    throw new Error('useFormWizardContext must be within in the FormWizardProvider.')
  }
  return context;
};

export { useFormWizardContext };
