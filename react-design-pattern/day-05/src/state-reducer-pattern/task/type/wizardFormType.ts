import type { Dispatch } from "react";

export type SubFormKeys = 'personalDetail' | 'employmentDetails' | 'declarations';

interface PersonalDetailData {
  name: string;
  email: string;
  phone: string;
}

interface EmploymentDetailsData {
  companyName: string;
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
  type: 'INPUT_CHANGE';
  payload: {
    name: string;
    value: string;
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
