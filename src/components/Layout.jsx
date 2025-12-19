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

  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  // Simuler l'état d'authentification (à remplacer par votre vraie logique d'auth)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté (exemple avec localStorage)
    const userToken = localStorage.getItem('userToken');
    const userData = localStorage.getItem('userData');
    setIsAuthenticated(!!(userToken && userData));
  }, []);

  const mainNavLinks = [
    { path: '/accueil', label: 'Accueil', icon: '🏠' },
    { path: '/techniques', label: 'Conseils', icon: '🌾' },
    { path: '/forum', label: 'Forum', icon: '💬' },
    { path: '/marketplace', label: 'Marketplace', icon: '🛒' },
    { path: '/projets-financement', label: 'Projets', icon: '💰' },
    { path: '/assistant-ia', label: 'Assistant IA', icon: '🤖' }
  ];

  const moreNavLinks = [
    { path: '/contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Link to="/accueil" className="logo" onClick={closeMobileMenu}>
            <span className="logo-text">AgriPulse <span className="logo-subtext">- Agriculture</span></span>
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
            </div>

            {/* Center Pill for Navigation */}
            <div className="nav-center-pill">
              <Link to="/accueil" className={`nav-pill-link ${location.pathname === '/accueil' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Accueil
              </Link>
              <Link to="/techniques" className={`nav-pill-link ${location.pathname === '/techniques' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Conseils
              </Link>
              <Link to="/forum" className={`nav-pill-link ${location.pathname === '/forum' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Forum
              </Link>
              <Link to="/marketplace" className={`nav-pill-link ${location.pathname === '/marketplace' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Marketplace
              </Link>
              <Link to="/projets-financement" className={`nav-pill-link ${location.pathname === '/projets-financement' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Projets
              </Link>
              <Link to="/assistant-ia" className={`nav-pill-link ${location.pathname === '/assistant-ia' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Assistant IA
              </Link>
            </div>


            {/* Right Actions: Conditional based on auth */}
            <div className="nav-right-actions">
              {isAuthenticated ? (
                <>
                  <button className="btn-icon-bell" title="Notifications">
                    🔔
                  </button>

                  <div className="profile-dropdown-wrapper">
                    <button className="btn-profile-circle" title="Mon Profil">
                      <span className="profile-initials">GU</span>
                      <span className="profile-arrow">▼</span>
                    </button>
                    <div className="profile-dropdown">
                      <Link to="/dashboard" className="dropdown-item" onClick={closeMobileMenu}>
                        <span>📊</span>
                        <span>Dashboard</span>
                      </Link>
                      <Link to="/profile" className="dropdown-item" onClick={closeMobileMenu}>
                        <span>👤</span>
                        <span>Mon Profil</span>
                      </Link>
                      <button
                        className="dropdown-item logout-btn"
                        onClick={() => {
                          localStorage.removeItem('userToken');
                          localStorage.removeItem('userData');
                          window.location.href = '/accueil';
                        }}
                      >
                        <span>🚪</span>
                        <span>Déconnexion</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <Link to="/connexion" className="btn-login-nav" onClick={closeMobileMenu}>
                  <span>🔐</span>
                  <span>Connexion</span>
                </Link>
              )}
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
                <span className="logo-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </span>
                <span className="logo-text">AgriPulse <span className="logo-subtext">- Agriculture</span></span>
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
              <Link to="/accueil">Accueil</Link>
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
              <p>&copy; 2024 AgriPulse. Tous droits réservés.</p>
              <div className="footer-links">
                <Link to="/accueil">Mentions légales</Link>
                <Link to="/accueil">Politique de confidentialité</Link>
                <Link to="/accueil">CGV</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

