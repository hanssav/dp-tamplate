import {
  Filter,
  FirstAutocompleteOption,
  OptionGroup,
} from '@datas/pages/autocomplete/helpers';
import { SectionContent, TabData } from '@datas/pages/config/_types';

export const tabsDataAutoCompleteOptions: TabData[] = [
  {
    id: 'autocomplete',
    title: 'Preview',
    active: true,
    content: FirstAutocompleteOption.preview,
    classNameContent: 'p-4 bg-white dark:bg-gray-800',
  },
  {
    id: 'autocomplete',
    title: 'HTML',
    content: FirstAutocompleteOption.html,
    classNameContent: 'bg-gray-900 rounded-lg p-4',
  },
  {
    id: 'autocomplete',
    title: 'Typescript',
    content: FirstAutocompleteOption.typescript,
    classNameContent: 'bg-gray-900 rounded-lg p-4',
  },
];

export const tabsDataFilter: TabData[] = [
  {
    id: 'filter',
    title: 'Preview',
    active: true,
    content: Filter.preview,
    classNameContent: 'p-4 bg-white dark:bg-gray-800',
  },
  {
    id: 'autocomplete',
    title: 'HTML',
    content: Filter.html,
    classNameContent: 'bg-gray-900 rounded-lg p-4',
  },
  {
    id: 'autocomplete',
    title: 'Typescript',
    content: Filter.typescript,
    classNameContent: 'bg-gray-900 rounded-lg p-4',
  },
];

export const tabsDataOptionGroup: TabData[] = [
  {
    id: 'filter',
    title: 'Preview',
    active: true,
    content: OptionGroup.preview,
    classNameContent: 'p-4 bg-white dark:bg-gray-800',
  },
  {
    id: 'autocomplete',
    title: 'HTML',
    content: OptionGroup.html,
    classNameContent: 'bg-gray-900 rounded-lg p-4',
  },
  {
    id: 'autocomplete',
    title: 'Typescript',
    content: OptionGroup.typescript,
    classNameContent: 'bg-gray-900 rounded-lg p-4',
  },
];

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
            tabData: tabsDataAutoCompleteOptions,
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
            tabData: tabsDataOptionGroup,
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
            tabData: tabsDataFilter,
          },
          {
            title: 'Overview',
            variant: 'default',
            type: 'option',
            config: {
              border: 'border dark:border-gray-700',
              margin: 'mb-5',
              padding: 'px-5 py-2',
              headerLine: true,
            },
          },
        ],
      },
    ],
  },
];
