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
            description: 'Techniques qui préservent la structure du sol et réduisent l\'érosion.',
            benefits: ['Amélioration de la fertilité', 'Réduction de l\'érosion', 'Meilleure rétention d\'eau'],
            image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=250&fit=crop'
        },
        {
            id: 2,
            title: 'Rotation des Cultures',
            description: 'Planification stratégique de la rotation pour optimiser les rendements.',
            benefits: ['Réduction des maladies', 'Amélioration de la fertilité', 'Diversification des revenus'],
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop'
        },
        {
            id: 3,
            title: 'Agroécologie',
            description: 'Intégration des principes écologiques dans les systèmes agricoles.',
            benefits: ['Biodiversité accrue', 'Résilience aux changements', 'Réduction des intrants'],
            image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop'
        },
        {
            id: 4,
            title: 'Agriculture de Précision',
            description: 'Utilisation de technologies pour optimiser chaque zone de votre champ.',
            benefits: ['Optimisation des intrants', 'Meilleure gestion', 'Augmentation des rendements'],
            image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=250&fit=crop'
        },
        {
            id: 5,
            title: 'Compostage et Fertilisants Naturels',
            description: 'Production et utilisation de compost pour enrichir naturellement vos sols.',
            benefits: ['Amélioration de la structure du sol', 'Réduction des coûts', 'Durabilité'],
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop'
        },
        {
            id: 6,
            title: 'Gestion Intégrée des Ravageurs',
            description: 'Approche écologique pour contrôler les ravageurs sans pesticides excessifs.',
            benefits: ['Réduction des pesticides', 'Protection de la biodiversité', 'Coûts réduits'],
            image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=250&fit=crop'
        }
    ]);

    const [newResource, setNewResource] = useState({
        title: '',
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
            image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=250&fit=crop'
        };
        setResources([resourceToAdd, ...resources]);
        setShowAddModal(false);
        setNewResource({ title: '', description: '', benefits: '' });
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
                                    <img src={resource.image} alt={resource.title} />
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
                                    <button className="btn-download" onClick={() => handleDownload(resource.title)}>
                                        <span>📥</span> Télécharger PDF
                                    </button>
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
