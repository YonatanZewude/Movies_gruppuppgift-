import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!); // Skapar en root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
