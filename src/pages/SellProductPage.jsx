import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight, ArrowLeft, Upload, Package, MapPin, Phone, CheckCircle2, DollarSign, Tag
} from 'lucide-react';
import '../styles/SellProductPage.css';

function SellProductPage() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        category: 'Fruits',
        price: '',
        unit: 'kg',
        quantity: '',
        description: '',
        location: '',
        phone: '',
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
            navigate('/marketplace');
        }, 2000);
    };

    return (
        <div className="sell-wizard-page">
            <div className="wizard-glass-panel">

                {/* Header */}
                <div className="wizard-header-simple">
                    <div className={`step-badge ${currentStep === 1 ? 'active' : 'completed'}`}>
                        {currentStep === 1 ? '1' : <CheckCircle2 size={16} />}
                    </div>
                    <div className="step-connector"></div>
                    <div className={`step-badge ${currentStep === 2 ? 'active' : ''}`}>2</div>
                </div>

                <h1 className="wizard-title">
                    {currentStep === 1 ? 'Votre Produit' : 'Logistique & Contact'}
                </h1>

                <form onSubmit={handleSubmit} className="wizard-form-content">

                    {/* STEP 1: Product Info */}
                    {currentStep === 1 && (
                        <div className="step-content fade-in">
                            <div className="form-group-premium">
                                <label>Nom du Produit</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Mangues Kent Bio"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    autoFocus
                                />
                            </div>

                            <div className="dual-inputs">
                                <div className="form-group-premium">
                                    <label>Catégorie</label>
                                    <div className="select-wrapper">
                                        <Tag size={16} className="input-icon" />
                                        <select
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            <option>Fruits</option>
                                            <option>Légumes</option>
                                            <option>Céréales</option>
                                            <option>Tubercules</option>
                                            <option>Produits Transformés</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group-premium">
                                    <label>Prix (GNF)</label>
                                    <div className="input-with-icon">
                                        <DollarSign size={16} className="input-icon" />
                                        <input
                                            type="number"
                                            placeholder="5000"
                                            value={formData.price}
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="dual-inputs">
                                <div className="form-group-premium">
                                    <label>Quantité Dispo</label>
                                    <input
                                        type="number"
                                        placeholder="100"
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    />
                                </div>
                                <div className="form-group-premium">
                                    <label>Unité</label>
                                    <select
                                        value={formData.unit}
                                        onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                                    >
                                        <option value="kg">Kg</option>
                                        <option value="tonnes">Tonnes</option>
                                        <option value="sacs">Sacs</option>
                                        <option value="caisses">Caisses</option>
                                    </select>
                                </div>
                            </div>

                            <div className="upload-section-compact">
                                <input type="file" id="product-img" onChange={handleImageChange} className="hidden-input" />
                                <label htmlFor="product-img" className="upload-label-compact">
                                    {previewImage ? (
                                        <img src={previewImage} alt="Preview" />
                                    ) : (
                                        <>
                                            <div className="icon-circle"><Upload size={20} /></div>
                                            <span>Ajouter une photo</span>
                                        </>
                                    )}
                                </label>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Logistics */}
                    {currentStep === 2 && (
                        <div className="step-content fade-in">
                            <div className="form-group-premium">
                                <label>Description du produit</label>
                                <textarea
                                    rows="4"
                                    placeholder="Décrivez la qualité, la variété, date de récolte..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                ></textarea>
                            </div>

                            <div className="form-group-premium">
                                <label>Lieu de retrait / Localisation</label>
                                <div className="input-with-icon">
                                    <MapPin size={18} className="input-icon" />
                                    <input
                                        type="text"
                                        placeholder="Ex: Marché Central, Kindia"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group-premium">
                                <label>Numéro de Contact</label>
                                <div className="input-with-icon">
                                    <Phone size={18} className="input-icon" />
                                    <input
                                        type="tel"
                                        placeholder="+224 ..."
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="summary-box">
                                <Package size={20} />
                                <div>
                                    <strong>{formData.name || 'Produit'}</strong>
                                    <span>{formData.quantity} {formData.unit} à {formData.price} GNF/{formData.unit}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="wizard-actions">
                        {currentStep > 1 && (
                            <button type="button" className="btn-back" onClick={prevStep}>
                                <ArrowLeft size={18} />
                            </button>
                        )}

                        {currentStep < 2 ? (
                            <button type="button" className="btn-next full-width" onClick={nextStep}>
                                Suivant <ArrowRight size={18} />
                            </button>
                        ) : (
                            <button type="submit" className="btn-submit full-width" disabled={isSubmitting}>
                                {isSubmitting ? 'Mise en vente...' : 'Vendre maintenant'}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SellProductPage;
