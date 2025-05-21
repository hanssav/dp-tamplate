import { SectionContent } from '@datas/pages/config/_types';
import {
  basicDatepicker,
  customSelectionDatepicker,
} from '@datas/pages/datePicker';
import { createTabs } from '@datas/pages/helpers/tabHelpers';

export const ID_BASIC_DATEPICKER = 'basic-datepicker';
export const ID_CUSTOM_SELECTION_DATEPICKER = 'custom-selection';

export const datepicker: SectionContent[] = [
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
        title: 'Datepicker',
        col: 'col-2',
        childOptions: {
          type: 'columnGroup',
        },
        data: [
          {
            title: 'Basic',
            variant: 'default',
            config: {
              id: ID_BASIC_DATEPICKER,
              componentType: 'tabs',
              inputType: 'option',
              headerLine: true,
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              shadow: 'shadow-none',
              margin: 'mb-5',
            },
            tabData: createTabs(
              ID_BASIC_DATEPICKER,
              basicDatepicker(ID_BASIC_DATEPICKER)
            ),
          },
          {
            title: 'Custom Selection',
            variant: 'default',
            config: {
              id: ID_BASIC_DATEPICKER,
              componentType: 'tabs',
              inputType: 'option',
              headerLine: true,
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              shadow: 'shadow-none',
              margin: 'mb-5',
            },
            tabData: createTabs(
              ID_CUSTOM_SELECTION_DATEPICKER,
              customSelectionDatepicker(ID_CUSTOM_SELECTION_DATEPICKER)
            ),
          },
        ],
      },
    ],
  },
];
