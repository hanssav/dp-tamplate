import {
  Filter,
  FirstAutocompleteOption,
  OptionGroup,
  Overview,
} from '@datas/pages/autocomplete/helpers';
import { SectionContent, TabData } from '@datas/pages/config/_types';

export const tabsDataAutoCompleteOptions: TabData[] = [
  {
    id: 'autocomplete',
    title: 'Preview',
    active: true,
    content: FirstAutocompleteOption.preview,
  },
  {
    id: 'autocomplete',
    title: 'HTML',
    content: FirstAutocompleteOption.html,
  },
  {
    id: 'autocomplete',
    title: 'Typescript',
    content: FirstAutocompleteOption.typescript,
  },
];

export const tabsDataFilter: TabData[] = [
  {
    id: 'filter',
    title: 'Preview',
    active: true,
    content: Filter.preview,
  },
  {
    id: 'autocomplete',
    title: 'HTML',
    content: Filter.html,
  },
  {
    id: 'autocomplete',
    title: 'Typescript',
    content: Filter.typescript,
  },
];

export const tabsDataOptionGroup: TabData[] = [
  {
    id: 'optionGroup',
    title: 'Preview',
    active: true,
    content: OptionGroup.preview,
  },
  {
    id: 'optionGroup',
    title: 'HTML',
    content: OptionGroup.html,
  },
  {
    id: 'optionGroup',
    title: 'Typescript',
    content: OptionGroup.typescript,
  },
];

export const tabsDataOverview: TabData[] = [
  {
    id: 'overview',
    title: 'Preview',
    active: true,
    content: Overview.preview,
  },
  {
    id: 'overview',
    title: 'HTML',
    content: Overview.html,
  },
  {
    id: 'overview',
    title: 'Typescript',
    content: Overview.typescript,
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
            config: {
              border: 'border dark:border-gray-700',
              margin: 'mb-5',
              componentType: 'tabs',
              padding: 'px-5 py-2',
              headerLine: true,
              inputType: 'option',
            },
            tabData: tabsDataOverview,
          },
        ],
      },
    ],
  },
];
