import { useLocation, Navigate } from 'react-router'; // or 'react-router-dom' if using it
import DashboardLayout from '../../../components/DashboardLayout';
import { menuItems } from '../../../datas/components/menuItems';

const Child = () => {
  const location = useLocation();

  const checkValidPath = (pathname: string): true | '404' => {
    for (const category of menuItems) {
      for (const item of category.items) {
        if (item.href === pathname) return true;

        if (item.subItems) {
          for (const sub of item.subItems) {
            if (sub.href === pathname) return true;
          }
        }
      }
    }

    return '404';
  };

  const result = checkValidPath(location.pathname);

  // Option 1: Redirect to a 404 route
  if (result === '404') {
    return <Navigate to="/404" replace />;
  }

  // Option 2: Or show inline 404 message instead
  // if (result === '404') return <h1>404 Page Not Found</h1>;

  return (
    <DashboardLayout>
      <h1>This is Child Menu Component</h1>
    </DashboardLayout>
  );
};

export default Child;
