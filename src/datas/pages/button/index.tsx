import { generateTab, TabContent } from '@datas/pages/helpers/generateTabs';
import { PreviewButtonGroup } from '@components/pages/Button/PreviewButton';
import { PreviewToggle } from '@components/pages/Button/PreviewToggle';
import { lazy } from 'react';

// Tab untuk Button Group
export const basicTab = (id: string): TabContent =>
  generateTab(
    PreviewButtonGroup,
    id,
    'basic',
    lazy(() =>
      import('@datas/pages/button/preview/button/BasicPreview').then(mod => ({
        default: mod['BasicHtmlPreview'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/button/preview/button/BasicPreview').then(mod => ({
        default: mod['BasicTypescriptPreview'],
      }))
    )
  );

export const raisedTab = (id: string): TabContent =>
  generateTab(
    PreviewButtonGroup,
    id,
    'raised',
    lazy(() =>
      import('@datas/pages/button/preview/button/RaisedPreview').then(mod => ({
        default: mod['RaisedHtmlPreview'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/button/preview/button/RaisedPreview').then(mod => ({
        default: mod['RaisedTypescriptPreview'],
      }))
    )
  );

export const outlineTab = (id: string): TabContent =>
  generateTab(
    PreviewButtonGroup,
    id,
    'outline',
    lazy(() =>
      import('@datas/pages/button/preview/button/OutlinePreview').then(mod => ({
        default: mod['OutlineHtmlPreview'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/button/preview/button/OutlinePreview').then(mod => ({
        default: mod['OutlineTypescriptPreview'],
      }))
    )
  );

export const flatTab = (id: string): TabContent =>
  generateTab(
    PreviewButtonGroup,
    id,
    'flat',
    lazy(() =>
      import('@datas/pages/button/preview/button/FlatPreview').then(mod => ({
        default: mod['FlatHtmlPreview'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/button/preview/button/FlatPreview').then(mod => ({
        default: mod['FlatTypescriptPreview'],
      }))
    )
  );

export const iconTab = (id: string): TabContent =>
  generateTab(
    PreviewButtonGroup,
    id,
    'icon',
    lazy(() =>
      import('@datas/pages/button/preview/button/IconPreview').then(mod => ({
        default: mod['IconHtmlPreview'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/button/preview/button/IconPreview').then(mod => ({
        default: mod['IconTypescriptPreview'],
      }))
    )
  );

export const fabTab = (id: string): TabContent =>
  generateTab(
    PreviewButtonGroup,
    id,
    'fab',
    lazy(() =>
      import('@datas/pages/button/preview/button/FabPreview').then(mod => ({
        default: mod['FabHtmlPreview'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/button/preview/button/FabPreview').then(mod => ({
        default: mod['FabTypescriptPreview'],
      }))
    )
  );

export const miniFabTab = (id: string): TabContent =>
  generateTab(
    PreviewButtonGroup,
    id,
    'mini-fab',
    lazy(() =>
      import('@datas/pages/button/preview/button/MiniFabPreview').then(mod => ({
        default: mod['MiniFabHtmlPreview'],
      }))
    ),
    lazy(() =>
      import('@datas/pages/button/preview/button/MiniFabPreview').then(mod => ({
        default: mod['MiniFabTypescriptPreview'],
      }))
    )
  );

export const extendedFabTab = (id: string): TabContent =>
  generateTab(
    PreviewButtonGroup,
    id,
    'extended-fab',
    lazy(() =>
      import('@datas/pages/button/preview/button/ExtendedFabPreview').then(
        mod => ({
          default: mod['ExtendedFabHtmlPreview'],
        })
      )
    ),
    lazy(() =>
      import('@datas/pages/button/preview/button/ExtendedFabPreview').then(
        mod => ({
          default: mod['ExtendedFabTypescriptPreview'],
        })
      )
    )
  );

// Toggle Tabs
export const toggleBasicTab = (id: string): TabContent =>
  generateTab(
    PreviewToggle,
    id,
    'basic',
    lazy(() =>
      import('@datas/pages/button/preview/toggle/BasicTogglePreview').then(
        mod => ({
          default: mod['BasicToggleHtmlPreview'],
        })
      )
    ),
    lazy(() =>
      import('@datas/pages/button/preview/toggle/BasicTogglePreview').then(
        mod => ({
          default: mod['BasicToggleTypescriptPreview'],
        })
      )
    )
  );

export const toggleMultipleSelectTab = (id: string): TabContent =>
  generateTab(
    PreviewToggle,
    id,
    'multiple-select',
    lazy(() =>
      import(
        '@datas/pages/button/preview/toggle/MultipleSelectTogglePreview'
      ).then(mod => ({
        default: mod['MultipleSelectHtmlPreview'],
      }))
    ),
    lazy(() =>
      import(
        '@datas/pages/button/preview/toggle/MultipleSelectTogglePreview'
      ).then(mod => ({
        default: mod['MultipleSelectTypescriptPreview'],
      }))
    )
  );

export const toggleReactiveFormTab = (id: string): TabContent =>
  generateTab(
    PreviewToggle,
    id,
    'reactive-form',
    lazy(() =>
      import(
        '@datas/pages/button/preview/toggle/ReactiveFormTogglePreview'
      ).then(mod => ({
        default: mod['ReactiveFormHtmlPreview'],
      }))
    ),
    lazy(() =>
      import(
        '@datas/pages/button/preview/toggle/ReactiveFormTogglePreview'
      ).then(mod => ({
        default: mod['ReactiveFormTypescriptPreview'],
      }))
    )
  );

export const toggleexclusiveSelectionTab = (id: string): TabContent =>
  generateTab(
    PreviewToggle,
    id,
    'exclusive-selection',
    lazy(() =>
      import(
        '@datas/pages/button/preview/toggle/ExclusiveSelectionTogglePreview'
      ).then(mod => ({
        default: mod['ExclusiveSelectionHtmlPreview'],
      }))
    ),
    lazy(() =>
      import(
        '@datas/pages/button/preview/toggle/ExclusiveSelectionTogglePreview'
      ).then(mod => ({
        default: mod['ExclusiveSelectionTypescriptPreview'],
      }))
    )
  );
