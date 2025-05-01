import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  open: string | null;
  setOpen: (label: string | null) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpenState] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sidebarOpen');
    }
    return null;
  });

  const setOpen = (label: string | null) => {
    setOpenState(label);
    if (label) {
      localStorage.setItem('sidebarOpen', label);
    } else {
      localStorage.removeItem('sidebarOpen');
    }
  };

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
};
