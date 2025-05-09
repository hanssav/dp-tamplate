import { ElementType, ReactNode, Suspense } from 'react';
import { ButtonVariant } from '@datas/pages/button/config/buttonConfig';
import { ToggleVariant } from '@datas/pages/button/config/toggleConfig';
import { CheckboxVariant } from '@datas/pages/checkbox/config/checkboxConfig';

// Tipe untuk konten tab
export interface TabContent {
  preview: ReactNode;
  html: ReactNode;
  typescript: ReactNode;
}

// Preview component props interface
interface PreviewProps {
  id: string;
}

export const generateTab = (
  Component: ElementType,
  id: string,
  variant: ButtonVariant | ToggleVariant | CheckboxVariant,
  HtmlComponent: React.ComponentType<PreviewProps>,
  TsComponent: React.ComponentType<PreviewProps>
): TabContent => {
  return {
    preview: <Component id={id} variant={variant} />,
    html: (
      <Suspense fallback={<div>Loading HTML Preview...</div>}>
        <HtmlComponent id={id} />
      </Suspense>
    ),
    typescript: (
      <Suspense fallback={<div>Loading TypeScript Preview...</div>}>
        <TsComponent id={id} />
      </Suspense>
    ),
  };
};
