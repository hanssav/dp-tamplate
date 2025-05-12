import { CodeBlock } from '@components/CodeBlock';

export const BasicRadioPreviewHtml = () => {
  return (
    <CodeBlock
      language="html"
      code={`<div class="mb-3 space-y-4">
  <!-- Radio Group -->
  <div class="flex gap-4">
    <p>Option</p>
    <label><input type="radio" name="option" value="option1" /> Option 1</label>
    <label><input type="radio" name="option" value="option2" /> Option 2</label>
  </div>
</div>`}
    />
  );
};

export const BasicRadioPreviewTsx = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import { useState } from 'react';
  
  const RadioConfigurationPreview = () => {
    const [checkedRadio, setCheckedRadio] = useState<Record<string, string>>({});
  
    const toggleRadio = (value: string) => {
      setCheckedRadio(prev => ({
        ...prev,
        option: value,
      }));
    };
  
    return (
      <div className="mb-3 space-y-4">
        {/* Radio Group */}
        <div className="flex gap-4">
          <p>Option</p>
          <label>
            <input
              type="radio"
              name="option"
              value="option1"
              checked={checkedRadio.option === 'option1'}
              onChange={() => toggleRadio('option1')}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="option2"
              checked={checkedRadio.option === 'option2'}
              onChange={() => toggleRadio('option2')}
            />
            Option 2
          </label>
        </div>
      </div>
    );
  };
  
  export default RadioConfigurationPreview;`}
    />
  );
};
