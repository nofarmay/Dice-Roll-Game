import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const elementRoot = document.getElementById('root');
const root = ReactDOM.createRoot(elementRoot);
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
