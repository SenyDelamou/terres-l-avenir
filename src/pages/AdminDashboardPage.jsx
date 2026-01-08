import { useState, useEffect } from 'react';
import {
    ShieldCheck, Search, Bell, LogOut, Check, X, Filter, LayoutDashboard
} from 'lucide-react';
import '../styles/DashboardPage.css'; // Reuse Dashboard styles for consistency + new Admin styles

function AdminDashboardPage() {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all'); // all, pending, approved

    useEffect(() => {
        // Load projects from localStorage (Simulating Database)
        const saved = localStorage.getItem('agriPulse_projects');
        if (saved) {
            setProjects(JSON.parse(saved));
        }
    }, []);

    const updateStatus = (id, newStatus) => {
        const updatedProjects = projects.map(p =>
            p.id === id ? { ...p, status: newStatus } : p
        );
        setProjects(updatedProjects);
        localStorage.setItem('agriPulse_projects', JSON.stringify(updatedProjects));
    };

    const filteredProjects = projects.filter(p => {
        if (filter === 'pending') return p.status === 'En attente';
        if (filter === 'approved') return p.status === 'En cours';
        return true;
    });

    return (
        <div className="dashboard-premium-layout">
            {/* Admin Sidebar */}
            <aside className="sidebar-glass" style={{ borderColor: 'rgba(251, 191, 36, 0.2)' }}>
                <div className="sidebar-logo">
                    <div className="logo-icon" style={{ background: '#FBBF24', boxShadow: '0 0 15px rgba(251, 191, 36, 0.4)' }}>
                        <ShieldCheck size={24} color="#0d141a" />
                    </div>
                    <span>AdminPanel</span>
                </div>

                <nav className="nav-glass">
                    <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
                        <LayoutDashboard size={20} /> <span>Tout les Projets</span>
                    </button>
                    <button className={filter === 'pending' ? 'active' : ''} onClick={() => setFilter('pending')}>
                        <Filter size={20} /> <span>En Attente</span>
                        <span className="badge" style={{ position: 'static', marginLeft: 'auto', background: '#fbbf24' }}>
                            {projects.filter(p => p.status === 'En attente').length}
                        </span>
                    </button>
                </nav>

                <div className="user-profile-glass">
                    <img src="https://ui-avatars.com/api/?name=Admin+User&background=FBBF24&color=000" alt="Admin" />
                    <div className="user-text">
                        <strong>Administrateur</strong>
                        <span>Super User</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-glass">
                <header className="topbar-glass">
                    <div className="page-title">
                        <h1>Gestion des Projets</h1>
                        <p>Validation et modération</p>
                    </div>
                    <div className="topbar-actions">
                        <div className="search-glass">
                            <Search size={18} />
                            <input type="text" placeholder="Rechercher... (ID, Nom)" />
                        </div>
                    </div>
                </header>

                <div className="content-scrollable">
                    <div className="module-container">
                        <div className="glass-header-lg">
                            <h2>Demandes de Projets</h2>
                        </div>

                        <div className="projects-grid-glass">
                            {filteredProjects.length === 0 && (
                                <div className="empty-tab-glass" style={{ height: '200px' }}>
                                    <p>Aucun projet trouvé.</p>
                                </div>
                            )}

                            {filteredProjects.map(p => (
                                <div key={p.id} className="project-card-premium" style={{ borderColor: p.status === 'En attente' ? '#fbbf24' : 'rgba(255,255,255,0.1)' }}>
                                    <div className="card-media">
                                        <img src={p.image} alt={p.title} />
                                        <span className={`status-badge ${p.status.toLowerCase().replace(' ', '-')}`}>{p.status}</span>
                                    </div>
                                    <div className="card-content">
                                        <h3>{p.title}</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                            {p.description ? p.description.substring(0, 60) + '...' : 'Pas de description'}
                                        </p>
                                        <div className="meta-row">
                                            <span>💰 {p.amount}</span>
                                            <span>📍 {p.location}</span>
                                        </div>

                                        {p.status === 'En attente' && (
                                            <div className="card-actions" style={{ marginTop: '1.5rem' }}>
                                                <button
                                                    className="action-btn"
                                                    style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', borderColor: '#22c55e' }}
                                                    onClick={() => updateStatus(p.id, 'En cours')}
                                                >
                                                    <Check size={18} /> Valider
                                                </button>
                                                <button
                                                    className="action-btn icon-only"
                                                    style={{ color: '#ef4444', borderColor: '#ef4444' }}
                                                    onClick={() => updateStatus(p.id, 'Rejeté')}
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminDashboardPage;
