'use client';

import { useState } from 'react';
import Box from '@components/UI/Box';
import { ElementType } from 'react';

export type Tabs = {
  title: string;
  content: React.ReactNode;
  icon?: ElementType;
  active?: boolean;
  disabled?: boolean;
};

type TabsProps = {
  tabs: Tabs[];
  ariaLabel?: string;
  className?: string;
  paddingContent: string;
};

export const Tabs = ({
  tabs,
  ariaLabel = 'Tabs',
  className = '',
  paddingContent = 'p-0',
}: TabsProps) => {
  const initialTab = tabs.findIndex(tab => tab.active) || 0;
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <>
      <Box
        className={`mb-4 border-b border-gray-200 dark:border-gray-700 ${className}`}
      >
        <ul
          className="-mb-px flex flex-wrap text-center text-sm font-medium"
          role="tablist"
          aria-label={ariaLabel}
        >
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            const Icon = tab.icon;

            return (
              <li key={index} className="me-2" role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${index}`}
                  id={`tab-${index}`}
                  onClick={() => !tab.disabled && setActiveTab(index)}
                  className={`inline-block border-b-2 p-4
                    ${tab.disabled ? 'cursor-not-allowed text-gray-400 dark:text-gray-500' : ''}
                    ${
                      isActive
                        ? 'border-primary bg-gray-100 text-primary dark:border-primary dark:bg-gray-800 dark:text-primary'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'
                    }
                  `}
                >
                  {Icon && <Icon className="mr-2 inline h-4 w-4" />}
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
      </Box>

      <Box>
        {tabs.map((tab, index) => (
          <Box
            key={index}
            id={`tab-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            className={`${activeTab === index ? 'block' : 'hidden'}`}
          >
            <Box
              className={`text-sm text-gray-700 dark:text-gray-200 ${paddingContent}`}
            >
              {tab.content}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
