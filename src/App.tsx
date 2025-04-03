import { Routes, Route } from 'react-router';
import { SidebarProvider } from './context/sidebarContext';
import Home from './pages';
import CardPages from './pages/widgets/card';

const App = () => {
  return (
    <SidebarProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="widgets/card" element={<CardPages />} />

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
