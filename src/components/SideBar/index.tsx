import { useThemeMode, Sidebar, SidebarItemGroup, SidebarCollapse, SidebarItems } from 'flowbite-react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { menuItems } from '@datas/components/menuItems';
import { twMerge } from 'tailwind-merge';
import { NavLink, useLocation } from 'react-router';
import DotIcon from '@assets/icons/RouteIcon';
import IMAGE_CONSTANTS from '@constant/images';
import { customButtonTheme } from '@components/Button/buttonTheme';
import SidebarLogo from '@components/SideBar/SidebarLogo';
import Typography from '@components/Typography';
import Box from '@components/Box';
import Button from '@components/Button';
import { useSidebar } from '@context/useSidebar';

interface SidebarProps {
  isSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
}

const SidebarMenu: React.FC<SidebarProps> = ({ isSidebarOpen, isMobileSidebarOpen, toggleMobileSidebar }) => {
  const { mode } = useThemeMode();
  const { open, setOpen } = useSidebar();
  const location = useLocation();

  const getSidebarWidth = () => (isSidebarOpen ? 'w-64' : 'w-24');

  const getSidebarBaseClasses = () =>
    twMerge(
      'fixed inset-y-0 left-0 z-50 h-screen bg-white p-3 dark:bg-gray-900 md:relative  md:translate-x-0',
      'border-grey-900 border-r dark:border-none',
      isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full',
      getSidebarWidth()
    );

  const getImageSrc = () => (mode === 'dark' ? IMAGE_CONSTANTS.DARK_LOGO_URL : IMAGE_CONSTANTS.LIGHT_LOGO_URL);

  const getIconClass = () => 'h-5 w-5';

  const getNavLinkClass = (isActive: boolean) =>
    twMerge(
      'flex items-center gap-x-2 rounded-lg p-3 text-sm',
      isSidebarOpen ? 'pl-5' : 'grid justify-items-center',
      isActive
        ? `${customButtonTheme.color.primary} ${customButtonTheme.rounded.lg}`
        : 'hover:text-grey-900 text-gray-900 hover:bg-soft-blue dark:text-white dark:hover:bg-primary-dark'
    );

  const getCollapseClass = (isActive: boolean) =>
    twMerge(
      'py-3 text-sm transition-all',
      isSidebarOpen ? 'pl-5' : 'grid justify-items-center',
      isActive ? 'bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-300' : 'text-gray-700 dark:text-white'
    );

  const getChevronIcon = (isOpen: boolean) => {
    if (!isSidebarOpen) return <></>;

    const Chevron = isOpen ? ChevronUp : ChevronDown;
    return <Chevron aria-hidden className={getIconClass()} />;
  };

  const customTheme = {
    root: {
      inner: 'h-full overflow-y-auto overflow-x-hidden rounded py-4 dark:bg-gray-900',
    },
  };

  return (
    <Sidebar aria-label="Sidebar" theme={customTheme} className={getSidebarBaseClasses()}>
      <Box
        col="col-2"
        justify="between"
        align="center"
        className="fixed left-0 top-0 z-50 flex h-[60px] w-full bg-white px-4 pt-1 dark:bg-gray-900"
      >
        <SidebarLogo imageSrc={getImageSrc()} isSidebarOpen={isSidebarOpen} isMobileSidebarOpen={isMobileSidebarOpen} />
        {isMobileSidebarOpen && (
          <Button
            color="light"
            size="icon"
            onClick={toggleMobileSidebar}
            className="text-gray-900 dark:text-white md:hidden"
          >
            <X size={20} />
          </Button>
        )}
      </Box>

      <SidebarItems className="mr-3 mt-[60px]">
        {menuItems.map(({ category, items }) => (
          <SidebarItemGroup key={category}>
            <Typography as="h2" textStyle="title" className="p-2 text-xs font-bold">
              {category}
            </Typography>

            {items.map(({ href, icon: Icon, label, subItems }) => {
              const isAnySubItemActive = subItems?.some(sub => location.pathname.startsWith(sub.href)) ?? false;

              const isOpen = open.includes(label);

              return (
                <Box key={label}>
                  {subItems ? (
                    <SidebarCollapse
                      className={getCollapseClass(isAnySubItemActive)}
                      icon={props => <Icon {...props} className={getIconClass()} />}
                      label={isSidebarOpen ? label : undefined}
                      renderChevronIcon={() => getChevronIcon(isOpen)}
                      open={isOpen}
                      onClick={() => setOpen(isOpen ? null : label)}
                    >
                      {subItems.map(({ href, label: subLabel }) => (
                        <NavLink key={subLabel} to={href} className={({ isActive }) => getNavLinkClass(isActive)} end>
                          <DotIcon />
                          {isSidebarOpen && <span>{subLabel}</span>}
                        </NavLink>
                      ))}
                    </SidebarCollapse>
                  ) : (
                    <NavLink to={href} className={({ isActive }) => getNavLinkClass(isActive)} end>
                      <Icon className={getIconClass()} />
                      {isSidebarOpen && <span>{label}</span>}
                    </NavLink>
                  )}
                </Box>
              );
            })}
          </SidebarItemGroup>
        ))}
      </SidebarItems>
    </Sidebar>
  );
};

export default SidebarMenu;
