import { Navbar, Button, DarkThemeToggle } from 'flowbite-react';
import { HiMenu, HiViewGrid } from 'react-icons/hi';
import { useState } from 'react';
import { navLinks } from '../../datas/components/navLinks';
import UserDropdown from './userDropdown';

interface NavbarProps {
  toggleMobileSidebar: () => void;
  toggleSidebar: () => void;
}

const NavbarMenu: React.FC<NavbarProps> = ({
  toggleMobileSidebar,
  toggleSidebar,
}) => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const handleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <Navbar
      fluid
      className="bg-white px-4 shadow-md dark:bg-gray-900 dark:text-white"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          {/* Button Mobile Sidebar */}
          <Button size="sm" className="md:hidden" onClick={toggleMobileSidebar}>
            <HiMenu size={20} />
          </Button>

          {/* Button Sidebar untuk Desktop */}
          <button
            onClick={toggleSidebar}
            className="hidden rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700 md:block"
          >
            <HiMenu size={24} />
          </button>

          {/* navbar toogle untuk mobile view */}
          {/* <Navbar.Toggle /> */}

          <Navbar.Collapse>
            {navLinks.map(({ href, label, active }) => (
              <Navbar.Link key={label} href={href} active={active}>
                {label}
              </Navbar.Link>
            ))}
          </Navbar.Collapse>
        </div>

        {/* Grid Dots, Dark Mode Toggle, dan User Dropdown */}
        <div className="flex items-center gap-4">
          {/* Grid Dots Button */}
          <button
            onClick={handleRightSidebar}
            className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <HiViewGrid size={24} />
          </button>

          {/* Dark Mode Toggle dari Flowbite */}
          <DarkThemeToggle />

          <UserDropdown />
        </div>
      </div>

      {/* Right Sidebar Modal */}
      {isRightSidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={handleRightSidebar}
        >
          <div
            className="absolute right-0 top-0 h-full w-64 translate-x-0 transform bg-white p-4 shadow-lg transition-transform dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()} // Supaya modal tidak tertutup saat diklik di dalamnya
          >
            <h2 className="border-b pb-2 text-lg font-semibold">
              Right Sidebar
            </h2>
            <p className="mt-4">Isi konten di sini...</p>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default NavbarMenu;
