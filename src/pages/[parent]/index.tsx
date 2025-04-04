import { useLocation, Navigate } from 'react-router';
import DashboardLayout from '../../components/DashboardLayout';
import { checkValidPath } from '../../utils/checkValidPath';

const ParentMenu = () => {
  const location = useLocation();
  const isValid = checkValidPath(location.pathname);

  if (isValid === '404') {
    return <Navigate to="/404" replace />;
  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">
        Welcome to the Parrent {location.pathname}
      </h1>
      <p className="my-4">
        This is the main content of the {location.pathname}.
      </p>
    </DashboardLayout>
  );
};

export default ParentMenu;
