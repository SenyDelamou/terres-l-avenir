import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
                    alt="Agriculture Majestic"
                    className="bg-image"
                />
            </div>

            <div className="landing-content">
                <div className="landing-branding">
                    <div className="landing-logo-wrapper">
                        <span className="landing-logo-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                        </span>
                        <span className="landing-logo-text">AgriPulse <span className="logo-subtext">- Agriculture</span></span>
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

                <button className="btn-landing-enter" onClick={handleEnter}>
                    <span className="btn-text">DÉCOUVRIR L'UNIVERS</span>
                    <span className="btn-icon">→</span>
                    <div className="btn-glow"></div>
                </button>

                <div className="landing-scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <span>EXPLORER</span>
                </div>
            </div>

            <div className="landing-footer-minimal">
                <span className="version">V1.0 PREMIUM</span>
                <span className="copyright">© 2024 AGRIPULSE ELITE</span>
            </div>
        </div>
    );
}

export default LandingPage;
