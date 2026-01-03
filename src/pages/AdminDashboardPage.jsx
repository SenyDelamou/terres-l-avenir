import { useState } from 'react';
import {
    LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import {
    ShieldCheck, Users, Sprout, ShoppingCart, Activity,
    Search, Bell, Plus, Calendar, Filter,
    MoreHorizontal, CheckCircle, XCircle, AlertTriangle,
    ArrowUpRight, ArrowDownRight, LayoutDashboard, MessageSquare, Settings, LogOut, ChevronRight,
    Trash2, Shield, UserX, ExternalLink, RefreshCw, FileText, Eye, Send, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/AdminDashboardPage.css';

const platformGrowth = [
    { name: 'Jan', users: 120, revenue: 4500 },
    { name: 'Feb', users: 210, revenue: 5200 },
    { name: 'Mar', users: 450, revenue: 8900 },
    { name: 'Apr', users: 890, revenue: 12400 },
    { name: 'May', users: 1200, revenue: 15600 },
    { name: 'Jun', users: 1850, revenue: 22400 },
];

const categoryData = [
    { name: 'Cultures', value: 45, color: '#1a472a' },
    { name: 'Élevage', value: 25, color: '#4a7c2a' },
    { name: 'Matériel', value: 20, color: '#5c8d3e' },
    { name: 'Services', value: 10, color: '#a3b899' },
];

function AdminDashboardPage() {
    const [activeTab, setActiveTab] = useState('overview');
    const [searchQuery, setSearchQuery] = useState('');

    // Document Verification State
    const [selectedProject, setSelectedProject] = useState(null);
    const [docsRead, setDocsRead] = useState(false);
    const [rejectionMode, setRejectionMode] = useState(false);
    const [rejectionReason, setRejectionReason] = useState('');

    // Operational State
    const [users, setUsers] = useState([
        { id: 1, name: 'Jean Dupont', email: 'jean@agri.com', role: 'Agriculteur', status: 'Actif', joined: '2024-03-15' },
        { id: 2, name: 'Marie Sy', email: 'marie@market.com', role: 'Acheteur', status: 'Actif', joined: '2024-04-10' },
        { id: 3, name: 'Kevin Kamano', email: 'kevin@test.com', role: 'Agriculteur', status: 'Suspendu', joined: '2024-01-20' },
        { id: 4, name: 'Diarra B.', email: 'diarra@expert.com', role: 'Investisseur', status: 'Vérification', joined: '2024-05-02' },
    ]);

    const [projects, setProjects] = useState([
        {
            id: 1, title: 'Irrigation Solaire Fria', owner: 'M. Bangoura', budget: '150M GNF', status: 'Approuvé',
            documents: ['Plan_Technique.pdf', 'Etude_Impact.pdf', 'Budget_Detaille.xlsx']
        },
        {
            id: 2, title: 'Culture Bananes Coyah', owner: 'A. Diallo', budget: '45M GNF', status: 'En attente',
            documents: ['Titre_Foncier.pdf', 'Plan_Agronomique.pdf']
        },
        {
            id: 3, title: 'Élevage Volaille Dubréka', owner: 'S. Condé', budget: '80M GNF', status: 'Signalé',
            documents: ['Permis_Exploitation.pdf']
        },
    ]);

    const [marketplaceItems, setMarketplaceItems] = useState([
        { id: 1, name: 'Tracteur Kubota', seller: 'InterAgri', price: '450M GNF', condition: 'Occasion' },
        { id: 2, name: 'Semences Maïs', seller: 'BioSeed', price: '250k GNF', condition: 'Neuf' },
    ]);

    const adminStats = [
        { label: 'Utilisateurs Totaux', value: users.length * 460, trend: '+24%', icon: <Users size={20} />, color: 'blue' },
        { label: 'Projets Actifs', value: projects.filter(p => p.status === 'Approuvé').length, trend: '+12%', icon: <Sprout size={20} />, color: 'green' },
        { label: 'Ventes Globales', value: '45.2M GNF', trend: '+18%', icon: <ShoppingCart size={20} />, color: 'purple' },
        { label: 'Santé Système', value: '99.9%', trend: 'Stable', icon: <Activity size={20} />, color: 'orange' },
    ];

    const handleUserStatus = (userId, newStatus) => {
        setUsers(users.map(u => u.id === userId ? { ...u, status: newStatus } : u));
    };

    const handleProjectAction = (projectId, newStatus) => {
        if (newStatus === 'Rejeté') {
            // Just update status for quick actions outside modal if needed,
            // but typically rejection requires a reason now.
            setProjects(projects.map(p => p.id === projectId ? { ...p, status: newStatus } : p));
        } else {
            setProjects(projects.map(p => p.id === projectId ? { ...p, status: newStatus } : p));
        }
    };

    const openProjectReview = (project) => {
        setSelectedProject(project);
        setDocsRead(false);
        setRejectionMode(false);
        setRejectionReason('');
    };

    const closeProjectReview = () => {
        setSelectedProject(null);
    };

    const confirmRejection = () => {
        if (!rejectionReason.trim()) return;
        setProjects(projects.map(p => p.id === selectedProject.id ? { ...p, status: 'Rejeté' } : p));
        alert(`Message envoyé à ${selectedProject.owner}: "${rejectionReason}"`);
        closeProjectReview();
    };

    const confirmApproval = () => {
        if (!docsRead) return;
        setProjects(projects.map(p => p.id === selectedProject.id ? { ...p, status: 'Approuvé' } : p));
        closeProjectReview();
    };

    const renderOverview = () => (
        <div className="admin-overview">
            <div className="stats-grid">
                {adminStats.map((stat, idx) => (
                    <div key={idx} className={`stat-card-modern ${stat.color}`}>
                        <div className="stat-card-header">
                            <span className="stat-icon-wrapper">{stat.icon}</span>
                            <span className="stat-trend positive">
                                <ArrowUpRight size={14} /> {stat.trend}
                            </span>
                        </div>
                        <div className="stat-card-body">
                            <span className="stat-value">{stat.value}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="charts-row">
                <div className="main-chart-card">
                    <div className="card-header">
                        <h3>Croissance de la Plateforme</h3>
                    </div>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={platformGrowth}>
                                <defs>
                                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1a472a" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#1a472a" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-light)', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-light)', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '12px' }}
                                    itemStyle={{ color: 'var(--color-primary)' }}
                                />
                                <Area type="monotone" dataKey="users" stroke="#1a472a" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
                                <Area type="monotone" dataKey="revenue" stroke="#4a7c2a" strokeWidth={3} fill="transparent" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="side-chart-card">
                    <div className="card-header">
                        <h3>Répartition Activité</h3>
                    </div>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={220}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="secondary-row">
                <div className="approvals-section">
                    <h3>Alertes & Signalements</h3>
                    <div className="approvals-list">
                        {projects.filter(p => p.status === 'En attente' || p.status === 'Signalé').map(item => (
                            <div key={item.id} className="approval-row">
                                <div className={`approval-type-icon ${item.status === 'Signalé' ? 'system' : 'projet'}`}>
                                    {item.status === 'Signalé' ? <AlertTriangle size={16} /> : <Sprout size={16} />}
                                </div>
                                <div className="approval-info">
                                    <h4>{item.title}</h4>
                                    <span>Déposé par {item.owner} • {item.budget}</span>
                                </div>
                                <button onClick={() => openProjectReview(item)} className="btn-review">Examiner</button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="system-health-card">
                    <h3>Santé Services</h3>
                    <div className="health-metrics">
                        <div className="metric-row"><span>Auth Service</span><div className="metric-indicator active"></div></div>
                        <div className="metric-row"><span>Payment API</span><div className="metric-indicator active"></div></div>
                        <div className="metric-row"><span>Storage</span><div className="metric-indicator active"></div></div>
                        <div className="metric-row"><span>Email worker</span><div className="metric-indicator warning"></div></div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderUsers = () => (
        <div className="admin-module">
            <div className="module-header">
                <h2>Gestion des Utilisateurs</h2>
                <div className="module-actions">
                    <div className="search-box-mini">
                        <Search size={16} />
                        <input
                            type="text"
                            placeholder="Chercher nom, email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Rôle</th>
                            <th>Statut</th>
                            <th>Inscription</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase())).map(user => (
                            <tr key={user.id}>
                                <td><strong>{user.name}</strong></td>
                                <td>{user.email}</td>
                                <td><span className="role-tag">{user.role}</span></td>
                                <td><span className={`status-pill ${user.status.toLowerCase()}`}>{user.status}</span></td>
                                <td>{user.joined}</td>
                                <td className="actions-cell">
                                    <button onClick={() => handleUserStatus(user.id, 'Actif')} title="Activer"><Shield size={16} /></button>
                                    <button onClick={() => handleUserStatus(user.id, 'Suspendu')} title="Suspendre"><UserX size={16} /></button>
                                    <button className="delete-btn"><Trash2 size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderProjects = () => (
        <div className="admin-module">
            <div className="module-header">
                <h2>Gestion des Projets</h2>
            </div>
            <div className="projects-grid-admin">
                {projects.map(proj => (
                    <div key={proj.id} className="project-admin-card">
                        <div className="card-head">
                            <h3>{proj.title}</h3>
                            <span className={`status-badge ${proj.status.toLowerCase().replace(' ', '-')}`}>{proj.status}</span>
                        </div>
                        <p>Porteur: <strong>{proj.owner}</strong></p>
                        <p>Budget: {proj.budget}</p>
                        <div className="card-actions-row">
                            <button onClick={() => openProjectReview(proj)} className="btn-review">Détails & Docs</button>
                            <button className="btn-view-ext"><ExternalLink size={16} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="dashboard-page-modern admin-mode">
            <div className="dashboard-sidebar-elite">
                <div className="sidebar-brand">
                    <ShieldCheck size={32} color="var(--color-primary)" />
                    <span>AgriPlus Admin</span>
                </div>

                <nav className="elite-nav">
                    <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
                        <LayoutDashboard size={20} /> <span className="nav-label">Supervision</span>
                    </button>
                    <button className={activeTab === 'users' ? 'active' : ''} onClick={() => setActiveTab('users')}>
                        <Users size={20} /> <span className="nav-label">Utilisateurs</span>
                    </button>
                    <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
                        <Sprout size={20} /> <span className="nav-label">Projets</span>
                    </button>
                    <button className={activeTab === 'marketplace' ? 'active' : ''} onClick={() => setActiveTab('marketplace')}>
                        <ShoppingCart size={20} /> <span className="nav-label">Marché</span>
                    </button>
                    <div className="nav-divider"></div>
                    <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
                        <Settings size={20} /> <span className="nav-label">Configuration</span>
                    </button>
                </nav>

                <div className="sidebar-footer">
                    <div className="user-mini-card">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" alt="" />
                        <div className="user-info">
                            <strong>Admin Principal</strong>
                            <span>Gestion Globale</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-main-content">
                <header className="dashboard-top-bar">
                    <div className="search-box-modern">
                        <Search size={18} />
                        <input type="text" placeholder="Gérer les comptes, les annonces..." />
                    </div>
                    <div className="top-bar-actions">
                        <button className="icon-btn" onClick={() => window.location.reload()}><RefreshCw size={20} /></button>
                        <button className="icon-btn"><Bell size={20} /></button>
                        <button className="btn-create-header">
                            <Plus size={18} /> <span>Nouvel Admin</span>
                        </button>
                    </div>
                </header>

                <div className="dashboard-scroll-area">
                    {activeTab === 'overview' && renderOverview()}
                    {activeTab === 'users' && renderUsers()}
                    {activeTab === 'projects' && renderProjects()}

                    {(activeTab === 'marketplace' || activeTab === 'settings') && (
                        <div className="placeholder-tab">
                            <div className="empty-state-modern">
                                <div className="empty-icon-box">
                                    {activeTab === 'marketplace' && <ShoppingCart size={48} />}
                                    {activeTab === 'settings' && <Settings size={48} />}
                                </div>
                                <h2>Module Administrateur</h2>
                                <p>Le module {activeTab} est en cours de synchronisation avec les services AgriPlus.</p>
                                <button className="btn-primary-elite" onClick={() => setActiveTab('overview')}>Retour</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Verification Modal */}
            {selectedProject && (
                <div className="modal-overlay">
                    <div className="modal-content-verification">
                        <button className="modal-close-btn" onClick={closeProjectReview}><X size={20} /></button>
                        <div className="modal-header">
                            <h2>Vérification: {selectedProject.title}</h2>
                            <span className={`status-pill ${selectedProject.status.toLowerCase()}`}>{selectedProject.status}</span>
                        </div>

                        <div className="verification-body">
                            <div className="doc-section">
                                <h3>Documents Requis</h3>
                                <p className="instruction-text">Vous devez consulter tous les documents avant de pouvoir valider ce projet.</p>
                                <div className="doc-list">
                                    {selectedProject.documents && selectedProject.documents.map((doc, idx) => (
                                        <div key={idx} className="doc-item" onClick={() => setDocsRead(true)}>
                                            <FileText size={20} />
                                            <span>{doc}</span>
                                            <button className="btn-read">Lire</button>
                                        </div>
                                    ))}
                                    {(!selectedProject.documents || selectedProject.documents.length === 0) && <p>Aucun document soumis.</p>}
                                </div>
                                {docsRead && <div className="docs-status success"><CheckCircle size={16} /> Documents consultés</div>}
                            </div>

                            <div className="action-section">
                                {!rejectionMode ? (
                                    <div className="main-actions">
                                        <button
                                            className={`btn-validate ${!docsRead ? 'disabled' : ''}`}
                                            disabled={!docsRead}
                                            onClick={confirmApproval}
                                        >
                                            <CheckCircle size={18} /> Valider le Projet
                                        </button>
                                        <button className="btn-reject-mode" onClick={() => setRejectionMode(true)}>
                                            <XCircle size={18} /> Refuser / Signaler
                                        </button>
                                    </div>
                                ) : (
                                    <div className="rejection-form">
                                        <h3>Motif du refus</h3>
                                        <textarea
                                            placeholder="Expliquez pourquoi ce projet est refusé (ce message sera envoyé au porteur)..."
                                            value={rejectionReason}
                                            onChange={(e) => setRejectionReason(e.target.value)}
                                        ></textarea>
                                        <div className="form-actions">
                                            <button className="btn-cancel" onClick={() => setRejectionMode(false)}>Annuler</button>
                                            <button className="btn-send-reject" onClick={confirmRejection}>
                                                <Send size={16} /> Envoyer Notification
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminDashboardPage;
