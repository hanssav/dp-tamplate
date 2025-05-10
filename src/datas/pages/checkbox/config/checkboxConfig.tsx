export type CheckboxVariant = 'basic-checkbox' | 'configuration-checkbox' | 'reactive-form-checkbox';

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
  ],
  'configuration-checkbox': [
    {
      title: 'Align',
      parentName: 'align',
      type: 'radio',
      childItem: [
        { label: 'After', value: 'after', radio: true, name: 'align' },
        { label: 'Before', value: 'before', radio: true, name: 'align' },
      ],
    },
    {
      type: 'radio',
      parentName: 'config',
      childItem: [
        {
          label: 'Checked',
          value: 'checked',
          name: 'type-checkbox',
        },
        {
          label: 'Ideterminate',
          value: 'indeterminate',
          name: 'type-checkbox',
        },
        {
          label: 'Disabled',
          value: 'disabled',
          name: 'type-checkbox',
          disabled: false,
        },
      ],
    },
    {
      title: 'Result',
      result: true,
      label: 'I am Checkbox',
    },
  ],
  'reactive-form-checkbox': [
    {
      title: 'Select your toppings: ',
      // parentName: 'toppings',
      // type: 'radio',
      childItem: [
        { label: 'Pepperoni', value: 'pepperoni' },
        { label: 'Extra Cheese', value: 'extraCheese' },
        { label: 'Mushroom', value: 'mushroom' },
      ],
    },
    {
      title: 'You Chose: ',
      result: true,
    },
  ],
};
