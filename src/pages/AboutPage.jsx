import { useRef, useEffect, useState } from 'react';
import { Target, Lightbulb, Users, Award, TrendingUp, Leaf, Sprout, ArrowRight, CheckCircle, ShoppingBag, Coins, Cpu, MessageCircle } from 'lucide-react';
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
      <section className="about-hero" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
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

      {/* Vision & Values Split Section */}
      <section className="vision-section">
        <div className="container vision-container">
          <div className="vision-image">
            <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1000&auto=format&fit=crop" alt="Vision Agricole" />
            <div className="vision-badge">
              <Target size={24} />
              <span>Vision 2030</span>
            </div>
          </div>
          <div className="vision-content">
            <span className="section-label">Notre Vision</span>
            <h2>Un Écosystème Agricole <br />Connecté et Intelligent</h2>
            <p>
              Chez <strong>AgriPulse</strong>, nous imaginons un futur où chaque agriculteur, quelle que soit sa taille, a accès aux meilleurs outils technologiques pour prospérer.
            </p>
            <p>
              Notre vision est de créer le <strong>premier écosystème digital complet</strong> en Afrique de l'Ouest, intégrant le commerce équitable, le financement participatif et l'intelligence artificielle pour éradiquer la précarité rurale et booster la souveraineté alimentaire.
            </p>
            <ul className="vision-points">
              <li><CheckCircle size={20} className="check-icon" /> Digitalisation des zones rurales</li>
              <li><CheckCircle size={20} className="check-icon" /> Financement accessible à tous</li>
              <li><CheckCircle size={20} className="check-icon" /> Agriculture de précision pour tous</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Ecosystem (Presentation of the site) */}
      <section className="ecosystem-section">
        <div className="container">
          <div className="section-header">
            <h2>L'Écosystème AgriPulse</h2>
            <div className="header-line"></div>
            <p>Une plateforme tout-en-un conçue pour répondre à tous les besoins du secteur agricole.</p>
          </div>

          <div className="ecosystem-grid">
            <div className="eco-card">
              <div className="eco-icon-wrapper market">
                <ShoppingBag size={28} />
              </div>
              <h3>Marketplace</h3>
              <p>Une place de marché directe pour vendre vos récoltes au meilleur prix, sans intermédiaires abusifs.</p>
            </div>
            <div className="eco-card">
              <div className="eco-icon-wrapper fund">
                <Coins size={28} />
              </div>
              <h3>Financement Participatif</h3>
              <p>Levez des fonds pour vos projets agricoles ou investissez dans l'agriculture de demain.</p>
            </div>
            <div className="eco-card">
              <div className="eco-icon-wrapper ai">
                <Cpu size={28} />
              </div>
              <h3>Assistant IA</h3>
              <p>Un expert agronome virtuel disponible 24/7 pour diagnostiquer les maladies et optimiser vos cultures.</p>
            </div>
            <div className="eco-card">
              <div className="eco-icon-wrapper forum">
                <MessageCircle size={28} />
              </div>
              <h3>Forum Communautaire</h3>
              <p>Un espace d'échange pour partager des connaissances, résoudre des problèmes et réseauter.</p>
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
