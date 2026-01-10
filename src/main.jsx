import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './App.jsx';
// Import CSS dans l'ordre correct - Les styles génériques EN PREMIER, puis les spécifiques
import './styles/style.css';  // Style de base avec variables génériques
import './styles/index.css';  // Thème premium agricole (écrase style.css)
import './styles/App.css';  // Styles de l'application
import './styles/premium-design.css';  // Design premium global
import './styles/pages-premium.css';  // Design premium des pages
import './styles/HomePage-premium.css';  // Home page premium
import './styles/Footer-premium.css';  // Footer premium
import './styles/stats-showcase.css';  // Stats showcase
import './styles/mobile-navbar.css';  // Mobile navbar
import './styles/FichesTechniques.css';  // Fiches techniques

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
