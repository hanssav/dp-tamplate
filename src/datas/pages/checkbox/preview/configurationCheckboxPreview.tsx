import { CodeBlock } from '@components/UI/CodeBlock';

export const CheckboxConfigurationPreviewHtml = () => {
  return (
    <CodeBlock
      language="html"
      code={`<div class="mb-5 space-y-4">
  <!-- Align Radio Group -->
  <div class="flex gap-4">
    <p>Align</p>
    <label><input type="radio" name="align" value="after" /> After</label>
    <label><input type="radio" name="align" value="before" /> Before</label>
  </div>

  <!-- Config Radio Group -->
  <div class="flex gap-4">
    <label><input type="radio" name="type-checkbox" value="checked" /> Checked</label>
    <label><input type="radio" name="type-checkbox" value="indeterminate" /> Ideterminate</label>
    <label><input type="radio" name="type-checkbox" value="disabled" /> Disabled</label>
  </div>

  <!-- Result Checkbox -->
  <div class="rounded-lg bg-[#f2f6fa] px-5 py-10">
    <h4 class="font-bold">Result:</h4>
    <label><input type="checkbox" /> I am Checkbox</label>
  </div>
</div>`}
    />
  );
};

export const CheckboxConfigurationPreviewTsx = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import { useState } from 'react';
  
  const CheckboxConfigurationPreview = () => {
    const [checkedRadio, setCheckedRadio] = useState<{
      config?: 'checked' | 'disabled' | 'indeterminate';
      align?: 'before' | 'after';
    }>({});
  
    return (
      <div className="mb-5 space-y-4">
        {/* Align Radio Group */}
        <div className="flex gap-4">
          <p>Align</p>
          {['after', 'before'].map((val) => (
            <label key={val}>
              <input
                type="radio"
                name="align"
                value={val}
                checked={checkedRadio.align === val}
                onChange={() => setCheckedRadio(prev => ({ ...prev, align: val as 'before' | 'after' }))}
              />
              {val.charAt(0).toUpperCase() + val.slice(1)}
            </label>
          ))}
        </div>
  
        {/* Config Radio Group */}
        <div className="flex gap-4">
          {['checked', 'indeterminate', 'disabled'].map((val) => (
            <label key={val}>
              <input
                type="radio"
                name="type-checkbox"
                value={val}
                checked={checkedRadio.config === val}
                onChange={() => setCheckedRadio(prev => ({ ...prev, config: val as any }))}
              />
              {val.charAt(0).toUpperCase() + val.slice(1)}
            </label>
          ))}
        </div>
  
        {/* Result Checkbox */}
        <div className="rounded-lg bg-[#f2f6fa] px-5 py-10">
          <h4 className="font-bold">Result:</h4>
          <label>
            <input
              type="checkbox"
              disabled={checkedRadio.config === 'disabled'}
              checked={checkedRadio.config === 'checked'}
              ref={el => {
                if (el) el.indeterminate = checkedRadio.config === 'indeterminate';
              }}
            />
            I am Checkbox
          </label>
        </div>
      </div>
    );
  };`}
    />
  );
};
