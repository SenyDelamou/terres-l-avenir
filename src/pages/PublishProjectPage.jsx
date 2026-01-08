import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, Upload, Leaf, DollarSign, Image as ImageIcon,
  CheckCircle2, Sparkles, AlertCircle
} from 'lucide-react';
import '../styles/PublishProjectPage.css';

function PublishProjectPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    category: 'Maraîchage',
    location: '',
    fundingGoal: '',
    description: '',
    impact: '',
    image: null
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dashboard'); // Or confirmation page
    }, 2000);
  };

  return (
    <div className="publish-wizard-page">
      <div className="wizard-container-glass">

        {/* Wizard Header */}
        <div className="wizard-header">
          <div className="wizard-progress">
            <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>1</div>
            <div className="progress-line"></div>
            <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>2</div>
            <div className="progress-line"></div>
            <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>3</div>
          </div>
          <h1>
            {currentStep === 1 && "L'Idée"}
            {currentStep === 2 && "L'Histoire"}
            {currentStep === 3 && "Le Financement"}
          </h1>
          <p>Étape {currentStep} sur 3</p>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="wizard-form">

          {/* STEP 1: Basic Info */}
          {currentStep === 1 && (
            <div className="wizard-step step-1 fade-in">
              <div className="form-group-premium">
                <label>Titre du Projet</label>
                <input
                  type="text"
                  placeholder="Ex: Ferme Solaire de Mamou..."
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  autoFocus
                />
              </div>

              <div className="form-row">
                <div className="form-group-premium">
                  <label>Catégorie</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option>Maraîchage</option>
                    <option>Élevage</option>
                    <option>Transformation</option>
                    <option>Technologie</option>
                  </select>
                </div>
                <div className="form-group-premium">
                  <label>Localisation</label>
                  <input
                    type="text"
                    placeholder="Ville, Région"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group-premium upload-group">
                <label>Image de Couverture</label>
                <div className="file-upload-box">
                  <input type="file" onChange={handleImageChange} id="file-upload" className="hidden-input" />
                  <label htmlFor="file-upload" className="upload-label">
                    {previewImage ? (
                      <img src={previewImage} alt="Preview" className="upload-preview" />
                    ) : (
                      <div className="upload-placeholder">
                        <Upload size={32} />
                        <span>Cliquez pour ajouter une photo</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Story & Impact */}
          {currentStep === 2 && (
            <div className="wizard-step step-2 fade-in">
              <div className="ai-suggestion-box">
                <Sparkles size={20} className="ai-icon" />
                <p>Conseil IA : Commencez par votre histoire personnelle. Pourquoi ce projet vous tient-il à cœur ?</p>
              </div>

              <div className="form-group-premium">
                <label>Description du Projet</label>
                <textarea
                  rows="6"
                  placeholder="Racontez votre histoire..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>

              <div className="form-group-premium">
                <label>Impact Environnemental & Social</label>
                <textarea
                  rows="4"
                  placeholder="Comment ce projet aide-t-il la communauté ?"
                  value={formData.impact}
                  onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
                ></textarea>
              </div>
            </div>
          )}

          {/* STEP 3: Funding */}
          {currentStep === 3 && (
            <div className="wizard-step step-3 fade-in">
              <div className="amount-display">
                <span className="currency">GNF</span>
                <input
                  type="number"
                  placeholder="0"
                  value={formData.fundingGoal}
                  onChange={(e) => setFormData({ ...formData, fundingGoal: e.target.value })}
                  className="big-amount-input"
                />
              </div>
              <p className="amount-label">Objectif de Financement</p>

              <div className="summary-card">
                <h4>Récapitulatif</h4>
                <div className="summary-row">
                  <span>Projet</span>
                  <strong>{formData.title || 'Sans titre'}</strong>
                </div>
                <div className="summary-row">
                  <span>Catégorie</span>
                  <strong>{formData.category}</strong>
                </div>
                <div className="warning-box">
                  <AlertCircle size={16} />
                  <small>Votre projet sera soumis à validation (24-48h).</small>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="wizard-footer">
            {currentStep > 1 ? (
              <button type="button" className="btn-wizard-nav prev" onClick={prevStep}>
                <ArrowLeft size={18} /> Retour
              </button>
            ) : (
              <div></div> // Spacer
            )}

            {currentStep < 3 ? (
              <button type="button" className="btn-wizard-nav next" onClick={nextStep}>
                Suivant <ArrowRight size={18} />
              </button>
            ) : (
              <button type="submit" className="btn-wizard-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Publication...' : 'Publier le Projet'}
                {!isSubmitting && <CheckCircle2 size={18} />}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default PublishProjectPage;
