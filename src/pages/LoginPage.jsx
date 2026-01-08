import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock, Eye, EyeOff, CheckCircle, Loader2 } from 'lucide-react';
import '../styles/LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation API
    setTimeout(() => {
      setIsLoading(false);
      triggerToast();
      // Redirection après succès
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }, 1500);
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="login-body-asymmetric">
      <div className="login-side-content">
        <div className="login-branding-pulp">
          <span className="pulp-tag">Plateforme Intuitive</span>
          <h2>Cultivez votre <br /><span>Avenir Numérique</span></h2>
          <p>Rejoignez la plus grande communauté agro-technologique et accédez à des outils de pointe pour votre exploitation.</p>
        </div>
      </div>

      <div className="login-glass-container-right">
        <div className="login-card-ordered">
          {/* Logo Section */}
          <div className="login-logo-centered">
            <div className="logo-icon-box">
              <Leaf size={24} strokeWidth={2.5} />
            </div>
            <h1 className="brand-name">AgriPlus</h1>
          </div>

          <div className="login-header-ordered">
            <h2>Bon retour !</h2>
            <p>Accédez à votre espace agricole intelligent</p>
          </div>

          <form className="login-form-ordered" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="email">Email professionnel</label>
              <div className="input-wrapper">
                <Mail className="field-icon" size={18} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="nom@ferme.fr"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-field">
              <div className="label-row">
                <label htmlFor="password">Mot de passe</label>
                <Link to="/mot-de-passe-oublie" className="forgot-link">Oublié ?</Link>
              </div>
              <div className="input-wrapper">
                <Lock className="field-icon" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Se souvenir de moi
              </label>
            </div>

            <button
              type="submit"
              className={`btn-login-submit ${isLoading ? 'is-loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="spinner" size={20} /> : 'Se connecter'}
            </button>
          </form>

          <div className="divider-ordered">
            <span>Ou continuer avec</span>
          </div>

          <div className="social-auth-grid">
            <button className="btn-social-outline">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
              Google
            </button>
            <button className="btn-social-outline">
              <span className="apple-icon"></span>
              Apple
            </button>
          </div>

          <div className="login-footer-ordered">
            <p>Pas encore de compte ? <Link to="/inscription">Rejoindre AgriPlus</Link></p>
          </div>
        </div>
      </div>

      <div className="login-footer-asymmetric">
        &copy; 2024 AgriPlus. Tous droits réservés.
      </div>

      {/* Notification Toast */}
      <div className={`login-toast ${showToast ? 'show' : ''}`}>
        <div style={{ color: '#22c55e' }}><CheckCircle size={24} /></div>
        <div>
          <h4 style={{ fontWeight: '700', color: '#ffffff', fontSize: '0.875rem', margin: 0 }}>Connexion réussie</h4>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', margin: 0 }}>Redirection vers le tableau de bord...</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
