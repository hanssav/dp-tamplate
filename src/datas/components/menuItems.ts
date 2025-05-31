import IconLayoutGridAdd from '@assets/icons/IconGridAdd';
import {
  Home,
  PieChart,
  LayoutGrid,
  ShoppingCart,
  Users,
  UserPlus,
  Bell,
  Settings,
  CreditCard,
  LogOut,
  LayoutTemplate,
  FileText,
  Files,
  FilePenLine,
  MessageSquareDot,
  GalleryHorizontalEnd,
  GalleryVerticalEnd,
} from 'lucide-react';

interface MenuItem {
  href: string;
  icon: React.ElementType;
  label: string;
  subItems?: { href: string; label: string }[];
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuItems: MenuCategory[] = [
  {
    category: 'HOME',
    items: [
      { href: '/', icon: Home, label: 'Home' },
      { href: '/analytical', icon: PieChart, label: 'Analytical' },
      { href: '/ecommerce', icon: ShoppingCart, label: 'eCommerce' },
    ],
  },
  {
    category: 'PAGES',
    items: [
      {
        href: '/widgets',
        icon: LayoutTemplate,
        label: 'Widgets',
        subItems: [
          { href: '/widgets/cards', label: 'Cards' },
          { href: '/widgets/banners', label: 'Banners' },
          { href: '/widgets/charts', label: 'Charts' },
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
          { href: '/forms/forms-elements/autocomplete', label: 'Autocomplete' },
          { href: '/forms/forms-elements/button', label: 'Button' },
          { href: '/forms/forms-elements/checkbox', label: 'Checkbox' },
          { href: '/forms/forms-elements/radio', label: 'Radio' },
          { href: '/forms/forms-elements/datepicker', label: 'Datepicker' },
        ],
      },
      { href: '/form-layout', icon: FileText, label: 'Form Layout' },
      {
        href: '/form-horizontal',
        icon: GalleryVerticalEnd,
        label: 'Form Horizontal',
      },
      {
        href: '/form-vertical',
        icon: GalleryHorizontalEnd,
        label: 'Form Vertical',
      },
      { href: '/form-wizard', icon: Files, label: 'Form Wizard' },
      { href: '/toastr', icon: MessageSquareDot, label: 'Toastr' },
      { href: '/editor', icon: FilePenLine, label: 'Editor' },
    ],
  },
  {
    category: 'ORDERS',
    items: [
      { href: '/orders', icon: ShoppingCart, label: 'All Orders' },
      { href: '/orders/pending', icon: LayoutGrid, label: 'Pending Orders' },
      {
        href: '/orders/completed',
        icon: LayoutGrid,
        label: 'Completed Orders',
      },
      { href: '/orders/canceled', icon: LayoutGrid, label: 'Canceled Orders' },
    ],
  },
  {
    category: 'PRODUCTS',
    items: [
      {
        href: '/products',
        icon: LayoutGrid,
        label: 'Product List',
        subItems: [
          { href: '/products/featured', label: 'Featured Products' },
          { href: '/products/on-sale', label: 'On Sale Products' },
        ],
      },
      { href: '/products/add', icon: LayoutGrid, label: 'Add Product' },
      { href: '/categories', icon: LayoutGrid, label: 'Categories' },
    ],
  },
  {
    category: 'APPS',
    items: [
      { href: '/dashboard', icon: Home, label: 'Dashboard' },
      {
        href: '#',
        icon: PieChart,
        label: 'Analytics',
        subItems: [
          { href: '/reports', label: 'Reports' },
          { href: '/traffic', label: 'Traffic' },
          { href: '/conversions', label: 'Conversions' },
        ],
      },
      {
        href: '#',
        icon: ShoppingCart,
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
      { href: '/customers', icon: Users, label: 'Customer List' },
      { href: '/customers/add', icon: UserPlus, label: 'Add Customer' },
      { href: '/customers/loyalty', icon: UserPlus, label: 'Loyalty Program' },
    ],
  },
  {
    category: 'USER MANAGEMENT',
    items: [
      { href: '/users', icon: Users, label: 'Users' },
      { href: '/roles', icon: Settings, label: 'Roles & Permissions' },
    ],
  },
  {
    category: 'NOTIFICATIONS',
    items: [
      { href: '/notifications', icon: Bell, label: 'All Notifications' },
      {
        href: '/notifications/settings',
        icon: Settings,
        label: 'Notification Settings',
      },
    ],
  },
  {
    category: 'SETTINGS',
    items: [
      { href: '/account', icon: Settings, label: 'Account Settings' },
      { href: '/billing', icon: CreditCard, label: 'Billing & Payments' },
      { href: '/integrations', icon: Settings, label: 'Integrations' },
      {
        href: '/Account',
        icon: Settings,
        label: 'Account',
        subItems: [
          { href: '/settings/privacy', label: 'Privacy Settings' },
          { href: '/settings/security', label: 'Security Settings' },
        ],
      },
    ],
  },
  {
    category: 'LOGOUT',
    items: [{ href: '/logout', icon: LogOut, label: 'Logout' }],
  },
];

