// Context - Reducer - Provider - Hook
import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

//@Types:

type State = {
  currentStep: number;
  name: string;
  certificateType: null | number;
  personType: 0 | 1;
  email: string;
  phone: number;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
  name: '',
  certificateType: null,
  personType: 0,
  email: '',
  phone: 0,
};

//Context

const FormContext = createContext<ContextType | undefined>(
  undefined,
);

//Reducer

export enum FormActions {
  setCurrentStep,
  setName,
  setCertificateType,
  setPersonType,
  setEmail,
  setPhone,
}

const FormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setCertificateType:
      return { ...state, certificateType: action.payload };
    case FormActions.setPersonType:
      return { ...state, personType: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setPhone:
      return { ...state, phone: action.payload };
    default:
      return state;
  }
};

//Provider

export const FormProvider = ({
  children,
}: FormProviderProps) => {
  const [state, dispatch] = useReducer(
    FormReducer,
    initialData,
  );
  const value = { state, dispatch };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

//Context Hook

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error(
      'useForm so pode ser usado dentro do FormProvider',
    );
  }
  return context;
};
