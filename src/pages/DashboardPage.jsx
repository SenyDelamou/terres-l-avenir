import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import {
  LayoutDashboard, Sprout, BadgeDollarSign, MessageSquare, Settings,
  TrendingUp, Users, BookOpen, ArrowUpRight, ArrowDownRight,
  Plus, Calendar, MapPin, Bell, Search, LogOut, ChevronRight,
  Target, Clock, CheckCircle2, AlertCircle, FileText, Download,
  CloudSun, Droplets, Wind, Thermometer, X
} from 'lucide-react';
import '../styles/DashboardPage.css';

// --- Mock Data ---
const performanceData = [
  { name: 'Jan', revenue: 4500, yields: 2400 },
  { name: 'Feb', revenue: 5200, yields: 2800 },
  { name: 'Mar', revenue: 4800, yields: 3200 },
  { name: 'Apr', revenue: 6100, yields: 3800 },
  { name: 'May', revenue: 5900, yields: 4100 },
  { name: 'Jun', revenue: 7200, yields: 4800 },
];

const cropDistribution = [
  { name: 'Maïs', value: 40, color: '#3dfc8a' },
  { name: 'Riz', value: 30, color: '#22c55e' },
  { name: 'Manioc', value: 20, color: '#16a34a' },
  { name: 'Fruits', value: 10, color: '#15803d' },
];

const marketData = [
  { crop: 'Maïs (Sac 100kg)', price: '280,000 GNF', trend: '+2.5%' },
  { crop: 'Riz Local', price: '320,000 GNF', trend: '-1.0%' },
  { crop: 'Cacao (Kg)', price: '25,000 GNF', trend: '+4.2%' },
  { crop: 'Arachide', price: '15,000 GNF', trend: '+0.5%' },
];

function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    location: '',
    amount: ''
  });

  // Load projects from localStorage or use defaults
  const [userProjects, setUserProjects] = useState(() => {
    const saved = localStorage.getItem('agriPulse_projects');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Extension Bananeraie Coyah', status: 'En cours', progress: 65, lastUpdate: '20 Mai', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop', description: 'Extension de 5 hectares.', amount: '50M GNF', location: 'Coyah' },
      { id: 2, title: 'Système Irrigation Solaire', status: 'Planifié', progress: 10, lastUpdate: '01 Juin', image: 'https://images.unsplash.com/photo-1589333550884-699736bb6978?w=400&h=250&fit=crop', description: 'Installation de pompes solaires.', amount: '120M GNF', location: 'Kindia' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('agriPulse_projects', JSON.stringify(userProjects));
  }, [userProjects]);

  const [fundingApps] = useState([
    { id: 101, project: 'Extension Bananeraie', amount: '25M GNF', status: 'Sous revue', investor: 'AgriInvest Guinea' },
    { id: 102, project: 'Irrigation Solaire', amount: '120M GNF', status: 'Accepté', investor: 'Green Fund West Africa' },
  ]);

  const stats = [
    { label: 'Projets Actifs', value: userProjects.filter(p => p.status === 'En cours').length, trend: '+12%', icon: <Sprout size={22} />, color: 'var(--color-primary)' },
    { label: 'Revenu Mensuel', value: '7.2M GNF', trend: '+8%', icon: <BadgeDollarSign size={22} />, color: '#3b82f6' },
    { label: 'Score Communauté', value: '4.8', trend: '+0.2', icon: <Users size={22} />, color: '#a855f7' },
    { label: 'Ressources Lues', value: '24', trend: '+5', icon: <BookOpen size={22} />, color: '#f97316' },
  ];

  const handleCreateProject = (e) => {
    e.preventDefault();
    const project = {
      id: Date.now(),
      ...newProject,
      status: 'En attente', // Default status for admin validation
      progress: 0,
      lastUpdate: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop' // Placeholder
    };
    setUserProjects([project, ...userProjects]);
    setIsModalOpen(false);
    setNewProject({ title: '', description: '', location: '', amount: '' });
    setActiveTab('projects'); // Switch to projects tab to see it
  };

  // --- Render Functions ---

  const renderWeatherWidget = () => (
    <div className="weather-widget-glass">
      <div className="weather-header">
        <div className="location-badge">
          <MapPin size={14} /> <span>Mamou, Guinée</span>
        </div>
        <span className="live-tag">En direct</span>
      </div>
      <div className="weather-main">
        <div className="temp-box">
          <CloudSun size={48} className="weather-icon" />
          <div className="temp-val">
            <span className="degree">28°</span>
            <span className="condition">Nuageux</span>
          </div>
        </div>
        <div className="weather-grid">
          <div className="w-item">
            <Thermometer size={16} /> <span>Ressenti 31°</span>
          </div>
          <div className="w-item">
            <Droplets size={16} /> <span>Humidité 65%</span>
          </div>
          <div className="w-item">
            <Wind size={16} /> <span>Vent 12 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMarketTicker = () => (
    <div className="market-ticker-container">
      <div className="ticker-label">
        <TrendingUp size={16} /> <span>Cours du Marché</span>
      </div>
      <div className="ticker-track-wrapper">
        <div className="ticker-track">
          {[...marketData, ...marketData].map((item, idx) => (
            <div key={idx} className="ticker-item">
              <span className="crop-name">{item.crop}</span>
              <span className="crop-price">{item.price}</span>
              <span className={`crop - trend ${item.trend.startsWith('+') ? 'up' : 'down'} `}>
                {item.trend.startsWith('+') ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {item.trend}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderModal = () => (
    <div className={`modal - overlay ${isModalOpen ? 'open' : ''} `}>
      <div className="modal-glass">
        <div className="modal-header">
          <h2>Nouveau Projet</h2>
          <button className="close-btn" onClick={() => setIsModalOpen(false)}><X size={24} /></button>
        </div>
        <form onSubmit={handleCreateProject} className="modal-form">
          <div className="form-group">
            <label>Titre du Projet</label>
            <input
              type="text"
              required
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              placeholder="Ex: Plantation de Cacao"
              className="glass-input"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              required
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              placeholder="Brève description..."
              className="glass-input"
              rows="3"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Budget (GNF)</label>
              <input
                type="number"
                required
                value={newProject.amount}
                onChange={(e) => setNewProject({ ...newProject, amount: e.target.value })}
                placeholder="50M"
                className="glass-input"
              />
            </div>
            <div className="form-group">
              <label>Lieu</label>
              <input
                type="text"
                required
                value={newProject.location}
                onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                placeholder="Ex: Kindia"
                className="glass-input"
              />
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancel-glass" onClick={() => setIsModalOpen(false)}>Annuler</button>
            <button type="submit" className="btn-submit-glass">Créer (Soumettre)</button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="overview-container animate-fade-in">
      {renderMarketTicker()}

      <div className="dashboard-hero-split">
        <div className="stats-grid-premium">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card-glass">
              <div className="stat-icon-glow" style={{ color: stat.color, boxShadow: `0 0 20px ${stat.color} 40` }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              <div className="stat-trend positive">
                <ArrowUpRight size={14} /> {stat.trend}
              </div>
            </div>
          ))}
        </div>
        {renderWeatherWidget()}
      </div>

      <div className="charts-section-glass">
        <div className="main-chart-glass">
          <div className="glass-header">
            <h3>Performance des Récoltes</h3>
            <div className="glass-actions">
              <button className="glass-btn-xs">6 mois</button>
              <button className="glass-btn-xs active">1 an</button>
            </div>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3dfc8a" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#3dfc8a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ background: 'rgba(13, 20, 26, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#3dfc8a" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="side-chart-glass">
          <div className="glass-header">
            <h3>Répartition</h3>
          </div>
          <div className="pie-container">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={cropDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {cropDistribution.map((entry, index) => <Cell key={`cell - ${index} `} fill={entry.color} stroke="rgba(0,0,0,0.2)" />)}
                </Pie>
                <Tooltip contentStyle={{ background: 'rgba(13, 20, 26, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="legend-grid">
              {cropDistribution.map((c, i) => (
                <div key={i} className="legend-item-glass">
                  <span className="dot" style={{ backgroundColor: c.color }}></span>
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lower-deck-grid">
        <div className="projects-glass-card">
          <div className="glass-header">
            <h3>Projets Récents</h3>
            <Link to="#" className="link-glass">Tout voir</Link>
          </div>
          <div className="glass-list">
            {userProjects.slice(0, 3).map(p => (
              <div key={p.id} className="glass-list-item">
                <img src={p.image} alt="" className="item-thumb" />
                <div className="item-info">
                  <h4>{p.title}</h4>
                  <div className="progress-mini">
                    <div className="bar-bg"><div className="bar-fill" style={{ width: `${p.progress}% ` }}></div></div>
                    <span>{p.progress}%</span>
                  </div>
                </div>
                <div className={`status - pill - mini ${p.status.toLowerCase().replace(' ', '-')} `}>{p.status}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-actions-card">
          <div className="glass-header"><h3>Actions Rapides</h3></div>
          <div className="quick-actions-grid">
            <button className="qa-btn" onClick={() => setIsModalOpen(true)}><Plus size={20} /> Nouveau Projet</button>
            <button className="qa-btn"><FileText size={20} /> Rapport</button>
            <button className="qa-btn"><Download size={20} /> Exporter Données</button>
            <button className="qa-btn"><AlertCircle size={20} /> Signaler Problème</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="module-container animate-slide-up">
      <div className="glass-header-lg">
        <h2>Mes Projets Agricoles</h2>
        <button className="btn-primary-glass" onClick={() => setIsModalOpen(true)}><Plus size={18} /> Nouveau Projet</button>
      </div>
      <div className="projects-grid-glass">
        {userProjects.map(p => (
          <div key={p.id} className="project-card-premium">
            <div className="card-media">
              <img src={p.image} alt={p.title} />
              <span className={`status - badge ${p.status.toLowerCase().replace(' ', '-')} `}>{p.status}</span>
            </div>
            <div className="card-content">
              <h3>{p.title}</h3>
              <div className="meta-row">
                <span><Calendar size={14} /> {p.lastUpdate}</span>
                <span><Target size={14} /> {p.progress}%</span>
              </div>
              <div className="card-actions">
                <button
                  className="action-btn"
                  onClick={() => navigate(`/ projets / ${p.id} `)}
                >
                  Gérer
                </button>
                <button
                  className="action-btn icon-only"
                  onClick={() => navigate(`/ projets / ${p.id}/settings`)}
                >
                  <Settings size={16} />
                </button >
              </div >
            </div >
          </div >
        ))}
      </div >
    </div >
  );

  const renderFunding = () => (
    <div className="module-container animate-slide-up">
      <div className="glass-header-lg">
        <h2>Suivi des Financements</h2>
      </div>
      <div className="funding-list-glass">
        {fundingApps.map(app => (
          <div key={app.id} className="funding-item-glass">
            <div className="fi-icon"><BadgeDollarSign size={24} /></div>
            <div className="fi-info">
              <h4>{app.project}</h4>
              <p>Investisseur: {app.investor}</p>
            </div>
            <div className="fi-amount">{app.amount}</div>
            <div className={`fi-status ${app.status.toLowerCase().replace(' ', '-')}`}>{app.status}</div>
            <button className="action-btn" style={{ maxWidth: '100px' }}>Détails</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="module-container animate-slide-up">
      <div className="glass-header-lg">
        <h2>Paramètres du Compte</h2>
      </div>

      <div className="settings-grid-glass">
        {/* Profile Section */}
        <div className="settings-card-glass">
          <h3>Profil Public</h3>
          <div className="profile-edit-section">
            <div className="avatar-upload">
              <img src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?w=150&h=150&fit=crop" alt="Profile" />
              <button className="edit-avatar-btn"><Settings size={14} /></button>
            </div>
            <div className="form-group-glass">
              <label>Nom Complet</label>
              <input type="text" defaultValue="Guinée User" className="glass-input" />
            </div>
            <div className="form-group-glass">
              <label>Bio</label>
              <textarea defaultValue="Producteur passionné basé à Mamou." className="glass-input" rows="3" />
            </div>
            <div className="form-group-glass">
              <label>Localisation</label>
              <div className="input-with-icon">
                <MapPin size={16} className="input-icon" />
                <input type="text" defaultValue="Mamou, Guinée" className="glass-input pl-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="settings-card-glass">
          <h3>Préférences</h3>

          <div className="setting-toggle-row">
            <div className="toggle-info">
              <h4>Notifications</h4>
              <p>Recevoir des alertes météo et marché</p>
            </div>
            <label className="glass-switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-toggle-row">
            <div className="toggle-info">
              <h4>Mode Sombre</h4>
              <p>Toujours activé sur le thème Premium</p>
            </div>
            <label className="glass-switch">
              <input type="checkbox" defaultChecked disabled />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="form-group-glass mt-4">
            <label>Langue</label>
            <select className="glass-input">
              <option>Français</option>
              <option>English</option>
              <option>Pulaar</option>
            </select>
          </div>

          <div className="danger-zone mt-6">
            <h4>Zone de Danger</h4>
            <button className="btn-danger-glass">Supprimer le compte</button>
          </div>
        </div>
      </div>

      <div className="form-actions-glass">
        <button className="btn-primary-glass">Enregistrer les modifications</button>
      </div>
    </div>
  );

  return (
    <div className="dashboard-premium-layout">
      {renderModal()}
      {/* Sidebar */}
      <aside className="sidebar-glass">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="sidebar-logo">
            <div className="logo-icon"><Sprout size={24} /></div>
            <span>AgriPlus</span>
          </div>
        </Link>

        <div className="user-profile-glass large-profile">
          <img src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?w=100&h=100&fit=crop" alt="User" />
          <div className="user-text">
            <strong>Guinée User</strong>
            <span className="pro-badge">MEMBRE PRO</span>
          </div>
        </div>

        <nav className="nav-glass mt-4">
          <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
            <LayoutDashboard size={20} /> <span>Tableau de bord</span>
          </button>
          <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
            <Users size={20} /> <span>Mon Profil</span>
          </button>
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>
            <Sprout size={20} /> <span>Mes Projets</span>
          </button>
          <button className={activeTab === 'funding' ? 'active' : ''} onClick={() => setActiveTab('funding')}>
            <BadgeDollarSign size={20} /> <span>Financements</span>
          </button>
          <div className="nav-spacer"></div>
          <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
            <Settings size={20} /> <span>Paramètres</span>
          </button>
        </nav>

        <button className="logout-btn-sidebar" onClick={() => navigate('/connexion')}>
          <LogOut size={18} /> <span>Déconnexion</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-glass">
        <header className="topbar-glass">
          <div className="page-title">
            <h1>
              {activeTab === 'settings' ? 'Paramètres' :
                activeTab === 'projects' ? 'Mes Projets' :
                  activeTab === 'funding' ? 'Financements' : 'Tableau de Bord'}
            </h1>
            <p>{new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
          </div>
          <div className="topbar-actions">
            <Link to="/admin" style={{ textDecoration: 'none' }}>
              <button className="btn-primary-glass" style={{ transform: 'scale(0.8)', marginRight: '1rem' }}>Admin Panel</button>
            </Link>
            <div className="search-glass">
              <Search size={18} />
              <input type="text" placeholder="Rechercher..." />
            </div>
            <button className="notif-btn"><Bell size={20} /><span className="badge">3</span></button>
          </div>
        </header>

        <div className="content-scrollable">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'funding' && renderFunding()}
          {activeTab === 'settings' && renderSettings()}

          {(activeTab === 'community' || activeTab === 'profile') && (
            <div className="empty-tab-glass">
              <div className="empty-icon"><Settings size={48} /></div>
              <h3>Module en construction</h3>
              <p>Cette fonctionnalité sera bientôt disponible.</p>
              <button className="btn-primary-glass" onClick={() => setActiveTab('overview')}>Retour</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
