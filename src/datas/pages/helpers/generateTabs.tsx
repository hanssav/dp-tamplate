import { Variant } from '@datas/pages/button/config/buttonConfig';
import { ToggleVariant } from '@datas/pages/button/config/toggleConfig';
import { ReactNode, ElementType } from 'react';

// Tipe untuk konten tab
export interface TabContent {
  preview: ReactNode;
  html: ReactNode;
  typescript: ReactNode;
}

const DefaultHtmlPreview = () => <div>Default HTML Preview</div>;
const DefaultTypescriptPreview = () => <div>Default TypeScript Preview</div>;

interface PreviewProps {
  id: string;
}

export const generateTab = (
  Component: ElementType,
  id: string,
  variant: Variant | ToggleVariant,
  HtmlPreview: ElementType<PreviewProps> = DefaultHtmlPreview,
  TypeScriptPreview: ElementType<PreviewProps> = DefaultTypescriptPreview
): TabContent => ({
  preview: <Component id={id} variant={variant} />,
  html: <HtmlPreview id={id} />,
  typescript: <TypeScriptPreview id={id} />,
});
