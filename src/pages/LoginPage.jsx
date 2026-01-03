import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import '../styles/Auth.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'L\'identifiant est requis';
    } else if (!/\S+@\S+\.\S/.test(formData.email)) {
      newErrors.email = 'Format d\'identifiant invalide';
    }
    if (!formData.password) {
      newErrors.password = 'La clé d\'accès est requise';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La clé doit contenir au moins 6 caractères';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    // Simuler un appel API
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-container">
        {/* Panneau Visuel */}
        <div className="auth-visual-side">
          <div className="auth-visual-content">
            <h2>L'Agro-Intelligence <br />à Portée de Main</h2>
            <p>Accédez à votre écosystème AgriPulse et pilotez votre exploitation avec des données de précision en temps réel.</p>
          </div>
        </div>

        {/* Panneau Formulaire */}
        <div className="auth-form-side">
          <div className="auth-card">
            <div className="auth-header">
              <Link to="/" className="auth-logo">
                <img src={logoImg} alt="AgriPulse Logo" className="auth-logo-img" />
                <span className="logo-text">AgriPulse</span>
              </Link>
              <h1>Connexion</h1>
              <p>Récupérez vos accès sécurisés.</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Identifiant Professionnel</label>
                <div className="input-wrapper">
                  <span className="input-icon-svg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="nom@entreprise.com"
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Clé d'Accès</label>
                <div className="input-wrapper">
                  <span className="input-icon-svg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span>Mémoriser ma session</span>
                </label>
                <Link to="/mot-de-passe-oublie" className="forgot-link">Clé perdue ?</Link>
              </div>

              <button
                type="submit"
                className="btn-auth"
                disabled={isLoading}
              >
                {isLoading ? 'Synchronisation...' : 'Entrée Sécurisée'}
              </button>

              <div className="auth-footer">
                Pas encore de compte ? <Link to="/inscription">Rejoignez-nous</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
