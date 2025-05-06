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
export const createTabContent = (
  preview: ReactNode,
  html: ReactNode,
  typescript: ReactNode
): TabContent => ({
  preview,
  html,
  typescript,
});

export const generateTab = (
  Component: ElementType,
  id: string,
  variant: Variant | ToggleVariant
): TabContent =>
  createTabContent(
    React.createElement(Component, { id, variant }), // harusnya ya ada data button configs, componen, dan gimana cara memisahkan variant
    React.createElement('div', null, 'HTML'),
    React.createElement('div', null, 'Typescript')
  );
