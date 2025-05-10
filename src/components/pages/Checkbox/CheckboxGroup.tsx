import Box from '@components/Box';
import Checkbox from '@components/Checkbox';
import { getChildValues } from '@components/pages/Checkbox/utils';
import Typography from '@components/Typography';

const CheckboxGroup = ({ item, isParentChecked, checkedChildren, onToggleParent, onToggleChild }: any) => {
  const childValues = getChildValues(item);
  const checkedChildCount = childValues.filter((val: any) => checkedChildren.includes(val)).length;
  const isIndeterminate = checkedChildCount > 0 && checkedChildCount < childValues.length;

  return (
    <div className="gap-4">
      {item.title ? (
        <Typography as="p" textStyle="body" className="mb-3 font-bold">
          {item.title}
        </Typography>
      ) : (
        <Checkbox
          label={item.label}
          disabled={item.disabled}
          className="mb-3"
          checked={isParentChecked}
          indeterminate={isIndeterminate}
          onChange={onToggleParent}
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
              onChange={() => onToggleChild(child.value)}
            />
          ))}
        </Box>
      )}
    </div>
  );
};

export default CheckboxGroup;
