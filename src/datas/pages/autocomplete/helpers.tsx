import { CodeBlock } from '@components/UI/CodeBlock';
import { Input } from '@components/UI/Input';
import {
  gropStates,
  overviewState,
} from '@datas/pages/autocomplete/gropStates';
import { ReactNode, useState } from 'react';
import { Check } from 'lucide-react';

const PreviewOptions = ({ id }: { id: string }) => {
  const [number, setNumber] = useState('');

  return (
    <div className="mb-6">
      <Input
        id={`number ${id}`}
        placeholder="Number"
        type="select"
        value={number}
        onChange={e => setNumber(e.target.value)}
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

  return (
    <div className="mb-6">
      <Input
        id={`state-select ${id}`}
        placeholder="States Group"
        type="select"
        value={selectedState}
        onChange={e => setSelectedState(e.target.value)}
        groupOptions={gropStates}
      />
    </div>
  );
};

const PreviewOverview = ({ id }: { id: string }) => {
  const [number, setNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <Input
        id={`State ${id}`}
        placeholder="State"
        type="select"
        value={number}
        onChange={e => setNumber(e.target.value)}
        options={overviewState}
        disabled={isDisabled}
      />
      <div className="flex flex-col items-start gap-4 py-4">
        {/* Switch */}
        <label className="flex cursor-pointer items-center gap-2">
          <div
            onClick={() => {
              setIsDisabled(!isDisabled);
              setNumber('');
            }}
            className={`relative flex h-6 w-12 items-center rounded-full transition-colors duration-300  ${
              isDisabled ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute left-0 top-0 flex size-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300${
                isDisabled ? 'translate-x-6' : 'translate-x-0'
              }`}
            >
              {isDisabled && (
                <Check className="size-4 text-blue-600" strokeWidth={3} />
              )}
            </div>
          </div>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Disable Input?
          </span>
        </label>
      </div>
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
import { Input } from '@components/UI/Input';

const Example = () => {
const [number, setNumber] = useState('');

return (
  <Input
    id="number"
    placeholder="Number"
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
interface TabContent {
  preview: ReactNode;
  html: ReactNode;
  typescript: ReactNode;
}

const createTabContent = (previewComponent: ReactNode): TabContent => ({
  preview: previewComponent,
  html: htmlPreview,
  typescript: typescriptPreview,
});

export const FirstAutocompleteOption: TabContent = createTabContent(
  <PreviewOptions id="firstAutocompleteOption" />
);

export const Filter: TabContent = createTabContent(
  <PreviewOptions id="filter" />
);

export const OptionGroup: TabContent = createTabContent(
  <PreviewGroupOptions id="options-group" />
);

export const Overview: TabContent = createTabContent(
  <PreviewOverview id="overview" />
);
