import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css';

function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Fermer le menu quand on change de page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Accueil', icon: '🏠' },
    { path: '/a-propos', label: 'À propos', icon: 'ℹ️' },
    { path: '/services', label: 'Services', icon: '🛠️' },
    { path: '/techniques', label: 'Techniques', icon: '🌾' },
    { path: '/actualites', label: 'Actualités', icon: '📰' },
    { path: '/forum', label: 'Forum', icon: '💬' },
    { path: '/projets-financement', label: 'Financement', icon: '💰' },
    { path: '/assistant-ia', label: 'IA', icon: '🤖' },
    { path: '/contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <span className="logo-icon">🌾</span>
            <span className="logo-text">AgriCulture</span>
          </Link>
          
          {isMobileMenuOpen && (
            <div 
              className="mobile-menu-overlay"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            ></div>
          )}

          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button 
                className="mobile-menu-close"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
              </Link>
            ))}
            
            <div className="nav-auth">
              <Link to="/dashboard" className="btn-dashboard" onClick={closeMobileMenu}>
                <span>📊</span>
                <span>Dashboard</span>
              </Link>
              <Link to="/connexion" className="btn-login" onClick={closeMobileMenu}>
                <span>🔐</span>
                <span>Connexion</span>
              </Link>
            </div>
          </nav>

          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
            <span className={isMobileMenuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-about">
              <div className="footer-logo">
                <span className="logo-icon">🌾</span>
                <span className="logo-text">AgriCulture</span>
              </div>
              <p>Votre partenaire pour une agriculture durable et moderne. Nous accompagnons les agriculteurs dans leur transition vers des pratiques respectueuses de l'environnement.</p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">📘</a>
                <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
                <a href="#" className="social-link" aria-label="Instagram">📷</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Navigation</h4>
              <Link to="/">Accueil</Link>
              <Link to="/a-propos">À propos</Link>
              <Link to="/services">Services</Link>
              <Link to="/techniques">Techniques</Link>
              <Link to="/actualites">Actualités</Link>
              <Link to="/forum">Forum</Link>
              <Link to="/assistant-ia">Assistant IA</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <Link to="/services">Diagnostic Agricole</Link>
              <Link to="/services">Formation & Conseil</Link>
              <Link to="/services">Gestion de l'Irrigation</Link>
              <Link to="/services">Conversion Bio</Link>
              <Link to="/services">Analyse de Données</Link>
            </div>
            <div className="footer-section footer-contact">
              <h4>Contact</h4>
              <div className="footer-contact-item">
                <span className="footer-icon">📍</span>
                <span>123 Rue de l'Agriculture<br />75000 Paris, France</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-icon">📞</span>
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-icon">✉️</span>
                <span>contact@agriculture.fr</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-icon">🕒</span>
                <span>Lun-Ven: 9h-18h<br />Sam: 9h-12h</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2024 AgriCulture. Tous droits réservés.</p>
              <div className="footer-links">
                <Link to="/">Mentions légales</Link>
                <Link to="/">Politique de confidentialité</Link>
                <Link to="/">CGV</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

