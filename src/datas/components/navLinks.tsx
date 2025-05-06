import { ReactNode } from 'react';
import { ChevronDown, Menu, Search } from 'lucide-react';

export type NavLink = {
  href?: string;
  size?: 'icon' | 'xs' | 'sm' | 'md' | 'lg';
  label?: string;
  active?: boolean;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  pill?: boolean;
};

export const navLinks = (
  isMobile: boolean,
  toggleMobileSidebar: () => void,
  toggleSidebar: () => void
): NavLink[] => {
  return [
    {
      active: true,
      icon: <Menu size={20} />,
      size: 'icon',
      pill: true,
      onClick: isMobile ? toggleMobileSidebar : toggleSidebar,
    },
    {
      active: true,
      icon: <Search size={20} />,
      pill: true,
      size: 'icon',
      onClick: () => {},
    },
    {
      href: '#',
      label: 'Apps',
      active: true,
      size: 'md',
      icon: <ChevronDown size={20} />,
      className: 'hidden md:block',
    },
    {
      href: '#',
      label: 'Chat',
      size: 'md',
      active: true,
    },
    { href: '#', label: 'Calendar', active: false, size: 'md' },
    { href: '#', label: 'Email', active: false, size: 'md' },
  ];
};
