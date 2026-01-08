import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import AIChatModal from './AIChatModal';
import logoImg from '../assets/logo.png';
import userAvatar from '../assets/user_avatar.png';
import '../styles/Layout.css';

function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  const authRoutes = ['/connexion', '/inscription', '/mot-de-passe-oublie'];
  const isAuthPage = authRoutes.includes(location.pathname);

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

  // Gestion du scroll pour le design flottant
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // États pour les menus déroulants (dropdowns)
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleNotif = (e) => {
    e.stopPropagation();
    setIsNotifOpen(!isNotifOpen);
    setIsProfileOpen(false);
  };

  const toggleProfile = (e) => {
    e.stopPropagation();
    setIsProfileOpen(!isProfileOpen);
    setIsNotifOpen(false);
  };

  // Fermer les dropdowns quand on clique ailleurs
  useEffect(() => {
    const handleOutsideClick = () => {
      setIsNotifOpen(false);
      setIsProfileOpen(false);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté (exemple avec localStorage)
    const userToken = localStorage.getItem('userToken');
    const userData = localStorage.getItem('userData');

    // Forcer isAuthenticated à true par défaut pour cette démo si pas de données
    setIsAuthenticated(!!(userToken && userData) || true);
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
    {
      path: '/',
      label: 'Accueil',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      path: '/marketplace',
      label: 'Marché',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
          <path d="M2 7h20"></path>
          <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
        </svg>
      )
    },
    {
      path: '/projets-financement',
      label: 'Explorateur',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      )
    },
    {
      path: '/ressources',
      label: 'Documentation',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
          <path d="M8 2v20"></path>
        </svg>
      )
    },
    {
      path: '/a-propos',
      label: 'À propos',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      )
    }
  ];

  const moreNavLinks = [
    {
      path: '/contact', label: 'Contact', icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="layout">
      {!isAuthPage && (
        <header className={`header-screenshot ${isScrolled ? 'scrolled' : ''}`}>
          <div className="navbar-container-screenshot">
            {/* --- Logo & Quick Auth --- */}
            <div className="nav-left-group">
              <Link to="/" className="logo" onClick={closeMobileMenu}>
                <div className="logo-icon-premium">
                  <img src={logoImg} alt="AgriPlus" />
                </div>
                <span className="logo-title">AgriPlus</span>
              </Link>

              {!isAuthenticated && (
                <Link to="/connexion" className="nav-login-link">
                  Se connecter
                </Link>
              )}
            </div>

            {/* --- Central Navigation Pill --- */}
            <nav className="nav-center-pill-screenshot">
              {[...mainNavLinks, ...moreNavLinks].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-item-screenshot ${location.pathname === link.path ? 'active' : ''}`}
                >
                  <span className="nav-icon-screenshot">{link.icon}</span>
                  <span className="nav-label-screenshot">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* --- Appearance & Profile --- */}
            <div className="nav-right-group">
              {isAuthenticated && (
                <div className={`nav-command-item notif-screenshot ${isNotifOpen ? 'is-open' : ''}`} onClick={toggleNotif}>
                  <button className="btn-icon-screenshot" aria-label="Notifications">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    {unreadCount > 0 && <span className="nav-badge-screenshot">{unreadCount}</span>}
                  </button>

                  <div className="notif-dropdown-screenshot" onClick={(e) => e.stopPropagation()}>
                    <div className="notif-header-screenshot">
                      <h3>Notifications</h3>
                      <button onClick={markAllAsRead}>Tout lire</button>
                    </div>
                    <div className="notif-list-screenshot">
                      {notifications.map(notif => (
                        <div key={notif.id} className={`notif-item-screenshot ${notif.isRead ? 'read' : 'unread'}`}>
                          <div className={`notif-icon-marker ${notif.type}`}></div>
                          <div className="notif-content-screenshot">
                            <span className="notif-title-text">{notif.title}</span>
                            <p className="notif-msg-text">{notif.message}</p>
                            <span className="notif-time-text">{notif.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="appearance-toggle">
                <span className="appearance-label">Apparence</span>
                <button
                  className={`theme-switch-pill ${theme}`}
                  onClick={handleThemeToggle}
                  aria-label="Toggle Theme"
                >
                  <div className="switch-dot">
                    {theme === 'light' ? '☀️' : '🌙'}
                  </div>
                </button>
              </div>

              {isAuthenticated && (
                <div className={`profile-cluster ${isProfileOpen ? 'is-open' : ''}`} onClick={toggleProfile}>
                  <img src={userAvatar} alt="User" className="nav-avatar-screenshot" />
                  <div className="profile-popover-screenshot" onClick={(e) => e.stopPropagation()}>
                    <div className="profile-popover-header">
                      <strong>Guinée User</strong>
                      <span>Membre Pro</span>
                    </div>
                    <div className="profile-popover-links">
                      <Link to="/dashboard" onClick={() => setIsProfileOpen(false)}>
                        <span className="icon">📊</span> Tableau de bord
                      </Link>
                      <Link to="/profil" onClick={() => setIsProfileOpen(false)}>
                        <span className="icon">👤</span> Mon Profil
                      </Link>
                      <Link to="/parametres" onClick={() => setIsProfileOpen(false)}>
                        <span className="icon">⚙️</span> Paramètres
                      </Link>
                    </div>
                    <div className="profile-popover-footer">
                      <button onClick={() => { setIsAuthenticated(false); setIsProfileOpen(false); }}>
                        <span className="icon">🚪</span> Déconnexion
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Toggle */}
              <button className="mobile-toggle-nav" onClick={toggleMobileMenu}>
                <div className="burger-simple">
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </div>

          {isTransitioning && (
            <div
              className={`theme-reveal-overlay ${theme}`}
              style={{
                '--x': `${revealCoords.x}px`,
                '--y': `${revealCoords.y}px`
              }}
            ></div>
          )}
        </header>
      )}

      {/* --- Simple Mobile Menu --- */}
      <nav className={`mobile-nav-simple ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <button className="close-simple-nav" onClick={closeMobileMenu}>×</button>
          <div className="mobile-link-list">
            {[...mainNavLinks, ...moreNavLinks].map((link) => (
              <Link key={link.path} to={link.path} onClick={closeMobileMenu}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

      {!isAuthPage && <AIChatModal />}

      {!isAuthPage && (
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              {/* ... existing footer content ... */}
              <div className="footer-section footer-about">
                <div className="footer-logo">
                  <img src={logoImg} alt="AgriPlus Logo" className="logo-img-footer" />
                  <span className="logo-text">AgriPlus <span className="logo-subtext">- Agriculture</span></span>
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
                <p>&copy; 2025 AgriPlus. Tous droits réservés.</p>
                <div className="footer-links">
                  <Link to="/">Mentions légales</Link>
                  <Link to="/">Politique de confidentialité</Link>
                  <Link to="/">CGV</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}


export default Layout;

