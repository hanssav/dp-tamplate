import Checkbox from '@components/Checkbox';
import Result from '@components/pages/Result';
import { convertToObjectStirng } from '@utils/function';

const ResultDisplay = ({ item, checkedChildren, checkedRadio }: any) => {
  const allKeys = ['pepperoni', 'extraCheese', 'mushroom'];

  const resultsDatas = allKeys.reduce(
    (acc, key) => {
      acc[key] = checkedChildren.includes(key);
      return acc;
    },
    {} as Record<string, boolean>
  );

  return (
    <Result item={item}>
      {item.label ? (
        <Checkbox
          label={item.label}
          disabled={checkedRadio.config === 'disabled'}
          align={checkedRadio.align}
          checked={checkedRadio.config === 'checked'}
          indeterminate={checkedRadio.config === 'indeterminate'}
        />
      ) : item.showMultiple ? (
        <div className="text-sm text-gray-800 dark:text-current">
          <span>{convertToObjectStirng(resultsDatas)}</span>
        </div>
      ) : (
        <span className="font-bold">&nbsp;{checkedRadio[item.parentName]}</span>
      )}
    </Result>
  );
};

export default ResultDisplay;
