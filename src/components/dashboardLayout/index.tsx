import NavbarMenu from '@components/Navbar';
import SidebarMenu from '@components/SideBar';
import { getTitleFromPath } from '@utils/function';
import { useState, ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const scrollableRef = useRef<HTMLDivElement>(null); // ✅ Tambahkan ref
  const location = useLocation();
  const title = getTitleFromPath(location.pathname);

  useEffect(() => {
    // ✅ Scroll di elemen yang benar
    scrollableRef.current?.scrollTo({ top: 0, behavior: 'auto' });
  }, [title]);

  return (
    <div className="flex h-screen font-sans dark:bg-dark-bg-main dark:text-white">
      <SidebarMenu
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />
      <div
        ref={scrollableRef} // ✅ pasang ref di elemen scrollable
        className="flex flex-1 flex-col overflow-y-scroll"
      >
        <NavbarMenu
          toggleMobileSidebar={() =>
            setIsMobileSidebarOpen(!isMobileSidebarOpen)
          }
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="container my-5">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
