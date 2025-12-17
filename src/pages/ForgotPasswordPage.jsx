import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
  return (
    <div className="auth-container">
      {/* Côté Visuel (Gauche) */}
      <div className="auth-side" style={{ background: 'linear-gradient(135deg, var(--color-accent), #f59e0b)' }}>
        <h2>Ne perdez pas le fil.</h2>
        <p>
          Cela nous arrive à tous. Entrez votre email et nous vous enverrons un lien magique pour reprendre le contrôle.
        </p>
      </div>

      {/* Côté Formulaire (Droite) */}
      <div className="auth-form-container">
        <div className="auth-form-wrapper">
          <Link to="/connexion" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>
            ← Retour à la connexion
          </Link>

          <h1>Mot de passe oublié</h1>
          <span className="auth-subtitle">
            Entrez votre adresse email de récupération.
          </span>

          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
              <label htmlFor="reset-email">Adresse e-mail</label>
              <input type="email" id="reset-email" className="input" placeholder="vous@exemple.fr" required />
            </div>

            <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
              Envoyer le lien de réinitialisation
            </button>

            <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              Besoin d'aide ? <Link to="/contact" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Contacter le support</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
