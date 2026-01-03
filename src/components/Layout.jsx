import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import AIChatModal from './AIChatModal';
import logoImg from '../assets/logo.png';
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

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'reply',
      title: 'Nouvelle réponse au forum',
      message: 'Jean Dupont a répondu à votre sujet "Irrigation solaire".',
      time: 'Il y a 5 min',
      isRead: false
    },
    {
      id: 2,
      type: 'project',
      title: 'Investissement reçu',
      message: 'Un investisseur a contribué à votre projet "Serre Solaire".',
      time: 'Il y a 1 heure',
      isRead: false
    },
    {
      id: 3,
      type: 'system',
      title: 'Profil complété',
      message: 'Votre profil a été validé par l\'administrateur.',
      time: 'Il y a 1 jour',
      isRead: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const [unreadMessages, setUnreadMessages] = useState(3);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const { theme, toggleTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [revealCoords, setRevealCoords] = useState({ x: 0, y: 0 });

  const handleThemeToggle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX ?? (rect.left + rect.width / 2);
    const y = e.clientY ?? (rect.top + rect.height / 2);

    setRevealCoords({ x, y });
    setIsTransitioning(true);

    // On change le thème au milieu de l'animation pour un effet fluide
    setTimeout(() => {
      toggleTheme();
    }, 400);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const mainNavLinks = [
    { path: '/accueil', label: 'Accueil', icon: '🏠' },
    { path: '/ressources', label: 'Ressources', icon: '📚' },
    { path: '/forum', label: 'Forum', icon: '💬' },
    { path: '/marketplace', label: 'Marketplace', icon: '🛒' },
    { path: '/projets-financement', label: 'Projets', icon: '💰' }
  ];

  const moreNavLinks = [
    { path: '/contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Link to="/accueil" className="logo" onClick={closeMobileMenu}>
            <img src={logoImg} alt="AgriPulse Logo" className="logo-img-nav" />
            <div className="logo-text-wrapper">
              <span className="logo-title">AgriPulse</span>
              <span className="logo-tagline">DATA & AGRONOMIE AU SERVICE DU TERRAIN</span>
            </div>
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
              {mainNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-pill-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  <span className="nav-icon">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className={`nav-pill-link nav-item-contact ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">📞</span>
                Contact
              </Link>
            </div>


            {/* Right Actions: Conditional based on auth */}
            <div className="nav-right-actions">
              {isAuthenticated ? (
                <>
                  <div className="notification-dropdown-wrapper">
                    <button className="btn-icon-bell" title="Notifications">
                      <span className="bell-icon">🔔</span>
                      {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
                    </button>
                    <div className="notification-dropdown">
                      <div className="dropdown-header">
                        <div className="header-top">
                          <strong>Notifications</strong>
                          {unreadCount > 0 && (
                            <button className="mark-read-btn" onClick={markAllAsRead}>
                              Tout marquer comme lu
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="notification-list">
                        {notifications.length > 0 ? (
                          notifications.map((n) => (
                            <div key={n.id} className={`notification-item ${n.isRead ? 'read' : 'unread'}`}>
                              <div className="notification-icon-circle">
                                {n.type === 'reply' ? '💬' : n.type === 'project' ? '💰' : '✅'}
                              </div>
                              <div className="notification-content">
                                <p className="notification-title">{n.title}</p>
                                <p className="notification-message">{n.message}</p>
                                <span className="notification-time">{n.time}</span>
                              </div>
                              {!n.isRead && <div className="unread-dot"></div>}
                            </div>
                          ))
                        ) : (
                          <div className="empty-notifications">
                            <p>Aucune notification</p>
                          </div>
                        )}
                      </div>
                      <div className="dropdown-footer">
                        <Link to="/notifications" className="view-all-link" onClick={closeMobileMenu}>
                          Voir toutes les notifications
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="profile-dropdown-wrapper">
                    <button className="btn-profile-circle" title="Mon Profil">
                      <span className="profile-initials">GU</span>
                      <span className="profile-arrow">▼</span>
                    </button>
                    <div className="profile-dropdown">
                      <div className="dropdown-header">
                        <strong>Guinée User</strong>
                        <span>Utilisateur</span>
                      </div>
                      <div className="dropdown-divider"></div>
                      <Link to="/dashboard" className="dropdown-item" onClick={closeMobileMenu}>
                        <span className="dropdown-icon">📊</span>
                        <span className="dropdown-text">Dashboard</span>
                      </Link>
                      <Link to="/profil" className="dropdown-item" onClick={closeMobileMenu}>
                        <span className="dropdown-icon">👤</span>
                        <span className="dropdown-text">Mon Profil</span>
                      </Link>
                      <div className="dropdown-divider"></div>
                      <button
                        className="dropdown-item logout-btn"
                        onClick={() => {
                          setIsAuthenticated(false);
                          closeMobileMenu();
                        }}
                      >
                        <span className="dropdown-icon">🚪</span>
                        <span className="dropdown-text">Déconnexion</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <Link to="/connexion" className="btn-login-dark" onClick={closeMobileMenu}>
                  <span>🔐</span>
                  <span>Connexion</span>
                </Link>
              )}

              {/* Theme Toggle Redesign */}
              <button
                className={`premium-theme-toggle ${theme}`}
                onClick={handleThemeToggle}
                title={theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair'}
              >
                <div className="toggle-glow"></div>
                <div className="toggle-icons">
                  <span className="sun-icon">☀️</span>
                  <span className="moon-icon">🌙</span>
                </div>
                <div className={`toggle-thumb ${theme}`}></div>
              </button>
            </div>
          </nav>

          {isTransitioning && (
            <div
              className={`theme-reveal-overlay ${theme}`}
              style={{
                '--x': `${revealCoords.x}px`,
                '--y': `${revealCoords.y}px`
              }}
            ></div>
          )}


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

      <AIChatModal />

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-about">
              <div className="footer-logo">
                <img src={logoImg} alt="AgriPulse Logo" className="logo-img-footer" />
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
              <Link to="/ressources">Ressources</Link>
              <Link to="/actualites">Actualités</Link>
              <Link to="/forum">Forum</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-section">
              <h4>SERVICES</h4>
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
                <span>Mamou, Guinée</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-icon">📞</span>
                <span>+224 623 59 01 51</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-icon">✉️</span>
                <span>samakedelamou858@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-icon">🕒</span>
                <span>Lun-Ven: 8h-17h<br />Sam: 9h-13h</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 AgriPulse. Tous droits réservés.</p>
              <div className="footer-links">
                <Link to="/accueil">Mentions légales</Link>
                <Link to="/accueil">Politique de confidentialité</Link>
                <Link to="/accueil">CGV</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <AIChatModal />
    </div>
  );
}

export default Layout;

