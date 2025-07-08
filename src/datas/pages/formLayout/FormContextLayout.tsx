// src/contexts/FormLayoutContext.tsx or wherever fits your structure

import { createContext, useContext } from 'react';
import { FormLayoutVariant } from '@datas/pages/formLayout/types';

export type FormLayoutContextType = {
  control: any;
  form: any;
  variant: FormLayoutVariant;
};

const FormLayoutContext = createContext<FormLayoutContextType | undefined>(
  undefined
);

export const FormLayoutProvider = FormLayoutContext.Provider;

export const useFormLayout = () => {
  const context = useContext(FormLayoutContext);
  if (!context) {
    throw new Error('useFormLayout must be used inside FormLayoutProvider');
  }
  return context;
};
