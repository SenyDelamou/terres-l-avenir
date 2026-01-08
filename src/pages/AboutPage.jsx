import { useRef, useEffect, useState } from 'react';
import { Target, Lightbulb, Users, Award, TrendingUp, Leaf, Sprout, ArrowRight } from 'lucide-react';
import '../styles/AboutPage.css';

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  // Stats Animation Logic could be added here

  const historyEvents = [
    {
      year: '2009',
      title: 'La Genèse',
      desc: 'Création d\'AgriPlus avec une vision simple : moderniser l\'agriculture guinéenne.'
    },
    {
      year: '2015',
      title: 'Expansion Régionale',
      desc: 'Ouverture de nos bureaux à Mamou et lancement du programme de formation.'
    },
    {
      year: '2020',
      title: 'Digitalisation',
      desc: 'Lancement de la plateforme AgriPulse pour connecter les agriculteurs aux marchés.'
    },
    {
      year: '2024',
      title: 'Intelligence Artificielle',
      desc: 'Intégration d\'outils prédictifs IA pour optimiser les rendements.'
    }
  ];

  return (
    <div className="about-page-premium">
      {/* Cinematic Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge-premium">
            <Leaf size={16} />
            <span>Notre Histoire</span>
          </div>
          <h1>Cultiver l'Avenir <br /><span className="text-gradient">Ensemble</span></h1>
          <p className="hero-subtitle">
            Depuis plus de 15 ans, nous allions tradition agricole et innovation technologique pour nourrir les générations futures.
          </p>
        </div>
        <div className="hero-scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* Stats Section (Floating) */}
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Années d'Expertise</span>
          </div>
          <div className="stat-separator"></div>
          <div className="stat-item">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Agriculteurs Aidés</span>
          </div>
          <div className="stat-separator"></div>
          <div className="stat-item">
            <span className="stat-number">120</span>
            <span className="stat-label">Projets Financés</span>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <h2>Notre Mission</h2>
            <div className="header-line"></div>
            <p>Transformer les défis agricoles en opportunités durables grâce à la technologie.</p>
          </div>

          <div className="mission-grid-premium">
            <div className="mission-card-glass">
              <div className="mission-icon">
                <Sprout size={32} />
              </div>
              <h3>Durabilité</h3>
              <p>Promouvoir des pratiques respectueuses de l'environnement pour préserver nos terres.</p>
            </div>
            <div className="mission-card-glass">
              <div className="mission-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Productivité</h3>
              <p>Maximiser les rendements grâce à l'analyse de données et l'agriculture de précision.</p>
            </div>
            <div className="mission-card-glass">
              <div className="mission-icon">
                <Users size={32} />
              </div>
              <h3>Communauté</h3>
              <p>Créer un réseau solidaire permettant aux agriculteurs de s'entraider et de grandir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header light">
            <h2>Notre Parcours</h2>
            <p>Les étapes clés de notre croissance.</p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            {historyEvents.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card-dark">
                  <span className="timeline-year">{event.year}</span>
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-premium">
        <div className="cta-content-glass">
          <h2>Prêt à innover avec nous ?</h2>
          <p>Rejoignez la communauté AgriPulse et commencez votre transformation dès aujourd'hui.</p>
          <div className="cta-buttons">
            <a href="/inscription" className="btn-primary-glow">
              Rejoindre AgriPulse <ArrowRight size={18} />
            </a>
            <a href="/contact" className="btn-outline-glow">
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
