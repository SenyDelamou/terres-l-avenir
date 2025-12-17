import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Support context if available, safe fallback
  const context = useApp ? useApp() : {};
  const trackEvent = context.trackEvent || (() => { });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simuler une connexion
    setTimeout(() => {
      setIsLoading(false);
      trackEvent('user_login', { method: 'email' });
      // alert('Connexion réussie !'); 
      navigate('/dashboard'); // Ou '/'
    }, 1500);
  };

  return (
    <div className="auth-container">
      {/* Side Image */}
      <div className="auth-side" style={{ order: 1 }}> {/* Image à gauche pour Login aussi */}
        <div className="auth-side-content">
          <h1>Bienvenue.</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Votre portail vers une agriculture de précision et un réseau d'opportunités.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="auth-form-container" style={{ order: 2 }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Connexion</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Heureux de vous revoir.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
          <div className="form-group">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              required
            />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <label htmlFor="password">Mot de passe</label>
              <Link to="/mot-de-passe-oublie" style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                Oublié ?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              style={{ width: 'auto' }}
            />
            <label htmlFor="rememberMe" style={{ marginBottom: 0, fontWeight: 400, fontSize: '0.9rem', cursor: 'pointer' }}>
              Se souvenir de moi
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
            style={{ marginTop: '0.5rem', width: '100%' }}
          >
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div style={{ marginTop: '2.5rem', textAlign: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
            Pas encore membre ?{' '}
            <Link to="/inscription" style={{ color: 'var(--color-primary)', fontWeight: '700', textDecoration: 'underline' }}>
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

