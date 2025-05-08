import {
  Filter,
  FirstAutocompleteOption,
  OptionGroup,
  Overview,
} from '@datas/pages/autocomplete/helpers';
import { SectionContent } from '@datas/pages/config/_types';
import { createTabs } from '@datas/pages/helpers/tabHelpers';

export const autocomplete: SectionContent[] = [
  {
    col: 'col-1',
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
        title: 'Autocomplete',
        col: 'col-2',
        childOptions: {
          type: 'columnGroup',
        },
        data: [
          {
            title: 'First autocomplete option',
            variant: 'default',
            config: {
              componentType: 'tabs',
              inputType: 'option',
              headerLine: true,
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              margin: 'mb-5',
            },
            tabData: createTabs('autocomplete', FirstAutocompleteOption),
          },
          {
            title: 'Option Group',
            variant: 'default',
            config: {
              componentType: 'tabs',
              inputType: 'option',
              headerLine: true,
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              margin: 'mb-5',
            },
            tabData: createTabs('optionGroup', OptionGroup),
          },
          {
            title: 'Filter',
            variant: 'default',
            config: {
              border: 'border dark:border-gray-700',
              margin: 'mb-5',
              componentType: 'tabs',
              padding: 'px-5 py-2',
              headerLine: true,
              inputType: 'option',
            },
            tabData: createTabs('filter', Filter),
          },
          {
            title: 'Overview',
            variant: 'default',
            config: {
              border: 'border dark:border-gray-700',
              margin: 'mb-5',
              componentType: 'tabs',
              padding: 'px-5 py-2',
              headerLine: true,
              inputType: 'option',
            },
            tabData: createTabs('overview', Overview),
          },
        ],
      },
    ],
  },
];
