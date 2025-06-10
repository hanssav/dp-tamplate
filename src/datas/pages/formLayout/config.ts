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
interface CheckboxItem {
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
  options: CheckboxItem[];
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

const formLayoutConfig: Record<FormLayoutVariant, FormSection> = {
  [ID_ORDINARY_FORM]: [
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Please Enter Email',
      description: "We'll never share your email with anyone else.",
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
    },
    {
      id: 'check',
      type: 'checkbox',
      label: 'Check Me Out!',
    },
  ],
  [ID_INPUT_VARIANT_FORM]: [
    {
      id: 'email',
      type: 'email',
      label: 'Error',
      placeholder: 'Pat@example.com',
    },
  ],
  [ID_DEFAULT_FORM]: [
    {
      id: 'default-text',
      type: 'text',
      label: 'Default Text',
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email',
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
    },
    {
      id: 'textarea',
      type: 'textarea',
      label: 'Textarea',
    },
    {
      col: 'col-2',
      id: 'box-id-1',

      child: [
        {
          id: 'checkbox-group',
          type: 'checkbox',
          options: [
            {
              id: 'checkbox-group1',
              label: 'Check this custom checkbox',
            },
            {
              id: 'checkbox-group2',
              label: 'Check this custom checkbox',
            },
            {
              id: 'checkbox-group3',
              label: 'Check this custom checkbox',
            },
          ],
        },
        {
          id: 'checkbox-group-2',
          type: 'checkbox',
          options: [
            {
              id: 'checkbox-group-1',
              label: 'Check this nomer 22',
            },
            {
              id: 'checkbox-group-2',
              label: 'Check this nomer 22',
            },
            {
              id: 'checkbox-group-3',
              label: 'Check this nomer 22',
            },
          ],
        },
      ],
    },
  ],
};

interface ButtonFormType {
  id: string;
  type: 'submit';
  label: string;
}

const buttonFormConfig: Record<FormLayoutVariant, ButtonFormType[]> = {
  [ID_ORDINARY_FORM]: [
    {
      id: `${ID_ORDINARY_FORM}-submit`,
      type: 'submit',
      label: 'Submit',
    },
  ],
  [ID_INPUT_VARIANT_FORM]: [],
  [ID_DEFAULT_FORM]: [
    {
      id: `${ID_DEFAULT_FORM}-submit`,
      type: 'submit',
      label: 'Submit',
    },
  ],
};

export type {
  FormLayoutVariant,
  FormFieldGroup,
  BaseFormField,
  FormField,
  SingleCheckboxField,
  CheckboxGroupField,
  ButtonFormType,
  CheckboxItem,
};

export {
  ID_ORDINARY_FORM,
  ID_INPUT_VARIANT_FORM,
  ID_DEFAULT_FORM,
  formLayoutConfig,
  buttonFormConfig,
};
