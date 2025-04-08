export type CardVariant = 'breadcrumb' | 'info' | 'post' | 'product' | 'music';

export interface CardContentData {
  title: string;
  normal_price?: number;
  discount_price?: number;
  rating?: number;
  bgImg?: string;
  [key: string]: any;
}

export interface RenderCardContentProps {
  variant?: CardVariant;
  content?: CardContentData;
}
