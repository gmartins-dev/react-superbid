// Context - Reducer - Provider - Hooks
import {
  createContext,
  useContext,
  useReducer,
} from 'react';

const initialData = {
  currentStep: 0,
  name: '',
  personType: 0,
  email: '',
  phone: '',
};

//Context

const FormContext = createContext(undefined);

//Reducer

enum FormActions {
  setCurrentStep,
  setName,
  setPersonType,
  setEmail,
  setPhone,
}

const FormReducer = (state, action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
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

const FormProvider = ({ children }) => {
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
