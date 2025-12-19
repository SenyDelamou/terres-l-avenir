import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import '../styles/ServicesPage.css';

function ServicesPage() {
  const services = [
    {
      icon: '🔍',
      title: 'Diagnostic Agricole',
      description: 'Analyse complète de votre exploitation pour identifier les axes d\'amélioration et optimiser vos rendements.',
      features: ['Audit de l\'exploitation', 'Analyse des sols', 'Recommandations personnalisées']
    },
    {
      icon: '📚',
      title: 'Formation & Conseil',
      description: 'Formations pratiques et conseils d\'experts pour maîtriser les nouvelles techniques agricoles.',
      features: ['Formations sur site', 'Ateliers pratiques', 'Suivi personnalisé']
    },
    {
      icon: '💧',
      title: 'Gestion de l\'Irrigation',
      description: 'Optimisation de vos systèmes d\'irrigation pour réduire la consommation d\'eau tout en améliorant les rendements.',
      features: ['Étude hydraulique', 'Installation de systèmes', 'Maintenance et suivi']
    },
    {
      icon: '🌱',
      title: 'Conversion Bio',
      description: 'Accompagnement complet dans votre transition vers l\'agriculture biologique certifiée.',
      features: ['Plan de conversion', 'Suivi de certification', 'Conseil technique']
    },
    {
      icon: '📊',
      title: 'Analyse de Données',
      description: 'Utilisation de la technologie pour analyser vos données et prendre des décisions éclairées.',
      features: ['Collecte de données', 'Analyse prédictive', 'Tableaux de bord']
    },
    {
      icon: '🤝',
      title: 'Accompagnement Personnalisé',
      description: 'Un conseiller dédié pour vous accompagner dans tous vos projets agricoles.',
      features: ['Visites régulières', 'Conseil stratégique', 'Support continu']
    }
  ];

  return (
    <div className="services-page">
      <PageHeader
        title="L'Excellence de l'Accompagnement"
        subtitle="De la logistique au conseil stratégique, nous sommes le partenaire de votre réussite agricole."
        icon="🤝"
        images={[
          'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=600&fit=crop',
          'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=600&fit=crop',
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=600&fit=crop'
        ]}
      />

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={`https://images.unsplash.com/photo-${['1464226184884-fa280b87c399', '1625246333195-78d9c38ad449', '1500937386664-56d1dfef3854', '1560493676-04071c5f467b', '1441974231531-c6227db76b6e', '1500937386664-56d1dfef3854'][index]}?w=400&h=250&fit=crop`} alt={service.title} />
                </div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="service-button">En savoir plus</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Prêt à améliorer votre exploitation ?</h2>
          <p>Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.</p>
          <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;

