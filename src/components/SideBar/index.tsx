import { useThemeMode, Sidebar, SidebarItems } from 'flowbite-react';
import { HiX, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import IMAGE_CONSTANTS from '../../helpers/imagesUrl';
import { menuItems } from '../../datas/components/menuItems';
import { twMerge } from 'tailwind-merge';

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
  // use useThemeMode for theme state management. read: https://flowbite-react.com/docs/customize/dark-mode#framework-integration
  const { mode } = useThemeMode();

  return (
    <Sidebar
      aria-label="Sidebar navigation"
      className={`transition-all ${isSidebarOpen ? 'w-64' : 'w-24'} fixed inset-y-0 left-0 z-50 h-screen text-wrap bg-white text-gray-900 shadow-lg transition-transform dark:bg-gray-900 dark:text-white ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} text-wrap md:relative md:translate-x-0 `}
    >
      <div className="mb-5 flex items-center justify-between py-2">
        {/* <Sidebar.Logo
          href="#"
          img={
            mode === 'dark'
              ? IMAGE_CONSTANTS.DARK_LOGO_URL
              : IMAGE_CONSTANTS.LIGHT_LOGO_URL
          }
          imgAlt="Logo"
        /> */}
        <a href="#" className="pl-2.5 md:transition-all">
          <div
            className="md:relative md:h-12 md:w-full"
            style={{
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <img
              src={
                mode === 'dark'
                  ? IMAGE_CONSTANTS.DARK_LOGO_URL
                  : IMAGE_CONSTANTS.LIGHT_LOGO_URL
              }
              alt="Logo"
              style={{
                objectFit: 'cover', // Ensures the image covers the container
                objectPosition: 'left', // Crops 30% from the left
                // width: 'auto',
                height: isMobileSidebarOpen
                  ? '50%' // If mobile sidebar is open, further reduce the height
                  : isSidebarOpen
                    ? '65%' // If sidebar is open but not mobile sidebar, set height to 65%
                    : '75%', // Default height when sidebar is closed
              }}
            />
          </div>
        </a>

        <button
          onClick={toggleMobileSidebar}
          className="m-0 p-0 text-gray-900 dark:text-white md:hidden"
        >
          <HiX size={24} />
        </button>
      </div>

      <SidebarItems>
        {menuItems.map(({ category, items }) => (
          <Sidebar.ItemGroup key={category}>
            <h3 className="p-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
              {category}
            </h3>
            {items.map(({ href, icon: Icon, label, subItems }) => (
              <div key={label}>
                {subItems ? (
                  <Sidebar.Collapse
                    className={twMerge(
                      !isSidebarOpen ? 'grid justify-items-center' : ''
                    )}
                    icon={Icon as React.FC<React.SVGProps<SVGSVGElement>>}
                    label={isSidebarOpen ? label : ''}
                    renderChevronIcon={(theme, open) => {
                      if (!isSidebarOpen) return <></>;

                      const IconComponent = open ? HiChevronUp : HiChevronDown;

                      return (
                        <IconComponent
                          aria-hidden
                          className={twMerge(
                            theme.label.icon.open[open ? 'on' : 'off'],
                            'rotate-0' // deleted rotate efect bawaan Flowbite
                          )}
                        />
                      );
                    }}
                  >
                    {subItems.map(
                      ({ href, icon: SubIcon, label: subLabel }) => (
                        <Sidebar.Item key={subLabel} href={href} icon={SubIcon}>
                          {isSidebarOpen && subLabel}
                        </Sidebar.Item>
                      )
                    )}
                  </Sidebar.Collapse>
                ) : (
                  <Sidebar.Item
                    href={href}
                    icon={Icon}
                    className={`${!isSidebarOpen && 'grid justify-items-center'}`}
                  >
                    {isSidebarOpen && label}
                  </Sidebar.Item>
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
