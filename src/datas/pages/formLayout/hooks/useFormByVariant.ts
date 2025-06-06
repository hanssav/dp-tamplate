import {
  ID_ORDINARY_FORM,
  ID_INPUT_VARIANT_FORM,
  FormLayoutVariant,
} from '../config';
import { OrdinaryFormNameSchema, useOrdinaryForm } from './useOrdinaryForm';
import {
  InputVariantFormNameSchema,
  useInputVariantForm,
} from './useInputVariantForm';
import { UseFormReturn } from 'react-hook-form';

type UseFormByVariantResult =
  | {
      variant: typeof ID_ORDINARY_FORM;
      form: UseFormReturn<OrdinaryFormNameSchema>;
      onSubmit: (data: OrdinaryFormNameSchema) => void;
    }
  | {
      variant: typeof ID_INPUT_VARIANT_FORM;
      form: UseFormReturn<InputVariantFormNameSchema>;
      onSubmit: (data: InputVariantFormNameSchema) => void;
    };

export function useFormByVariant(
  variant: FormLayoutVariant
): UseFormByVariantResult {
  if (variant === ID_ORDINARY_FORM) {
    const { form, onSubmit } = useOrdinaryForm();
    return {
      variant: ID_ORDINARY_FORM,
      form,
      onSubmit,
    };
  }

  const { form, onSubmit } = useInputVariantForm();
  return {
    variant: ID_INPUT_VARIANT_FORM,
    form,
    onSubmit,
  };
}
