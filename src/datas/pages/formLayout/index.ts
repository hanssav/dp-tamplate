import { PreviewFormLayout } from '@components/pages/FormLayout';
import {
  ID_DEFAULT_FORM,
  ID_INPUT_VARIANT_FORM,
  ID_ORDINARY_FORM,
} from '@datas/pages/formLayout/config';
import { lazy } from 'react';
import { generateTab, TabContent } from './../helpers/generateTabs';
import { ID_BASIC_HEADER_FORM } from './types';

const ordinaryForm = (id: string): TabContent =>
  generateTab(
    PreviewFormLayout,
    id,
    ID_ORDINARY_FORM,
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

const inputVariantFrom = (id: string): TabContent =>
  generateTab(
    PreviewFormLayout,
    id,
    ID_INPUT_VARIANT_FORM,
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

const defaultForm = (id: string): TabContent =>
  generateTab(
    PreviewFormLayout,
    id,
    ID_DEFAULT_FORM,
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

const basicHeadertForm = (id: string): TabContent =>
  generateTab(
    PreviewFormLayout,
    id,
    ID_BASIC_HEADER_FORM,
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

export { ordinaryForm, inputVariantFrom, defaultForm, basicHeadertForm };
