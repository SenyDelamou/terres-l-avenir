import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PublishResourcePage.css';

function PublishResourcePage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        type: 'pdf',
        description: '',
        youtubeUrl: '',
        benefits: '',
        image: null
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file
        });
        if (errors.image) {
            setErrors({ ...errors, image: '' });
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Le titre est requis';
        }

        if (!formData.description.trim() || formData.description.length < 50) {
            newErrors.description = 'La description doit contenir au moins 50 caractères';
        }

        if (formData.type === 'video' && !formData.youtubeUrl.trim()) {
            newErrors.youtubeUrl = 'Le lien YouTube est requis pour une vidéo';
        } else if (formData.type === 'video' && !formData.youtubeUrl.includes('youtube.com') && !formData.youtubeUrl.includes('youtu.be')) {
            newErrors.youtubeUrl = 'Veuillez saisir un lien YouTube valide';
        }

        if (!formData.benefits.trim()) {
            newErrors.benefits = 'Veuillez lister quelques points clés';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);

        // Simuler la soumission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Votre ressource a été publiée avec succès ! Merci de contribuer à la communauté AgriPulse.');
            navigate('/ressources');
        }, 2000);
    };

    return (
        <div className="publish-resource-page">
            <section className="page-header-resource" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1920&h=600&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="page-header-overlay"></div>
                <div className="container">
                    <h1>Partager une Ressource</h1>
                    <p>Aidez d'autres agriculteurs en partageant vos connaissances et guides techniques</p>
                </div>
            </section>

            <section className="publish-content">
                <div className="container">
                    <div className="publish-layout">
                        <div className="publish-guide-card">
                            <h3>📚 Pourquoi partager ?</h3>
                            <p>En partageant vos ressources, vous participez à l'éducation collective et au développement d'une agriculture plus performante en Guinée.</p>
                            <ul className="guide-tips">
                                <li>Soyez précis dans vos descriptions</li>
                                <li>Liez des vidéos de haute qualité</li>
                                <li>Listez les bénéfices concrets pour l'agriculteur</li>
                            </ul>
                            <div className="guide-illustration">
                                <img src="https://images.unsplash.com/photo-1595841696677-5f80e037466d?w=400&h=250&fit=crop" alt="Illustration" />
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="publish-form">
                            <div className="form-section">
                                <h3>Détails de la Ressource</h3>

                                <div className="form-group">
                                    <label htmlFor="title">Titre de la Ressource *</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Ex: Guide complet du maraîchage bio"
                                        className={errors.title ? 'error' : ''}
                                    />
                                    {errors.title && <span className="error-message">{errors.title}</span>}
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="type">Type de Contenu *</label>
                                        <select
                                            id="type"
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                        >
                                            <option value="pdf">Document PDF / Guide</option>
                                            <option value="video">Vidéo Tutoriel (YouTube)</option>
                                        </select>
                                    </div>
                                </div>

                                {formData.type === 'video' && (
                                    <div className="form-group">
                                        <label htmlFor="youtubeUrl">Lien Vidéo YouTube *</label>
                                        <input
                                            type="url"
                                            id="youtubeUrl"
                                            name="youtubeUrl"
                                            value={formData.youtubeUrl}
                                            onChange={handleChange}
                                            placeholder="https://www.youtube.com/watch?v=..."
                                            className={errors.youtubeUrl ? 'error' : ''}
                                        />
                                        {errors.youtubeUrl && <span className="error-message">{errors.youtubeUrl}</span>}
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="description">Description de la Ressource *</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="6"
                                        placeholder="Décrivez ce que les utilisateurs apprendront dans cette ressource (minimum 50 caractères)..."
                                        className={errors.description ? 'error' : ''}
                                    ></textarea>
                                    {errors.description && <span className="error-message">{errors.description}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="benefits">Points clés / Bénéfices (séparés par des virgules) *</label>
                                    <input
                                        type="text"
                                        id="benefits"
                                        name="benefits"
                                        value={formData.benefits}
                                        onChange={handleChange}
                                        placeholder="Ex: Amélioration du sol, Gain de temps, Réduction des coûts"
                                        className={errors.benefits ? 'error' : ''}
                                    />
                                    {errors.benefits && <span className="error-message">{errors.benefits}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="image">Image de couverture (optionnel)</label>
                                    <div className="file-upload-wrapper">
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            onChange={handleFileUpload}
                                            accept="image/*"
                                        />
                                        <div className="file-upload-design">
                                            <span>📸</span>
                                            <p>{formData.image ? formData.image.name : 'Choisir une image illustratrice'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn-submit-resource" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <><span className="spinner"></span> Publication en cours...</>
                                    ) : (
                                        'Publier la Ressource'
                                    )}
                                </button>
                                <button type="button" className="btn-cancel" onClick={() => navigate('/ressources')}>
                                    Annuler
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PublishResourcePage;
