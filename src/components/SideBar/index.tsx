import { useEffect } from 'react';
import { useThemeMode, Sidebar, SidebarItems } from 'flowbite-react';
import { HiX, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { menuItems } from '../../datas/components/menuItems';
import { twMerge } from 'tailwind-merge';
import SidebarLogo from './SidebarLogo';
import { NavLink, useLocation } from 'react-router';
import { useSidebarContext } from '../../context/sidebarContext';
import DotIcon from '../../assets/icons/DotIcon';
import { theme } from '../../config/theme';
import IMAGE_CONSTANTS from '../../constant/images';

interface SidebarProps {
  isSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
}

const SidebarMenu: React.FC<SidebarProps> = ({
  isSidebarOpen,
  isMobileSidebarOpen,
  toggleMobileSidebar,
}) => {
  const { mode } = useThemeMode();
  const location = useLocation();
  const imageSrc =
    mode === 'dark'
      ? IMAGE_CONSTANTS.DARK_LOGO_URL
      : IMAGE_CONSTANTS.LIGHT_LOGO_URL;

  const { open, setOpen } = useSidebarContext();

  useEffect(() => {
    menuItems.reduce(
      (acc, { items }) => {
        items.forEach(({ label, subItems }) => {
          if (subItems?.some(({ href }) => location.pathname === href)) {
            acc[label] = true;
          }
        });
        return acc;
      },
      {} as Record<string, boolean>
    );
  }, [location.pathname, setOpen]);

  const customTheme = {
    root: {
      inner:
        'h-full overflow-y-auto overflow-x-hidden rounded bg-white px-3 py-4 dark:bg-gray-900',
    },
  };

  return (
    <Sidebar
      aria-label="Sidebar"
      theme={customTheme}
      className={`transition-all ${isSidebarOpen ? 'w-64' : 'w-24'} fixed inset-y-0 left-0 z-50 h-screen  transition-transform dark:bg-gray-900 dark:text-white ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}  -wrap md:relative md:translate-x-0 `}
    >
      <div
        className={
          'fixed left-0 top-0 z-50 flex h-[60px] w-full items-center justify-between bg-white px-4 pt-1 dark:bg-gray-900'
        }
      >
        <SidebarLogo
          imageSrc={imageSrc}
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
        />
        {isMobileSidebarOpen && (
          <button
            onClick={toggleMobileSidebar}
            className="text-gray-900 dark:text-white md:hidden"
          >
            <HiX size={20} />
          </button>
        )}
      </div>

      <SidebarItems className="mt-[60px]">
        {menuItems.map(({ category, items }) => (
          <Sidebar.ItemGroup key={category}>
            <h4 className="p-2 text-xs font-bold text-gray-600 dark:text-gray-300">
              {category}
            </h4>
            {items.map(({ href, icon: Icon, label, subItems }) => (
              <div key={label}>
                {subItems ? (
                  <Sidebar.Collapse
                    className={twMerge(
                      !isSidebarOpen
                        ? 'grid justify-items-center text-sm'
                        : 'ml-3 text-sm'
                    )}
                    icon={(props) => <Icon {...props} className="h-5 w-5" />}
                    label={isSidebarOpen ? label : undefined}
                    renderChevronIcon={(theme, isOpen) => {
                      if (!isSidebarOpen) return <></>;
                      const IconComponent = isOpen
                        ? HiChevronUp
                        : HiChevronDown;
                      return (
                        <IconComponent
                          aria-hidden
                          className={twMerge(
                            theme.label.icon.open[isOpen ? 'on' : 'off'],
                            'h-5 w-5 rotate-0'
                          )}
                        />
                      );
                    }}
                    open={open === label}
                    onClick={() => setOpen(open === label ? null : label)}
                  >
                    {subItems.map(({ href, label: subLabel }) => (
                      <NavLink
                        key={subLabel}
                        to={href}
                        className={({ isActive }) =>
                          twMerge(
                            'ml-3 flex items-center gap-x-1 p-2 text-sm',
                            isActive
                              ? `${theme.colors.primary} ${theme.rounded.lg}`
                              : 'text-gray-900 dark:text-white'
                          )
                        }
                        end
                      >
                        <DotIcon />
                        {isSidebarOpen && <span>{subLabel}</span>}
                      </NavLink>
                    ))}
                  </Sidebar.Collapse>
                ) : (
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      twMerge(
                        'flex items-center gap-x-2 p-2 text-sm',
                        isActive
                          ? `${theme.colors.primary} ${theme.rounded.lg}`
                          : 'hover:text-grey-900 text-gray-900 hover:bg-secondary dark:text-white dark:hover:text-blue-400',
                        !isSidebarOpen ? 'grid justify-items-center' : 'ml-3'
                      )
                    }
                    end
                  >
                    <Icon className="h-5 w-5" />
                    {isSidebarOpen && <span>{label}</span>}
                  </NavLink>
                )}
              </div>
            ))}
          </Sidebar.ItemGroup>
        ))}
      </SidebarItems>
    </Sidebar>
  );
};

export default SidebarMenu;
