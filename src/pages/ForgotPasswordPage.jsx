import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tractor, Leaf, Key, Mail, ArrowRight, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import '../styles/ForgotPasswordPage.css';

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulation d'envoi
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            triggerToast();
        }, 1500);
    };

    const triggerToast = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    const resetView = () => {
        setIsSubmitted(false);
        setEmail('');
    };

    return (
        <div className="forgot-password-body">
            {/* Background Decorative Blobs */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>

            <div className="fp-container">
                <div className="fp-card">

                    {/* Section Image (Gauche) - Hidden on mobile */}
                    <div className="fp-image-side">
                        <img
                            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1740&auto=format&fit=crop"
                            alt="Champ agricole au soleil"
                            className="fp-bg-image"
                        />
                        <div className="fp-image-overlay">
                            <div className="fp-quote-box">
                                <Tractor className="fp-icon-large text-agri-300" size={32} color="#86efac" style={{ marginBottom: '1rem' }} />
                                <h3>Cultivons l'avenir</h3>
                                <p>Gérez votre exploitation, suivez vos récoltes et optimisez vos rendements avec AgriPlus.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section Formulaire (Droite) */}
                    <div className="fp-form-side">

                        {/* Logo Mobile / Desktop Wrapper */}
                        <div className="fp-logo-header">
                            <div className="fp-logo-icon">
                                <Leaf size={24} />
                            </div>
                            <span className="fp-logo-text">AgriPlus</span>
                        </div>

                        {!isSubmitted ? (
                            <div className="fp-form-content fade-in" style={{ width: '100%' }}>
                                <div className="fp-text-group">
                                    <div className="fp-icon-circle bg-orange">
                                        <Key size={24} />
                                    </div>
                                    <h2>Mot de passe oublié ?</h2>
                                    <p>Pas de panique. Entrez l'adresse e-mail associée à votre compte AgriPlus et nous vous enverrons un lien de réinitialisation.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="fp-form">
                                    <div className="fp-input-group">
                                        <label htmlFor="email">Adresse e-mail</label>
                                        <div className="relative-input">
                                            <div className="input-icon-left">
                                                <Mail size={18} />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="jean.dupont@ferme.fr"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className={`fp-btn-submit ${isLoading ? 'loading' : ''}`}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Envoi en cours...' : (
                                            <>Envoyer le lien de récupération <ArrowRight size={16} /></>
                                        )}
                                    </button>
                                </form>

                                <div className="fp-footer-link">
                                    <p>
                                        Vous vous en souvenez ?
                                        <Link to="/connexion"> Retour à la connexion</Link>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="fp-success-content fade-in" style={{ width: '100%' }}>
                                <div className="fp-icon-circle bg-green large">
                                    <Send size={32} />
                                </div>
                                <h2>E-mail envoyé !</h2>
                                <p className="fp-success-text">
                                    Nous avons envoyé un lien de réinitialisation à <strong>{email}</strong>. Vérifiez votre boîte de réception (et vos spams).
                                </p>
                                <button onClick={resetView} className="fp-btn-retry">
                                    <ArrowLeft size={16} /> Renvoyer un e-mail
                                </button>

                                <div className="fp-back-btn-wrapper">
                                    <Link to="/connexion" className="fp-btn-back">
                                        Retour à la connexion
                                    </Link>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className="fp-page-footer">
                    &copy; 2024 AgriPlus. Tous droits réservés.
                </div>
            </div>

            {/* Toast Notification */}
            <div className={`fp-toast ${showToast ? 'show' : ''}`}>
                <div className="toast-icon"><CheckCircle size={24} /></div>
                <div className="toast-content">
                    <h4>Succès</h4>
                    <p>Le lien a été envoyé.</p>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
