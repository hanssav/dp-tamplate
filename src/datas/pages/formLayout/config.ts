import { Info } from 'lucide-react';
import {
  ButtonFormType,
  FormLayoutVariant,
  FormSection,
  ID_BASIC_HEADER_FORM,
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
          id: 'radio-group',
          type: 'radio',
          name: 'radio-group',
          config: {
            flex: 'flex-col',
          },
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
    {
      id: 'select',
      type: 'select',
      label: 'Select',
      options: [
        { id: 'option-1', label: 'Option 1' },
        { id: 'option-2', label: 'Option 2' },
        { id: 'option-3', label: 'Option 3' },
      ],
    },
  ],
  [ID_BASIC_HEADER_FORM]: [
    {
      id: 'person-info-header',
      label: 'Person Info',
      icon: Info,
    },
    {
      col: 'col-2',
      id: 'name-header-form',
      child: [
        { id: 'firstName', type: 'text', label: 'First Name' },
        { id: 'lastName', type: 'text', label: 'Last Name' },
      ],
    },
    {
      col: 'col-2',
      id: 'gender-birth',
      child: [
        {
          id: 'gender',
          type: 'select',
          label: 'Select Gender',
          options: [
            { id: 'male', label: 'Male' },
            { id: 'female', label: 'Female' },
          ],
        },
        { id: 'birth-date', type: 'date', label: 'Birth Date' },
      ],
    },
    {
      id: 'membership',
      type: 'radio',
      name: 'membership',
      label: 'Membership',
      config: { flex: 'flex-row', margin: 'm-1' },
      options: [
        { id: 'membership-paid', label: 'Paid' },
        { id: 'membership-free', label: 'Free' },
      ],
    },
    { id: 'address-info-header', label: 'Address', icon: Info },
    { id: 'street', type: 'text', label: 'Street' },
    {
      col: 'col-2',
      id: 'city-state',
      child: [
        { id: 'city', type: 'text', label: 'City' },
        { id: 'state', type: 'text', label: 'State' },
      ],
    },
    {
      col: 'col-2',
      id: 'post-code-country',
      child: [
        { id: 'postCode', type: 'text', label: 'Post Code' },
        { id: 'country', type: 'text', label: 'Country' },
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
  [ID_BASIC_HEADER_FORM]: [
    {
      id: `${ID_BASIC_HEADER_FORM}-cancel`,
      type: 'cancel',
      label: 'Cancel',
      color: 'warning',
    },
    {
      id: `${ID_BASIC_HEADER_FORM}-submit`,
      type: 'submit',
      label: 'Submit',
      color: 'primary',
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
