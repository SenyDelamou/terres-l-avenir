import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PublishProjectPage.css';

function PublishProjectPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    amount: '',
    duration: '',
    location: '',
    images: [],
    businessPlan: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Agriculture Biologique',
    'Élevage',
    'Agroforesterie',
    'Technologies Agricoles',
    'Transformation de Produits',
    'Commerce & Distribution',
    'Autre'
  ];

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

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: [...formData.images, ...files]
    });
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      businessPlan: e.target.files[0]
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Le titre est requis';
    }

    if (!formData.category) {
      newErrors.category = 'La catégorie est requise';
    }

    if (!formData.description.trim() || formData.description.length < 100) {
      newErrors.description = 'La description doit contenir au moins 100 caractères';
    }

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Le montant doit être supérieur à 0';
    }

    if (!formData.duration) {
      newErrors.duration = 'La durée est requise';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'La localisation est requise';
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
      alert('Votre projet a été publié avec succès ! Il sera examiné par notre équipe avant d\'être mis en ligne.');
      navigate('/projets-financement');
    }, 2000);
  };

  return (
    <div className="publish-project-page">
      <section className="page-header" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1>Publier un Projet de Financement</h1>
          <p>Partagez votre projet agricole et trouvez des investisseurs</p>
        </div>
      </section>

      <section className="publish-content">
        <div className="container">
          <div className="publish-guide">
            <div className="guide-image">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=300&fit=crop" alt="Guide publication" />
            </div>
            <div className="guide-content">
              <h2>💡 Guide de Publication</h2>
              <div className="guide-steps">
                <div className="guide-step">
                  <span className="step-number">1</span>
                  <p>Remplissez tous les champs obligatoires avec des informations détaillées</p>
                </div>
                <div className="guide-step">
                  <span className="step-number">2</span>
                  <p>Ajoutez des photos de qualité pour illustrer votre projet</p>
                </div>
                <div className="guide-step">
                  <span className="step-number">3</span>
                  <p>Joignez un business plan si disponible</p>
                </div>
                <div className="guide-step">
                  <span className="step-number">4</span>
                  <p>Votre projet sera examiné sous 48h avant publication</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="publish-form">
            <div className="form-section">
              <h3>Informations Générales</h3>
              
              <div className="form-group">
                <label htmlFor="title">Titre du Projet *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Ex: Installation d'une serre solaire pour production bio"
                  className={errors.title ? 'error' : ''}
                />
                {errors.title && <span className="error-message">{errors.title}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="category">Catégorie *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={errors.category ? 'error' : ''}
                >
                  <option value="">Sélectionnez une catégorie</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && <span className="error-message">{errors.category}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="description">Description du Projet *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="8"
                  placeholder="Décrivez votre projet en détail : objectifs, méthodes, impact attendu, etc. (minimum 100 caractères)"
                  className={errors.description ? 'error' : ''}
                ></textarea>
                <span className="char-count">{formData.description.length} / 100 caractères minimum</span>
                {errors.description && <span className="error-message">{errors.description}</span>}
              </div>
            </div>

            <div className="form-section">
              <h3>Financement</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="amount">Montant recherché (€) *</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="50000"
                    min="1000"
                    step="1000"
                    className={errors.amount ? 'error' : ''}
                  />
                  {errors.amount && <span className="error-message">{errors.amount}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="duration">Durée du projet (mois) *</label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="12"
                    min="1"
                    className={errors.duration ? 'error' : ''}
                  />
                  {errors.duration && <span className="error-message">{errors.duration}</span>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Localisation</h3>
              
              <div className="form-group">
                <label htmlFor="location">Localisation du projet *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Ex: Normandie, France"
                  className={errors.location ? 'error' : ''}
                />
                {errors.location && <span className="error-message">{errors.location}</span>}
              </div>
            </div>

            <div className="form-section">
              <h3>Médias</h3>
              
              <div className="form-group">
                <label htmlFor="images">Photos du Projet</label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  onChange={handleImageUpload}
                  multiple
                  accept="image/*"
                />
                <p className="help-text">Ajoutez jusqu'à 5 photos (JPG, PNG, max 5MB chacune)</p>
                {formData.images.length > 0 && (
                  <div className="uploaded-images">
                    {formData.images.map((img, index) => (
                      <span key={index} className="uploaded-file">{img.name}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="businessPlan">Business Plan (optionnel)</label>
                <input
                  type="file"
                  id="businessPlan"
                  name="businessPlan"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx"
                />
                <p className="help-text">Format PDF ou Word (max 10MB)</p>
                {formData.businessPlan && (
                  <div className="uploaded-file">{formData.businessPlan.name}</div>
                )}
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Publication en cours...
                  </>
                ) : (
                  'Publier le Projet'
                )}
              </button>
              <button type="button" className="btn-cancel" onClick={() => navigate('/dashboard')}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default PublishProjectPage;

