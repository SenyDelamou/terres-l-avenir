import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock, User, Eye, EyeOff, Loader2, ArrowRight, CheckCircle, Briefcase } from 'lucide-react';
import '../styles/LoginPage.css';

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'farmer', // Default to farmer
        password: '',
        terms: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulation API
        setTimeout(() => {
            setIsLoading(false);
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
                navigate('/dashboard'); // Or login
            }, 2000);
        }, 1500);
    };

    return (
        <div className="auth-glass-container">
            <div className="auth-bg-overlay"></div>

            <div className="auth-glass-card wide">
                <div className="glass-header">
                    <div className="brand-glow-container">
                        <Leaf size={32} className="brand-icon-glow" />
                    </div>
                    <h1>Rejoindre AgriPulse</h1>
                    <p className="premium-subtitle">Commencez votre nouvelle expérience agricole</p>
                </div>

                <form className="glass-form" onSubmit={handleSubmit}>

                    <div className="glass-input-group">
                        <label>Nom Complet</label>
                        <div className="input-glass-wrapper">
                            <User className="input-icon-glass" size={18} />
                            <input
                                type="text"
                                name="name"
                                placeholder="Prénom Nom"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="glass-input-group">
                        <label>Email Professionnel</label>
                        <div className="input-glass-wrapper">
                            <Mail className="input-icon-glass" size={18} />
                            <input
                                type="email"
                                name="email"
                                placeholder="contact@ferme.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="glass-input-group">
                        <label>Rôle</label>
                        <div className="input-glass-wrapper">
                            <Briefcase className="input-icon-glass" size={18} />
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="glass-select-input" // Needs styling in CSS if not auto-inherited well
                                style={{
                                    width: '100%',
                                    background: 'rgba(0, 0, 0, 0.2)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '16px',
                                    padding: '1rem 1rem 1rem 3rem',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontFamily: 'inherit',
                                    appearance: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <option value="farmer">Agriculteur / Producteur</option>
                                <option value="investor">Investisseur / Financeur</option>
                                <option value="expert">Expert Agronome</option>
                                <option value="buyer">Acheteur / Distributeur</option>
                            </select>
                        </div>
                    </div>

                    <div className="glass-input-group">
                        <label>Mot de passe</label>
                        <div className="input-glass-wrapper">
                            <Lock className="input-icon-glass" size={18} />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Créer un mot de passe fort"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-pass-glass"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="form-extras">
                        <label className="glass-checkbox">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                required
                            />
                            <span className="checkmark-glass"></span>
                            <span>J'accepte les <Link to="/terms" className="link-glass">conditions d'utilisation</Link></span>
                        </label>
                    </div>

                    <button type="submit" className="btn-glass-primary" disabled={isLoading}>
                        {isLoading ? <Loader2 className="spinner" size={20} /> : (
                            <>
                                <span>Créer mon compte</span>
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>

                <div className="glass-footer">
                    <p>Vous avez déjà un compte ? <Link to="/connexion">Se connecter</Link></p>
                </div>
            </div>

            {/* Toast Notification */}
            <div className={`glass-toast ${showToast ? 'show' : ''}`}>
                <div className="toast-icon-box"><CheckCircle size={20} /></div>
                <div className="toast-content">
                    <h4>Bienvenue !</h4>
                    <p>Votre compte a été créé avec succès.</p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
