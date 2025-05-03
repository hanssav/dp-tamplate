import { Input } from '@components/Input';
import { ReactNode, useState } from 'react';

export const FirstAutocompleteOption: {
  preview: ReactNode;
  html: ReactNode;
  typescript: ReactNode;
} = {
  preview: (() => {
    const PreviewWrapper = () => {
      const [number, setNumber] = useState('');

      return (
        <div className="mb-6">
          <Input
            id="number"
            label="Number"
            type="select"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            options={[
              { label: 'One', value: 'one' },
              { label: 'Two', value: 'two' },
              { label: 'Three', value: 'three' },
            ]}
          />
        </div>
      );
    };

    return <PreviewWrapper />;
  })(),

  html: (
    <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white">
      {`<div class="relative">
  <input
    type="text"
    id="number"
    placeholder=" "
    class="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800"
  />
  <label
    for="number"
    class="absolute left-2 top-2 text-sm text-gray-700 dark:text-gray-300"
  >
    Number
  </label>
  <ul class="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
    <li class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
      One
    </li>
    <li class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
      Two
    </li>
    <li class="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
      Three
    </li>
  </ul>
</div>`}
    </pre>
  ),

  typescript: (
    <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white">
      {`import { useState } from 'react';
import { Input } from '@components/Input';

const Example = () => {
  const [number, setNumber] = useState('');

  return (
    <Input
      id="number"
      label="Number"
      type="select"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      options={[
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
      ]}
    />
  );
};`}
    </pre>
  ),
};
