import { useThemeMode, Sidebar, SidebarItems } from 'flowbite-react';
import { HiX, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import IMAGE_CONSTANTS from '../../helpers/imagesUrl';
import { menuItems } from '../../datas/components/menuItems';
import { twMerge } from 'tailwind-merge';
import SidebarLogo from './SidebarLogo';

interface SidebarProps {
  isSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
}

const DotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="4" fill="none" />
  </svg>
);

const SidebarMenu: React.FC<SidebarProps> = ({
  isSidebarOpen,
  isMobileSidebarOpen,
  toggleMobileSidebar,
}) => {
  // use useThemeMode for theme state management. read: https://flowbite-react.com/docs/customize/dark-mode#framework-integration
  const { mode } = useThemeMode();
  const imageSrc =
    mode === 'dark'
      ? IMAGE_CONSTANTS.DARK_LOGO_URL
      : IMAGE_CONSTANTS.LIGHT_LOGO_URL;

  return (
    <Sidebar
      aria-label="Sidebar navigation"
      className={`scrollbar-sidebar transition-all ${isSidebarOpen ? 'w-64' : 'w-24'} fixed inset-y-0 left-0 z-50 h-screen text-wrap bg-white text-gray-900 transition-transform dark:bg-gray-900 dark:text-white ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}  -wrap md:relative md:translate-x-0 `}
    >
      <div
        className={twMerge(
          'fixed left-0 top-0 z-50 flex h-[60px] w-full items-center bg-white px-4 pt-1 dark:bg-gray-900',
          isMobileSidebarOpen ? 'justify-between' : 'justify-center'
        )}
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

      <SidebarItems className="scrollbar-sidebar mt-[60px]">
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
                    renderChevronIcon={(theme, open) => {
                      if (!isSidebarOpen) return <></>;

                      const IconComponent = open ? HiChevronUp : HiChevronDown;

                      return (
                        <IconComponent
                          aria-hidden
                          className={twMerge(
                            theme.label.icon.open[open ? 'on' : 'off'],
                            'h-5 w-5 rotate-0'
                          )}
                        />
                      );
                    }}
                  >
                    {subItems.map(({ href, label: subLabel }) => (
                      <Sidebar.Item key={subLabel} href={href} className="px-2">
                        <div className="flex items-center gap-x-1">
                          <DotIcon />
                          {isSidebarOpen && (
                            <span className="text-sm">{subLabel}</span>
                          )}
                        </div>
                      </Sidebar.Item>
                    ))}
                  </Sidebar.Collapse>
                ) : (
                  <Sidebar.Item
                    href={href}
                    className={`${!isSidebarOpen && 'grid justify-items-center'}`}
                  >
                    <div className="flex items-center gap-x-2">
                      <Icon className="h-5 w-5" />{' '}
                      {isSidebarOpen && (
                        <span className="text-sm">{label}</span>
                      )}{' '}
                    </div>
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
