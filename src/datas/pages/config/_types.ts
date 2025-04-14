import { ColKey } from '@components/Col/colTheme';
import { CardVariant } from '@components/_types/Card';

export type MasonryConfig = {
  columnCount: number;
  columnWidths?: number[];
};

// 🧩 Optional base type biar DRY
interface BaseSection {
  col?: ColKey;
  data: SectionContent[];
  horizontal?: boolean;
  span?: number;
  variant?: CardVariant;
  masonryConfig?: MasonryConfig;
}

export interface BannersSectionProps {
  content: BaseSection;
}

export type GenericSectionProps = BaseSection; 

// ✅ Untuk nested section (bisa col di dalam col)
export interface NestedContent {
  col: ColKey;
  data: SectionContent[];
  horizontal?: boolean;
  span?: number;
  variant?: CardVariant;
}

// ✅ Untuk card biasa
export interface CardContent {
  components?: any;
  title?: string;
  subtitle?: string;
  button?: SectionButton[];
  bgImage?: string;
  bgColor?: string;
  variant?: CardVariant;
  horizontal?: boolean;
  imagePosition?: 'top' | 'side';
  span?: number;
  preTitle?: {
    text?: string;
    style?: string;
    as?: keyof JSX.IntrinsicElements;
  };
}

// ✅ Union type: card / nested
export type SectionContent = CardContent | NestedContent;

// ✅ Tombol opsional di card
export interface SectionButton {
  label: string;
  onclick: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | string;
}

// ✅ Jika butuh general section type
export type SectionProps = BannersSectionProps['content'] | GenericSectionProps;
