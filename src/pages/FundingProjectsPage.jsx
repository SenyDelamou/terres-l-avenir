import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import '../styles/FundingProjectsPage.css';

function FundingProjectsPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('tous');
  const [sortBy, setSortBy] = useState('recent');

  const projects = [
    {
      id: 1,
      title: 'Serre Solaire pour Production Bio',
      entrepreneur: 'Marie Dubois',
      category: 'Agriculture Biologique',
      amount: 45000,
      raised: 28000,
      investors: 12,
      daysLeft: 25,
      location: 'Normandie, France',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop',
      description: 'Installation d\'une serre solaire de 500m² pour la production de légumes bio toute l\'année.',
      verified: true
    },
    {
      id: 2,
      title: 'Élevage de Chèvres Laitières',
      entrepreneur: 'Jean Martin',
      category: 'Élevage',
      amount: 60000,
      raised: 35000,
      investors: 18,
      daysLeft: 42,
      location: 'Auvergne, France',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop',
      description: 'Création d\'un élevage de 50 chèvres laitières avec fromagerie artisanale.',
      verified: true
    },
    {
      id: 3,
      title: 'Agroforesterie et Apiculture',
      entrepreneur: 'Sophie Leroy',
      category: 'Agroforesterie',
      amount: 35000,
      raised: 12000,
      investors: 8,
      daysLeft: 18,
      location: 'Provence, France',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      description: 'Plantation d\'arbres fruitiers et installation de 30 ruches pour production de miel.',
      verified: false
    },
    {
      id: 4,
      title: 'Système d\'Irrigation Intelligent',
      entrepreneur: 'Pierre Bernard',
      category: 'Technologies Agricoles',
      amount: 80000,
      raised: 55000,
      investors: 25,
      daysLeft: 30,
      location: 'Centre, France',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
      description: 'Installation d\'un système d\'irrigation connecté avec capteurs IoT pour optimiser la consommation d\'eau.',
      verified: true
    },
    {
      id: 5,
      title: 'Transformation de Fruits en Conserves',
      entrepreneur: 'Luc Moreau',
      category: 'Transformation de Produits',
      amount: 55000,
      raised: 20000,
      investors: 10,
      daysLeft: 35,
      location: 'Aquitaine, France',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop',
      description: 'Création d\'un atelier de transformation de fruits locaux en confitures et conserves.',
      verified: true
    },
    {
      id: 6,
      title: 'Marché Local Bio',
      entrepreneur: 'Emma Rousseau',
      category: 'Commerce & Distribution',
      amount: 40000,
      raised: 15000,
      investors: 7,
      daysLeft: 20,
      location: 'Île-de-France, France',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop',
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
                      <span>👤</span>
                      <span>{project.entrepreneur}</span>
                      <span className="project-location">📍 {project.location}</span>
                    </div>
                    <div className="project-funding">
                      <div className="funding-stats">
                        <div className="funding-stat">
                          <span className="stat-label">Collecté</span>
                          <span className="stat-value">{project.raised.toLocaleString()} €</span>
                        </div>
                        <div className="funding-stat">
                          <span className="stat-label">Objectif</span>
                          <span className="stat-value">{project.amount.toLocaleString()} €</span>
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
                      <button className="btn-invest">Investir</button>
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
    </div>
  );
}

export default FundingProjectsPage;

