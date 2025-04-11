import { ColKey } from '@components/Col/colTheme';
import { CardVariant } from '@components/_types/Card';

export type GenericSectionProps = {
  col: ColKey;
  data: any[];
  variant?: CardVariant;
  horizontal?: boolean;
  span?: number;
};

export interface BannersSectionProps {
  content: {
    col: ColKey;
    data: SectionContent[];
    horizontal?: boolean;
    span?: number;
    variant?: CardVariant;
  };
}

// ✅ untuk kartu biasa
export interface CardContent {
  components?: any;
  title?: string;
  subtitle?: string;
  button?: SectionButton;
  bgImage?: string;
  bgColor?: string;
  variant?: CardVariant;
  imagePosition?: 'top' | 'side';
}

// ✅ untuk nested section (bisa col di dalam col)
export interface NestedContent {
  col: ColKey;
  data: SectionContent[];
  horizontal?: boolean;
  span?: number;
}

// ✅ union type: either Card or Nested layout
export type SectionContent = CardContent | NestedContent;

export interface SectionButton {
  label: string;
  onclick: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | string;
}

export type SectionProps = BannersSectionProps['content'] | GenericSectionProps;
