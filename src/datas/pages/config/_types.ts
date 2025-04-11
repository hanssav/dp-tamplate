import { ColProps } from '@components/Col';
import { CardVariant } from '@components/_types/Card';

export type GenericSectionProps = {
  col: NonNullable<ColProps['col']>;
  data: any[];
  variant: CardVariant;
  horizontal?: boolean;
};
