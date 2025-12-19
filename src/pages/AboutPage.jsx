import PageHeader from '../components/PageHeader';
import '../styles/AboutPage.css';

function AboutPage() {
  const missions = [
    {
      title: '🌍 Durabilité',
      description: 'Promouvoir des pratiques agricoles qui préservent l\'environnement pour les générations futures.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop'
    },
    {
      title: '📈 Innovation',
      description: 'Intégrer les dernières technologies et techniques pour améliorer la productivité.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop'
    },
    {
      title: '🤝 Accompagnement',
      description: 'Soutenir les agriculteurs dans leur développement et leur transition écologique.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
    },
    {
      title: '🌾 Qualité',
      description: 'Garantir des produits de qualité tout en respectant les normes environnementales.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
    }
  ];

  const values = [
    {
      icon: '🌿',
      title: 'Respect de l\'environnement',
      description: 'Nous croyons en une agriculture qui préserve la biodiversité et les ressources naturelles.'
    },
    {
      icon: '💡',
      title: 'Innovation continue',
      description: 'Nous restons à la pointe des nouvelles techniques pour offrir les meilleures solutions.'
    },
    {
      icon: '🤝',
      title: 'Solidarité',
      description: 'Nous soutenons la communauté agricole locale et favorisons l\'entraide.'
    },
    {
      icon: '✨',
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tous nos services et conseils.'
    }
  ];

  return (
    <div className="about-page">
      <PageHeader
        title="Bâtissons l'Agriculture de Demain"
        subtitle="Notre mission : allier tradition et innovation pour nourrir les générations futures avec excellence."
        icon="🏛️"
        images={[
          'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=600&fit=crop',
          'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1920&h=600&fit=crop',
          'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1920&h=600&fit=crop'
        ]}
      />

      <section className="about-content">
        <div className="container">
          <div className="about-section history-section">
            <div className="about-image-text">
              <div className="about-text">
                <span className="section-badge">Depuis 2009</span>
                <h2>Notre Histoire</h2>
                <div className="history-box">
                  <p>
                    Fondée en 2009, <strong>AgriPulse</strong> est née d'une passion pour l'agriculture
                    durable et le respect de l'environnement. Depuis plus de 15 ans, nous
                    accompagnons les agriculteurs dans leur transition vers des pratiques
                    plus respectueuses et rentables.
                  </p>
                  <p>
                    Notre équipe d'experts agronomes, d'ingénieurs et de conseillers
                    agricoles travaille chaque jour pour développer et partager les meilleures
                    pratiques agricoles à travers le monde.
                  </p>
                </div>
                <div className="history-stats">
                  <div className="h-stat">
                    <span className="h-number">15+</span>
                    <span className="h-label">Années d'expertise</span>
                  </div>
                  <div className="h-stat">
                    <span className="h-number">500+</span>
                    <span className="h-label">Exploitations aidées</span>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="image-frame">
                  <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" alt="Champ agricole" />
                  <div className="image-experience-badge">
                    <span>15 ANS</span>
                    <small>D'EXPÉRIENCE</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-section mission-section">
            <div className="section-header-centered">
              <span className="section-badge">Nos Objectifs</span>
              <h2>Notre Mission</h2>
              <p>Nous travaillons chaque jour pour transformer le paysage agricole vers un modèle plus vertueux.</p>
            </div>
            <div className="mission-grid">
              {missions.map((m, i) => (
                <div key={i} className="mission-card">
                  <div className="mission-card-image">
                    <img src={m.image} alt={m.title} />
                  </div>
                  <div className="mission-card-content">
                    <h3>{m.title}</h3>
                    <p>{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section values-section">
            <div className="section-header-centered">
              <span className="section-badge">Ce qui nous anime</span>
              <h2>Nos Valeurs Fondamentales</h2>
            </div>
            <div className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-card">
                  <div className="value-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section team-section">
            <div className="team-cta-box">
              <h2>Prêt à rejoindre l'aventure ?</h2>
              <p>Découvrez comment nous pouvons vous aider à transformer votre exploitation ou soutenez un projet innovant.</p>
              <div className="team-cta-actions">
                <a href="/contact" className="btn btn-primary">Nous contacter</a>
                <a href="/projets-financement" className="btn btn-secondary">Voir les projets</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
