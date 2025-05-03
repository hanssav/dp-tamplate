import { ApexOptions } from 'apexcharts';
import { ButtonColor } from '@components/Button';
import { ColKey } from '@components/Box/boxTheme';
import { CardVariant } from '@components/_types/Card';
import { POSITIONS } from '@datas/pages/charts/constants';
import { ReactNode } from 'react';

//
// 🔹 Shared Types
//
export interface SectionButton {
  label: string;
  onclick: () => void;
  color?: ButtonColor;
}

export type MasonryConfig = {
  columnCount: number;
  columnWidths?: number[];
};

//
// 🔹 Chart Related Types
//
export type ChartPosition = (typeof POSITIONS)[keyof typeof POSITIONS];
export interface ChartCardConfig {
  chartPosition?: ChartPosition;
  valuePosition?: typeof POSITIONS.UP | typeof POSITIONS.DOWN;
  percentagePosition?: typeof POSITIONS.UP | typeof POSITIONS.DOWN;
  [key: string]: any;
}
export interface ChartCardBase {
  title: string;
  value: string | number;
  percentage?: string;
  percentageColor?: string;
  chartColor?: string | string[];
  span?: number;
  config?: ChartCardConfig;
  variant?: CardVariant;
  additionalContent?: {
    [key: string]: any;
  };
}

export interface ChartCardContent extends ChartCardBase {
  series: { name: string; data: any[] }[] | Array<number>;
  options: ApexOptions;
}
export interface ChartChild {
  type: 'child';
  data: ChartCardContent[];
  col?: ColKey;
}

export interface ChartParent {
  type: string;
  title: string;
  variant: string;
  button?: SectionButton[];
  child?: ChartChild;
  childOptions?: {
    [key: string]: any;
  };
}

export interface ChartCardContentWithType extends ChartCardContent {
  type: 'child' | 'parent';
}

export type ChartCardGroupItem = ChartParent | ChartCardContentWithType;

export interface ChartCardGroup {
  col?: ColKey;
  variant?: CardVariant;
  multipleRow?: boolean;
  data: ChartCardGroupItem[];
}

export type TabData = {
  title: string;
  content: ReactNode;
  active?: boolean;
  disabled?: boolean;
  classNameContent?: string;
};

//
// 🔹 General Card Type
//
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
  multipleRow?: boolean;
  preTitle?: {
    text?: string;
    style?: string;
    as?: keyof JSX.IntrinsicElements;
  };
  tabData?: TabData[];
}

//
// 🔹 Nested Section Type
//
export interface NestedContent {
  col?: ColKey;
  data: SectionContent[];
  horizontal?: boolean;
  span?: number;
  variant?: CardVariant;
  type?: string;
  masonryConfig?: MasonryConfig;
}

//
// 🔹 Section Wrapper
//
export interface BaseSection {
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

//
// 🔹 Final Union
//
export type SectionContent =
  | CardContent
  | NestedContent
  | ChartCardContent
  | ChartCardGroup
  | ChartParent
  | BannersSectionProps['content'];
