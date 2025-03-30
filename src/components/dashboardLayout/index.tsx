import { useState, ReactNode } from 'react';
import NavbarMenu from '../Navbar';
import SidebarMenu from '../SideBar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMobileSidebar = () =>
    setIsMobileSidebarOpen(!isMobileSidebarOpen);

  return (
    <div className="flex h-screen font-sans dark:bg-gray-900 dark:text-white">
      <SidebarMenu
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
      />
      <div className="flex flex-1 flex-col">
        <NavbarMenu
          toggleMobileSidebar={toggleMobileSidebar}
          toggleSidebar={toggleSidebar}
        />
        <main className="flex-1 p-6 dark:bg-gray-800 dark:text-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
