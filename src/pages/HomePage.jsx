import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://images.unsplash.com/photo-1506484335373-452cf97b446a?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1623910313364-c7da57b60098?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2000&auto=format&fit=crop',
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

      <section className="stats">
        <div className="container">
          <h2>AgriPulse en Chiffres</h2>
          <div className="stats-grid">
            <div className="stat">
              <strong>5,000+</strong>
              <span>Agriculteurs</span>
            </div>
            <div className="stat">
              <strong>150+</strong>
              <span>Projets Financés</span>
            </div>
            <div className="stat">
              <strong>500+</strong>
              <span>Produits Vendus</span>
            </div>
            <div className="stat">
              <strong>1,200+</strong>
              <span>Maladies Diagnostiquées</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="container">
          <h2>Prêt à Transformer Votre Agriculture?</h2>
          <p>Rejoignez des milliers d'agriculteurs qui utilisent AgriPulse</p>
          <Link to="/inscription" className="btn btn-primary btn-large">Rejoindre Maintenant</Link>
        </div>
      </section>
    </div>
  );
}
