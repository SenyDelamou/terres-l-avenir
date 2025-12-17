import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsLoading(true);

    // Simuler une connexion
    setTimeout(() => {
      setIsLoading(false);
      alert('Connexion réussie ! Bienvenue sur AgriCulture.');
      navigate('/');
    }, 1500);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-image">
            <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=1200&fit=crop" alt="Agriculture" />
            <div className="login-overlay">
              <div className="login-content-overlay">
                <h2>Bienvenue sur AgriCulture</h2>
                <p>Rejoignez notre communauté d'agriculteurs passionnés et accédez à des ressources exclusives.</p>
                <div className="login-features">
                  <div className="feature-item">
                    <span className="feature-icon">🌾</span>
                    <span>Accès aux guides techniques</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💬</span>
                    <span>Participation au forum</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🤖</span>
                    <span>Assistant IA personnalisé</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📊</span>
                    <span>Suivi de vos projets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-container">
            <div className="login-header">
              <Link to="/" className="login-logo">
                <span className="logo-icon">🌾</span>
                <span className="logo-text">AgriCulture</span>
              </Link>
              <h1>Connexion</h1>
              <p>Connectez-vous à votre compte pour continuer</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Adresse email</label>
                <div className="input-wrapper">
                  <span className="input-icon">✉️</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="votre@email.com"
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
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
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span>Se souvenir de moi</span>
                </label>
                <Link to="/mot-de-passe-oublie" className="forgot-password">
                  Mot de passe oublié ?
                </Link>
              </div>

              <button 
                type="submit" 
                className="login-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Connexion...
                  </>
                ) : (
                  'Se connecter'
                )}
              </button>

              <div className="login-divider">
                <span>ou</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-button google">
                  <span>🔍</span>
                  Continuer avec Google
                </button>
                <button type="button" className="social-button facebook">
                  <span>📘</span>
                  Continuer avec Facebook
                </button>
              </div>

              <div className="login-footer">
                <p>
                  Pas encore de compte ?{' '}
                  <Link to="/inscription" className="register-link">
                    Créer un compte
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

