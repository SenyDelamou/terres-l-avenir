import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock, User, Briefcase, ShieldCheck, Loader2 } from 'lucide-react';
import '../styles/LoginPage.css';

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
            newErrors.email = 'Format invalide';
        }
        if (!formData.password) {
            newErrors.password = 'Mot de passe requis';
        } else if (formData.password.length < 6) {
            newErrors.password = '6 caractères minimum';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Ne correspond pas';
        }
        if (!formData.terms) {
            newErrors.terms = 'Conditions requises';
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
        // Simulation d'inscription
        setTimeout(() => {
            setIsLoading(false);
            navigate('/connexion');
        }, 1500);
    };

    return (
        <div className="login-body-asymmetric">
            <div className="login-side-content">
                <div className="login-branding-pulp slide-up">
                    <span className="pulp-tag">Écosystème Digital</span>
                    <h2>Élevez Votre <br /><span>Expertise</span></h2>
                    <p>Rejoignez le réseau AgriPlus. Connectez-vous avec des partenaires, accédez à des financements et optimisez vos rendements grâce à l'IA.</p>
                </div>
            </div>

            <div className="login-glass-container-right">
                <div className="login-card-ordered">
                    {/* Logo Section */}
                    <div className="login-logo-centered">
                        <div className="logo-icon-box">
                            <Leaf size={24} strokeWidth={2.5} />
                        </div>
                        <h1 className="brand-name">AgriPlus</h1>
                    </div>

                    <div className="login-header-ordered">
                        <h2>Création de Profil</h2>
                        <p>Initialisez votre espace professionnel</p>
                    </div>

                    <form className="login-form-ordered" onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="name">Nom Complet / Raison Sociale</label>
                            <div className="input-wrapper">
                                <User className="field-icon" size={18} />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Jean Agronome"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? 'error' : ''}
                                />
                            </div>
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="input-field">
                            <label htmlFor="email">Identifiant Professionnel</label>
                            <div className="input-wrapper">
                                <Mail className="field-icon" size={18} />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="nom@exploitation.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'error' : ''}
                                />
                            </div>
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="input-field">
                            <label htmlFor="role">Expertise / Rôle</label>
                            <div className="input-wrapper">
                                <Briefcase className="field-icon" size={18} />
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="custom-select"
                                >
                                    <option value="farmer">Agriculteur / Producteur</option>
                                    <option value="investor">Investisseur / Partenaire</option>
                                    <option value="expert">Expert Agronomique</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row-asymmetric">
                            <div className="input-field">
                                <label htmlFor="password">Mot de passe</label>
                                <div className="input-wrapper">
                                    <Lock className="field-icon" size={18} />
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        required
                                        placeholder="••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={errors.password ? 'error' : ''}
                                    />
                                </div>
                            </div>

                            <div className="input-field">
                                <label htmlFor="confirmPassword">Confirmer</label>
                                <div className="input-wrapper">
                                    <ShieldCheck className="field-icon" size={18} />
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        required
                                        placeholder="••••••"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={errors.confirmPassword ? 'error' : ''}
                                    />
                                </div>
                            </div>
                        </div>
                        {(errors.password || errors.confirmPassword) && (
                            <span className="error-message" style={{ textAlign: 'center', width: '100%' }}>
                                {errors.password || errors.confirmPassword}
                            </span>
                        )}

                        <div className="login-options">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                />
                                <span className="checkmark"></span>
                                <span style={{ fontSize: '0.9rem' }}>J'accepte les <Link to="/terms" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>conditions</Link></span>
                            </label>
                            {errors.terms && <span className="error-message">{errors.terms}</span>}
                        </div>

                        <button
                            type="submit"
                            className={`btn-login-submit ${isLoading ? 'is-loading' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? <Loader2 className="spinner" size={20} /> : 'Créer mon Compte'}
                        </button>
                    </form>

                    <div className="login-footer-ordered">
                        <p>Déjà un compte ? <Link to="/connexion">Connectez-vous</Link></p>
                    </div>
                </div>
            </div>

            <div className="login-footer-asymmetric">
                &copy; 2024 AgriPlus. Tous droits réservés.
            </div>
        </div>
    );
}

export default RegisterPage;
