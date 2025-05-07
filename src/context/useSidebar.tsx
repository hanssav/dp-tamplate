/**
 * This code defines a context (`SidebarContext`) for managing the open/close state of sidebars in a React application.
 * It provides a way for components to control the visibility of sidebars and remember their state across sessions using `localStorage`.
 *
 * Components can:
 * - Open specific sidebars
 * - Toggle the state of sidebars (open/close)
 * - Reset the open state (close all sidebars)
 *
 * The state of the open sidebars is stored in `localStorage` as a JSON string, and this state is retrieved on initialization.
 *
 * The `SidebarProvider` component encapsulates the logic and provides the context to the rest of the application.
 *
 * The context exposes the following:
 * - `open`: An array of labels representing the currently open sidebars.
 * - `setOpen`: A function to set the open state for a specific sidebar or reset all sidebars.
 * - `toggleOpen`: A function to toggle the open/close state of a specific sidebar.
 */

import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  open: string[];
  setOpen: (label: string | null) => void;
  toggleOpen: (label: string) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpenState] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('sidebarOpen');

      try {
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        console.error('Error parsing sidebar state from localStorage:', e);
        return [];
      }
    }
    return [];
  });

  const setOpen = (label: string | null) => {
    let newOpenState: string[];
    if (label) {
      newOpenState = open.includes(label) ? open : [...open, label];
    } else {
      newOpenState = [];
    }
    setOpenState(newOpenState);
    localStorage.setItem('sidebarOpen', JSON.stringify(newOpenState));
  };

  const toggleOpen = (label: string) => {
    setOpenState(prevOpen => {
      const isOpen = prevOpen.includes(label);
      const newOpenState = isOpen ? prevOpen.filter(item => item !== label) : [...prevOpen, label];

      localStorage.setItem('sidebarOpen', JSON.stringify(newOpenState));
      return newOpenState;
    });
  };

  return <SidebarContext.Provider value={{ open, setOpen, toggleOpen }}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
