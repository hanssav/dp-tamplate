import Box from '@components/Box';
import Checkbox from '@components/Checkbox';
import Typography from '@components/Typography';
import { checkboxConfig, CheckboxVariant } from '@datas/pages/checkbox/config/checkboxConfig';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const getChildValues = (item: any) => item.childItem?.map((c: any) => c.value) || [];
const exclude = (arr: string[], toRemove: string[]) => arr.filter((val: any) => !toRemove.includes(val));

export const PreviewCheckbox = ({ id, variant }: { id: string; variant: CheckboxVariant }) => {
  const [checkedParents, setCheckedParents] = useState<string[]>([]);
  const [checkedChildren, setCheckedChildren] = useState<string[]>([]);
  const [checkedRadio, setCheckedRadio] = useState<{
    config?: 'checked' | 'disabled' | 'indeterminate';
    align?: 'before' | 'after';
    [key: string]: any;
  }>({});

  const toggleParent = (item: any) => {
    const value = item.value;
    const childValues = getChildValues(item);
    const isChecked = checkedParents.includes(value);

    setCheckedParents(prev => (isChecked ? exclude(prev, [value]) : [...prev, value]));
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
  console.log(checkedChildren, 'checkedChildren');

  return (
    <Box id={id} margin="mb-3" className="mb-3 space-y-4">
      {checkboxConfig[variant].map((item, index) => {
        const isParentChecked = checkedParents.includes(item.value);
        const childValues = getChildValues(item);
        const checkedChildCount = childValues.filter((val: any) => checkedChildren.includes(val)).length;
        const isIndeterminate = checkedChildCount > 0 && checkedChildCount < childValues.length;
        const isRadio = item.type === 'radio';

        if (isRadio) {
          console.log(item, 'item');
          return (
            <Box className="flex gap-4">
              {item.title && (
                <Typography key={item.child} as="p" textStyle="body" className="font-bold">
                  {item.title}
                </Typography>
              )}
              {item.childItem?.map((child: any, idx: number) => (
                <Checkbox
                  key={idx}
                  className="mb-3"
                  label={child.label}
                  disabled={child.disabled}
                  name={child.name}
                  radio={child.radio}
                  checked={checkedRadio[item.parentName]?.includes(child.value) ?? false}
                  onChange={() => toggleChild(item, child.value)}
                />
              ))}
            </Box>
          );
        }

        if (item.result) {
          const allKeys = ['pepperoni', 'extraCheese', 'mushroom'];
          const checked = checkedChildren ?? [];

          const resultsDatas = allKeys.reduce(
            (acc, key) => {
              acc[key] = checked.includes(key);
              return acc;
            },
            {} as Record<string, boolean>
          );

          const resultsString = `{ ${Object.entries(resultsDatas)
            .map(([key, value]) => `"${key}": ${value}`)
            .join(', ')} }`;

          return (
            <Box key={item.title} className="shodow-none gap-y-6 rounded-lg bg-[#f2f6fa] px-5 py-7">
              <Typography as="h4" textStyle="body" className="font-bold">
                {item.title}:
              </Typography>

              {item.label ? (
                <Checkbox
                  label={item.label}
                  disabled={checkedRadio.config === 'disabled'}
                  align={checkedRadio.align}
                  checked={checkedRadio.config === 'checked'}
                  indeterminate={checkedRadio.config === 'indeterminate'}
                  // onChange={() => setCheckedRadio([...checkedRadio, 'checked'])}
                />
              ) : (
                <div className="text-sm text-gray-800">
                  <span>{resultsString}</span>
                </div>
              )}
            </Box>
          );
        }

        return (
          <div key={index} className="gap-4">
            {item.title ? (
              <Typography key={item.child} as="p" textStyle="body" className="mb-3 font-bold">
                {item.title}
              </Typography>
            ) : (
              <Checkbox
                label={item.label}
                disabled={item.disabled}
                className={twMerge(item.className, 'mb-3')}
                checked={isParentChecked}
                indeterminate={isIndeterminate}
                onChange={() => toggleParent(item)}
              />
            )}

            {item.childItem && (
              <Box className="ml-5 mt-2 gap-4">
                {item.childItem.map((child: any, idx: number) => (
                  <Checkbox
                    key={idx}
                    label={child.label}
                    className="mb-3"
                    checked={checkedChildren.includes(child.value)}
                    onChange={() => toggleChild(item, child.value)}
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
