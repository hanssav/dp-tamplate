import { CodeBlock } from '@components/CodeBlock';

export const NgModelPreviewHtml = () => {
  return (
    <CodeBlock
      language="html"
      code={`<div class="mb-3 space-y-4">
  <!-- Radio Group for Seasons -->
  <div class="flex gap-4">
    <p>Pick Your Favorite Season</p>
    <label><input type="radio" name="season" value="winter" /> Winter</label>
    <label><input type="radio" name="season" value="spring" /> Spring</label>
    <label><input type="radio" name="season" value="summer" /> Summer</label>
    <label><input type="radio" name="season" value="autumn" /> Autumn</label>
  </div>

  <!-- Result Display -->
  <div>
    <p>Your favorite season is: </p>
    <span id="result">None</span>
  </div>
</div>`}
    />
  );
};

export const NgModelPreviewTsx = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import { useState } from 'react';
  
  const RadioConfigurationNgModelPreview = () => {
    const [selectedSeason, setSelectedSeason] = useState<string>('');
  
    const handleChange = (value: string) => {
      setSelectedSeason(value);
    };
  
    return (
      <div className="mb-3 space-y-4">
        {/* Radio Group for Seasons */}
        <div className="flex gap-4">
          <p>Pick Your Favorite Season</p>
          <label>
            <input
              type="radio"
              name="season"
              value="winter"
              checked={selectedSeason === 'winter'}
              onChange={() => handleChange('winter')}
            />
            Winter
          </label>
          <label>
            <input
              type="radio"
              name="season"
              value="spring"
              checked={selectedSeason === 'spring'}
              onChange={() => handleChange('spring')}
            />
            Spring
          </label>
          <label>
            <input
              type="radio"
              name="season"
              value="summer"
              checked={selectedSeason === 'summer'}
              onChange={() => handleChange('summer')}
            />
            Summer
          </label>
          <label>
            <input
              type="radio"
              name="season"
              value="autumn"
              checked={selectedSeason === 'autumn'}
              onChange={() => handleChange('autumn')}
            />
            Autumn
          </label>
        </div>
  
        {/* Result Display */}
        <div>
          <p>Your favorite season is: {selectedSeason || 'None'}</p>
        </div>
      </div>
    );
  };
  
  export default RadioConfigurationNgModelPreview;`}
    />
  );
};
