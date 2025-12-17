import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="auth-container">
      <div className="auth-side">
        <div className="auth-side-content">
          <span className="auth-eyebrow">Terres d'Avenir</span>
          <h2>Faites éclore votre projet agricole.</h2>
          <p>
            Rejoignez les agricultrices et agriculteurs qui pilotent leurs cultures, leurs ventes et leur financement dans une
            seule plateforme éco-conçue.
          </p>

          <div className="auth-badges">
            <span className="auth-badge">🌱 Agroécologie guidée</span>
            <span className="auth-badge">🛰️ Données satellite</span>
            <span className="auth-badge">🤝 Réseau mentor</span>
          </div>

          <div className="auth-metrics">
            <div className="auth-metric">
              <strong>4 200+</strong>
              <span>agriculteurs accompagnés</span>
            </div>
            <div className="auth-metric">
              <strong>28</strong>
              <span>territoires régénérés</span>
            </div>
            <div className="auth-metric">
              <strong>92%</strong>
              <span>parcours complétés</span>
            </div>
          </div>

          <div className="auth-side-card">
            <p>« Terres d&apos;Avenir m&apos;a permis d&apos;équilibrer biodiversité et rendement sans tâtonner. »</p>
            <span>— Aïcha, agroforesterie urbaine</span>
          </div>
        </div>
      </div>

      <div className="auth-form-container">
        <div className="auth-form-wrapper">
          <Link to="/" className="auth-backlink">
            ← Retour au site
          </Link>

          <div className="auth-form-header">
            <span className="auth-pill">Connexion</span>
            <h1>Bon retour sur vos terres digitales</h1>
            <span className="auth-subtitle">
              Pas encore de compte ? <Link to="/inscription">Créer un compte gratuitement</Link>
            </span>
          </div>

          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="login-email">Adresse e-mail</label>
              <input
                type="email"
                id="login-email"
                className="input"
                placeholder="nicolas.dupont@ferme.fr"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Mot de passe</label>
              <input
                type="password"
                id="login-password"
                className="input"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="auth-actions">
              <label className="checkbox-group">
                <input type="checkbox" name="remember" />
                Se souvenir de moi
              </label>
              <Link to="/mot-de-passe-oublie" className="forgot-link">Mot de passe oublié ?</Link>
            </div>

            <button className="btn btn-primary" type="submit">
              Se connecter
            </button>

            <div className="divider">ou</div>

            <div className="social-grid">
              <button type="button" className="social-btn">
                Continuer avec Google
              </button>
              <button type="button" className="social-btn">
                Continuer avec Facebook
              </button>
            </div>
          </form>

          <div className="auth-note">
            <span className="auth-note-icon" aria-hidden="true">🌿</span>
            <p>
              Vos données sont protégées et hébergées en France. Chaque connexion alimente notre observatoire des pratiques
              régénératrices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
