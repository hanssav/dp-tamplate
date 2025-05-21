import {
  ID_BASIC_DATEPICKER,
  ID_CUSTOM_SELECTION_DATEPICKER,
} from './../config/datepicker';
import { PreviewDatepicker } from '@components/pages/Datepicker/PreviewDatepicker';
import { generateTab, TabContent } from '@datas/pages/helpers/generateTabs';
import { lazy } from 'react';

export const basicDatepicker = (id: string): TabContent =>
  generateTab(
    PreviewDatepicker,
    id,
    ID_BASIC_DATEPICKER,
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

export const customSelectionDatepicker = (id: string): TabContent =>
  generateTab(
    PreviewDatepicker,
    id,
    ID_CUSTOM_SELECTION_DATEPICKER,
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
