import classNames from 'classnames';

interface SidebarLogoProps {
  imageSrc: string;
  isSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({
  imageSrc,
  isSidebarOpen,
  isMobileSidebarOpen,
}) => {
  return (
    <a href="#" className="pl-2.5 md:transition-all">
      <div className="relative w-full overflow-hidden md:h-12">
        <img
          src={imageSrc}
          alt="Logo"
          className={classNames(
            'w-full object-cover object-left', // Common styles
            {
              'h-[50%]': isMobileSidebarOpen, // Apply height 50% when mobile sidebar is open
              'h-[65%]': !isMobileSidebarOpen && isSidebarOpen, // Apply height 65% when sidebar is open and not mobile
              'h-[75%]': !isSidebarOpen && !isMobileSidebarOpen, // Apply height 75% when sidebar is closed and not mobile
            }
          )}
        />
      </div>
    </a>
  );
};

export default SidebarLogo;
