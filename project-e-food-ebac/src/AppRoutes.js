import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SushiMaster from './pages/SushiMaster';
import LaPasta from './pages/LaPasta';
import Profile from './pages/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sushi-master" element={<SushiMaster />} />
        <Route path="/la-pasta" element={<LaPasta />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;