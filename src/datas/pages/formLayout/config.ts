const ID_ORDINARY_FORM = 'ordinary-form';
const ID_INPUT_VARIANT_FORM = 'input-variant-form';
const ID_DEFAULT_FORM = 'default-form';

type FormLayoutVariant =
  | typeof ID_ORDINARY_FORM
  | typeof ID_INPUT_VARIANT_FORM
  | typeof ID_DEFAULT_FORM;

const formLayoutConfig: Record<FormLayoutVariant, any[]> = {
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
      id: 'error',
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
  ],
};

const buttonFormConfig: any = {
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
  type FormLayoutVariant,
  ID_ORDINARY_FORM,
  ID_INPUT_VARIANT_FORM,
  ID_DEFAULT_FORM,
  formLayoutConfig,
  buttonFormConfig,
};
