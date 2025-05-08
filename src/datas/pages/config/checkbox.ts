import { basicCheckbox } from '@datas/pages/checkbox';
import { SectionContent } from '@datas/pages/config/_types';
import { createTabs } from '@datas/pages/helpers/tabHelpers';

export const ID_BASIC_CHECKBOX = 'basic';
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
              componentType: 'tabs',
              inputType: 'option',
              headerLine: true,
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              margin: 'mb-5',
            },
            tabData: createTabs(ID_BASIC_CHECKBOX, basicCheckbox(ID_BASIC_CHECKBOX)),
          },
          {},
        ],
      },
    ],
  },
];
