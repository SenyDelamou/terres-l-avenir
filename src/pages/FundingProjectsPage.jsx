import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import InvestmentModal from '../components/InvestmentModal';
import '../styles/FundingProjectsPage.css';

function FundingProjectsPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('tous');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ... (projects data remains the same)

  const projects = [
    {
      id: 1,
      title: 'Serre Solaire pour Production Bio',
      entrepreneur: 'Marie Dubois',
      category: 'Agriculture Biologique',
      amount: 450000000,
      raised: 280000000,
      investors: 12,
      daysLeft: 25,
      location: 'Kindia, Guinée',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=500&fit=crop', // Better greenhouse
      description: 'Installation d\'une serre solaire de 500m² pour la production de légumes bio toute l\'année.',
      verified: true
    },
    {
      id: 2,
      title: 'Élevage de Chèvres Laitières',
      entrepreneur: 'Jean Martin',
      category: 'Élevage',
      amount: 600000000,
      raised: 350000000,
      investors: 18,
      daysLeft: 42,
      location: 'Mamou, Guinée',
      image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=800&h=500&fit=crop', // Better goats
      description: 'Création d\'un élevage de 50 chèvres laitières avec fromagerie artisanale.',
      verified: true
    },
    {
      id: 3,
      title: 'Agroforesterie et Apiculture',
      entrepreneur: 'Sophie Leroy',
      category: 'Agroforesterie',
      amount: 350000000,
      raised: 120000000,
      investors: 8,
      daysLeft: 18,
      location: 'Labé, Guinée',
      image: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?w=800&h=500&fit=crop', // Better honey/agroforestry
      description: 'Plantation d\'arbres fruitiers et installation de 30 ruches pour production de miel.',
      verified: false
    },
    {
      id: 4,
      title: 'Système d\'Irrigation Intelligent',
      entrepreneur: 'Pierre Bernard',
      category: 'Technologies Agricoles',
      amount: 800000000,
      raised: 550000000,
      investors: 25,
      daysLeft: 30,
      location: 'Kankan, Guinée',
      image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&h=500&fit=crop', // Better irrigation
      description: 'Installation d\'un système d\'irrigation connecté avec capteurs IoT pour optimiser la consommation d\'eau.',
      verified: true
    },
    {
      id: 5,
      title: 'Transformation de Fruits en Conserves',
      entrepreneur: 'Luc Moreau',
      category: 'Transformation de Produits',
      amount: 550000000,
      raised: 200000000,
      investors: 10,
      daysLeft: 35,
      location: 'Nzérékoré, Guinée',
      image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=800&h=500&fit=crop', // Better fruit processing
      description: 'Création d\'un atelier de transformation de fruits locaux en confitures et conserves.',
      verified: true
    },
    {
      id: 6,
      title: 'Marché Local Bio',
      entrepreneur: 'Emma Rousseau',
      category: 'Commerce & Distribution',
      amount: 400000000,
      raised: 150000000,
      investors: 7,
      daysLeft: 20,
      location: 'Conakry, Guinée',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=500&fit=crop', // Better organic market
      description: 'Ouverture d\'un marché local dédié aux produits bio de la région.',
      verified: false
    }
  ];

  const categories = ['tous', 'Agriculture Biologique', 'Élevage', 'Agroforesterie', 'Technologies Agricoles', 'Transformation de Produits', 'Commerce & Distribution'];

  const filteredProjects = filter === 'tous'
    ? projects
    : projects.filter(p => p.category === filter);

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'recent') return b.id - a.id;
    if (sortBy === 'amount') return b.amount - a.amount;
    if (sortBy === 'progress') return (b.raised / b.amount) - (a.raised / a.amount);
    return 0;
  });

  return (
    <div className="funding-projects-page">
      <PageHeader
        title="Soutenez l'Innovation Agricole"
        subtitle="Participez à l'essor des projets les plus prometteurs et investissez dans l'avenir du sol."
        icon="💎"
        buttons={[
          {
            label: "Publier un Projet",
            icon: "📤",
            variant: "primary",
            onClick: () => navigate('/publier-projet')
          }
        ]}
      />

      <section className="projects-content">
        <div className="container">
          <div className="projects-header">
            <div className="filters">
              <label>Catégorie :</label>
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'tous' ? 'Toutes les catégories' : cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="sort">
              <label>Trier par :</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="recent">Plus récents</option>
                <option value="amount">Montant élevé</option>
                <option value="progress">Progression</option>
              </select>
            </div>
            <Link to="/publier-projet" className="btn-publish">
              + Publier un Projet
            </Link>
          </div>

          <div className="projects-grid">
            {sortedProjects.map(project => {
              const progress = (project.raised / project.amount) * 100;

              return (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    {project.verified && (
                      <span className="verified-badge">✓ Vérifié</span>
                    )}
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-entrepreneur">
                      <div className="user-icon">👤</div>
                      <span>{project.entrepreneur}</span>
                      <span className="project-location">
                        <span className="loc-icon">📍</span>
                        {project.location}
                      </span>
                    </div>
                    <div className="project-funding">
                      <div className="funding-stats">
                        <div className="funding-stat">
                          <span className="stat-label">Collecté</span>
                          <span className="stat-value">{project.raised.toLocaleString()} GNF</span>
                        </div>
                        <div className="funding-stat">
                          <span className="stat-label">Objectif</span>
                          <span className="stat-value">{project.amount.toLocaleString()} GNF</span>
                        </div>
                        <div className="funding-stat">
                          <span className="stat-label">Investisseurs</span>
                          <span className="stat-value">{project.investors}</span>
                        </div>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="progress-info">
                        <span>{Math.round(progress)}% financé</span>
                        <span>{project.daysLeft} jours restants</span>
                      </div>
                    </div>
                    <div className="project-actions">
                      <button
                        className="btn-invest"
                        onClick={() => {
                          setSelectedProject(project);
                          setIsModalOpen(true);
                        }}
                      >
                        Investir
                      </button>
                      <Link to={`/projet/${project.id}`} className="btn-details">
                        Voir détails
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedProject && (
        <InvestmentModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default FundingProjectsPage;

