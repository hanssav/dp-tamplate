import { TabContent, generateTab } from '@datas/pages/helpers/generateTabs';
import { PreviewCheckbox } from '@components/pages/Checkbox/PreviewCheckbox';
import { lazy } from 'react';

export const basicCheckbox = (id: string): TabContent =>
  generateTab(
    PreviewCheckbox,
    id,
    'basic-checkbox',
    lazy(() =>
      import('@datas/pages/checkbox/preview/basicCheckboxPreview').then(mod => ({
        default: mod['BasicCheckboxHtmlPreview'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/checkbox/preview/basicCheckboxPreview').then(mod => ({
        default: mod['BasicCheckboxTypescriptPreview'],
      }))
    )
  );
