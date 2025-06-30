import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type ToggleVariant =
  | 'basic'
  | 'multiple-select'
  | 'reactive-form'
  | 'exclusive-selection';

// Can be a string or a Lucide icon component

interface ToggleConfig {
  options: string[];
  iconOptions?: LucideIcon[];
  onChange?: () => void;
  multiple?: boolean;
  selected?: string[];
  showValue?: boolean;
  useIcon?: boolean;
  disabled?: boolean[];
}

export const toggleConfigs: Record<ToggleVariant, ToggleConfig> = {
  basic: {
    options: ['bold', 'italic', 'underline'],
    onChange: () => {},
  },
  'multiple-select': {
    options: ['Flour', 'Eggs', 'Vegetables', 'Cheese'],
    multiple: true,
    selected: ['Flour', 'Vegetables'],
    onChange: () => {},
  },
  'reactive-form': {
    options: ['bold', 'italic', 'underline'],
    selected: ['bold'],
    showValue: true,
    onChange: () => {},
  },
  'exclusive-selection': {
    options: ['Left', 'Center', 'Right', 'Justify'],
    iconOptions: [AlignLeft, AlignCenter, AlignRight, AlignJustify],
    selected: ['Left'],
    useIcon: true,
    disabled: [false, false, false, true],
    showValue: true,
    onChange: () => {},
  },
};
