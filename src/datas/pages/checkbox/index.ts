import { PreviewCheckbox } from './../../../components/pages/Checkbox/PreviewCheckbox';
import { TabContent, generateTab } from '@datas/pages/helpers/generateTabs';

export const basicCheckbox = (id: string): TabContent => generateTab(PreviewCheckbox, id, 'basic');
