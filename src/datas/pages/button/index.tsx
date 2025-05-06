import { PreviewButtonGroup } from '@components/pages/Button/PreviewButton';
import { PreviewToggle } from '@components/pages/Button/PreviewToggle';
import { generateTab, TabContent } from '@datas/pages/button/generateTabs';

export const basicTab = (id: string): TabContent => generateTab(PreviewButtonGroup, id, 'basic');
export const raisedTab = (id: string): TabContent => generateTab(PreviewButtonGroup, id, 'raised');
export const outlineTab = (id: string): TabContent => generateTab(PreviewButtonGroup, id, 'outline');
export const flatTab = (id: string): TabContent => generateTab(PreviewButtonGroup, id, 'flat');
export const iconTab = (id: string): TabContent => generateTab(PreviewButtonGroup, id, 'icon');
export const fabTab = (id: string): TabContent => generateTab(PreviewButtonGroup, id, 'fab');
export const miniFabTab = (id: string): TabContent => generateTab(PreviewButtonGroup, id, 'mini-fab');
export const extendedFabTab = (id: string): TabContent => generateTab(PreviewButtonGroup, id, 'extended-fab');
// toggle Button
export const toggleBasicTab = (id: string): TabContent => generateTab(PreviewToggle, id, 'basic');
export const toggleMultipleSelectTab = (id: string): TabContent => generateTab(PreviewToggle, id, 'multiple-select');
export const toggleReactiveFormTab = (id: string): TabContent => generateTab(PreviewToggle, id, 'reactive-form');
export const toggleexclusiveSelectionTab = (id: string): TabContent =>
  generateTab(PreviewToggle, id, 'exclusive-selection');
