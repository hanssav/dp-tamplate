import {
  ButtonFormType,
  FormLayoutVariant,
  FormSection,
  ID_DEFAULT_FORM,
  ID_INPUT_VARIANT_FORM,
  ID_ORDINARY_FORM,
} from './types';

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
          id: 'radio-group-2',
          type: 'radio',
          name: 'radio-group',
          options: [
            {
              id: 'radio-group-1',
              label: 'Toggle this custom radio',
            },
            {
              id: 'radio-group-2',
              label: 'Toggle this custom radio',
            },
            {
              id: 'radio-group-3',
              label: 'Toggle this custom radio',
            },
          ],
        },
      ],
    },
  ],
};

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

export {
  ID_ORDINARY_FORM,
  ID_INPUT_VARIANT_FORM,
  ID_DEFAULT_FORM,
  formLayoutConfig,
  buttonFormConfig,
};
