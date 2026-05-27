import { createContext } from "react";
import type { FormContextType } from "../type/wizardFormType";

const FormWizardContext = createContext<FormContextType | null>(null);

export { FormWizardContext };