import { PreviewCheckbox } from '@components/pages/Checkbox/PreviewCheckbox';
import { generateTab, TabContent } from '@datas/pages/helpers/generateTabs';
import { lazy } from 'react';

export const basicRadio = (id: string): TabContent =>
  generateTab(
    PreviewCheckbox,
    id,
    'basic-radio',
    lazy(() =>
      import('@datas/pages/radio/preview/basicRadioPreview').then(mod => ({
        default: mod['BasicRadioPreviewHtml'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/radio/preview/basicRadioPreview').then(mod => ({
        default: mod['BasicRadioPreviewTsx'],
      }))
    )
  );

export const ngModelRadio = (id: string): TabContent =>
  generateTab(
    PreviewCheckbox,
    id,
    'ngModel-radio',
    lazy(() =>
      import('@datas/pages/radio/preview/ngModelPreview').then(mod => ({
        default: mod['NgModelPreviewHtml'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/radio/preview/ngModelPreview').then(mod => ({
        default: mod['NgModelPreviewTsx'],
      }))
    )
  );
