import {
  extendedFabTab,
  basicTab,
  fabTab,
  flatTab,
  iconTab,
  miniFabTab,
  outlineTab,
  raisedTab,
  toggleBasicTab,
  toggleMultipleSelectTab,
  toggleReactiveFormTab,
  toggleexclusiveSelectionTab,
} from '@datas/pages/button';
import { SectionContent } from '@datas/pages/config/_types';
import { createTabs } from '@datas/pages/helpers/tabHelpers';

export const ID_BASIC = 'basic';
export const ID_RAISED = 'raised';
export const ID_OUTLINE = 'outline';
export const ID_FLAT = 'flat';
export const ID_ICON = 'icon';
export const ID_FAB = 'fab';
export const ID_MINI_FAB = 'mini-fab';
export const ID_EXTENDED_FAB = 'extended-fab';

export const ID_TOGGLE_BASIC = 'toggle-basic';
export const ID_MULTIPLE_SELECT = 'multiple-select';
export const ID_REACTIVE_FORM = 'reactive-form';
export const ID_EXCLUSIVE_SELECTION = 'exclusive-selection';

const configData = {
  componentType: 'tabs',
  inputType: 'option',
  headerLine: true,
  border: 'border dark:border-gray-700',
  shadow: 'shadow-none',
  padding: 'px-5 py-2',
  margin: 'mb-5',
};

export const button: SectionContent[] = [
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
          shadow: 'shadow-soft',
          padding: 'px-5 py-2',
          usePaddingInContent: true,
        },
        title: 'Button',
        col: 'col-2',
        childOptions: {
          type: 'columnGroup',
        },
        data: [
          {
            title: 'Basic',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_BASIC, basicTab(ID_BASIC)),
          },
          {
            title: 'Raised',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_RAISED, raisedTab(ID_RAISED)),
          },
          {
            title: 'Outline',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_OUTLINE, outlineTab(ID_OUTLINE)),
          },
          {
            title: 'Flat',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_FLAT, flatTab(ID_FLAT)),
          },
          {
            title: 'Icon',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_ICON, iconTab(ID_ICON)),
          },
          {
            title: 'Fab',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_FAB, fabTab(ID_FAB)),
          },
          {
            title: 'Mini Fab',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_MINI_FAB, miniFabTab(ID_MINI_FAB)),
          },
          {
            title: 'Extended Fab',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_EXTENDED_FAB, extendedFabTab(ID_EXTENDED_FAB)),
          },
        ],
      },
    ],
  },
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
          shadow: 'shadow-soft',
          padding: 'px-5 py-2',
          usePaddingInContent: true,
        },
        title: 'Button Togglee',
        col: 'col-2',
        childOptions: {
          type: 'columnGroup',
        },
        data: [
          {
            title: 'Basic',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_TOGGLE_BASIC, toggleBasicTab(ID_TOGGLE_BASIC)),
          },
          {
            title: 'Multiple Select',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_MULTIPLE_SELECT, toggleMultipleSelectTab(ID_MULTIPLE_SELECT)),
          },
          {
            title: 'Reactive Form',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_REACTIVE_FORM, toggleReactiveFormTab(ID_REACTIVE_FORM)),
          },
          {
            title: 'Exclusive Selection',
            variant: 'default',
            config: configData,
            tabData: createTabs(ID_EXCLUSIVE_SELECTION, toggleexclusiveSelectionTab(ID_EXCLUSIVE_SELECTION)),
          },
        ],
      },
    ],
  },
];
