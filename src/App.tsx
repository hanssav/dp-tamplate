import { Routes, Route, useLocation } from 'react-router';
import { SidebarProvider } from './context/sidebarContext';
import Home from './pages';
import NotFoundPage from './pages/404';
import ParentMenu from './pages/[parent]';

const App = () => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path={location.pathname} element={<ParentMenu />} />

        {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    
      <Route path="concerts">
        <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} />
      </Route> */}
      </Routes>
    </SidebarProvider>
  );
};

export default App;
