import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import '../styles/Auth.css';

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setError('L\'identifiant est requis');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Format d\'identifiant invalide');
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
                {/* Panneau Visuel */}
                <div className="auth-visual-side">
                    <div className="auth-visual-content">
                        <h2>Récupérez Votre <br />Sésame Numérique</h2>
                        <p>Le protocole de sécurité AgriPulse vous permet de réinitialiser vos accès en toute confidentialité.</p>
                    </div>
                </div>

                {/* Panneau Formulaire */}
                <div className="auth-form-side">
                    <div className="auth-card">
                        <div className="auth-header">
                            <Link to="/" className="auth-logo">
                                <img src={logoImg} alt="AgriPulse Logo" className="auth-logo-img" />
                                <span className="logo-text">AgriPulse</span>
                            </Link>
                            <h1>Accès Perdu</h1>
                            <p>Initialisez la procédure de récupération.</p>
                        </div>

                        {isSuccess ? (
                            <div className="success-message" style={{ textAlign: 'center', padding: '1rem 0' }}>
                                <div className="success-icon" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✉️</div>
                                <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Protocole Lancé</h3>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Si un profil correspond à <strong>{email}</strong>, vous recevrez vos instructions sous peu.</p>
                                <Link to="/connexion" className="btn-auth" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                                    RETOUR À LA CONNEXION
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="auth-form">
                                <div className="form-group">
                                    <label htmlFor="email">Identifiant Professionnel</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon-svg">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </svg>
                                        </span>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (error) setError('');
                                            }}
                                            className={error ? 'error' : ''}
                                            placeholder="nom@exploitation.com"
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
                                    <Link to="/connexion" style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        ← Retour à la connexion
                                    </Link>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
