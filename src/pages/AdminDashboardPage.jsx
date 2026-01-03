import { useState } from 'react';
import {
    LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import {
    ShieldCheck, Users, Sprout, ShoppingCart, Activity,
    Search, Bell, Plus, Calendar, Filter,
    MoreHorizontal, CheckCircle, XCircle, AlertTriangle,
    ArrowUpRight, ArrowDownRight, LayoutDashboard, MessageSquare, Settings, LogOut, ChevronRight
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

    const adminStats = [
        { label: 'Utilisateurs Totaux', value: '1,850', trend: '+24%', icon: <Users size={20} />, color: 'blue' },
        { label: 'Projets Actifs', value: '84', trend: '+12%', icon: <Sprout size={20} />, color: 'green' },
        { label: 'Ventes Globales', value: '45.2M GNF', trend: '+18%', icon: <ShoppingCart size={20} />, color: 'purple' },
        { label: 'Santé Système', value: '99.9%', trend: 'Stable', icon: <Activity size={20} />, color: 'orange' },
    ];

    const pendingApprovals = [
        { id: 1, type: 'Projet', title: 'Culture de Bananes à Coyah', user: 'Abdoulaye Diallo', date: 'Il y a 2h' },
        { id: 2, type: 'Marché', title: 'Tracteur John Deere Occasion', user: 'Moussa Camara', date: 'Il y a 5h' },
        { id: 3, type: 'Utilisateur', title: 'Vérification Profil Expert', user: 'Dr. Barry Fatoumata', date: 'Hier' },
    ];

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
                        <div className="card-actions">
                            <select className="chart-filter">
                                <option>6 derniers mois</option>
                                <option>Cette année</option>
                            </select>
                        </div>
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
                        <div className="chart-legend">
                            {categoryData.map((c, i) => (
                                <div key={i} className="legend-item">
                                    <span className="legend-bullet" style={{ backgroundColor: c.color }}></span>
                                    <span className="legend-label">{c.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="secondary-row">
                <div className="approvals-section">
                    <div className="section-header">
                        <h3>En attente de validation</h3>
                        <button className="btn-text">Gérer tout <ChevronRight size={16} /></button>
                    </div>
                    <div className="approvals-list">
                        {pendingApprovals.map(item => (
                            <div key={item.id} className="approval-row">
                                <div className={`approval-type-icon ${item.type.toLowerCase()}`}>
                                    {item.type === 'Projet' ? <Sprout size={16} /> : item.type === 'Marché' ? <ShoppingCart size={16} /> : <Users size={16} />}
                                </div>
                                <div className="approval-info">
                                    <h4>{item.title}</h4>
                                    <span>Par {item.user} • {item.date}</span>
                                </div>
                                <div className="approval-actions">
                                    <button className="action-btn approve"><CheckCircle size={18} /></button>
                                    <button className="action-btn reject"><XCircle size={18} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="system-health-card">
                    <div className="section-header">
                        <h3>Statut Système</h3>
                        <span className="status-badge live">Live</span>
                    </div>
                    <div className="health-metrics">
                        <div className="metric-row">
                            <span>API Gateway</span>
                            <div className="metric-indicator active"></div>
                        </div>
                        <div className="metric-row">
                            <span>Base de données</span>
                            <div className="metric-indicator active"></div>
                        </div>
                        <div className="metric-row">
                            <span>Services Images</span>
                            <div className="metric-indicator active"></div>
                        </div>
                        <div className="metric-row">
                            <span>Serveur Mail</span>
                            <div className="metric-indicator warning"></div>
                        </div>
                    </div>
                    <div className="uptime-graph">
                        <div className="uptime-bar active"></div>
                        <div className="uptime-bar active"></div>
                        <div className="uptime-bar active"></div>
                        <div className="uptime-bar active"></div>
                        <div className="uptime-bar active"></div>
                        <div className="uptime-bar warning"></div>
                        <div className="uptime-bar active"></div>
                        <div className="uptime-bar active"></div>
                    </div>
                </div>
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
                    <button
                        className={activeTab === 'overview' ? 'active' : ''}
                        onClick={() => setActiveTab('overview')}
                    >
                        <LayoutDashboard size={20} /> <span>Supervision</span>
                    </button>
                    <button
                        className={activeTab === 'users' ? 'active' : ''}
                        onClick={() => setActiveTab('users')}
                    >
                        <Users size={20} /> <span>Utilisateurs</span>
                    </button>
                    <button
                        className={activeTab === 'projects' ? 'active' : ''}
                        onClick={() => setActiveTab('projects')}
                    >
                        <Sprout size={20} /> <span>Projets</span>
                    </button>
                    <button
                        className={activeTab === 'marketplace' ? 'active' : ''}
                        onClick={() => setActiveTab('marketplace')}
                    >
                        <ShoppingCart size={20} /> <span>Marché</span>
                    </button>
                    <button
                        className={activeTab === 'forum' ? 'active' : ''}
                        onClick={() => setActiveTab('forum')}
                    >
                        <MessageSquare size={20} /> <span>Communauté</span>
                    </button>
                    <div className="nav-divider"></div>
                    <button
                        className={activeTab === 'settings' ? 'active' : ''}
                        onClick={() => setActiveTab('settings')}
                    >
                        <Settings size={20} /> <span>Configuration</span>
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
                        <button className="icon-btn"><Bell size={20} /></button>
                        <button className="btn-create-header">
                            <Plus size={18} /> <span>Nouvel Admin</span>
                        </button>
                    </div>
                </header>

                <div className="dashboard-scroll-area">
                    <div className="welcome-header">
                        <div>
                            <h1>Console d'Administration 🛡️</h1>
                            <p>Outils de gestion et surveillance globale d'AgriPlus.</p>
                        </div>
                        <div className="date-display">
                            <Calendar size={16} /> {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                        </div>
                    </div>

                    {activeTab === 'overview' && renderOverview()}

                    {activeTab !== 'overview' && (
                        <div className="placeholder-tab">
                            <div className="empty-state-modern">
                                <div className="empty-icon-box">
                                    {activeTab === 'users' && <Users size={48} />}
                                    {activeTab === 'projects' && <Sprout size={48} />}
                                    {activeTab === 'marketplace' && <ShoppingCart size={48} />}
                                    {activeTab === 'forum' && <MessageSquare size={48} />}
                                    {activeTab === 'settings' && <Settings size={48} />}
                                </div>
                                <h2>Module {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                                <p>Ce module d'administration est en cours d'initialisation pour la console globale.</p>
                                <button className="btn-primary-elite" onClick={() => setActiveTab('overview')}>
                                    Retour à la Supervision
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboardPage;
