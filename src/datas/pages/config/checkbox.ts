import { basicCheckbox, configurationCheckbox, reactiveFormCheckbox } from '@datas/pages/checkbox';
import { SectionContent } from '@datas/pages/config/_types';
import { createTabs } from '@datas/pages/helpers/tabHelpers';

export const ID_BASIC_CHECKBOX = 'basic-checkbox';
export const ID_CONFIGURATION_CHECKBOX = 'basic-checkbox';
export const ID_REACTIVE_FORM_CHECKBOX = 'reactive-form-checkbox';
export const checkbox: SectionContent[] = [
  {
    variant: 'default',
    data: [
      {
        variant: 'default',
        type: 'columnGroup',
        config: {
          headerLine: true,
          border: 'border-none',
          padding: 'px-5 py-2',
          usePaddingInContent: true,
        },
        title: 'Checkbox',
        col: 'col-1',
        childOptions: {
          type: 'columnGroup',
        },
        data: [
          {
            title: 'Basic',
            variant: 'default',
            config: {
              id: ID_BASIC_CHECKBOX,
              componentType: 'tabs',
              inputType: 'option',
              headerLine: true,
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              shadow: 'shadow-none',
              margin: 'mb-5',
            },
            tabData: createTabs(ID_BASIC_CHECKBOX, basicCheckbox(ID_BASIC_CHECKBOX)),
          },
          {
            title: 'Configuration',
            variant: 'default',
            config: {
              id: ID_BASIC_CHECKBOX,
              componentType: 'tabs',
              inputType: 'option',
              headerLine: true,
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              margin: 'mb-5',
              shadow: 'shadow-none',
            },
            tabData: createTabs(ID_CONFIGURATION_CHECKBOX, configurationCheckbox(ID_CONFIGURATION_CHECKBOX)),
          },
          {
            title: 'Reactive Form',
            variant: 'default',
            config: {
              id: ID_BASIC_CHECKBOX,
              componentType: 'tabs',
              inputType: 'option',
              headerLine: true,
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              margin: 'mb-5',
              shadow: 'shadow-none',
            },
            tabData: createTabs(ID_REACTIVE_FORM_CHECKBOX, reactiveFormCheckbox(ID_REACTIVE_FORM_CHECKBOX)),
          },
        ],
      },
    ],
  },
];
