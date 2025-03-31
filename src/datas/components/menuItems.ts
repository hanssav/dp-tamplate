import {
  HiOutlineHome,
  HiOutlineChartPie,
  HiOutlineViewBoards,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineCreditCard,
  HiOutlineLogout,
} from 'react-icons/hi';

interface MenuItem {
  href: string;
  icon: React.ElementType;
  label: string;
  subItems?: { href: string; icon: React.ElementType; label: string }[]; // Optional subItems
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuItems: MenuCategory[] = [
  {
    category: 'DASHBOARD',
    items: [
      { href: '/dashboard', icon: HiOutlineHome, label: 'Home' },
      { href: '/analytics', icon: HiOutlineChartPie, label: 'Analytics' },
      { href: '/reports', icon: HiOutlineViewBoards, label: 'Reports' },
    ],
  },
  {
    category: 'ORDERS',
    items: [
      { href: '/orders', icon: HiOutlineShoppingCart, label: 'All Orders' },
      {
        href: '/orders/pending',
        icon: HiOutlineViewBoards,
        label: 'Pending Orders',
      },
      {
        href: '/orders/completed',
        icon: HiOutlineViewBoards,
        label: 'Completed Orders',
      },
      {
        href: '/orders/canceled',
        icon: HiOutlineViewBoards,
        label: 'Canceled Orders',
      },
    ],
  },
  {
    category: 'PRODUCTS',
    items: [
      {
        href: '/products',
        icon: HiOutlineViewBoards,
        label: 'Product List',
        subItems: [
          {
            href: '/products/featured',
            icon: HiOutlineViewBoards,
            label: 'Featured Products',
          },
          {
            href: '/products/on-sale',
            icon: HiOutlineViewBoards,
            label: 'On Sale Products',
          },
        ],
      },
      {
        href: '/products/add',
        icon: HiOutlineViewBoards,
        label: 'Add Product',
      },
      {
        href: '/categories',
        icon: HiOutlineViewBoards,
        label: 'Categories',
      },
    ],
  },
  {
    category: 'APPS',
    items: [
      { href: '/dashboard', icon: HiOutlineHome, label: 'Dashboard' },
      {
        href: '#',
        icon: HiOutlineChartPie,
        label: 'Analytics',
        subItems: [
          { href: '/reports', icon: HiOutlineViewBoards, label: 'Reports' },
          { href: '/traffic', icon: HiOutlineViewBoards, label: 'Traffic' },
          {
            href: '/conversions',
            icon: HiOutlineViewBoards,
            label: 'Conversions',
          },
        ],
      },
      {
        href: '#',
        icon: HiOutlineShoppingCart,
        label: 'E-commerce',
        subItems: [
          { href: '/orders', icon: HiOutlineViewBoards, label: 'Orders' },
          { href: '/products', icon: HiOutlineViewBoards, label: 'Products' },
          { href: '/customers', icon: HiOutlineUsers, label: 'Customers' },
        ],
      },
    ],
  },
  {
    category: 'CUSTOMERS',
    items: [
      { href: '/customers', icon: HiOutlineUsers, label: 'Customer List' },
      {
        href: '/customers/add',
        icon: HiOutlineUserGroup,
        label: 'Add Customer',
      },
      {
        href: '/customers/loyalty',
        icon: HiOutlineUserGroup,
        label: 'Loyalty Program',
      },
    ],
  },
  {
    category: 'USER MANAGEMENT',
    items: [
      { href: '/users', icon: HiOutlineUsers, label: 'Users' },
      {
        href: '/roles',
        icon: HiOutlineCog,
        label: 'Roles & Permissions',
      },
    ],
  },
  {
    category: 'NOTIFICATIONS',
    items: [
      {
        href: '/notifications',
        icon: HiOutlineBell,
        label: 'All Notifications',
      },
      {
        href: '/notifications/settings',
        icon: HiOutlineCog,
        label: 'Notification Settings',
      },
    ],
  },
  {
    category: 'SETTINGS',
    items: [
      { href: '/account', icon: HiOutlineCog, label: 'Account Settings' },
      {
        href: '/billing',
        icon: HiOutlineCreditCard,
        label: 'Billing & Payments',
      },
      { href: '/integrations', icon: HiOutlineCog, label: 'Integrations' },
      {
        href: '/Account',
        icon: HiOutlineCog,
        label: 'Account',
        subItems: [
          {
            href: '/settings/privacy',
            icon: HiOutlineCog,
            label: 'Privacy Settings',
          },
          {
            href: '/settings/security',
            icon: HiOutlineCog,
            label: 'Security Settings',
          },
        ],
      },
    ],
  },
  {
    category: 'LOGOUT',
    items: [{ href: '/logout', icon: HiOutlineLogout, label: 'Logout' }],
  },
];
