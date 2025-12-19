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
                            <span className="logo-text">AgriPulse <span className="logo-subtext">- Agriculture</span></span>
                        </Link>
                        <h1>Accès Perdu</h1>
                        <p>Initialisez la procédure de récupération de votre clé d'accès.</p>
                    </div>

                    {isSuccess ? (
                        <div className="success-message" style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <div className="success-icon" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✉️</div>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Protocole Lancé</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Si un profil correspond à <strong>{email}</strong>, vous recevrez vos instructions de réinitialisation sous peu.</p>
                            <Link to="/connexion" className="btn-auth" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                                RETOUR À LA CONNEXION
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="email">Identifiant Professionnel</label>
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
                                        placeholder="nom@entreprise.com"
                                    />
                                </div>
                                {error && <span className="error-message">{error}</span>}
                            </div>

                            <button
                                type="submit"
                                className="btn-auth"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Validation du Profil...' : 'Récupérer mes Accès'}
                            </button>

                            <div className="auth-footer">
                                <Link to="/connexion" style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    ← Retourner à la connexion
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
