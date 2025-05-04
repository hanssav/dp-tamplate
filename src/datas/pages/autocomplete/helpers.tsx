import { CodeBlock } from '@components/CodeBlock';
import { Input } from '@components/Input';
import { GROUP_STATES } from '@datas/pages/autocomplete/gropStates';
import { ReactNode, useState } from 'react';

const PreviewOptions = ({ id }: { id: string }) => {
  const [number, setNumber] = useState('');

  return (
    <div className="mb-6">
      <Input
        id={`number ${id}`}
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

const PreviewGroupOptions = ({ id }: { id: string }) => {
  const [selectedState, setSelectedState] = useState<string | number>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      console.log('Input value:', e.target.value);
    } else if (e.target instanceof HTMLSelectElement) {
      console.log('Select value:', e.target.value);
    }
  };

  return (
    <div className="mb-6">
      <Input
        id={`state-select ${id}`}
        label="Select a State"
        type="select"
        value={selectedState}
        onChange={handleChange}
        groupOptions={GROUP_STATES}
      />
    </div>
  );
};

const htmlPreview = (
  <CodeBlock
    language="html"
    code={`<div class="relative">
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
  />
);

const typescriptPreview = (
  <CodeBlock
    language="tsx"
    code={`import { useState } from 'react';
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
  />
);

export const FirstAutocompleteOption: {
  preview: ReactNode;
  html: ReactNode;
  typescript: ReactNode;
} = {
  preview: (() => {
    return <PreviewOptions id="firstAutocompleteOption" />;
  })(),

  html: htmlPreview,
  typescript: typescriptPreview,
};

export const Filter: {
  preview: ReactNode;
  html: ReactNode;
  typescript: ReactNode;
} = {
  preview: (() => {
    return <PreviewOptions id="filter" />;
  })(),

  html: htmlPreview,
  typescript: typescriptPreview,
};

export const OptionGroup: {
  preview: ReactNode;
  html: ReactNode;
  typescript: ReactNode;
} = {
  preview: (() => {
    return <PreviewGroupOptions id="filter" />;
  })(),

  html: htmlPreview,
  typescript: typescriptPreview,
};
