import { SectionContent } from '@datas/pages/config/_types';

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
        },
        title: 'Auto Complete',
        col: 'col-2',
        childOptions: {
          type: 'columnGroup',
        },
        data: [
          {
            title: 'First autocomplete option',
            variant: 'default',
            type: 'option',
            config: {
              headerLine: true,
            },
          },
          {
            title: 'Option Group',
            variant: 'default',
            type: 'option',
            config: {
              headerLine: true,
            },
          },
          {
            title: 'Filter',
            variant: 'default',
            type: 'option',
            config: {
              headerLine: true,
            },
          },
          {
            title: 'Overview',
            variant: 'default',
            type: 'option',
            config: {
              headerLine: true,
            },
          },
        ],
      },
    ],
  },
];
