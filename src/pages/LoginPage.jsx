import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Loader2, ArrowRight, CheckCircle, Sprout } from 'lucide-react';
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
    <div className="login-premium">
      <div className="login-container">
        {/* Left Visual Side */}
        <div className="login-visual-side">
          <div className="visual-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2400&auto=format&fit=crop"
            alt="Agriculture moderne"
            className="visual-image"
          />
          <div className="visual-content">
            <h2>Bienvenue à AgriPulse</h2>
            <p>Gérez vos projets agricoles avec intelligence et efficacité</p>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="login-form-side">
          <div className="form-wrapper">
            <div className="brand-header">
              <Sprout size={32} className="brand-icon" />
              <h1>AgriPulse</h1>
            </div>

            <div className="form-header">
              <h2>Connexion</h2>
              <p>Accédez à votre espace personnel</p>
            </div>

            <form className="premium-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <div className="input-wrapper">
                  <Mail size={18} className="input-icon" />
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
              </div>

              <div className="form-group">
                <label>Mot de passe</label>
                <div className="input-wrapper">
                  <Lock size={18} className="input-icon" />
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
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="form-footer">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="checkbox-mark"></span>
                  <span>Se souvenir de moi</span>
                </label>
                <Link to="/mot-de-passe-oublie" className="forgot-link">Oublié ?</Link>
              </div>

              <button type="submit" className="btn-submit" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="spinner" size={18} />
                ) : (
                  <>
                    <span>Se connecter</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="form-divider">
              <span>Pas encore membre ?</span>
            </div>

            <Link to="/inscription" className="btn-signup">
              Créer un compte
            </Link>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`login-toast ${showToast ? 'show' : ''}`}>
        <div className="toast-icon">
          <CheckCircle size={20} />
        </div>
        <div className="toast-content">
          <strong>Succès !</strong>
          <p>Redirection en cours...</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
