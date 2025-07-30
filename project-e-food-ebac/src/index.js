import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../project-e-food-ebac/src/AppRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);