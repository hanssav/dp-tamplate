import { TabData } from '@datas/pages/config';

export const createTabs = (id: string, content: any): TabData[] => [
  {
    id,
    title: 'Preview',
    active: true,
    content: content.preview,
  },
  {
    id,
    title: 'HTML',
    content: content.html,
  },
  {
    id,
    title: 'Typescript',
    content: content.typescript,
  },
];
