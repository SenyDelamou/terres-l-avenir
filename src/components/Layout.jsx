import { useEffect, useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import NotificationBell from './NotificationBell.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

function Layout() {
  const { t } = useApp();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  const navLinks = useMemo(
    () => [
      { to: '/', label: t('nav.home'), end: true },
      { to: '/diagnostic', label: t('nav.diagnostic') },
      { to: '/formations', label: t('nav.formations') },
      { to: '/communaute', label: t('nav.communaute') },
      { to: '/marche', label: t('nav.marche') },
      { to: '/investisseurs', label: t('nav.investisseurs') },
      { to: '/ressources', label: t('nav.ressources') },
      { to: '/contact', label: t('nav.contact') },
      { to: '/connexion', label: t('nav.connexion'), cta: true },
    ],
    [t]
  );

  useEffect(() => {
    const elements = document.querySelectorAll(
      '.card, .highlight, .banner, .team-card, .timeline-step, .section, .hero, .columns, .contact-grid, .metrics, .partners, .form-card, .responsive-media'
    );
    elements.forEach((element) => {
      if (!element.classList.contains('reveal')) {
        element.classList.add('reveal');
      }
    });

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => {
      element.classList.remove('visible');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <NavLink className="brand" to="/">
              <div className="brand-icon" aria-hidden="true">
                <span />
                <span />
              </div>
              <div className="brand-text">
                <strong>Terres d'Avenir</strong>
                <small>Plateforme</small>
              </div>
            </NavLink>
          </div>
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={handleNavToggle}
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`navbar-actions ${menuOpen ? 'visible' : ''}`} id="main-navigation">
            <div className="nav-pill">
              <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {navLinks.map(({ to, label, end, cta }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      onClick={handleNavLinkClick}
                      className={({ isActive }) =>
                        ['nav-link', cta ? 'cta-link' : '', isActive ? 'active' : ''].filter(Boolean).join(' ')
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav-actions">
              <LanguageSwitcher />
              <NotificationBell />
              <button type="button" className="profile-button" aria-label="Profil">
                <span>TA</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footer-content">
          <div>
            <h4>Terres d'Avenir</h4>
            <p>
              Un collectif d'ingénieurs agronomes, d'agriculteurs et de designers de services pour faire émerger une agriculture
              régénératrice, résiliente et inclusive.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              {navLinks
                .filter(({ to, cta }) => !cta && to !== '/')
                .slice(0, 4)
                .map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:contact@terresdavenir.org">contact@terresdavenir.org</a>
              </li>
              <li>+33 1 84 25 62 90</li>
              <li>45 Rue des Horizons, 75011 Paris</li>
            </ul>
          </div>
        </div>
        <p className="footer-bottom">© 2025 Terres d'Avenir – Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Layout;
