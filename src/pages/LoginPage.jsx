import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock, Eye, EyeOff, Loader2, ArrowRight, CheckCircle } from 'lucide-react';
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
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/dashboard');
      }, 1500);
    }, 1500);
  };

  return (
    <div className="auth-glass-container">
      {/* Dynamic Background */}
      <div className="auth-bg-overlay"></div>

      {/* Centered Glass Card */}
      <div className="auth-glass-card">

        {/* Header Section */}
        <div className="glass-header">
          <div className="brand-glow-container">
            <Leaf size={32} className="brand-icon-glow" />
          </div>
          <h1>AgriPulse</h1>
          <p className="premium-subtitle">Portail d'Accès Professionnel</p>
        </div>

        {/* Form Section */}
        <form className="glass-form" onSubmit={handleSubmit}>

          <div className="glass-input-group">
            <label>Identifiant</label>
            <div className="input-glass-wrapper">
              <Mail className="input-icon-glass" size={18} />
              <input
                type="email"
                name="email"
                placeholder="nom@exploitation.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="glass-input-group">
            <label>Mot de passe</label>
            <div className="input-glass-wrapper">
              <Lock className="input-icon-glass" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-pass-glass"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="form-extras">
              <label className="glass-checkbox">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkmark-glass"></span>
                <span>Se souvenir</span>
              </label>
              <Link to="/mot-de-passe-oublie" className="link-glass">Mot de passe oublié ?</Link>
            </div>
          </div>

          <button type="submit" className="btn-glass-primary" disabled={isLoading}>
            {isLoading ? <Loader2 className="spinner" size={20} /> : (
              <>
                <span>Se Connecter</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>

          <div className="glass-divider">
            <span>Ou continuer avec</span>
          </div>

          <div className="social-glass-row">
            <button type="button" className="btn-social-glass">Google</button>
            <button type="button" className="btn-social-glass">Apple</button>
          </div>
        </form>

        <div className="glass-footer">
          <p>Pas encore membre ? <Link to="/inscription">Créer un compte</Link></p>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`glass-toast ${showToast ? 'show' : ''}`}>
        <div className="toast-icon-box"><CheckCircle size={20} /></div>
        <div className="toast-content">
          <h4>Succès</h4>
          <p>Redirection vers le tableau de bord...</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
