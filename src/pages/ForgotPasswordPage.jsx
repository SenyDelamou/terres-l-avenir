import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForgotPasswordPage.css';

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setError('L\'email est requis');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('L\'email n\'est pas valide');
            return;
        }

        setIsLoading(true);
        setError('');

        // Simuler un envoi d'email
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <div className="auth-page forgot-password-page">
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <Link to="/" className="auth-logo">
                            <span className="logo-icon">🌱</span>
                            <span className="logo-text">AgriPulse</span>
                        </Link>
                        <h1>Mot de passe oublié ?</h1>
                        <p>Entrez votre adresse email pour recevoir un lien de réinitialisation.</p>
                    </div>

                    {isSuccess ? (
                        <div className="success-message">
                            <div className="success-icon">✅</div>
                            <h3>Email envoyé !</h3>
                            <p>Si un compte existe pour <strong>{email}</strong>, vous recevrez des instructions sous peu.</p>
                            <Link to="/connexion" className="btn-auth" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                                Retour à la connexion
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="email">ADRESSE EMAIL</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">✉️</span>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (error) setError('');
                                        }}
                                        className={error ? 'error' : ''}
                                        placeholder="votre@email.com"
                                    />
                                </div>
                                {error && <span className="error-message">{error}</span>}
                            </div>

                            <button
                                type="submit"
                                className="btn-auth"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Envoi en cours...' : 'Envoyer le lien'}
                            </button>

                            <div className="auth-footer" style={{ marginTop: '1rem', paddingTop: '0' }}>
                                <Link to="/connexion" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>
                                    ← Retour à la connexion
                                </Link>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
