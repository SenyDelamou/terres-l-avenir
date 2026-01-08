import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, Upload, Sparkles, MapPin,
  DollarSign, Clock, FileText, CheckCircle, Image as ImageIcon,
  AlertCircle, X
} from 'lucide-react';
import '../styles/PublishProjectPage.css';

function PublishProjectPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    location: '',
    description: '',
    amount: '',
    duration: '',
    roi: '',
    images: [],
    businessPlan: null
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const categories = [
    'Agriculture Biologique',
    'Élevage',
    'Agroforesterie',
    'Technologies Agricoles',
    'Transformation de Produits',
    'Commerce & Distribution',
    'Autre'
  ];

  /* --- Handlers --- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const generateWithAI = () => {
    if (!formData.title || !formData.category) {
      setErrors(prev => ({ ...prev, ai: 'Veuillez d\'abord remplir le titre et la catégorie.' }));
      return;
    }

    setIsGenerating(true);
    // Simulation of AI generation
    setTimeout(() => {
      const aiText = `Ce projet de ${formData.category} vise à révolutionner la production locale à ${formData.location || 'Guinée'}. \n\nNotre objectif est de mettre en place une structure durable qui respecte l'environnement tout en maximisant le rendement. Grâce à des techniques innovantes, nous prévoyons de créer 15 emplois directs et de fournir des produits de haute qualité au marché local.\n\nL'investissement servira principalement à l'acquisition d'équipements modernes et à la formation du personnel.`;
      setFormData(prev => ({ ...prev, description: aiText }));
      setIsGenerating(false);
      setErrors(prev => ({ ...prev, ai: '' }));
    }, 2000);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + formData.images.length > 5) {
      alert("Maximum 5 images autorisées.");
      return;
    }
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    if (files.length > 0) {
      if (files.length + formData.images.length > 5) {
        alert("Maximum 5 images autorisées.");
        return;
      }
      setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
    }
  };

  /* --- Navigation --- */

  const validateStep = (step) => {
    const newErrors = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.title.trim()) newErrors.title = "Le titre est requis.";
      if (!formData.category) newErrors.category = "La catégorie est requise.";
      if (!formData.location.trim()) newErrors.location = "La localisation est requise.";
    }

    if (step === 2) {
      if (!formData.description.trim() || formData.description.length < 50) {
        newErrors.description = "La description doit contenir au moins 50 caractères.";
      }
    }

    if (step === 3) {
      if (!formData.amount || formData.amount <= 0) newErrors.amount = "Montant invalide.";
      if (!formData.duration) newErrors.duration = "Durée requise.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    return isValid;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setErrors({});
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation submission
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/projets-financement');
    }, 2000);
  };

  /* --- Render Steps --- */

  const renderStep1 = () => (
    <div className="wizard-step fade-in">
      <div className="step-header">
        <h2>L'Étincelle du Projet</h2>
        <p>Commençons par les bases de votre vision agricole.</p>
      </div>

      <div className="form-grid">
        <div className="form-group glass-input-group">
          <label><FileText size={18} /> Titre du Projet</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ex: Ferme Aquaponique de Kindia"
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-msg">{errors.title}</span>}
        </div>

        <div className="form-group glass-input-group">
          <label><Sparkles size={18} /> Catégorie</label>
          <div className="select-wrapper">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={errors.category ? 'error' : ''}
            >
              <option value="">Sélectionner une catégorie</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          {errors.category && <span className="error-msg">{errors.category}</span>}
        </div>

        <div className="form-group glass-input-group full-width">
          <label><MapPin size={18} /> Localisation</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Ville, Région"
            className={errors.location ? 'error' : ''}
          />
          {errors.location && <span className="error-msg">{errors.location}</span>}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="wizard-step fade-in">
      <div className="step-header">
        <h2>Les Détails</h2>
        <p>Racontez votre histoire et convainquez vos futurs investisseurs.</p>
      </div>

      <div className="ai-assist-container">
        <button
          type="button"
          className={`btn-ai-generate ${isGenerating ? 'loading' : ''}`}
          onClick={generateWithAI}
          disabled={isGenerating}
        >
          <Sparkles size={18} />
          {isGenerating ? 'Rédaction par l\'IA...' : 'Générer une description avec l\'IA'}
        </button>
        {errors.ai && <span className="error-msg inline">{errors.ai}</span>}
      </div>

      <div className="form-group glass-input-group">
        <label>Description Détaillée</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={12}
          placeholder="Décrivez votre projet..."
          className={errors.description ? 'error' : ''}
        />
        <div className="char-count">{formData.description.length} caractères</div>
        {errors.description && <span className="error-msg">{errors.description}</span>}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="wizard-step fade-in">
      <div className="step-header">
        <h2>Le Budget</h2>
        <p>Quels sont vos besoins financiers pour réaliser ce projet ?</p>
      </div>

      <div className="form-grid">
        <div className="form-group glass-input-group">
          <label><DollarSign size={18} /> Montant Recherché (GNF)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="50 000 000"
            className={errors.amount ? 'error' : ''}
          />
          {errors.amount && <span className="error-msg">{errors.amount}</span>}
        </div>

        <div className="form-group glass-input-group">
          <label><Clock size={18} /> Durée de la Campagne</label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className={errors.duration ? 'error' : ''}
          >
            <option value="">Choisir la durée</option>
            <option value="30">30 Jours</option>
            <option value="45">45 Jours</option>
            <option value="60">60 Jours</option>
            <option value="90">90 Jours</option>
          </select>
          {errors.duration && <span className="error-msg">{errors.duration}</span>}
        </div>

        <div className="form-group glass-input-group full-width">
          <label>Retour sur Investissement Estimé (%)</label>
          <input
            type="text"
            name="roi"
            value={formData.roi}
            onChange={handleChange}
            placeholder="Ex: 15-20%"
          />
          <p className="input-hint">Optionnel : Une estimation attire plus d'investisseurs.</p>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="wizard-step fade-in">
      <div className="step-header">
        <h2>La Vitrine</h2>
        <p>Une image vaut mille mots. Ajoutez des visuels de haute qualité.</p>
      </div>

      <div
        className="drag-drop-zone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <div className="upload-icon-wrapper">
          <Upload size={48} />
        </div>
        <h3>Glissez vos images ici ou cliquez pour parcourir</h3>
        <p>JPG, PNG jusqu'à 5MB (Max 5 images)</p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          multiple
          accept="image/*"
          hidden
        />
      </div>

      {formData.images.length > 0 && (
        <div className="image-preview-grid">
          {formData.images.map((img, idx) => (
            <div key={idx} className="image-preview-card">
              <img src={URL.createObjectURL(img)} alt="Preview" />
              <button type="button" className="btn-remove-img" onClick={() => removeImage(idx)}>
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderStep5 = () => (
    <div className="wizard-step fade-in">
      <div className="step-header">
        <h2>Confirmation</h2>
        <p>Vérifiez les informations avant de lancer votre campagne.</p>
      </div>

      <div className="summary-card-glass">
        <div className="summary-section">
          <h3>{formData.title}</h3>
          <span className="summary-category">{formData.category}</span>
          <p className="summary-location"><MapPin size={14} /> {formData.location}</p>
        </div>

        <div className="summary-divider"></div>

        <div className="summary-details">
          <p className="summary-desc">{formData.description.substring(0, 150)}...</p>

          <div className="summary-stats">
            <div className="stat-item">
              <span className="label">Objectif</span>
              <span className="value">{parseInt(formData.amount).toLocaleString()} GNF</span>
            </div>
            <div className="stat-item">
              <span className="label">Durée</span>
              <span className="value">{formData.duration} jours</span>
            </div>
          </div>
        </div>

        {formData.images.length > 0 && (
          <div className="summary-gallery-mini">
            <img src={URL.createObjectURL(formData.images[0])} alt="Cover" className="cover-img" />
            {formData.images.length > 1 && <span className="more-count">+{formData.images.length - 1}</span>}
          </div>
        )}
      </div>

      <div className="final-check">
        <label className="checkbox-container">
          <input type="checkbox" required />
          <span className="checkmark"></span>
          Je certifie que les informations fournies sont exactes et conforme aux CGU d'AgriPlus.
        </label>
      </div>
    </div>
  );

  const steps = [
    { title: "Idée", icon: <Sparkles size={18} /> },
    { title: "Détails", icon: <FileText size={18} /> },
    { title: "Budget", icon: <DollarSign size={18} /> },
    { title: "Vitrine", icon: <ImageIcon size={18} /> },
    { title: "Validation", icon: <CheckCircle size={18} /> }
  ];

  return (
    <div className="publish-wizard-page">
      <div className="wizard-container-glass">

        {/* Progress Bar */}
        <div className="wizard-progress">
          {steps.map((s, idx) => {
            const stepNum = idx + 1;
            let status = 'pending';
            if (stepNum === currentStep) status = 'active';
            if (stepNum < currentStep) status = 'completed';

            return (
              <div key={idx} className={`progress-step ${status}`}>
                <div className="step-icon-bubble">
                  {status === 'completed' ? <CheckCircle size={20} /> : s.icon}
                </div>
                <span className="step-label">{s.title}</span>
                {idx < steps.length - 1 && <div className="step-line"></div>}
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="wizard-content">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
        </form>

        <div className="wizard-actions">
          {currentStep > 1 && (
            <button type="button" className="btn-wizard-prev" onClick={prevStep}>
              <ArrowLeft size={18} /> Retour
            </button>
          )}

          <div className="spacer"></div>

          {currentStep < 5 ? (
            <button type="button" className="btn-wizard-next" onClick={nextStep}>
              Suivant <ArrowRight size={18} />
            </button>
          ) : (
            <button
              type="button"
              className="btn-wizard-submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Publication...' : 'Lancer le Projet 🚀'}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default PublishProjectPage;

