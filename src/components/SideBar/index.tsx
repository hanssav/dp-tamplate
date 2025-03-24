import { Sidebar } from 'flowbite-react';
import { HiX, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useState } from 'react';
import IMAGE_CONSTANTS from '../../helpers/imagesUrl';
import { menuItems } from '../../datas/components/menuItems';

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 transition-transform ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0`}
    >
      <Sidebar
        aria-label="Sidebar navigation"
        className={`transition-all ${
          isSidebarOpen ? 'w-64' : 'w-24'
        } h-screen bg-white text-gray-900 shadow-lg dark:bg-gray-900 dark:text-white`}
      >
        <div className="flex items-center justify-between p-4">
          <Sidebar.Logo
            href="#"
            img={IMAGE_CONSTANTS.LIGHT_LOGO_URL}
            imgAlt="Logo"
            className="block dark:hidden"
          />
          <Sidebar.Logo
            href="#"
            img={IMAGE_CONSTANTS.DARK_LOGO_URL}
            imgAlt="Logo"
            className="hidden dark:block"
          />

          <button
            onClick={toggleMobileSidebar}
            className="m-0 p-0 text-gray-900 dark:text-white md:hidden"
          >
            <HiX size={24} />
          </button>
        </div>

        <Sidebar.Items>
          {menuItems.map(({ category, items }) => (
            <Sidebar.ItemGroup key={category}>
              <h3 className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                {category}
              </h3>
              {items.map(({ href, icon: Icon, label, subItems }) => (
                <div key={label}>
                  {subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(label)}
                        className="flex w-full items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Icon className="mr-2 text-gray-900 dark:text-white" />
                        {isSidebarOpen && label}
                        <span className="ml-auto">
                          {openDropdown === label ? (
                            <HiChevronUp className="text-gray-900 dark:text-white" />
                          ) : (
                            <HiChevronDown className="text-gray-900 dark:text-white" />
                          )}
                        </span>
                      </button>
                      {openDropdown === label && (
                        <div className="ml-6">
                          {subItems.map((sub) => (
                            <Sidebar.Item
                              key={sub.label}
                              href={sub.href}
                              icon={sub.icon}
                            >
                              {isSidebarOpen && sub.label}
                            </Sidebar.Item>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Sidebar.Item href={href} icon={Icon}>
                      {isSidebarOpen && label}
                    </Sidebar.Item>
                  )}
                </div>
              ))}
            </Sidebar.ItemGroup>
          ))}
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;
