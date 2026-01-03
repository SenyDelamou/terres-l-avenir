import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import {
  LayoutDashboard, Sprout, BadgeDollarSign, MessageSquare, Settings,
  TrendingUp, Users, BookOpen, ArrowUpRight, ArrowDownRight,
  Plus, Calendar, MapPin, Bell, Search, LogOut, ChevronRight,
  Target, Clock, CheckCircle2, AlertCircle, FileText, Download
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import '../styles/DashboardPage.css';

const performanceData = [
  { name: 'Jan', revenue: 4500, yields: 2400 },
  { name: 'Feb', revenue: 5200, yields: 2800 },
  { name: 'Mar', revenue: 4800, yields: 3200 },
  { name: 'Apr', revenue: 6100, yields: 3800 },
  { name: 'May', revenue: 5900, yields: 4100 },
  { name: 'Jun', revenue: 7200, yields: 4800 },
];

const cropDistribution = [
  { name: 'Maïs', value: 40, color: '#1a472a' },
  { name: 'Riz', value: 30, color: '#4a7c2a' },
  { name: 'Manioc', value: 20, color: '#5c8d3e' },
  { name: 'Fruits', value: 10, color: '#a3b899' },
];

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // User Operational State
  const [userProjects, setUserProjects] = useState([
    { id: 1, title: 'Extension Bananeraie Coyah', status: 'En cours', progress: 65, lastUpdate: '2024-05-20', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop' },
    { id: 2, title: 'Système Irrigation Solaire', status: 'Planifié', progress: 10, lastUpdate: '2024-06-01', image: 'https://images.unsplash.com/photo-1589333550884-699736bb6978?w=400&h=250&fit=crop' },
  ]);

  const [fundingApps, setFundingApps] = useState([
    { id: 101, project: 'Extension Bananeraie', amount: '25M GNF', status: 'Sous revue', investor: 'AgriInvest Guinea' },
    { id: 102, project: 'Irrigation Solaire', amount: '120M GNF', status: 'Accepté', investor: 'Green Fund West Africa' },
  ]);

  const stats = [
    { label: 'Projets Actifs', value: userProjects.length, trend: '+12%', color: 'glass-green', icon: <Sprout size={20} /> },
    { label: 'Revenu Mensuel', value: '7.2M GNF', trend: '+8%', color: 'glass-blue', icon: <BadgeDollarSign size={20} /> },
    { label: 'Score Communauté', value: '4.8', trend: '+0.2', color: 'glass-purple', icon: <Users size={20} /> },
    { label: 'Ressources lues', value: '24', trend: '+5', color: 'glass-orange', icon: <BookOpen size={20} /> },
  ];

  const renderOverview = () => (
    <div className="overview-container">
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className={`stat-card-modern ${stat.color}`}>
            <div className="stat-header">
              <span className="icon-box">{stat.icon}</span>
              <span className="trend positive">{stat.trend}</span>
            </div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-row">
        <div className="main-chart-card">
          <div className="card-top">
            <h3>Performance des Récoltes</h3>
            <select className="chart-select"><option>6 derniers mois</option></select>
          </div>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1a472a" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#1a472a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-light)', fontSize: 12 }} />
                <Tooltip contentStyle={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '12px' }} />
                <Area type="monotone" dataKey="revenue" stroke="#1a472a" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                <Area type="monotone" dataKey="yields" stroke="#4a7c2a" strokeWidth={2} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="side-chart-card">
          <h3>Distribution Cultures</h3>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={cropDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {cropDistribution.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="pie-legend">
            {cropDistribution.map((c, i) => (
              <div key={i} className="legend-row">
                <span className="dot" style={{ backgroundColor: c.color }}></span>
                <span className="label">{c.name}</span>
                <span className="val">{c.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="secondary-row">
        <div className="recent-projects-card">
          <div className="card-top">
            <h3>Projets récents</h3>
            <Link to="#" className="view-all">Tout voir</Link>
          </div>
          <div className="project-list-compact">
            {userProjects.map(p => (
              <div key={p.id} className="project-item-mini">
                <img src={p.image} alt="" />
                <div className="p-info">
                  <h4>{p.title}</h4>
                  <div className="p-meta">
                    <div className="p-progress-bar"><div className="fill" style={{ width: `${p.progress}%` }}></div></div>
                    <span>{p.progress}% achevé</span>
                  </div>
                </div>
                <ChevronRight size={16} />
              </div>
            ))}
          </div>
        </div>

        <div className="activity-feed-card">
          <h3>Activités Récentes</h3>
          <div className="feed-list">
            <div className="feed-item">
              <div className="feed-icon blue"><BadgeDollarSign size={14} /></div>
              <div className="feed-text">
                <p>Paiement reçu pour <strong>Vente Maïs</strong></p>
                <span>Il y a 30 min</span>
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-icon green"><Sprout size={14} /></div>
              <div className="feed-text">
                <p>Nouvel avis sur votre projet <strong>Irrigation</strong></p>
                <span>Il y a 2h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="module-content">
      <div className="module-header-row">
        <h2>Mes Projets Agricoles</h2>
        <button className="btn-primary-elite"><Plus size={18} /> Nouveau Projet</button>
      </div>
      <div className="projects-full-grid">
        {userProjects.map(p => (
          <div key={p.id} className="project-card-full">
            <div className="p-card-image">
              <img src={p.image} alt={p.title} />
              <span className={`status-tag ${p.status.toLowerCase().replace(' ', '-')}`}>{p.status}</span>
            </div>
            <div className="p-card-body">
              <h3>{p.title}</h3>
              <p className="p-date">Dernière mise à jour: {p.lastUpdate}</p>
              <div className="p-stats">
                <div className="p-stat"><strong>{p.progress}%</strong><span>Progression</span></div>
                <div className="p-stat"><strong>{p.id * 15}</strong><span>Tâches</span></div>
              </div>
              <div className="p-actions">
                <button className="btn-outline">Détails</button>
                <button className="btn-outline">Rapports</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFunding = () => (
    <div className="module-content">
      <div className="module-header-row">
        <h2>Suivi des Financements</h2>
      </div>
      <div className="funding-list">
        {fundingApps.map(app => (
          <div key={app.id} className="funding-app-card">
            <div className="app-header">
              <div className="app-main">
                <Target size={24} className="app-icon" />
                <div>
                  <h4>Demande #{app.id}</h4>
                  <p>Projet: {app.project}</p>
                </div>
              </div>
              <span className={`status-pill ${app.status.toLowerCase().replace(' ', '-')}`}>{app.status}</span>
            </div>
            <div className="app-details">
              <div className="detail"><Clock size={16} /><span>Montant: {app.amount}</span></div>
              <div className="detail"><Users size={16} /><span>Investisseur: {app.investor}</span></div>
            </div>
            <div className="app-footer">
              <button className="btn-text">Modifier la demande</button>
              <button className="btn-icon-bg"><FileText size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="dashboard-page-modern">
      <div className="dashboard-sidebar-elite">
        <div className="sidebar-brand">
          <img src="/AgriPulse-Logo.png" alt="Logo" className="logo-sidebar" />
          <span>AgriPlus Hub</span>
        </div>

        <nav className="elite-nav">
          <button
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={20} /> <span className="label">Vue d'ensemble</span>
          </button>
          <button
            className={activeTab === 'projects' ? 'active' : ''}
            onClick={() => setActiveTab('projects')}
          >
            <Sprout size={20} /> <span className="label">Mes Projets</span>
          </button>
          <button
            className={activeTab === 'funding' ? 'active' : ''}
            onClick={() => setActiveTab('funding')}
          >
            <BadgeDollarSign size={20} /> <span className="label">Financements</span>
          </button>
          <button
            className={activeTab === 'community' ? 'active' : ''}
            onClick={() => setActiveTab('community')}
          >
            <MessageSquare size={20} /> <span className="label">Communauté</span>
          </button>
          <div className="nav-divider"></div>
          <button
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} /> <span className="label">Paramètres</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-mini">
            <img src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?w=100&h=100&fit=crop" alt="" />
            <div className="u-info">
              <strong>Jean Kouassi</strong>
              <span>Producteur (Sénégal)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-main-content">
        <header className="dashboard-top-bar">
          <div className="search-box-modern">
            <Search size={18} />
            <input type="text" placeholder="Rechercher des projets, ressources..." />
          </div>
          <div className="top-bar-actions">
            <button className="icon-btn"><Bell size={20} /></button>
            <button className="btn-create-header">
              <Plus size={18} /> <span>Nouveau Projet</span>
            </button>
          </div>
        </header>

        <div className="dashboard-scroll-area">
          <div className="welcome-header">
            <div>
              <h1>Bonjour, Jean ! 👋</h1>
              <p>Voici les performances de votre exploitation aujourd'hui.</p>
            </div>
            <div className="date-display">
              <Calendar size={16} /> {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
            </div>
          </div>

          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'funding' && renderFunding()}

          {(activeTab === 'community' || activeTab === 'settings') && (
            <div className="placeholder-tab">
              <div className="empty-state-modern">
                <div className="empty-icon-box">
                  {activeTab === 'community' ? <MessageSquare size={48} /> : <Settings size={48} />}
                </div>
                <h2>Section {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                <p>Cette section est en cours de déploiement pour votre profil.</p>
                <button className="btn-primary-elite" onClick={() => setActiveTab('overview')}>Retour</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

