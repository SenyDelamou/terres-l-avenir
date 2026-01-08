import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Loader2, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import '../styles/LoginPage.css';

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulation API
        setTimeout(() => {
            setIsLoading(false);
            setIsSent(true);
        }, 1500);
    };

    return (
        <div className="auth-glass-container">
            <div className="auth-bg-overlay"></div>

            <div className="auth-glass-card">
                <div className="glass-header">
                    <div className="brand-glow-container">
                        <Leaf size={32} className="brand-icon-glow" />
                    </div>
                    <h1>Récupération</h1>
                    <p className="premium-subtitle">
                        {!isSent ? "Nous allons vous aider à revenir." : "Vérifiez votre boîte mail."}
                    </p>
                </div>

                {!isSent ? (
                    <form className="glass-form" onSubmit={handleSubmit}>
                        <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', fontSize: '0.95rem', lineHeight: '1.5' }}>
                            Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                        </p>

                        <div className="glass-input-group">
                            <label>Email du compte</label>
                            <div className="input-glass-wrapper">
                                <Mail className="input-icon-glass" size={18} />
                                <input
                                    type="email"
                                    placeholder="nom@exemple.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-glass-primary" disabled={isLoading}>
                            {isLoading ? <Loader2 className="spinner" size={20} /> : (
                                <>
                                    <span>Envoyer le lien</span>
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>
                ) : (
                    <div className="glass-form" style={{ textAlign: 'center', gap: '2rem' }}>
                        <div style={{
                            background: 'rgba(61, 252, 138, 0.1)',
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto',
                            border: '1px solid #3dfc8a'
                        }}>
                            <CheckCircle size={40} color="#3dfc8a" />
                        </div>
                        <div style={{ color: 'white' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email envoyé !</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                                Si un compte existe avec l'adresse <strong>{email}</strong>, vous recevrez un lien de réinitialisation dans quelques instants.
                            </p>
                        </div>
                        <button onClick={() => setIsSent(false)} className="btn-social-glass" style={{ width: '100%' }}>
                            Renvoyer l'email
                        </button>
                    </div>
                )}

                <div className="glass-footer">
                    <Link to="/connexion" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                        <ArrowLeft size={16} />
                        Retour à la connexion
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
