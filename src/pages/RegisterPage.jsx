import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import '../styles/Auth.css';

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
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Effacer l'erreur du champ modifié
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
        if (!formData.email) {
            newErrors.email = 'L\'identifiant est requis';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Format d\'identifiant invalide';
        }
        if (!formData.password) {
            newErrors.password = 'La clé d\'accès est requise';
        } else if (formData.password.length < 6) {
            newErrors.password = '6 caractères minimum requis';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Les clés ne correspondent pas';
        }
        if (!formData.terms) {
            newErrors.terms = 'Veuillez accepter les conditions';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);
        // Simuler une inscription
        setTimeout(() => {
            setIsLoading(false);
            navigate('/connexion');
        }, 1500);
    };

    return (
        <div className="auth-page register-page">
            <div className="auth-container">
                {/* Panneau Visuel */}
                <div className="auth-visual-side">
                    <div className="auth-visual-content">
                        <h2>Déployez Votre <br />Potentiel Agricole</h2>
                        <p>Rejoignez la communauté AgriPlus et accédez à des outils de financement, de vente et d'intelligence artificielle.</p>
                    </div>
                </div>

                {/* Panneau Formulaire */}
                <div className="auth-form-side">
                    <div className="top-auth-nav">
                        <span>Déjà membre ?</span>
                        <Link to="/connexion">Se connecter</Link>
                    </div>
                    <div className="auth-card">
                        <div className="auth-header">
                            <Link to="/" className="auth-logo">
                                <img src={logoImg} alt="AgriPlus Logo" className="auth-logo-img" />
                                <span className="logo-text">AgriPlus</span>
                            </Link>
                            <h1>Création de Profil</h1>
                            <p>Initialisez votre espace professionnel.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="name">Nom Complet / Raison Sociale</label>
                                <div className="input-wrapper">
                                    <span className="input-icon-svg">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error' : ''}
                                        placeholder="Jean Agronome"
                                    />
                                </div>
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

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
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                        placeholder="nom@exploitation.com"
                                    />
                                </div>
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="role">Expertise / Rôle</label>
                                <div className="input-wrapper">
                                    <span className="input-icon-svg">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 3h12l4 18H2L6 3z" />
                                            <path d="M12 3v18" />
                                        </svg>
                                    </span>
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <option value="farmer">Agriculteur / Producteur</option>
                                        <option value="investor">Investisseur / Partenaire</option>
                                        <option value="expert">Expert Agronomique</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="password">Clé d'Accès</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon-svg">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                            </svg>
                                        </span>
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
                                    <label htmlFor="confirmPassword">Validation</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon-svg">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                                <path d="m9 12 2 2 4-4" />
                                            </svg>
                                        </span>
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

                            <div className="form-group">
                                <label className="remember-me" style={{ textTransform: 'none' }}>
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        checked={formData.terms}
                                        onChange={handleChange}
                                    />
                                    <span>J'accepte les <Link to="/terms">conditions de protocole</Link> AgriPlus.</span>
                                </label>
                                {errors.terms && <span className="error-message">{errors.terms}</span>}
                            </div>

                            <button
                                type="submit"
                                className="btn-auth"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Initialisation...' : 'Débloquer mon Accès'}
                            </button>

                            <div className="auth-footer">
                                Déjà membre ? <Link to="/connexion">Authentifiez-vous</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
