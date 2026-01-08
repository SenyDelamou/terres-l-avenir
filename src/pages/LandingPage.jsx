import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import '../styles/LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Petit délai pour déclencher l'animation d'entrée
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleEnter = () => {
        // Animation de sortie optionnelle avant navigation
        setIsVisible(false);
        setTimeout(() => {
            navigate('/accueil');
        }, 800);
    };

    return (
        <div className={`landing-page ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="landing-background">
                <div className="landing-overlay"></div>
                <img
                    src="/src/assets/auth_bg_new.png"
                    alt="Agriculture Majestic"
                    className="bg-image"
                />
            </div>

            <div className="landing-content">
                <div className="landing-branding">
                    <div className="landing-logo-wrapper">
                        <img src={logoImg} alt="AgriPlus Logo" className="landing-logo-img" />
                        <span className="landing-logo-text">AgriPlus <span className="logo-subtext">- Agriculture</span></span>
                    </div>
                    <div className="landing-divider"></div>
                    <h1 className="landing-title">
                        L'Excellence Agricole, <br />
                        <span className="text-gradient">Pilotée par l'Innovation.</span>
                    </h1>
                    <p className="landing-subtitle">
                        Rejoignez l'élite des producteurs et transformez votre vision en réalité durable.
                    </p>
                </div>

                <div className="landing-actions">
                    <button className="btn-pill-white" onClick={handleEnter}>
                        <span className="icon-wrapper">🚀</span>
                        <span className="btn-text">Commencer Gratuitement</span>
                        <div className="btn-glow"></div>
                    </button>
                    <button className="btn-pill-dark" onClick={() => navigate('/ressources')}>
                        <span className="icon-wrapper">📚</span>
                        <span className="btn-text">Explorer les Ressources</span>
                    </button>
                </div>

                <div className="landing-scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <span>EXPLORER</span>
                </div>
            </div>

            <div className="landing-footer-minimal">
                <span className="version">V1.0 PREMIUM</span>
                <span className="copyright">© 2024 AGRIPLUS ELITE</span>
            </div>
        </div>
    );
}

export default LandingPage;
