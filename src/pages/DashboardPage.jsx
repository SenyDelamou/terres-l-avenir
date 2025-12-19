import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import '../styles/DashboardPage.css';

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [newProject, setNewProject] = useState({
    title: '',
    category: '',
    budget: '',
    description: ''
  });
  const [isSubmittingNewProject, setIsSubmittingNewProject] = useState(false);

  const stats = {
    projects: 3,
    forumPosts: 12,
    messages: 5,
    consultations: 8
  };

  const recentProjects = [
    {
      id: 1,
      title: 'Projet d\'irrigation solaire',
      status: 'En cours',
      progress: 65,
      date: '15 Mars 2024',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Conversion vers le bio',
      status: 'Terminé',
      progress: 100,
      date: '10 Février 2024',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Installation serre moderne',
      status: 'En attente',
      progress: 0,
      date: '1 Avril 2024',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop'
    }
  ];

  const forumActivity = [
    {
      id: 1,
      title: 'Comment améliorer la fertilité du sol ?',
      replies: 8,
      date: 'Il y a 2 jours'
    },
    {
      id: 2,
      title: 'Rotation des cultures - conseils',
      replies: 5,
      date: 'Il y a 5 jours'
    }
  ];

  return (
    <div className="dashboard-page">
      <PageHeader
        title="Votre Exploitation Connectée"
        subtitle="Suivez vos progrès, gérez vos récoltes et optimisez vos performances en un coup d'œil."
        icon="📊"
        images={[
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=600&fit=crop',
          'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&h=600&fit=crop',
          'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=600&fit=crop'
        ]}
      />

      <section className="dashboard-content">
        <div className="container">
          <div className="dashboard-layout">
            <aside className="dashboard-sidebar">
              <div className="user-profile-card">
                <div className="user-avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" alt="Profil" />
                </div>
                <h3>Jean Dupont</h3>
                <p className="user-role">Agriculteur</p>
                <Link to="/profil" className="btn-edit-profile">Modifier le profil</Link>
              </div>

              <nav className="dashboard-nav">
                <button
                  className={activeTab === 'overview' ? 'active' : ''}
                  onClick={() => setActiveTab('overview')}
                >
                  <span>📊</span> Vue d'ensemble
                </button>
                <button
                  className={activeTab === 'projects' ? 'active' : ''}
                  onClick={() => setActiveTab('projects')}
                >
                  <span>🌾</span> Mes Projets
                </button>
                <button
                  className={activeTab === 'funding' ? 'active' : ''}
                  onClick={() => setActiveTab('funding')}
                >
                  <span>💰</span> Financement
                </button>
                <button
                  className={activeTab === 'forum' ? 'active' : ''}
                  onClick={() => setActiveTab('forum')}
                >
                  <span>💬</span> Forum
                </button>
                <button
                  className={activeTab === 'settings' ? 'active' : ''}
                  onClick={() => setActiveTab('settings')}
                >
                  <span>⚙️</span> Paramètres
                </button>
              </nav>
            </aside>

            <main className="dashboard-main">
              {activeTab === 'overview' && (
                <div className="dashboard-tab">
                  <div className="stats-cards">
                    <div className="stat-card">
                      <div className="stat-icon">🌾</div>
                      <div className="stat-info">
                        <h3>{stats.projects}</h3>
                        <p>Projets actifs</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">💬</div>
                      <div className="stat-info">
                        <h3>{stats.forumPosts}</h3>
                        <p>Messages forum</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">📧</div>
                      <div className="stat-info">
                        <h3>{stats.messages}</h3>
                        <p>Messages</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">📅</div>
                      <div className="stat-info">
                        <h3>{stats.consultations}</h3>
                        <p>Consultations</p>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-sections">
                    <div className="dashboard-section">
                      <h2>Mes Projets Récents</h2>
                      <div className="projects-list">
                        {recentProjects.map(project => (
                          <div key={project.id} className="project-item">
                            <div className="project-image-small">
                              <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                              <h4>{project.title}</h4>
                              <p className="project-date">{project.date}</p>
                            </div>
                            <div className="project-status">
                              <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                                {project.status}
                              </span>
                              {project.progress > 0 && (
                                <div className="progress-bar">
                                  <div
                                    className="progress-fill"
                                    style={{ width: `${project.progress}%` }}
                                  ></div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link to="/dashboard?tab=projects" className="btn-view-all">Voir tous les projets</Link>
                    </div>

                    <div className="dashboard-section">
                      <h2>Activité Forum</h2>
                      <div className="forum-activity-list">
                        {forumActivity.map(activity => (
                          <div key={activity.id} className="activity-item">
                            <h4>{activity.title}</h4>
                            <div className="activity-meta">
                              <span>💬 {activity.replies} réponses</span>
                              <span>{activity.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link to="/forum" className="btn-view-all">Voir le forum</Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="dashboard-tab">
                  <div className="tab-header">
                    <h2>Mes Projets</h2>
                  </div>
                  <div className="projects-grid">
                    {recentProjects.map(project => (
                      <div key={project.id} className="project-card">
                        <div className="project-card-image">
                          <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-card-content">
                          <h3>{project.title}</h3>
                          <div className="project-meta">
                            <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                              {project.status}
                            </span>
                            <span className="project-date">{project.date}</span>
                          </div>
                          {project.progress > 0 && (
                            <div className="progress-section">
                              <div className="progress-info">
                                <span>Progression</span>
                                <span>{project.progress}%</span>
                              </div>
                              <div className="progress-bar">
                                <div
                                  className="progress-fill"
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                          <div className="project-actions">
                            <button className="btn-secondary">Voir détails</button>
                            <button className="btn-edit">Modifier</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="new-project-form-card">
                    <h3>Créer un nouveau projet</h3>
                    <p className="new-project-text">
                      Remplissez ce formulaire rapide pour préparer un nouveau projet. Pour une fiche complète,
                      vous pourrez ensuite le publier dans la section financement.
                    </p>
                    <form
                      className="new-project-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!newProject.title.trim() || !newProject.category || !newProject.budget) {
                          alert('Veuillez renseigner au minimum le titre, la catégorie et le budget estimé.');
                          return;
                        }
                        setIsSubmittingNewProject(true);
                        setTimeout(() => {
                          setIsSubmittingNewProject(false);
                          alert('Votre projet a été créé dans votre espace. Vous pourrez le publier pour financement via la section Financement.');
                          setNewProject({
                            title: '',
                            category: '',
                            budget: '',
                            description: ''
                          });
                        }, 1200);
                      }}
                    >
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="newProjectTitle">Titre du projet *</label>
                          <input
                            id="newProjectTitle"
                            type="text"
                            value={newProject.title}
                            onChange={(e) =>
                              setNewProject((prev) => ({ ...prev, title: e.target.value }))
                            }
                            placeholder="Ex : Serre maraîchère bio"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="newProjectCategory">Catégorie *</label>
                          <select
                            id="newProjectCategory"
                            value={newProject.category}
                            onChange={(e) =>
                              setNewProject((prev) => ({ ...prev, category: e.target.value }))
                            }
                          >
                            <option value="">Sélectionner</option>
                            <option value="Agriculture Biologique">Agriculture Biologique</option>
                            <option value="Élevage">Élevage</option>
                            <option value="Agroforesterie">Agroforesterie</option>
                            <option value="Technologies Agricoles">Technologies Agricoles</option>
                            <option value="Transformation de Produits">Transformation de Produits</option>
                            <option value="Commerce & Distribution">Commerce & Distribution</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="newProjectBudget">Budget estimé (GNF) *</label>
                          <input
                            id="newProjectBudget"
                            type="number"
                            min="0"
                            value={newProject.budget}
                            onChange={(e) =>
                              setNewProject((prev) => ({ ...prev, budget: e.target.value }))
                            }
                            placeholder="Ex : 250,000,000"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="newProjectDescription">Description (bref résumé)</label>
                        <textarea
                          id="newProjectDescription"
                          rows="3"
                          value={newProject.description}
                          onChange={(e) =>
                            setNewProject((prev) => ({ ...prev, description: e.target.value }))
                          }
                          placeholder="Expliquez en quelques lignes votre idée de projet..."
                        ></textarea>
                      </div>
                      <div className="form-actions">
                        <button
                          type="submit"
                          className="btn-primary"
                          disabled={isSubmittingNewProject}
                        >
                          {isSubmittingNewProject ? 'Création en cours...' : 'Enregistrer le projet'}
                        </button>
                        <Link to="/publier-projet" className="btn-secondary">
                          Passer au formulaire complet
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {activeTab === 'funding' && (
                <div className="dashboard-tab">
                  <div className="tab-header">
                    <h2>Financement de Projets</h2>
                    <Link to="/publier-projet" className="btn-primary">+ Publier un Projet</Link>
                  </div>
                  <div className="funding-info">
                    <div className="info-card">
                      <div className="info-card-image">
                        <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=300&fit=crop" alt="Financement" />
                      </div>
                      <div className="info-card-content">
                        <h3>💡 Vous avez un projet agricole ?</h3>
                        <p>Publiez votre projet et trouvez des investisseurs pour le financer. Notre plateforme connecte les jeunes entrepreneurs avec des investisseurs passionnés par l'agriculture.</p>
                        <Link to="/publier-projet" className="btn-primary">Créer un projet</Link>
                      </div>
                    </div>
                  </div>
                  <div className="my-funding-projects">
                    <h3>Mes Projets de Financement</h3>
                    <p className="empty-state">Vous n'avez pas encore publié de projet de financement.</p>
                    <Link to="/publier-projet" className="btn-primary">Publier mon premier projet</Link>
                  </div>
                </div>
              )}

              {activeTab === 'forum' && (
                <div className="dashboard-tab">
                  <h2>Mes Activités Forum</h2>
                  <div className="forum-dashboard">
                    <div className="forum-stats">
                      <div className="forum-stat-item">
                        <h3>12</h3>
                        <p>Messages publiés</p>
                      </div>
                      <div className="forum-stat-item">
                        <h3>8</h3>
                        <p>Réponses reçues</p>
                      </div>
                      <div className="forum-stat-item">
                        <h3>5</h3>
                        <p>Sujets créés</p>
                      </div>
                    </div>
                    <Link to="/forum" className="btn-primary">Aller au forum</Link>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="dashboard-tab">
                  <h2>Paramètres</h2>
                  <div className="settings-section">
                    <h3>Informations Personnelles</h3>
                    <form className="settings-form">
                      <div className="form-group">
                        <label>Nom complet</label>
                        <input type="text" defaultValue="Jean Dupont" />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" defaultValue="samakedelamou858@gmail.com" />
                      </div>
                      <div className="form-group">
                        <label>Téléphone</label>
                        <input type="tel" defaultValue="+224 623 59 01 51" />
                      </div>
                      <button type="submit" className="btn-primary">Enregistrer les modifications</button>
                    </form>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;

