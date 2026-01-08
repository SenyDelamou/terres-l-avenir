import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, BookOpen, Droplets, Leaf, BarChart3, Users, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import '../styles/ServicesPage.css';

function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Activity size={32} />,
      title: 'Diagnostic Agricole',
      tagline: 'Analysez pour mieux produire',
      description: 'Audit complet de votre exploitation pour identifier les leviers de croissance immédiats.',
      features: ['Analyse approfondie des sols', 'Audit phytosanitaire', 'Recommandations stratégiques'],
      details: 'Notre diagnostic 360° utilise des capteurs IoT et l\'imagerie satellitaire pour cartographier la santé de votre exploitation. Vous recevez un rapport détaillé avec des actions correctives priorisées.'
    },
    {
      id: 2,
      icon: <BookOpen size={32} />,
      title: 'Formation & Conseil',
      tagline: 'L\'expertise à votre portée',
      description: 'Programmes de formation sur-mesure pour maîtriser les agricultures de demain.',
      features: ['Ateliers pratiques sur site', 'Formation Agriculture 4.0', 'Mentorat continu'],
      details: 'Nos experts agronomes se déplacent chez vous pour des sessions pratiques. Nous couvrons tout, de la permaculture à la gestion automatisée des serres.'
    },
    {
      id: 3,
      icon: <Droplets size={32} />,
      title: 'Irrigation Intelligente',
      tagline: 'Chaque goutte compte',
      description: 'Systèmes d\'irrigation optimisés pour réduire votre consommation d\'eau de 40%.',
      features: ['Design hydraulique sur mesure', 'Installation goutte-à-goutte', 'Automatisation par capteurs'],
      details: 'Installation clé en main de systèmes d\'irrigation connectés. Contrôlez l\'arrosage depuis votre smartphone et recevez des alertes en cas de fuite.'
    },
    {
      id: 4,
      icon: <Leaf size={32} />,
      title: 'Certification Bio',
      tagline: 'Valorisez votre production',
      description: 'Accompagnement de A à Z vers la certification biologique et l\'accès aux marchés premium.',
      features: ['Plan de conversion bio', 'Préparation aux audits', 'Sourcing de bio-intrants'],
      details: 'Nous gérons la complexité administrative de la certification BIO. Nous vous aidons également à trouver des acheteurs prêts à payer le juste prix pour vos produits certifiés.'
    },
    {
      id: 5,
      icon: <BarChart3 size={32} />,
      title: 'Agriculture de Précision',
      tagline: 'Pilotez par la donnée',
      description: 'Exploitez la puissance du Big Data pour prendre des décisions factuelles et rentables.',
      features: ['Cartographie de rendement', 'Modélisation prédictive', 'Tableaux de bord de gestion'],
      details: 'Transformez vos données brutes en stratégie gagnante. Nos outils prédisent les maladies, optimisent les dates de récolte et maximisent votre marge brute.'
    },
    {
      id: 6,
      icon: <Users size={32} />,
      title: 'Suivi Personnalisé',
      tagline: 'Un partenaire dédié',
      description: 'Un agronome référent à vos côtés pour suivre l\'évolution de votre projet, saison après saison.',
      features: ['Visites mensuelles', 'Support prioritaire 7j/7', 'Ajustement stratégique'],
      details: 'Plus qu\'un service, un partenariat. Votre agronome référent connaît chaque parcelle de votre terre et s\'engage sur vos résultats à long terme.'
    }
  ];

  return (
    <div className="services-page-premium">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge-glass">
            <span>Nos Expertises</span>
          </div>
          <h1>L'Excellence au Service de <br /><span className="text-highlight">Votre Terre</span></h1>
          <p>Des solutions technologiques de pointe et un accompagnement humain pour transformer votre exploitation.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list-section">
        <div className="container">
          <div className="services-grid-premium">
            {services.map((service) => (
              <div key={service.id} className="service-card-glass" onClick={() => setSelectedService(service)}>
                <div className="card-icon-wrapper">
                  {service.icon}
                </div>
                <div className="card-content">
                  <span className="service-tagline">{service.tagline}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="card-footer">
                    <span className="learn-more">Découvrir <ArrowRight size={16} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedService && (
        <div className="modal-backdrop-premium" onClick={() => setSelectedService(null)}>
          <div className="modal-glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-modal" onClick={() => setSelectedService(null)}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className="modal-icon-large">
                {selectedService.icon}
              </div>
              <div className="modal-title-group">
                <span className="modal-tag">Service Premium</span>
                <h2>{selectedService.title}</h2>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedService.details}</p>

              <div className="features-list">
                <h4>Inclus dans ce service :</h4>
                <ul>
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions">
                <Link to="/contact" className="btn-cta-primary">
                  Demander un Devis
                </Link>
                <button className="btn-cta-secondary" onClick={() => setSelectedService(null)}>
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <section className="services-cta">
        <div className="cta-container-glass">
          <h2>Vous ne trouvez pas ce que vous cherchez ?</h2>
          <p>Nos experts peuvent concevoir une solution sur-mesure pour votre exploitation.</p>
          <Link to="/contact" className="btn-white-glow">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
