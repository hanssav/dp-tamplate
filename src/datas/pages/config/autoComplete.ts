import {
  previewContent,
} from '@datas/pages/autocomplete/helpers'; // Ensure correct import
import {
  htmlContent,
  typescriptContent,
} from '@datas/pages/autocomplete/helpers';
import { SectionContent } from '@datas/pages/config/_types';
import { ReactNode } from 'react';

export const tabsDataAutoCompleteOptions: TabData[] = [
  {
    title: 'Preview',
    active: true,
    content: previewContent,
    classNameContent: 'p-4 bg-white dark:bg-gray-800',
  },
  {
    title: 'HTML',
    content: htmlContent, // This is a ReactNode
    classNameContent: 'bg-gray-900 rounded-lg p-4',
  },
  {
    title: 'Typescript',
    content: typescriptContent, // This is a ReactNode
    classNameContent: 'bg-gray-900 rounded-lg p-4',
  },
];

// Make sure that the TabData type reflects JSX.Element (React component type)
export type TabData = {
  title: string;
  content: JSX.Element | ReactNode; // This will cover both JSX and ReactNode
  active?: boolean;
  disabled?: boolean;
  classNameContent?: string;
};

export const autoComplete: SectionContent[] = [
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
            },
            tabData: tabsDataAutoCompleteOptions,
          },
          {
            title: 'Option Group',
            variant: 'default',
            type: 'option',
            config: {
              border: 'border dark:border-gray-700',
              headerLine: true,
              padding: 'px-5 py-2',
            },
          },
          {
            title: 'Filter',
            variant: 'default',
            type: 'option',
            config: {
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              headerLine: true,
            },
          },
          {
            title: 'Overview',
            variant: 'default',
            type: 'option',
            config: {
              border: 'border dark:border-gray-700',
              padding: 'px-5 py-2',
              headerLine: true,
            },
          },
        ],
      },
    ],
  },
];
