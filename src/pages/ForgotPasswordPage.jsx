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
        <div className="forgot-password-page">
            <div className="forgot-container">
                <div className="forgot-left">
                    <div className="forgot-image">
                        <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=1200&fit=crop" alt="Nature" />
                        <div className="forgot-overlay">
                            <div className="forgot-content-overlay">
                                <h2>Ne vous inquiétez pas</h2>
                                <p>Nous allons vous aider à récupérer l'accès à votre compte.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="forgot-right">
                    <div className="forgot-form-container">
                        <div className="forgot-header">
                            <Link to="/" className="forgot-logo">
                                <span className="logo-icon">🌾</span>
                                <span className="logo-text">AgriPulse</span>
                            </Link>
                            <h1>Mot de passe oublié ?</h1>
                            <p>Entrez votre adresse email pour recevoir un lien de réinitialisation.</p>
                        </div>

                        {isSuccess ? (
                            <div className="success-message">
                                <div className="success-icon">✅</div>
                                <h3>Email envoyé !</h3>
                                <p>Si un compte existe avec l'adresse <strong>{email}</strong>, vous recevrez un email avec les instructions pour réinitialiser votre mot de passe.</p>
                                <Link to="/connexion" className="btn-back-login">
                                    Retour à la connexion
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="forgot-form">
                                <div className="form-group">
                                    <label htmlFor="email">Adresse email</label>
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
                                    className="reset-button"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="spinner"></span>
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        'Envoyer le lien'
                                    )}
                                </button>

                                <div className="forgot-footer">
                                    <Link to="/connexion" className="back-link">
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
