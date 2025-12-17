import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

function RegisterPage() {
    const navigate = useNavigate();
    // On supporte optionnellement useApp si disponible, sinon fallback
    const context = useApp ? useApp() : {};
    const trackEvent = context.trackEvent || (() => { });

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'farmer' // farmer, investor, expert
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulation d'inscription
        setTimeout(() => {
            setIsLoading(false);
            trackEvent('user_register', { role: formData.role });
            // Redirection vers login ou dashboard
            navigate('/connexion');
        }, 1500);
    };

    return (
        <div className="auth-container">
            <div className="auth-side">
                <div className="auth-side-content">
                    <h1>Cultivons l'Excellence.</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '80%' }}>
                        Rejoignez le réseau d'élite de l'agriculture de demain.
                        Semences de qualité, investissements stratégiques et expertises de pointe.
                    </p>
                </div>
            </div>

            <div className="auth-form-container">
                <div style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Créer un compte</h2>
                    <p style={{ color: 'var(--color-text-muted)' }}>Débutez votre parcours avec Terres d'Avenir.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                    <div className="form-group">
                        <label htmlFor="fullName">Nom Complet</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Ex: Jean Dupont"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Adresse Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="nom@exemple.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label htmlFor="password">Mot de passe</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmation</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">Je suis...</label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            style={{ background: 'white' }}
                        >
                            <option value="farmer">Agriculteur / Producteur</option>
                            <option value="investor">Investisseur / Bailleur</option>
                            <option value="expert">Expert Agronome</option>
                            <option value="student">Étudiant / Curieux</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ marginTop: '1rem', width: '100%' }}>
                        {isLoading ? 'Création en cours...' : 'S\'inscrire'}
                    </button>
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.95rem' }}>
                    <p>
                        Vous avez déjà un compte ?{' '}
                        <Link to="/connexion" style={{ color: 'var(--color-primary)', fontWeight: '700', textDecoration: 'underline' }}>
                            Se connecter
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
