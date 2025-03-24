import { Dropdown, Avatar } from 'flowbite-react';

const UserDropdown: React.FC = () => {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar alt="User" img="https://i.pravatar.cc/150?img=3" rounded />
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">John Doe</span>
        <span className="block truncate text-sm font-medium">
          johndoe@example.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item key="profile">Profile</Dropdown.Item>
      <Dropdown.Item key="settings">Settings</Dropdown.Item>
      <Dropdown.Item key="sign-out">Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default UserDropdown;
