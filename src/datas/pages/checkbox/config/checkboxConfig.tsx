export type CheckboxVariant = 'basic-checkbox';

export const checkboxConfig: Record<CheckboxVariant, any[]> = {
  'basic-checkbox': [
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
  ],
};
