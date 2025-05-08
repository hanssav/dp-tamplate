export type Variant = 'basic';

export const checkboxConfig: Record<Variant, any[]> = {
  basic: [
    {
      label: 'Audit Logs',
      value: 'audit_logs',
    },
    {
      label: 'System Reports',
      value: 'system_reports',
      disabled: true,
    },
    {
      label: 'User Management',
      value: 'user_management',
      childItem: [
        { label: 'View Users', value: 'view_users' },
        { label: 'Add Users', value: 'add_users' },
        { label: 'Edit Users', value: 'edit_users' },
        { label: 'Delete Users', value: 'delete_users' },
      ],
    },
    {
      label: 'Inventory Management',
      value: 'inventory_management',
      childItem: [
        { label: 'View Inventory', value: 'view_inventory' },
        { label: 'Add Items', value: 'add_items' },
        { label: 'Update Stock', value: 'update_stock' },
        { label: 'Remove Items', value: 'remove_items' },
      ],
    },
    {
      label: 'Sales Management',
      value: 'sales_management',
      childItem: [
        { label: 'View Sales', value: 'view_sales' },
        { label: 'Create Invoices', value: 'create_invoices' },
        { label: 'Apply Discounts', value: 'apply_discounts' },
      ],
    },
    {
      label: 'Settings',
      value: 'settings',
      childItem: [
        { label: 'General Settings', value: 'general_settings' },
        { label: 'Security Settings', value: 'security_settings' },
        { label: 'Notification Settings', value: 'notification_settings' },
      ],
    },
  ],
};
