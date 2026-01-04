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
    <div className="login-body">
      {/* Full Screen Layout - No Blobs or Container padding */}
      <div className="login-card">

        {/* Section Image (Gauche) */}
        <div className="login-image-side">
          <img
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1742&auto=format&fit=crop"
            alt="Agriculteur utilisant une tablette"
            className="login-bg-image"
          />
          <div className="login-image-overlay">
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="badge-new">Nouveau</span>
                <span className="version-text">Version 3.0 disponible</span>
              </div>
              <div className="login-overlay-content">
                <h3>Gérez votre exploitation</h3>
                <p>Accédez à vos tableaux de bord, analysez vos sols et planifiez vos tâches en un clic.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Formulaire (Droite) */}
        <div className="login-form-side">

          <div className="login-logo">
            <div className="login-logo-icon">
              <Leaf size={20} />
            </div>
            <span className="login-logo-text">AgriPlus</span>
          </div>

          <div id="login-container" style={{ width: '100%', maxWidth: '400px' }}>
            <div className="login-header">
              <h2>Bon retour !</h2>
              <p>Veuillez entrer vos identifiants pour accéder à votre espace.</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="login-input-group">
                <label htmlFor="email">Email</label>
                <div className="login-relative-input">
                  <div className="login-input-icon">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="login-input"
                    placeholder="jean.dupont@ferme.fr"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Mot de passe */}
              <div className="login-input-group">
                <div className="login-extras">
                  <label htmlFor="password">Mot de passe</label>
                  <Link to="/mot-de-passe-oublie" className="login-forgot-link">Mot de passe oublié ?</Link>
                </div>
                <div className="login-relative-input">
                  <div className="login-input-icon">
                    <Lock size={16} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    className="login-input login-input-password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="login-toggle-password"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Se souvenir de moi */}
              <div className="login-remember">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="remember-me">Se souvenir de moi</label>
              </div>

              <button
                type="submit"
                className={`login-btn-submit ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <> <Loader2 className="animate-spin" size={18} style={{ marginRight: '8px' }} /> Connexion... </>
                ) : (
                  'Se connecter'
                )}
              </button>
            </form>

            {/* Séparateur */}
            <div className="login-separator">
              <div className="login-separator-line"></div>
              <div className="login-separator-text">
                <span>Ou continuer avec</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="login-social-grid">
              <button type="button" className="login-btn-social">
                <span style={{ marginRight: '8px', color: '#db4437', fontWeight: 'bold' }}>G</span> Google
              </button>
              <button type="button" className="login-btn-social">
                <span style={{ marginRight: '8px', color: '#000', fontWeight: 'bold' }}></span> Apple
              </button>
            </div>

            <div className="login-register-link">
              <p>
                Pas encore de compte ?
                <Link to="/inscription"> Créer un compte</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="login-footer">
          &copy; 2024 AgriPlus. Tous droits réservés.
        </div>
      </div>

      {/* Notification Toast */}
      <div className={`login-toast ${showToast ? 'show' : ''}`}>
        <div style={{ color: '#22c55e' }}><CheckCircle size={24} /></div>
        <div>
          <h4 style={{ fontWeight: '700', color: '#1f2937', fontSize: '0.875rem', margin: 0 }}>Connexion réussie</h4>
          <p style={{ color: '#4b5563', fontSize: '0.875rem', margin: 0 }}>Redirection vers le tableau de bord...</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
