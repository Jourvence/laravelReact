import React from 'react';
import ReactDOM from 'react-dom/client'; // Fix the capitalization
import App from './App';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';

// Import StrictMode from React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
