import { ColKey } from '@components/UI/Box/boxTheme';

const ID_ORDINARY_FORM = 'ordinary-form';
const ID_INPUT_VARIANT_FORM = 'input-variant-form';
const ID_DEFAULT_FORM = 'default-form';

type FormLayoutVariant =
  | typeof ID_ORDINARY_FORM
  | typeof ID_INPUT_VARIANT_FORM
  | typeof ID_DEFAULT_FORM;

// Define supported form input types
type FormFieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'checkbox'
  | 'textarea'
  | 'radio';

// Type for checkbox item
interface Options {
  id: string;
  label: string;
}

// Base field
interface BaseFormField {
  id: string;
  type: FormFieldType;
  label?: string;
  placeholder?: string;
  description?: string;
}

interface CheckboxGroupField extends BaseFormField {
  type: FormFieldType;
  name?: string;
  options: Options[];
}

interface SingleCheckboxField extends BaseFormField {
  type: FormFieldType;
}

type FormField = BaseFormField | CheckboxGroupField | SingleCheckboxField;

interface FormFieldGroup {
  col: ColKey;
  id: string;
  child: (FormField | FormFieldGroup)[];
}

type FormSection = (FormField | FormFieldGroup)[];

interface ButtonFormType {
  id: string;
  type: 'submit';
  label: string;
}

export { ID_DEFAULT_FORM, ID_INPUT_VARIANT_FORM, ID_ORDINARY_FORM };
export type {
  FormLayoutVariant,
  FormFieldGroup,
  BaseFormField,
  FormField,
  SingleCheckboxField,
  CheckboxGroupField,
  ButtonFormType,
  Options,
  FormSection,
};
