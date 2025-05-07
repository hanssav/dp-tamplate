import { Variant } from '@datas/pages/button/ButtonConfig';
import { ToggleVariant } from '@datas/pages/button/toggleConfig';
import React, { ElementType, ReactNode } from 'react';

// Tipe untuk konten tab
export interface TabContent {
  preview: ReactNode;
  html: ReactNode;
  typescript: ReactNode;
}

// Fungsi pembuat konten tab
export const createTabContent = (preview: ReactNode, html: ReactNode, typescript: ReactNode): TabContent => ({
  preview,
  html,
  typescript,
});

const DefaultHtmlPreview = () => React.createElement('div', null, 'Default HTML Preview');
const DefaultTypescriptPreview = () => React.createElement('div', null, 'Default TypeScript Preview');

export const generateTab = (
  Component: ElementType,
  id: string,
  variant: Variant | ToggleVariant,
  HtmlPreview: ElementType = DefaultHtmlPreview,
  TypeScriptPreview: ElementType = DefaultTypescriptPreview
): TabContent => {
  return createTabContent(
    React.createElement(Component, { id, variant }),
    React.createElement(HtmlPreview, { id }),
    React.createElement(TypeScriptPreview, { id })
  );
};