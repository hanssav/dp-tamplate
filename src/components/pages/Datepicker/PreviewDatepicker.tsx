import Box from '@components/UI/Box';
import { formatISO } from 'date-fns';
import { Datepicker } from '@components/UI/Datepicker';
import { SelectDate } from '@components/UI/Datepicker/helpers/types';
import Result from '@components/pages/Result';
import {
  datepickerConfig,
  DatepickerVariant,
} from '@datas/pages/datePicker/config';
import { convertToObjectStirng } from '@utils/function';
import { useMemo, useState } from 'react';

export const PreviewDatepicker = ({
  id,
  variant,
}: {
  id: string;
  variant: DatepickerVariant;
}) => {
  const [selectedDates, setSelectedDates] = useState<
    Record<string, SelectDate>
  >({});

  const isoFormatted = useMemo(() => {
    const current = selectedDates[id];
    if (
      current &&
      typeof current === 'object' &&
      !Array.isArray(current) &&
      'from' in current
    ) {
      return {
        from: current.from ? formatISO(current.from) : null,
        to: current.to ? formatISO(current.to) : null,
      };
    }
    return null;
  }, [selectedDates]);

  return (
    <Box id={id}>
      {datepickerConfig[variant].map((item, index) => {
        return (
          <div key={index}>
            <Datepicker
              key={index}
              id={item.id}
              item={item}
              selectedDate={selectedDates[item.id] || { from: null, to: null }}
              setSelectedDate={(value: SelectDate) =>
                setSelectedDates(prev => ({ ...prev, [item.id]: value }))
              }
            />

            {item.result && (
              <Result item={item}>
                {convertToObjectStirng(isoFormatted || {})}
              </Result>
            )}
          </div>
        );
      })}
    </Box>
  );
};
