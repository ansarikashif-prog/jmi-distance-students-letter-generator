import React from 'react';
import ReactDOM from 'react-dom/client';

// ===============================
// MAIN APP COMPONENT
// ===============================
import App from './App.jsx';

// ===============================
// GLOBAL STYLES
// ===============================
import './styles/main.css';

// ===============================
// REACT 18 ROOT INITIALIZATION
// ===============================
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'Root element not found. Ensure <div id="root"></div> exists in index.html'
  );
}

// Render the React app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
