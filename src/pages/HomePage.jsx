import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage-premium.css';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?q=80&w=2400&auto=format&fit=crop', // vignoble premium au coucher du soleil
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2400&auto=format&fit=crop', // drone sur cultures modernes
    'https://images.unsplash.com/photo-1542838686-73e53703b9ba?q=80&w=2400&auto=format&fit=crop', // serres high-tech verdoyantes
    'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=2400&auto=format&fit=crop', // champs de blé baignés de lumière dorée
    'https://images.unsplash.com/photo-1524593451224-1d4a26271134?q=80&w=2400&auto=format&fit=crop', // récolte dorée au lever du soleil
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-slider">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">🌱 Plateforme Premium</div>
          <h1>AgriPulse 2026</h1>
          <p className="hero-subtitle">La plateforme complète pour agriculteurs innovants</p>
          <p className="hero-desc">Apprenez, partagez, vendez et financez vos projets agricoles</p>
          <div className="hero-cta">
            <Link to="/inscription" className="btn btn-primary">🚀 Commencer</Link>
            <Link to="/ressources" className="btn btn-outline">📚 Découvrir</Link>
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>
            <div className="metric">
              <strong>5K+</strong>
              <span>Agriculteurs</span>
            </div>
            <div className="metric">
              <strong>500+</strong>
              <span>Projets</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Nos Services</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <h3>Diagnostics IA</h3>
              <p>Identifiez les maladies de vos plantes en temps réel</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📚</div>
              <h3>Ressources</h3>
              <p>Guides complets et tutoriels pour maîtriser les techniques</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h3>Financement</h3>
              <p>Financez vos projets avec notre réseau d'investisseurs</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛒</div>
              <h3>Marketplace</h3>
              <p>Vendez vos produits directement aux acheteurs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-showcase-section">
        <div className="stats-showcase-container">
          {/* Header */}
          <div className="stats-header">
            <div className="trust-badge">📊 Nos Résultats</div>
            <h2 className="stats-title">
              AgriPulse en <span>Chiffres</span>
            </h2>
            <p className="stats-subtitle">Impact mesurable sur l'agriculture africaine</p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid-container">
            <div className="stat-item">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Agriculteurs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projets Financés</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Produits Vendus</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1.2K+</span>
              <span className="stat-label">Maladies Diagnostiquées</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="stats-cta-section">
            <div className="stats-cta-content">
              <h3 className="stats-cta-title">
                Prêt à Transformer Votre Agriculture?
              </h3>
              <p className="stats-cta-description">
                Rejoignez des milliers d'agriculteurs qui utilisent AgriPulse
              </p>
              <Link to="/inscription" className="stats-cta-button">
                🚀 Rejoindre Maintenant
              </Link>
              <Link to="/ressources" className="stats-cta-button-secondary">
                📚 Découvrir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
