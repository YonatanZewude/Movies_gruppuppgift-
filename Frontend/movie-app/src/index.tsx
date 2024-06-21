import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ReactGA from 'react-ga4';

const container = document.getElementById('root');
const root = createRoot(container!); 


ReactGA.initialize('G-G1FPKYYKET');

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
