import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SushiMaster from './pages/SushiMaster';
import LaPasta from './pages/LaPasta';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sushi-master" element={<SushiMaster />} />
      <Route path="/la-pasta" element={<LaPasta />} />
    </Routes>
  );
};

export default AppRoutes;