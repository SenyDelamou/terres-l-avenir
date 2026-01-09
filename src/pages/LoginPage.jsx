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
    <div className="auth-page">
      <div className="auth-background">
        <span className="auth-orb orb-1"></span>
        <span className="auth-orb orb-2"></span>
        <span className="auth-orb orb-3"></span>
        <div className="auth-gradient"></div>
      </div>

      <div className="auth-layout">
        <section className="auth-showcase">
          <div className="showcase-badge">
            <span className="badge-dot"></span>
            <span>Hub Agritech nouvelle génération</span>
          </div>
          <h1>
            Propulsez votre exploitation
            <span> avec AgriPulse</span>
          </h1>
          <p>
            Connectez-vous pour suivre vos projets, piloter vos cultures et accéder à un réseau exclusif
            d'experts agricoles et d’investisseurs premium.
          </p>

          <div className="showcase-metrics">
            <div className="metric-card">
              <strong>5K+</strong>
              <span>Exploitants actifs</span>
            </div>
            <div className="metric-card">
              <strong>320</strong>
              <span>Projets financés</span>
            </div>
            <div className="metric-card">
              <strong>98%</strong>
              <span>Satisfaction clients</span>
            </div>
          </div>

          <ul className="showcase-list">
            <li>Monitoring en temps réel de vos parcelles et ressources</li>
            <li>Financements alignés sur vos objectifs de transition durable</li>
            <li>Support prioritaire 7j/7 avec nos agronomes partenaires</li>
          </ul>
        </section>

        <div className="auth-panel">
          <div className="panel-brand">
            <div className="brand-sigil">
              <Leaf size={26} />
            </div>
            <div className="panel-heading">
              <span className="panel-pill">Espace sécurisé</span>
              <h2>Connectez votre équipe AgriPulse</h2>
              <p>Authentifiez-vous avec vos identifiants professionnels pour accéder au cockpit premium.</p>
            </div>
          </div>

          <form className="panel-form" onSubmit={handleSubmit}>
            <div className={`input-field ${formData.email ? 'filled' : ''}`}>
              <div className="input-shell">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
                <span className="input-label">Email professionnel</span>
              </div>
            </div>

            <div className={`input-field ${formData.password ? 'filled' : ''}`}>
              <div className="input-shell">
                <Lock size={18} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <span className="input-label">Mot de passe</span>
              </div>
            </div>

            <div className="remember-line">
              <label className="remember-checkbox">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="checkbox-visual"></span>
                <span>Se souvenir de moi</span>
              </label>
              <Link to="/mot-de-passe-oublie" className="link-ghost">Mot de passe oublié ?</Link>
            </div>

            <button type="submit" className="btn-auth-primary" disabled={isLoading}>
              {isLoading ? <Loader2 className="spinner" size={20} /> : (
                <>
                  <span>Se connecter</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className="panel-divider">
              <span>Ou continuez avec</span>
            </div>

          <div className="social-login">
            <button type="button" className="btn-social">Google</button>
            <button type="button" className="btn-social">Apple</button>
          </div>
          </form>

          <div className="panel-footer">
            <p>Pas encore membre ? <Link to="/inscription">Créer un compte</Link></p>
          </div>
        </div>
      </div>

      <div className={`auth-toast ${showToast ? 'show' : ''}`}>
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
