import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/RegisterPage.css';

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'farmer',
        terms: false
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        // Effacer l'erreur du champ modifié
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Le nom complet est requis';
        }

        if (!formData.email) {
            newErrors.email = 'L\'email est requis';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'L\'email n\'est pas valide';
        }

        if (!formData.password) {
            newErrors.password = 'Le mot de passe est requis';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
        }

        if (!formData.terms) {
            newErrors.terms = 'Vous devez accepter les conditions d\'utilisation';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsLoading(true);

        // Simuler une inscription
        setTimeout(() => {
            setIsLoading(false);
            alert('Inscription réussie ! Bienvenue sur AgriPulse.');
            navigate('/connexion');
        }, 1500);
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-left">
                    <div className="register-image">
                        <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=1200&fit=crop" alt="Agriculture durable" />
                        <div className="register-overlay">
                            <div className="register-content-overlay">
                                <h2>Rejoignez AgriPulse</h2>
                                <p>La plateforme de référence pour l'agriculture moderne et durable.</p>
                                <div className="register-features">
                                    <div className="feature-item">
                                        <span className="feature-icon">🚀</span>
                                        <span>Développez votre exploitation</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">🤝</span>
                                        <span>Connectez-vous aux experts</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">💰</span>
                                        <span>Trouvez des financements</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="register-right">
                    <div className="register-form-container">
                        <div className="register-header">
                            <Link to="/" className="register-logo">
                                <span className="logo-icon">🌾</span>
                                <span className="logo-text">AgriPulse</span>
                            </Link>
                            <h1>Créer un compte</h1>
                            <p>Remplissez le formulaire ci-dessous pour commencer</p>
                        </div>

                        <form onSubmit={handleSubmit} className="register-form">
                            <div className="form-group">
                                <label htmlFor="name">Nom complet</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">👤</span>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error' : ''}
                                        placeholder="Jean Dupont"
                                    />
                                </div>
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Adresse email</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">✉️</span>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                        placeholder="votre@email.com"
                                    />
                                </div>
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="role">Je suis</label>
                                <div className="input-wrapper">
                                    <span className="input-icon">💼</span>
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="select-input"
                                    >
                                        <option value="farmer">Agriculteur / Producteur</option>
                                        <option value="investor">Investisseur</option>
                                        <option value="expert">Expert / Conseiller</option>
                                        <option value="student">Étudiant</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="password">Mot de passe</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">🔒</span>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className={errors.password ? 'error' : ''}
                                            placeholder="••••••"
                                        />
                                    </div>
                                    {errors.password && <span className="error-message">{errors.password}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirmer</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">🔒</span>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className={errors.confirmPassword ? 'error' : ''}
                                            placeholder="••••••"
                                        />
                                    </div>
                                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                                </div>
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                    />
                                    <span>J'accepte les <Link to="/cgu">Conditions d'utilisation</Link></span>
                                </label>
                            </div>
                            {errors.terms && <span className="error-message" style={{ marginTop: '-10px' }}>{errors.terms}</span>}

                            <button
                                type="submit"
                                className="register-button"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="spinner"></span>
                                        Inscription...
                                    </>
                                ) : (
                                    'S\'inscrire'
                                )}
                            </button>

                            <div className="register-footer">
                                <p>
                                    Déjà un compte ?{' '}
                                    <Link to="/connexion" className="login-link">
                                        Se connecter
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
