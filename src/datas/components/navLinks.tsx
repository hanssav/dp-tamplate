import { ReactNode } from 'react';
import { HiChevronDown, HiMenu, HiOutlineSearch } from 'react-icons/hi';

export type NavLink = {
  href?: string;
  size?: 'icon' | 'xs' | 'sm' | 'md' | 'lg';
  label?: string;
  active?: boolean;
  rounded?: boolean;
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
      rounded: true,
      onClick: isMobile ? toggleMobileSidebar : toggleSidebar,
    },
    {
      active: true,
      icon: <HiOutlineSearch size={20} />,
      size: 'icon',
      rounded: true,
      onClick: () => {},
    },
    {
      href: '#',
      label: 'Apps',
      active: true,
      size: 'xs',
      icon: <HiChevronDown size={20} />,
      className: 'hidden md:block',
    },
    {
      href: '#',
      label: 'Chat',
      size: 'xs',
      active: true,
    },
    { href: '#', label: 'Calendar', active: false, size: 'xs' },
    { href: '#', label: 'Email', active: false, size: 'xs' },
  ];
};
