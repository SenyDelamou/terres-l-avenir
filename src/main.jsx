import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './App.jsx';
import './styles/index.css';
import './styles/App.css';
import './styles/premium-design.css';
import './styles/pages-premium.css';
import './styles/HomePage-premium.css';
import './styles/Footer-premium.css';
import './styles/stats-showcase.css';
import './styles/style.css';
import './styles/mobile-navbar.css';
import './styles/FichesTechniques.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
