import { SectionContent } from '@datas/pages/config';
import { createContext, useContext, useState, ReactNode } from 'react';

type Section = {
  sectionData: SectionContent[];
};

type SectionContextValue = {
  section: Section;
  updateSection: (newSection: SectionContent[]) => void;
};

const SectionContext = createContext<SectionContextValue | undefined>(
  undefined
);

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState<Section>({
    sectionData: [],
  });

  const updateSection = (data: SectionContent[]) => {
    setSection({ sectionData: data });
  };

  return (
    <SectionContext.Provider value={{ section, updateSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};
