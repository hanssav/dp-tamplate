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

export const configurationCheckbox = (id: string): TabContent =>
  generateTab(
    PreviewCheckbox,
    id,
    'configuration-checkbox',
    lazy(() =>
      import('@datas/pages/checkbox/preview/configurationCheckboxPreview').then(mod => ({
        default: mod['CheckboxConfigurationPreviewHtml'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/checkbox/preview/configurationCheckboxPreview').then(mod => ({
        default: mod['CheckboxConfigurationPreviewTsx'],
      }))
    )
  );

export const reactiveFormCheckbox = (id: string): TabContent =>
  generateTab(
    PreviewCheckbox,
    id,
    'reactive-form-checkbox',
    lazy(() =>
      import('@datas/pages/checkbox/preview/reactiveFormPreview').then(mod => ({
        default: mod['CheckboxReactiveFormPreviewHtml'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/checkbox/preview/reactiveFormPreview').then(mod => ({
        default: mod['CheckboxReactiveFormPreviewTsx'],
      }))
    )
  );