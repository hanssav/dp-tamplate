import { Navbar, DarkThemeToggle } from 'flowbite-react';
import { HiViewGrid } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { navLinks } from '../../datas/components/navLinks';
import UserDropdown from './UserDropdown';
import Button from '../Button';

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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar
      fluid
      className="bg-white px-4 shadow-md dark:bg-gray-900 dark:text-white"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-1">
          {navLinks(isMobile, toggleMobileSidebar, toggleSidebar).map(
            ({ label, icon, onClick, size, className }) => (
              <Button
                color="light"
                onClick={onClick}
                size={size}
                className={className}
              >
                {label} {icon}
              </Button>
            )
          )}
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
