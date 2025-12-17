import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="auth-container">
      {/* Côté Visuel (Gauche) */}
      <div className="auth-side" style={{ background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))' }}>
        <h2>Semaillez pour demain.</h2>
        <p>
          Créez votre compte gratuitement et accédez immédiatement à nos outils de diagnostic et de formation.
        </p>
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="partner-tag" style={{ background: 'rgba(255,255,255,0.1)' }}>🚀 Accès Gratuit</span>
          <span className="partner-tag" style={{ background: 'rgba(255,255,255,0.1)' }}>🤝 Communauté</span>
        </div>
      </div>

      {/* Côté Formulaire (Droite) */}
      <div className="auth-form-container">
        <div className="auth-form-wrapper">
          <Link to="/" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
            ← Retour au site
          </Link>

          <h1>Créer un compte</h1>
          <span className="auth-subtitle">
            Vous avez déjà un compte ? <Link to="/connexion">Se connecter</Link>
          </span>

          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="register-name">Nom complet</label>
              <input type="text" id="register-name" className="input" placeholder="Pierre Martin" required />
            </div>

            <div className="form-group">
              <label htmlFor="register-email">Adresse e-mail</label>
              <input type="email" id="register-email" className="input" placeholder="pierre@exemple.fr" required />
            </div>

            <div className="form-group">
              <label htmlFor="register-password">Mot de passe</label>
              <input type="password" id="register-password" className="input" placeholder="••••••••" required />
            </div>

            <div className="form-group">
              <label htmlFor="register-role">Profil</label>
              <div style={{ position: 'relative' }}>
                <select id="register-role" className="input" style={{ appearance: 'none' }}>
                  <option value="agriculteur">Agriculteur·trice</option>
                  <option value="entrepreneur">Jeune entrepreneur agricole</option>
                  <option value="investisseur">Investisseur·euse</option>
                </select>
                <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--color-text-muted)' }}>▼</div>
              </div>
            </div>

            <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
              Rejoindre Terres d'Avenir
            </button>

            <div className="divider">ou</div>

            <button type="button" className="social-btn">
              S'inscrire avec Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
