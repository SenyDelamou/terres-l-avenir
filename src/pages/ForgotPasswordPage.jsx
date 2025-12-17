import { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulation d'envoi
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="auth-container">
            <div className="auth-side" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(26, 71, 42, 0.85), rgba(15, 43, 29, 0.95)), url("https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80")' }}>
                <div className="auth-side-content">
                    <h1>Sécurité & Sérénité.</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
                        Nous protégeons vos données comme nous protégeons nos récoltes.
                        Récupérez votre accès en toute simplicité.
                    </p>
                </div>
            </div>

            <div className="auth-form-container">
                <div style={{ marginBottom: '2rem' }}>
                    <Link to="/connexion" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
                        ← Retour à la connexion
                    </Link>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Mot de passe oublié ?</h2>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                        Entrez votre adresse email ci-dessous. Nous vous enverrons les instructions pour réinitialiser votre mot de passe.
                    </p>
                </div>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                        <div className="form-group">
                            <label htmlFor="email">Adresse Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="nom@exemple.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoFocus
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ width: '100%' }}>
                            {isLoading ? 'Envoi en cours...' : 'Envoyer le lien de récupération'}
                        </button>
                    </form>
                ) : (
                    <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                        <div style={{ color: '#166534', fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                        <h3 style={{ color: '#166534', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Email envoyé !</h3>
                        <p style={{ color: '#14532d', marginBottom: '1.5rem' }}>
                            Si un compte existe pour <strong>{email}</strong>, vous recevrez un email avec les instructions dans quelques instants.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="btn btn-outline"
                            style={{ color: '#166534', borderColor: '#166534', width: '100%' }}
                        >
                            Renvoyer un email
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
