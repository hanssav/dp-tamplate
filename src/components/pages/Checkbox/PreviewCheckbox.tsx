import Box from '@components/Box';
import CheckboxGroup from '@components/pages/Checkbox/CheckboxGroup';
import RadioGroup from '@components/pages/Checkbox/RadioGroup';
import ResultDisplay from '@components/pages/Checkbox/ResultDisplay';
import { checkboxConfig, CheckboxVariant } from '@datas/pages/checkbox/config/checkboxConfig';
import { radioConfg, RadioVariant } from '@datas/pages/radio/config/radioConfig';
import { useState } from 'react';
import { getChildValues, exclude } from './utils';

type Variant = CheckboxVariant | RadioVariant;
const checkboxVariants = Object.keys(checkboxConfig) as CheckboxVariant[];
function isCheckboxVariant(v: Variant): v is CheckboxVariant {
  return checkboxVariants.includes(v as CheckboxVariant);
}

export const PreviewCheckbox = ({ id, variant }: { id: string; variant: Variant }) => {
  const [checkedParents, setCheckedParents] = useState<string[]>([]);
  const [checkedChildren, setCheckedChildren] = useState<string[]>([]);
  const [checkedRadio, setCheckedRadio] = useState<Record<string, string>>({});

  const datas = isCheckboxVariant(variant) ? checkboxConfig[variant] : radioConfg[variant];

  const toggleParent = (item: any) => {
    const childValues = getChildValues(item);
    const isChecked = checkedParents.includes(item.value);

    setCheckedParents(prev => (isChecked ? exclude(prev, [item.value]) : [...prev, item.value]));
    setCheckedChildren(prev => (isChecked ? exclude(prev, childValues) : [...new Set([...prev, ...childValues])]));
  };

  const toggleChild = (item: any, value: string) => {
    if (item.type === 'radio') {
      return setCheckedRadio(prev => ({
        ...prev,
        [item.parentName]: value,
      }));
    }

    const childValues = getChildValues(item);
    const updatedChildren = checkedChildren.includes(value)
      ? exclude(checkedChildren, [value])
      : [...checkedChildren, value];

    setCheckedChildren(updatedChildren);

    const allChecked = childValues.every((val: any) => updatedChildren.includes(val));
    const allUnchecked = childValues.every((val: any) => !updatedChildren.includes(val));

    if (allChecked) {
      setCheckedParents(prev => [...new Set([...prev, item.value])]);
    } else if (allUnchecked) {
      setCheckedParents(prev => exclude(prev, [item.value]));
    }
  };

  return (
    <Box id={id} margin="mb-3" className="space-y-4">
      {datas?.map((item, index) => {
        if (item.type === 'radio') {
          return (
            <RadioGroup
              key={index}
              item={item}
              selectedValue={checkedRadio[item.parentName]}
              onChange={(value: any) => toggleChild(item, value)}
            />
          );
        }

        if (item.result)
          return (
            <ResultDisplay key={item.title} item={item} checkedChildren={checkedChildren} checkedRadio={checkedRadio} />
          );

        return (
          <CheckboxGroup
            key={index}
            item={item}
            isParentChecked={checkedParents.includes(item.value)}
            checkedChildren={checkedChildren}
            onToggleParent={() => toggleParent(item)}
            onToggleChild={(value: any) => toggleChild(item, value)}
          />
        );
      })}
    </Box>
  );
};
