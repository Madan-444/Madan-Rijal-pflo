import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainRoutes from './Routes/MainRoutes';

ReactDOM.render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);

