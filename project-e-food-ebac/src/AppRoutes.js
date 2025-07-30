import { Routes, Route } from 'react-router-dom';
import Home from '../../project-e-food-ebac/src/pages/Home/index';
import SushiMaster from '../../project-e-food-ebac/src/pages/SushiMaster/index';
import LaPasta from '../../project-e-food-ebac/src/pages/LaPasta/index';

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