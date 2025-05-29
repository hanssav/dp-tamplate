import { CodeBlock } from '@components/UI/CodeBlock';

export const BasicCheckboxHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`<div>
  <!-- Audit Logs -->
  <label>
    <input type="checkbox" onchange="toggleParent('audit_logs')" />
    Audit Logs
  </label>

  <!-- System Reports (Disabled) -->
  <label>
    <input type="checkbox" disabled />
    System Reports
  </label>

  <!-- User Management -->
  <label>
    <input type="checkbox" id="user_management" onchange="toggleParent('user_management')" />
    User Management
  </label>
  <div style="margin-left: 1rem">
    <label><input type="checkbox" onchange="toggleChild('view_users', 'user_management')" /> View Users</label><br />
    <label><input type="checkbox" onchange="toggleChild('add_users', 'user_management')" /> Add Users</label><br />
    <label><input type="checkbox" onchange="toggleChild('edit_users', 'user_management')" /> Edit Users</label><br />
    <label><input type="checkbox" onchange="toggleChild('delete_users', 'user_management')" /> Delete Users</label><br />
  </div>

  <!-- Inventory Management -->
  <label>
    <input type="checkbox" id="inventory_management" onchange="toggleParent('inventory_management')" />
    Inventory Management
  </label>
  <div style="margin-left: 1rem">
    <label><input type="checkbox" onchange="toggleChild('view_inventory', 'inventory_management')" /> View Inventory</label><br />
    <label><input type="checkbox" onchange="toggleChild('add_items', 'inventory_management')" /> Add Items</label><br />
    <label><input type="checkbox" onchange="toggleChild('update_stock', 'inventory_management')" /> Update Stock</label><br />
    <label><input type="checkbox" onchange="toggleChild('remove_items', 'inventory_management')" /> Remove Items</label><br />
  </div>
</div>

<script>
  const childMap = {
    user_management: ['view_users', 'add_users', 'edit_users', 'delete_users'],
    inventory_management: ['view_inventory', 'add_items', 'update_stock', 'remove_items']
  };
  let checkedParents = [];
  let checkedChildren = [];

  function toggleParent(value) {
    const children = childMap[value] || [];
    const index = checkedParents.indexOf(value);
    if (index > -1) {
      checkedParents.splice(index, 1);
      checkedChildren = checkedChildren.filter(v => !children.includes(v));
    } else {
      checkedParents.push(value);
      children.forEach(v => !checkedChildren.includes(v) && checkedChildren.push(v));
    }
  }

  function toggleChild(value, parent) {
    const index = checkedChildren.indexOf(value);
    if (index > -1) {
      checkedChildren.splice(index, 1);
    } else {
      checkedChildren.push(value);
    }

    const allChecked = childMap[parent].every(v => checkedChildren.includes(v));
    const noneChecked = childMap[parent].every(v => !checkedChildren.includes(v));

    if (allChecked) {
      if (!checkedParents.includes(parent)) checkedParents.push(parent);
    } else if (noneChecked) {
      checkedParents = checkedParents.filter(v => v !== parent);
    }
  }
</script>`}
    />
  );
};

export const BasicCheckboxTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import React, { useState } from 'react';
  
  const config = [
    { label: 'Audit Logs', value: 'audit_logs' },
    { label: 'System Reports', value: 'system_reports', disabled: true },
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
  ];
  
  const getChildValues = (item: any) => item.childItem?.map((c: any) => c.value) || [];
  const exclude = (arr: string[], toRemove: string[]) => arr.filter(val => !toRemove.includes(val));
  
  const PreviewCheckbox = () => {
    const [checkedParents, setCheckedParents] = useState<string[]>([]);
    const [checkedChildren, setCheckedChildren] = useState<string[]>([]);
  
    const handleToggle = (value: string, item: any, isChild = false) => {
      const childValues = getChildValues(item);
  
      if (isChild) {
        const updatedChildren = checkedChildren.includes(value)
          ? exclude(checkedChildren, [value])
          : [...checkedChildren, value];
        setCheckedChildren(updatedChildren);
  
        const allChecked = childValues.every(val => updatedChildren.includes(val));
        const allUnchecked = childValues.every(val => !updatedChildren.includes(val));
  
        if (allChecked) setCheckedParents(prev => [...prev, item.value]);
        else if (allUnchecked) setCheckedParents(prev => exclude(prev, [item.value]));
      } else {
        const isChecked = checkedParents.includes(value);
        setCheckedParents(prev => isChecked ? exclude(prev, [value]) : [...prev, value]);
        setCheckedChildren(prev =>
          isChecked ? exclude(prev, childValues) : [...new Set([...prev, ...childValues])]
        );
      }
    };
  
    return (
      <div className="space-y-4">
        {config.map((item, index) => {
          const isParentChecked = checkedParents.includes(item.value);
          const childValues = getChildValues(item);
          const checkedChildCount = childValues.filter(val => checkedChildren.includes(val)).length;
          const isIndeterminate = checkedChildCount > 0 && checkedChildCount < childValues.length;
  
          return (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  disabled={item.disabled}
                  checked={isParentChecked}
                  ref={el => {
                    if (el) el.indeterminate = isIndeterminate;
                  }}
                  onChange={() => handleToggle(item.value, item, false)}
                />
                {item.label}
              </label>
              <div className="ml-4 mt-2 space-y-2">
                {item.childItem?.map((child, idx) => (
                  <div key={idx}>
                    <label>
                      <input
                        type="checkbox"
                        checked={checkedChildren.includes(child.value)}
                        onChange={() => handleToggle(child.value, item, true)}
                      />
                      {child.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default PreviewCheckbox;`}
    />
  );
};
