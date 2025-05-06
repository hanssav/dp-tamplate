import { Navbar, useThemeMode } from 'flowbite-react';
import { LayoutGrid, Moon, Bell } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '@datas/components/navLinks';
import Button from '@components/Button';
import UserDropdown from '@components/Navbar/userDropdown';
import { THEME_MODE_CONSTANT } from '@constant/index';

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

  const { mode, setMode } = useThemeMode();

  return (
    <Navbar
      fluid
      className="sticky top-0 z-30 bg-white px-4 dark:bg-gray-900 dark:text-white"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-1">
          {navLinks(isMobile, toggleMobileSidebar, toggleSidebar).map(
            ({ label, icon, onClick, size, className, pill }, index) => (
              <Button
                key={label || index}
                color="basic"
                onClick={onClick}
                size={size}
                pill={pill}
                className={`${className}`}
              >
                {label} {icon}
              </Button>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button color="basic" onClick={handleRightSidebar} size="icon" pill>
            <LayoutGrid size={24} />
          </Button>

          <Button
            color="basic"
            onClick={() =>
              setMode(
                mode === THEME_MODE_CONSTANT.DARK
                  ? THEME_MODE_CONSTANT.LIGHT
                  : THEME_MODE_CONSTANT.DARK
              )
            }
            size="icon"
            pill
          >
            <Moon size={24} />
          </Button>

          <div className="relative">
            <Button
              color="basic"
              size="icon"
              pill
              onClick={() => {}}
              className="relative"
            >
              <Bell size={24} />
            </Button>

            <span className="absolute right-2 top-2 z-20 -mr-1 -mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
              1
            </span>
          </div>

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
            className="absolute right-0 top-0 h-full w-64 translate-x-0 transform bg-white p-4 shadow-soft transition-transform dark:bg-gray-800"
            onClick={(e) => e.stopPropagation()}
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
