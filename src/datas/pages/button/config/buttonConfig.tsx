import {
  Home,
  SlidersHorizontal,
  LayoutGrid,
  Heart,
  MessageSquare,
  Trash2,
  Bookmark,
  Radio,
  Accessibility,
} from 'lucide-react';

export type ButtonVariant = 'basic' | 'raised' | 'outline' | 'flat' | 'icon' | 'fab' | 'mini-fab' | 'extended-fab';

export const buttonConfigs: Record<ButtonVariant, any[]> = {
  basic: [
    { label: 'Basic', props: { color: 'basic' } },
    { label: 'Disabled', props: { color: 'basic', disabled: true } },
    { label: 'Link', props: { color: 'basic', link: true } },
  ],
  raised: [
    { label: 'Basic', props: { color: 'basic', raised: true } },
    { label: 'Disabled', props: { color: 'basic', disabled: true } },
    { label: 'Link', props: { color: 'basic', raised: true, link: true } },
  ],
  outline: [
    { label: 'Primary', props: { color: 'outline', outlineColor: 'primary' } },
    {
      label: 'Secondary',
      props: { color: 'outline', outlineColor: 'secondary' },
    },
    { label: 'Warning', props: { color: 'outline', outlineColor: 'warning' } },
    { label: 'Error', props: { color: 'outline', outlineColor: 'error' } },
    { label: 'Success', props: { color: 'outline', outlineColor: 'success' } },
    { label: 'Disabled', props: { color: 'basic', disabled: true } },
    { label: 'Link', props: { color: 'outline', outlineColor: 'link' } },
  ],
  flat: [
    { label: 'Primary', props: { color: 'primary' } },
    { label: 'Secondary', props: { color: 'secondary' } },
    { label: 'Warning', props: { color: 'warning' } },
    { label: 'Error', props: { color: 'error' } },
    { label: 'Success', props: { color: 'success' } },
    { label: 'Disabled', props: { color: 'basic', disabled: true } },
    { label: 'Link', props: { color: 'primary' } },
  ],
  icon: [
    { props: { color: 'basic', pill: true, size: 'icon' }, icon: <Home /> },
    {
      props: { color: 'basic', pill: true, size: 'icon' },
      icon: <SlidersHorizontal />,
    },
    {
      props: { color: 'basic', pill: true, size: 'icon' },
      icon: <LayoutGrid />,
    },
    { props: { color: 'basic', pill: true, size: 'icon' }, icon: <Heart /> },
    {
      props: { color: 'basic', pill: true, size: 'icon', disabled: true },
      icon: <MessageSquare />,
    },
  ],
  fab: [
    {
      props: { color: 'primary', pill: true, size: 'icon-lg' },
      icon: <Trash2 />,
    },
    {
      props: { color: 'secondary', pill: true, size: 'icon-lg' },
      icon: <Bookmark />,
    },
    {
      props: { color: 'warning', pill: true, size: 'icon-lg' },
      icon: <Home />,
    },
    { props: { color: 'error', pill: true, size: 'icon-lg' }, icon: <Heart /> },
    {
      props: { color: 'success', pill: true, size: 'icon-lg' },
      icon: <Radio />,
    },
    {
      props: { color: 'basic', pill: true, size: 'icon-lg', disabled: true },
      icon: <Accessibility />,
    },
  ],
  'mini-fab': [
    { props: { color: 'primary', pill: true, size: 'icon' }, icon: <Trash2 /> },
    {
      props: { color: 'secondary', pill: true, size: 'icon' },
      icon: <Bookmark />,
    },
    { props: { color: 'warning', pill: true, size: 'icon' }, icon: <Home /> },
    { props: { color: 'error', pill: true, size: 'icon' }, icon: <Heart /> },
    { props: { color: 'success', pill: true, size: 'icon' }, icon: <Radio /> },
    {
      props: { color: 'basic', pill: true, size: 'icon', disabled: true },
      icon: <Accessibility />,
    },
  ],
  'extended-fab': [
    {
      label: 'Delete',
      props: {
        color: 'basic',
        size: 'lg',
        rounded: 'lg',
        className:
          'rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700',
      },
      icon: <Trash2 />,
    },
    {
      label: 'Bookmark',
      props: {
        color: 'basic',
        size: 'lg',
        rounded: 'lg',
        className:
          'rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700',
      },
      icon: <Bookmark />,
    },
    {
      label: 'Home',
      props: {
        color: 'basic',
        size: 'lg',
        rounded: 'lg',
        className:
          'rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700',
      },
      icon: <Home />,
    },
    {
      label: 'Heart',
      props: { color: 'basic', size: 'lg', rounded: 'xl', disabled: true },
      icon: <Heart />,
    },
  ],
};
