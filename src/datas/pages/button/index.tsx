import { PreviewButtonGroup } from '@components/pages/Button/PreviewButton';
import { PreviewToggle } from '@components/pages/Button/PreviewToggle';
import { generateTab, TabContent } from '@datas/pages/button/generateTabs';
import {
  BasicHtmlPreview,
  BasicToggleHtmlPreview,
  BasicToggleTypescriptPreview,
  BasicTypescriptPreview,
  ExclusiveSelectionHtmlPreview,
  ExclusiveSelectionTypescriptPreview,
  ExtendedFabHtmlPreview,
  ExtendedFabTypescriptPreview,
  FabHtmlPreview,
  FabTypescriptPreview,
  FlatHtmlPreview,
  FlatTypescriptPreview,
  IconHtmlPreview,
  IconTypescriptPreview,
  MiniFabHtmlPreview,
  MiniFabTypescriptPreview,
  MultipleSelectHtmlPreview,
  MultipleSelectTypescriptPreview,
  OutlineHtmlPreview,
  OutlineTypescriptPreview,
  RaisedHtmlPreview,
  RaisedTypescriptPreview,
  ReactiveFormHtmlPreview,
  ReactiveFormTypescriptPreview,
} from '@datas/pages/button/preview';

export const basicTab = (id: string): TabContent =>
  generateTab(PreviewButtonGroup, id, 'basic', BasicHtmlPreview, BasicTypescriptPreview);

export const raisedTab = (id: string): TabContent =>
  generateTab(PreviewButtonGroup, id, 'raised', RaisedHtmlPreview, RaisedTypescriptPreview);

export const outlineTab = (id: string): TabContent =>
  generateTab(PreviewButtonGroup, id, 'outline', OutlineHtmlPreview, OutlineTypescriptPreview);

export const flatTab = (id: string): TabContent =>
  generateTab(PreviewButtonGroup, id, 'flat', FlatHtmlPreview, FlatTypescriptPreview);

export const iconTab = (id: string): TabContent =>
  generateTab(PreviewButtonGroup, id, 'icon', IconHtmlPreview, IconTypescriptPreview);

export const fabTab = (id: string): TabContent =>
  generateTab(PreviewButtonGroup, id, 'fab', FabHtmlPreview, FabTypescriptPreview);

export const miniFabTab = (id: string): TabContent =>
  generateTab(PreviewButtonGroup, id, 'mini-fab', MiniFabHtmlPreview, MiniFabTypescriptPreview);

export const extendedFabTab = (id: string): TabContent =>
  generateTab(PreviewButtonGroup, id, 'extended-fab', ExtendedFabHtmlPreview, ExtendedFabTypescriptPreview);

// toggle Button
export const toggleBasicTab = (id: string): TabContent =>
  generateTab(PreviewToggle, id, 'basic', BasicToggleHtmlPreview, BasicToggleTypescriptPreview);

export const toggleMultipleSelectTab = (id: string): TabContent =>
  generateTab(PreviewToggle, id, 'multiple-select', MultipleSelectHtmlPreview, MultipleSelectTypescriptPreview);

export const toggleReactiveFormTab = (id: string): TabContent =>
  generateTab(PreviewToggle, id, 'reactive-form', ReactiveFormHtmlPreview, ReactiveFormTypescriptPreview);

export const toggleexclusiveSelectionTab = (id: string): TabContent =>
  generateTab(
    PreviewToggle,
    id,
    'exclusive-selection',
    ExclusiveSelectionHtmlPreview,
    ExclusiveSelectionTypescriptPreview
  );
