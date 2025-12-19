import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/ResourcesPage.css';

function ResourcesPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [resources, setResources] = useState([
        {
            id: 1,
            title: 'Agriculture de Conservation',
            type: 'pdf',
            description: 'Techniques qui préservent la structure du sol et réduisent l\'érosion.',
            benefits: ['Amélioration de la fertilité', 'Réduction de l\'érosion', 'Meilleure rétention d\'eau'],
            image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=250&fit=crop'
        },
        {
            id: 2,
            title: 'Maîtriser l\'Irrigation Solaire',
            type: 'video',
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            description: 'Découvrez comment installer et maintenir un système d\'irrigation solaire efficace.',
            benefits: ['Économie d\'énergie', 'Autonomie hydrique', 'Réduction des coûts'],
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
        },
        {
            id: 3,
            title: 'Rotation des Cultures',
            type: 'pdf',
            description: 'Planification stratégique de la rotation pour optimiser les rendements.',
            benefits: ['Réduction des maladies', 'Amélioration de la fertilité', 'Diversification des revenus'],
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop'
        },
        {
            id: 4,
            title: 'Techniques de Maraîchage en Guinée',
            type: 'video',
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            description: 'Formation complète sur les meilleures pratiques de maraîchage adaptées au climat guinéen.',
            benefits: ['Calendrier cultural', 'Lutte bio-agressive', 'Optimisation d\'espace'],
            image: 'https://images.unsplash.com/photo-1595841696677-5f80e037466d?w=400&h=250&fit=crop'
        },
        {
            id: 5,
            title: 'Agroécologie',
            type: 'pdf',
            description: 'Intégration des principes écologiques dans les systèmes agricoles.',
            benefits: ['Biodiversité accrue', 'Résilience aux changements', 'Réduction des intrants'],
            image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop'
        },
        {
            id: 6,
            title: 'Élevage de Volaille Moderne',
            type: 'video',
            youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            description: 'Guide vidéo sur la construction de bâtiments et le suivi sanitaire des volailles.',
            benefits: ['Biosécurité', 'Alimentation optimale', 'Rentabilité'],
            image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=250&fit=crop'
        }
    ]);

    const [newResource, setNewResource] = useState({
        title: '',
        type: 'pdf',
        youtubeUrl: '',
        description: '',
        benefits: ''
    });

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            const user = JSON.parse(userData);
            // Pour la démo, on considère 'Admin' ou tout rôle contenant 'Admin' comme administrateur
            // Dans une vraie app, cela viendrait d'un champ role spécifique
            setIsAdmin(user.role === 'Admin' || user.email === 'admin@agripulse.com');
        }
    }, []);

    const handleDownload = (resourceTitle) => {
        alert(`Téléchargement de la ressource : ${resourceTitle}`);
        // Logique réelle de téléchargement ici (ex: window.open(fileUrl))
    };

    const handleAddResource = (e) => {
        e.preventDefault();
        const id = resources.length + 1;
        const resourceToAdd = {
            ...newResource,
            id,
            benefits: newResource.benefits.split(',').map(b => b.trim()),
            image: newResource.type === 'video'
                ? 'https://images.unsplash.com/photo-1551500226-b50b653e33e8?w=400&h=250&fit=crop'
                : 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=250&fit=crop'
        };
        setResources([resourceToAdd, ...resources]);
        setShowAddModal(false);
        setNewResource({ title: '', type: 'pdf', youtubeUrl: '', description: '', benefits: '' });
    };

    return (
        <div className="resources-page">
            <PageHeader
                title="Centre de Ressources"
                subtitle="Accédez à nos guides d'experts, fiches techniques et outils pour une agriculture d'excellence."
                icon="📚"
                images={[
                    'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1920&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1595841696677-5f80e037466d?w=1920&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=1920&h=600&fit=crop'
                ]}
            />

            <section className="resources-content">
                <div className="container">
                    {isAdmin && (
                        <div className="admin-header">
                            <div>
                                <h2>Gestion des Ressources</h2>
                                <p>En tant qu'administrateur, vous pouvez enrichir la base documentaire.</p>
                            </div>
                            <button className="btn-add-resource" onClick={() => setShowAddModal(true)}>
                                <span>➕</span> Ajouter une ressource
                            </button>
                        </div>
                    )}

                    <div className="resources-grid">
                        {resources.map((resource) => (
                            <div key={resource.id} className="resource-item-card">
                                <div className="resource-item-image">
                                    <span className="resource-type-badge">{resource.type === 'video' ? 'VIDEO' : 'PDF'}</span>
                                    <img src={resource.image} alt={resource.title} />
                                    {resource.type === 'video' && (
                                        <div className="video-overlay">▶️</div>
                                    )}
                                </div>
                                <h3>{resource.title}</h3>
                                <p>{resource.description}</p>
                                <div className="benefits">
                                    <h4>Contenu :</h4>
                                    <ul>
                                        {resource.benefits.map((benefit, idx) => (
                                            <li key={idx}>✓ {benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="resource-actions">
                                    {resource.type === 'video' ? (
                                        <a href={resource.youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn-watch">
                                            <span>▶️</span> Regarder sur YouTube
                                        </a>
                                    ) : (
                                        <button className="btn-download" onClick={() => handleDownload(resource.title)}>
                                            <span>📥</span> Télécharger PDF
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {showAddModal && (
                <div className="modal-overlay">
                    <div className="resource-modal">
                        <h2>Ajouter une nouvelle ressource</h2>
                        <form onSubmit={handleAddResource}>
                            <div className="form-group">
                                <label>Titre de la ressource</label>
                                <input
                                    type="text"
                                    required
                                    value={newResource.title}
                                    onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                                    placeholder="Ex: Guide de l'irrigation goutte-à-goutte"
                                />
                            </div>
                            <div className="form-group">
                                <label>Type de ressource</label>
                                <select
                                    value={newResource.type}
                                    onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}
                                >
                                    <option value="pdf">Guide PDF (Document)</option>
                                    <option value="video">Vidéo YouTube (Lien)</option>
                                </select>
                            </div>
                            {newResource.type === 'video' && (
                                <div className="form-group">
                                    <label>Lien YouTube</label>
                                    <input
                                        type="url"
                                        required
                                        value={newResource.youtubeUrl}
                                        onChange={(e) => setNewResource({ ...newResource, youtubeUrl: e.target.value })}
                                        placeholder="https://www.youtube.com/watch?v=..."
                                    />
                                </div>
                            )}
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    required
                                    value={newResource.description}
                                    onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                                    placeholder="Brève description du contenu..."
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label>Points clés (séparés par des virgules)</label>
                                <input
                                    type="text"
                                    required
                                    value={newResource.benefits}
                                    onChange={(e) => setNewResource({ ...newResource, benefits: e.target.value })}
                                    placeholder="Point 1, Point 2, Point 3"
                                />
                            </div>
                            <div className="modal-actions">
                                <button type="button" className="btn-cancel" onClick={() => setShowAddModal(false)}>Annuler</button>
                                <button type="submit" className="btn-submit">Publier la ressource</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResourcesPage;
