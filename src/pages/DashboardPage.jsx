import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import {
  Home, Sprout, DollarSign, Users, Settings, LogOut,
  Plus, Edit2, Trash2, Eye, MapPin, Bell, Search,
  Menu, X, Activity
} from 'lucide-react';
import '../styles/DashboardPage.css';

const chartData = [
  { month: 'Jan', revenue: 4200, expenses: 2100 },
  { month: 'Fév', revenue: 4800, expenses: 2500 },
  { month: 'Mar', revenue: 6200, expenses: 3000 },
  { month: 'Avr', revenue: 7500, expenses: 3800 },
  { month: 'Mai', revenue: 8200, expenses: 4300 },
  { month: 'Juin', revenue: 9400, expenses: 5000 },
];

const projectsData = [
  { id: 1, name: 'Bananeraie Coyah', status: 'Actif', progress: 75, budget: '50M GNF', location: 'Coyah', lastUpdate: '10 Jan' },
  { id: 2, name: 'Irrigation Solaire', status: 'En Attente', progress: 40, budget: '120M GNF', location: 'Kindia', lastUpdate: '05 Jan' },
  { id: 3, name: 'Plantation Cacao', status: 'Achevé', progress: 100, budget: '30M GNF', location: 'Mamou', lastUpdate: '01 Jan' },
];

const kpis = [
  { id: 'k1', title: 'Revenu', value: '9.4M GNF', delta: '+18%', color: 'linear-gradient(135deg,#10b981,#059669)' , icon: DollarSign},
  { id: 'k2', title: 'Projets', value: '3', delta: '+1', color: 'linear-gradient(135deg,#059669,#047857)', icon: Sprout},
  { id: 'k3', title: 'Équipe', value: '8', delta: '+2', color: 'linear-gradient(135deg,#16a34a,#15803d)', icon: Users},
  { id: 'k4', title: 'Activité', value: '92%', delta: '+5%', color: 'linear-gradient(135deg,#22c55e,#16a34a)', icon: Activity},
];

function DashboardPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [projects, setProjects] = useState(projectsData);
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', budget: '', location: '', status: 'En Attente' });

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.name) return;
    setProjects(prev => [{ id: prev.length + 1, ...newProject, progress: 0, lastUpdate: "Aujourd'hui" }, ...prev]);
    setNewProject({ name: '', budget: '', location: '', status: 'En Attente' });
    setShowModal(false);
  };

  const handleDeleteProject = (id) => setProjects(p => p.filter(x => x.id !== id));

  return (
    <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <aside className="dashboard-sidebar">
        <div className="sidebar-top">
          <div className="brand">
            <Sprout size={28} /> <span>AgriPulse</span>
          </div>
          <button className="close-btn" onClick={() => setSidebarOpen(false)}><X /></button>
        </div>
        <nav className="nav">
          <button className="nav-link active"><Home /> <span>Tableau de bord</span></button>
          <button className="nav-link"><Sprout /> <span>Projets</span></button>
          <button className="nav-link"><DollarSign /> <span>Finances</span></button>
          <button className="nav-link"><Users /> <span>Équipe</span></button>
          <button className="nav-link"><Settings /> <span>Paramètres</span></button>
        </nav>
        <div className="sidebar-footer">
          <button className="logout" onClick={() => navigate('/connexion')}><LogOut /> Déconnexion</button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="header">
          <div className="left">
            <button className="menu-btn" onClick={() => setSidebarOpen(s => !s)}><Menu /></button>
            <h1 className="title">Tableau de bord</h1>
          </div>
          <div className="right">
            <div className="search"><Search /><input placeholder="Rechercher..." /></div>
            <button className="notif"><Bell /><span className="dot">3</span></button>
            <div className="profile">AG</div>
          </div>
        </header>

        <section className="kpi-row">
          {kpis.map(k => {
            const Icon = k.icon;
            return (
              <div key={k.id} className="kpi-card">
                <div className="kpi-left">
                  <div className="kpi-icon" style={{ background: k.color }}><Icon /></div>
                  <div>
                    <div className="kpi-title">{k.title}</div>
                    <div className="kpi-value">{k.value}</div>
                  </div>
                </div>
                <div className="kpi-delta">{k.delta}</div>
              </div>
            );
          })}
        </section>

        <section className="charts-area">
          <div className="big-chart card">
            <div className="card-head">
              <h3>Revenu vs Dépenses</h3>
              <div className="card-actions"><select><option>6 Mois</option><option>1 An</option></select></div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={chartData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e6edf7" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="url(#g1)" strokeWidth={2} />
                <Area type="monotone" dataKey="expenses" stroke="#059669" fillOpacity={0.0} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="side-cards">
            <div className="mini card">
              <h4>Evolution</h4>
              <ResponsiveContainer width="100%" height={80}>
                <LineChart data={chartData}><Line dataKey="revenue" stroke="#10b981" strokeWidth={2} dot={false} /></LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mini card">
              <h4>Alertes</h4>
              <div className="alert-item">Irrigation: <strong>Vérifier pompe</strong></div>
              <div className="alert-item">Stock: <strong>Semences faible</strong></div>
            </div>
          </div>
        </section>

        <section className="projects card">
          <div className="projects-head">
            <h3>Projets récents</h3>
            <div>
              <button className="btn primary" onClick={() => setShowModal(true)}><Plus /> Nouveau</button>
            </div>
          </div>
          <div className="projects-table">
            {projects.map(p => (
              <div className="project-row" key={p.id}>
                <div className="p-left">
                  <div className="p-name">{p.name}</div>
                  <div className="p-meta"><MapPin /> {p.location} • {p.budget}</div>
                </div>
                <div className="p-progress">
                  <div className="progress-bar"><div className="fill" style={{width: `${p.progress}%`}}/></div>
                  <div className="p-status">{p.status}</div>
                </div>
                <div className="p-actions">
                  <button className="icon"><Eye /></button>
                  <button className="icon"><Edit2 /></button>
                  <button className="icon danger" onClick={() => handleDeleteProject(p.id)}><Trash2 /></button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal card" onClick={e => e.stopPropagation()}>
              <div className="modal-head"><h4>Nouveau Projet</h4><button onClick={() => setShowModal(false)}><X /></button></div>
              <form onSubmit={handleAddProject} className="modal-body">
                <input placeholder="Nom du projet" value={newProject.name} onChange={e => setNewProject({...newProject, name: e.target.value})} required />
                <input placeholder="Budget" value={newProject.budget} onChange={e => setNewProject({...newProject, budget: e.target.value})} />
                <input placeholder="Localisation" value={newProject.location} onChange={e => setNewProject({...newProject, location: e.target.value})} />
                <select value={newProject.status} onChange={e => setNewProject({...newProject, status: e.target.value})}>
                  <option>En Attente</option>
                  <option>Actif</option>
                  <option>Achevé</option>
                </select>
                <div className="modal-actions"><button type="button" onClick={() => setShowModal(false)} className="btn">Annuler</button><button className="btn primary" type="submit">Créer</button></div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default DashboardPage;
