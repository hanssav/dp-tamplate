import { ReactNode } from 'react';
import { HiChevronDown, HiMenu, HiOutlineSearch } from 'react-icons/hi'; // Import icons from react-icons

export type NavLink = {
  href?: string;
  size?: 'icon' | 'sm' | 'md' | 'lg';
  label?: string;
  active?: boolean;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const navLinks = (
  isMobile: boolean,
  toggleMobileSidebar: () => void,
  toggleSidebar: () => void
): NavLink[] => {
  return [
    {
      active: true,
      icon: <HiMenu size={20} />,
      size: 'icon',
      onClick: isMobile ? toggleMobileSidebar : toggleSidebar,
    },
    {
      active: true,
      icon: <HiOutlineSearch size={20} />,
      size: 'icon',
      onClick: () => {},
    },
    {
      href: '#',
      label: 'Apps',
      active: true,
      size: 'sm',
      icon: <HiChevronDown size={20} />,
      className: 'hidden md:block',
    },
    {
      href: '#',
      label: 'Chat',
      size: 'sm',
      active: true,
    },
    { href: '#', label: 'Calendar', active: false, size: 'sm' },
    { href: '#', label: 'Email', active: false, size: 'sm' },
  ];
};
