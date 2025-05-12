export type RadioVariant = 'basic-radio' | 'ngModel-radio';

export const radioConfg: Record<RadioVariant, any[]> = {
  'basic-radio': [
    {
      type: 'radio',
      parentName: 'option',
      childItem: [
        {
          label: 'Option 1',
          value: 'option1',
          name: 'option',
          radio: true,
        },
        {
          label: 'Option 2',
          value: 'option2',
          name: 'option',
          radio: true,
        },
      ],
    },
  ],
  'ngModel-radio': [
    {
      title: 'Pick Your Favorite Season',
      type: 'radio',
      parentName: 'season',
      childItem: [
        { label: 'Winter', value: 'winter', radio: true },
        { label: 'Spring', value: 'spring', radio: true },
        { label: 'Summer', value: 'summer', radio: true },
        { label: 'Autumn', value: 'autumn', radio: true },
      ],
    },
    {
      title: 'Your favorite season is: ',
      result: true,
      parentName: 'season',
    },
  ],
};
