import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight, CheckCircle } from 'lucide-react';
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

  useEffect(() => {
    document.body.classList.add('auth-no-scroll');
    return () => {
      document.body.classList.remove('auth-no-scroll');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation API
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/dashboard');
      }, 1500);
    }, 1500);
  };

  return (
    <div className="login-shell">
      <div className="login-visual">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop"
          alt="Professionnel de la santé"
        />
      </div>

      <div className="login-panel">
        <div className="login-card">
          <div className="login-header">
            <h1>Connexion</h1>
            <p>Authentification sécurisée</p>
          </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <label className="login-field">
                <span>Email</span>
                <div className="field-control">
                  <Mail size={18} className="field-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </label>

              <label className="login-field">
                <span>Mot de passe</span>
                <div className="field-control">
                  <Lock size={18} className="field-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="visibility-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </label>

              <div className="login-options">
                <label className="remember-option">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="remember-mark"></span>
                  <span>Se souvenir de moi</span>
                </label>
                <Link to="/mot-de-passe-oublie" className="forgot-link">Mot de passe oublié ?</Link>
              </div>

              <button type="submit" className="login-submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="spinner" size={20} /> : (
                  <>
                    <span>Se connecter</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

          <div className="login-footer">
            <p>Pas encore membre ? <Link to="/inscription">Créer un compte</Link></p>
          </div>
        </div>
      </div>

      <div className={`login-toast ${showToast ? 'show' : ''}`}>
        <div className="toast-icon">
          <CheckCircle size={20} />
        </div>
        <div className="toast-copy">
          <span className="toast-title">Succès</span>
          <p>Redirection vers le tableau de bord...</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
