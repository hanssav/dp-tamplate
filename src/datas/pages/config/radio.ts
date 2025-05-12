import { createTabs } from '@datas/pages/helpers/tabHelpers';
import { basicRadio, ngModelRadio } from '@datas/pages/radio';
import { SectionContent } from './_types';

export const ID_BASIC_RADIO = 'basic-radio';
export const ID_NGMODEL_RADIO = 'ngModel-radio';

export const radio: SectionContent[] = [
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
        title: 'Radio',
        col: 'col-1',
        childOptions: {
          type: 'columnGroup',
        },
        data: [
          {
            title: 'Basic',
            variant: 'default',
            config: {
              id: ID_BASIC_RADIO,
              componentType: 'tabs',
              inputType: 'option',
              headerLine: true,
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              shadow: 'shadow-none',
              margin: 'mb-5',
            },
            tabData: createTabs(ID_BASIC_RADIO, basicRadio(ID_BASIC_RADIO)),
          },
          {
            title: 'ngModel',
            variant: 'default',
            config: {
              id: ID_NGMODEL_RADIO,
              componentType: 'tabs',
              inputType: 'option',
              headerLine: true,
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              shadow: 'shadow-none',
              margin: 'mb-5',
            },
            tabData: createTabs(ID_NGMODEL_RADIO, ngModelRadio(ID_NGMODEL_RADIO)),
          },
        ],
      },
    ],
  },
];
