import IconLayoutGridAdd from '@assets/icons/IconGridAdd';
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
  HiOutlineTemplate,
} from 'react-icons/hi';

interface MenuItem {
  href: string;
  icon: React.ElementType;
  label: string;
  subItems?: { href: string; label: string }[]; // Optional subItems
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuItems: MenuCategory[] = [
  {
    category: 'HOME',
    items: [
      { href: '/', icon: HiOutlineHome, label: 'Home' },
      { href: '/analytical', icon: HiOutlineChartPie, label: 'Analytical' },
      { href: '/ecommerce', icon: HiOutlineShoppingCart, label: 'eCommerce' },
    ],
  },
  {
    category: 'PAGES',
    items: [
      {
        href: '/widgets',
        icon: HiOutlineTemplate,
        label: 'Widgets',
        subItems: [
          {
            href: '/widgets/cards',
            label: 'Cards',
          },
          {
            href: '/widgets/banners',
            label: 'Banners',
          },
          {
            href: '/widgets/charts',
            label: 'Charts',
          },
        ],
      },
    ],
  },
  {
    category: 'FORMS',
    items: [
      {
        href: '/forms-elements',
        icon: IconLayoutGridAdd,
        label: 'Form Elements',
        subItems: [
          {
            href: '/forms/forms-elements/autocomplete',
            label: 'Autocomplete',
          },
          {
            href: '/forms/forms-elements/Button',
            label: 'Button',
          },
          {
            href: '/forms/forms-elements/Ceckbox',
            label: 'Checkbox',
          },
          {
            href: '/forms/forms-elements/Radio',
            label: 'Radio',
          },
          {
            href: '/forms/forms-elements/Datepicker',
            label: 'Datepicker',
          },
        ],
      },
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
            label: 'Featured Products',
          },
          {
            href: '/products/on-sale',
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
          { href: '/reports', label: 'Reports' },
          { href: '/traffic', label: 'Traffic' },
          {
            href: '/conversions',

            label: 'Conversions',
          },
        ],
      },
      {
        href: '#',
        icon: HiOutlineShoppingCart,
        label: 'E-commerce',
        subItems: [
          { href: '/orders', label: 'Orders' },
          { href: '/products', label: 'Products' },
          { href: '/customers', label: 'Customers' },
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
            label: 'Privacy Settings',
          },
          {
            href: '/settings/security',
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
