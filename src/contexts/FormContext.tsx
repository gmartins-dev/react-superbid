// Context - Reducer - Provider - Hooks
import {
  createContext,
  useContext,
  useReducer,
} from 'react';

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
