const ID_ORDINARY_FORM = 'ordinary-form';
const ID_INPUT_VARIANT_FORM = 'input-variant-form';
type FormLayoutVariant = typeof ID_ORDINARY_FORM | typeof ID_INPUT_VARIANT_FORM;

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
      id: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Please Enter Email',
    },
  ],
};

const buttonFormConfig: any = {
  [ID_ORDINARY_FORM]: [
    {
      id: 'submit',
      type: 'submit',
      label: 'Submit',
    },
  ],
  [ID_INPUT_VARIANT_FORM]: [],
};

export {
  type FormLayoutVariant,
  ID_ORDINARY_FORM,
  ID_INPUT_VARIANT_FORM,
  formLayoutConfig,
  buttonFormConfig,
};
