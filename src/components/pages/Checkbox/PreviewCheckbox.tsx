import Box from '@components/Box';
import Checkbox from '@components/Checkbox';
import { checkboxConfig, CheckboxVariant } from '@datas/pages/checkbox/config/checkboxConfig';
import { useState } from 'react';

const getChildValues = (item: any) => item.childItem?.map((c: any) => c.value) || [];
const exclude = (arr: string[], toRemove: string[]) => arr.filter(val => !toRemove.includes(val));

export const PreviewCheckbox = ({ id, variant }: { id: string; variant: CheckboxVariant }) => {
  const [checkedParents, setCheckedParents] = useState<string[]>([]);
  const [checkedChildren, setCheckedChildren] = useState<string[]>([]);

  const handleToggle = (value: string, item: any, isChild: boolean = false) => {
    const childValues = getChildValues(item);

    if (isChild) {
      const updatedChildren = checkedChildren.includes(value)
        ? exclude(checkedChildren, [value])
        : [...checkedChildren, value];

      setCheckedChildren(updatedChildren);

      const allChecked = childValues.every((val: any) => updatedChildren.includes(val));
      const allUnchecked = childValues.every((val: any) => !updatedChildren.includes(val));

      if (allChecked) {
        setCheckedParents(prev => [...prev, item.value]);
      } else if (allUnchecked) {
        setCheckedParents(prev => exclude(prev, [item.value]));
      }
    } else {
      const isChecked = checkedParents.includes(value);

      setCheckedParents(prev => (isChecked ? exclude(prev, [value]) : [...prev, value]));

      setCheckedChildren(prev => (isChecked ? exclude(prev, childValues) : [...new Set([...prev, ...childValues])]));
    }
  };

  return (
    <Box id={id} margin="mb-5" className="mb-5 space-y-4">
      {checkboxConfig[variant].map((item, index) => {
        const isParentChecked = checkedParents.includes(item.value);
        const childValues = getChildValues(item);
        const checkedChildCount = childValues.filter((val: any) => checkedChildren.includes(val)).length;
        const isIndeterminate = checkedChildCount > 0 && checkedChildCount < childValues.length;

        return (
          <div key={index} className="gap-4">
            <Checkbox
              label={item.label}
              disabled={item.disabled}
              className={item.className}
              checked={isParentChecked}
              indeterminate={isIndeterminate}
              onChange={() => handleToggle(item.value, item, false)}
            />

            {item.childItem && (
              <Box className="ml-5 mt-2 gap-4">
                {item.childItem.map((child: any, idx: number) => (
                  <Checkbox
                    key={idx}
                    label={child.label}
                    checked={checkedChildren.includes(child.value)}
                    onChange={() => handleToggle(child.value, item, true)}
                  />
                ))}
              </Box>
            )}
          </div>
        );
      })}
    </Box>
  );
};
