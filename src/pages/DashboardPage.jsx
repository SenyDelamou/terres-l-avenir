import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import {
  LayoutDashboard, Sprout, BadgeDollarSign, MessageSquare, Settings,
  TrendingUp, Users, BookOpen, ArrowUpRight, ArrowDownRight,
  Plus, Calendar, MapPin, Bell, Search, LogOut, ChevronRight
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
  const [newProject, setNewProject] = useState({
    title: '',
    category: '',
    budget: '',
    description: ''
  });
  const [isSubmittingNewProject, setIsSubmittingNewProject] = useState(false);

  const stats = [
    { label: 'Projets Actifs', value: '3', trend: '+12%', icon: <Sprout size={20} />, color: 'green' },
    { label: 'Revenu Mensuel', value: '7.2M GNF', trend: '+8%', icon: <BadgeDollarSign size={20} />, color: 'blue' },
    { label: 'Score Communauté', value: '4.8', trend: '+0.2', icon: <Users size={20} />, color: 'purple' },
    { label: 'Ressources lues', value: '24', trend: '+5', icon: <BookOpen size={20} />, color: 'orange' },
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Irrigation Solaire',
      status: 'En cours',
      progress: 65,
      budget: '45M GNF',
      investors: 4,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Culture Bio',
      status: 'Terminé',
      progress: 100,
      budget: '12M GNF',
      investors: 2,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Serre Moderne',
      status: 'En attente',
      progress: 0,
      budget: '120M GNF',
      investors: 0,
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop'
    }
  ];

  const activities = [
    { id: 1, type: 'forum', text: 'Nouvelle réponse sur "Fertilité du sol"', time: 'Il y a 2h', icon: <MessageSquare size={14} /> },
    { id: 2, type: 'project', text: 'Projet "Irrigation" mis à jour à 65%', time: 'Il y a 5h', icon: <TrendingUp size={14} /> },
    { id: 3, type: 'system', text: 'Rapport mensuel disponible', time: 'Hier', icon: <Calendar size={14} /> },
  ];

  const renderOverview = () => (
    <div className="overview-container">
      <div className="stats-grid">
        {stats.map((stat, idx) => (
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
            <h3>Performance des Récoltes</h3>
            <select className="chart-filter">
              <option>6 derniers mois</option>
              <option>Cette année</option>
            </select>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="revenue" stroke="#1a472a" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="yields" stroke="#4a7c2a" strokeWidth={3} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="side-chart-card">
          <div className="card-header">
            <h3>Distribution Cultures</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={cropDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {cropDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="chart-legend">
              {cropDistribution.map((c, i) => (
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
        <div className="recent-projects-section">
          <div className="section-header">
            <h3>Mes Projets Récents</h3>
            <Link to="/dashboard?tab=projects" className="btn-text">
              Voir tout <ChevronRight size={16} />
            </Link>
          </div>
          <div className="projects-list-modern">
            {recentProjects.map(project => (
              <div key={project.id} className="project-row-item">
                <img src={project.image} alt="" className="project-row-img" />
                <div className="project-row-info">
                  <h4>{project.title}</h4>
                  <span>{project.budget} • {project.investors} investisseurs</span>
                </div>
                <div className="project-row-progress">
                  <div className="progress-info-mini">
                    <span>{project.progress}%</span>
                  </div>
                  <div className="progress-bar-mini">
                    <div className="progress-fill-mini" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
                <span className={`status-tag ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="activity-feed-section">
          <h3>Flux d'Activité</h3>
          <div className="activity-timeline">
            {activities.map(act => (
              <div key={act.id} className="timeline-item">
                <div className={`timeline-icon-box ${act.type}`}>
                  {act.icon}
                </div>
                <div className="timeline-content">
                  <p>{act.text}</p>
                  <span>{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard-page-modern">
      <div className="dashboard-sidebar-elite">
        <div className="sidebar-brand">
          <img src="/src/assets/logo.png" alt="AgriPlus" />
          <span>AgriPlus Hub</span>
        </div>

        <nav className="elite-nav">
          <button
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={20} /> <span>Tableau de Bord</span>
          </button>
          <button
            className={activeTab === 'projects' ? 'active' : ''}
            onClick={() => setActiveTab('projects')}
          >
            <Sprout size={20} /> <span>Mes Projets</span>
          </button>
          <button
            className={activeTab === 'funding' ? 'active' : ''}
            onClick={() => setActiveTab('funding')}
          >
            <BadgeDollarSign size={20} /> <span>Financements</span>
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
            <Settings size={20} /> <span>Paramètres</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-mini-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" alt="" />
            <div className="user-info">
              <strong>Jean Dupont</strong>
              <span>Agriculteur Elite</span>
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
            <Link to="/publier-projet" className="btn-create-header">
              <Plus size={18} /> <span>Nouveau Projet</span>
            </Link>
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

          {activeTab !== 'overview' && (
            <div className="placeholder-tab">
              <div className="empty-state-modern">
                <div className="empty-icon-box">
                  {activeTab === 'projects' && <Sprout size={48} />}
                  {activeTab === 'funding' && <BadgeDollarSign size={48} />}
                  {activeTab === 'forum' && <MessageSquare size={48} />}
                  {activeTab === 'settings' && <Settings size={48} />}
                </div>
                <h2>Section {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                <p>Cette section est en cours de modernisation pour le nouvel AgriPlus Hub.</p>
                <button className="btn-primary-elite" onClick={() => setActiveTab('overview')}>
                  Retour au Tableau de Bord
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

