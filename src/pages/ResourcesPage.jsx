import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, Youtube, Download, Plus, X, Filter, PlayCircle, BookOpen } from 'lucide-react';
import '../styles/ResourcesPage.css';

function ResourcesPage() {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [filter, setFilter] = useState('all'); // 'all', 'pdf', 'video'
    const [searchQuery, setSearchQuery] = useState('');

    const [resources, setResources] = useState([
        {
            id: 1,
            title: 'Guide: Agriculture de Conservation',
            type: 'pdf',
            category: 'Technique',
            description: 'Les principes fondamentaux pour préserver la structure de vos sols et réduire l\'érosion durablement.',
            benefits: ['Santé du sol', 'Économie d\'eau', 'Biodiversité'],
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
        },
        {
            id: 2,
            title: 'Tuto: Irrigation Solaire',
            type: 'video',
            category: 'Innovation',
            youtubeUrl: 'https://www.youtube.com/watch?v=item',
            description: 'Installation pas-à-pas d\'un système de pompage solaire autonome pour petites exploitations.',
            benefits: ['Autonomie', 'Rentabilité', 'Écologie'],
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
        },
        {
            id: 3,
            title: 'Rotation des Cultures',
            type: 'pdf',
            category: 'Agronomie',
            description: 'Planifier ses rotations pour briser le cycle des maladies et optimiser les nutriments.',
            benefits: ['Lutte bio', 'Fertilité', 'Rendement'],
            image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop'
        },
        {
            id: 4,
            title: 'Maraîchage en Guinée',
            type: 'video',
            category: 'Formation',
            youtubeUrl: 'https://www.youtube.com/watch?v=item',
            description: 'Les meilleures pratiques pour réussir sa saison sèche : choix des variétés et calendriers.',
            benefits: ['Climat local', 'Variétés', 'Calendrier'],
            image: 'https://images.unsplash.com/photo-1595841696677-5f80e037466d?w=600&h=400&fit=crop'
        },
        // ... more resources
    ]);

    const [newResource, setNewResource] = useState({
        title: '',
        type: 'pdf',
        youtubeUrl: '',
        description: '',
        benefits: ''
    });

    useEffect(() => {
        const userDataStr = localStorage.getItem('userData');
        if (userDataStr) {
            const user = JSON.parse(userDataStr);
            setIsAuthenticated(true);
            setIsAdmin(user.role === 'Admin' || user.email === 'admin@agriplus.com' || user.role === 'admin');
        }
    }, []);

    const handleDownload = (resourceTitle) => {
        // Simulation
        alert(`Téléchargement lancé pour : ${resourceTitle}`);
    };

    const handleAddResource = (e) => {
        e.preventDefault();
        const id = resources.length + 1;
        const resourceToAdd = {
            ...newResource,
            id,
            category: 'Nouveau',
            benefits: newResource.benefits.split(',').map(b => b.trim()),
            image: newResource.type === 'video'
                ? 'https://images.unsplash.com/photo-1551500226-b50b653e33e8?w=400&h=250&fit=crop'
                : 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=250&fit=crop'
        };
        setResources([resourceToAdd, ...resources]);
        setShowAddModal(false);
        setNewResource({ title: '', type: 'pdf', youtubeUrl: '', description: '', benefits: '' });
    };

    const filteredResources = resources.filter(r => {
        const matchesType = filter === 'all' || r.type === filter;
        const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <div className="resources-page-premium">
            {/* Hero Section */}
            <section className="resources-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-badge-glass">
                        <BookOpen size={16} />
                        <span>Bibliothèque & Savoirs</span>
                    </div>
                    <h1>Cultivez Votre <br /><span className="text-highlight">Savoir</span></h1>
                    <p>Accédez à une base de connaissances experte : guides techniques, tutoriels vidéos et fiches pratiques.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="resources-content-section">
                <div className="container">

                    {/* Controls Bar */}
                    <div className="resources-controls-glass">
                        <div className="search-wrapper">
                            <Search className="search-icon" size={20} />
                            <input
                                type="text"
                                placeholder="Rechercher une ressource..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="filters-wrapper">
                            <button
                                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                Tout
                            </button>
                            <button
                                className={`filter-btn ${filter === 'pdf' ? 'active' : ''}`}
                                onClick={() => setFilter('pdf')}
                            >
                                <FileText size={16} /> Guides PDF
                            </button>
                            <button
                                className={`filter-btn ${filter === 'video' ? 'active' : ''}`}
                                onClick={() => setFilter('video')}
                            >
                                <Youtube size={16} /> Vidéos
                            </button>
                        </div>

                        {isAdmin && (
                            <button className="btn-add-resource" onClick={() => setShowAddModal(true)}>
                                <Plus size={18} /> Ajouter
                            </button>
                        )}
                    </div>

                    {/* Resources Grid */}
                    <div className="resources-grid-premium">
                        {filteredResources.map((resource) => (
                            <div key={resource.id} className="resource-card-glass">
                                <div className="resource-image-container">
                                    <div className={`type-badge ${resource.type}`}>
                                        {resource.type === 'video' ? <Youtube size={14} /> : <FileText size={14} />}
                                        {resource.type === 'video' ? 'Vidéo' : 'PDF'}
                                    </div>
                                    <img src={resource.image} alt={resource.title} />
                                    {resource.type === 'video' && (
                                        <div className="play-overlay">
                                            <PlayCircle size={48} />
                                        </div>
                                    )}
                                </div>
                                <div className="resource-body">
                                    <div className="resource-category">{resource.category}</div>
                                    <h3>{resource.title}</h3>
                                    <p>{resource.description}</p>

                                    <div className="benefits-tags">
                                        {resource.benefits.map((benefit, i) => (
                                            <span key={i} className="benefit-tag">#{benefit}</span>
                                        ))}
                                    </div>

                                    <div className="resource-footer">
                                        {resource.type === 'video' ? (
                                            <a href={resource.youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn-action watch">
                                                Regarder
                                            </a>
                                        ) : (
                                            <button className="btn-action download" onClick={() => handleDownload(resource.title)}>
                                                <Download size={16} /> Télécharger
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredResources.length === 0 && (
                        <div className="no-results">
                            <p>Aucune ressource trouvée pour votre recherche.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Add Resource Modal */}
            {showAddModal && (
                <div className="modal-backdrop-premium" onClick={() => setShowAddModal(false)}>
                    <div className="modal-glass-panel" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header-simple">
                            <h2>Ajouter une ressource</h2>
                            <button onClick={() => setShowAddModal(false)}><X size={24} /></button>
                        </div>
                        <form onSubmit={handleAddResource} className="resource-form">
                            <div className="form-group">
                                <label>Titre</label>
                                <input
                                    type="text"
                                    required
                                    value={newResource.title}
                                    onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                                    placeholder="Ex: Guide pratique..."
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Type</label>
                                    <select
                                        value={newResource.type}
                                        onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
                                    >
                                        <option value="pdf">Document PDF</option>
                                        <option value="video">Vidéo YouTube</option>
                                    </select>
                                </div>
                                {newResource.type === 'video' && (
                                    <div className="form-group">
                                        <label>ID YouTube / URL</label>
                                        <input
                                            type="text"
                                            placeholder="https://youtube.com/..."
                                            value={newResource.youtubeUrl}
                                            onChange={(e) => setNewResource({ ...newResource, youtubeUrl: e.target.value })}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    rows="3"
                                    value={newResource.description}
                                    onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label>Tags (séparés par virgules)</label>
                                <input
                                    type="text"
                                    placeholder="Bio, Irrigation, Tomate"
                                    value={newResource.benefits}
                                    onChange={(e) => setNewResource({ ...newResource, benefits: e.target.value })}
                                />
                            </div>

                            <div className="modal-actions-right">
                                <button type="button" className="btn-ghost" onClick={() => setShowAddModal(false)}>Annuler</button>
                                <button type="submit" className="btn-primary-glow">Publier</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResourcesPage;
