import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';

const App = () => (
  <>
    <AppRoutes />
    <ToastContainer position="top-center" autoClose={3000} />
  </>
);

export default App;
