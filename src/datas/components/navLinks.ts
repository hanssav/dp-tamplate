export type NavLink = {
  href: string;
  label: string;
  active: boolean;
};

export const navLinks: NavLink[] = [
  { href: '#', label: 'Home', active: true },
  { href: '#', label: 'About', active: false },
  { href: '#', label: 'Contact', active: false },
];
