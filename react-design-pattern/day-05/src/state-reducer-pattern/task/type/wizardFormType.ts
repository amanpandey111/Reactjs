import type { Dispatch } from "react";

export type SubFormKeys = 'personalDetail' | 'employmentDetails' | 'declarations';

interface PersonalDetailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface EmploymentDetailsData {
  companyName: string;
  employeeId: number;
  role: string;
  department: string;
}

interface DeclarationsData {
  isAnyCriminalCase: boolean;
  isAnyMajorIllness: boolean;
}

type SubFormDataMap = {
  personalDetail: PersonalDetailData;
  employmentDetails: EmploymentDetailsData;
  declarations: DeclarationsData;
};

interface ActionType {
  type: 'INPUT_CHANGE' | 'INCREMENT_ACTIVE_STEP' | 'DECREMENT_ACTIVE_STEP';
  payload?: {
    name: string;
    value: string | boolean;
    formType: SubFormKeys;
  };
}

interface FormState {
  form: {
    [k in SubFormKeys]: SubFormDataMap[k];
  };

  activeStep: number;

  formErrors: {
    [k in SubFormKeys]: {
      [key: string]: string;
    }
  };
}

interface FormContextType {
  state: FormState;
  dispatch: Dispatch<ActionType>;
}

export type { FormContextType, ActionType, FormState };
