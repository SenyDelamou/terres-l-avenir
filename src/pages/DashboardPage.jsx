import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DashboardPage.css';

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

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
      date: '15 Mars 2024'
    },
    {
      id: 2,
      title: 'Conversion vers le bio',
      status: 'Terminé',
      progress: 100,
      date: '10 Février 2024'
    },
    {
      id: 3,
      title: 'Installation serre moderne',
      status: 'En attente',
      progress: 0,
      date: '1 Avril 2024'
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
      <section className="page-header">
        <div className="container">
          <h1>Mon Tableau de Bord</h1>
          <p>Gérez vos projets et suivez votre activité</p>
        </div>
      </section>

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
                    <Link to="/nouveau-projet" className="btn-primary">+ Nouveau Projet</Link>
                  </div>
                  <div className="projects-grid">
                    {recentProjects.map(project => (
                      <div key={project.id} className="project-card">
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
                    ))}
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
                      <h3>💡 Vous avez un projet agricole ?</h3>
                      <p>Publiez votre projet et trouvez des investisseurs pour le financer. Notre plateforme connecte les jeunes entrepreneurs avec des investisseurs passionnés par l'agriculture.</p>
                      <Link to="/publier-projet" className="btn-primary">Créer un projet</Link>
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
                        <input type="email" defaultValue="jean.dupont@example.com" />
                      </div>
                      <div className="form-group">
                        <label>Téléphone</label>
                        <input type="tel" defaultValue="+33 6 12 34 56 78" />
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

