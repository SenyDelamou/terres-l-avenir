import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SellProductPage.css';

function SellProductPage() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        unit: 'kg',
        quantity: '',
        location: ''
    });

    const [productImage, setProductImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const categories = [
        { value: '', label: 'Sélectionnez une catégorie' },
        { value: 'legumes', label: 'Légumes' },
        { value: 'fruits', label: 'Fruits' },
        { value: 'cereales', label: 'Céréales' },
        { value: 'tubercules', label: 'Tubercules' },
        { value: 'epices', label: 'Épices' },
        { value: 'autres', label: 'Autres' }
    ];

    const units = [
        { value: 'kg', label: 'Kilogramme (kg)' },
        { value: 'tonne', label: 'Tonne' },
        { value: 'piece', label: 'Pièce' },
        { value: 'sac', label: 'Sac' }
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

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProductImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);

            if (errors.image) {
                setErrors({ ...errors, image: '' });
            }
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Le nom du produit est requis';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'La description est requise';
        }

        if (!formData.category) {
            newErrors.category = 'Veuillez sélectionner une catégorie';
        }

        if (!formData.price || parseFloat(formData.price) <= 0) {
            newErrors.price = 'Le prix doit être supérieur à 0';
        }

        if (!formData.quantity || parseInt(formData.quantity) <= 0) {
            newErrors.quantity = 'La quantité doit être supérieure à 0';
        }

        if (!formData.location.trim()) {
            newErrors.location = 'La localisation est requise';
        }

        if (!productImage) {
            newErrors.image = 'Veuillez ajouter une photo du produit';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsLoading(true);

        // Simulation de publication (à remplacer par un appel API)
        setTimeout(() => {
            setIsLoading(false);
            alert('🎉 Votre produit a été publié avec succès !');
            navigate('/marketplace');
        }, 1500);
    };

    return (
        <div className="sell-product-page">
            <section className="sell-header">
                <div className="container">
                    <h1>📦 Vendre un Produit</h1>
                    <p>Publiez votre produit agricole sur la marketplace</p>
                </div>
            </section>

            <section className="sell-content">
                <div className="container">
                    <form className="sell-form" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <h2>📷 Photo du Produit</h2>

                            <div className="image-upload-area">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept="image/*"
                                    onChange={handleImageSelect}
                                    style={{ display: 'none' }}
                                />

                                {imagePreview ? (
                                    <div className="image-preview">
                                        <img src={imagePreview} alt="Aperçu produit" />
                                        <button
                                            type="button"
                                            className="btn-change-image"
                                            onClick={() => fileInputRef.current.click()}
                                        >
                                            📷 Changer
                                        </button>
                                    </div>
                                ) : (
                                    <div
                                        className="image-dropzone"
                                        onClick={() => fileInputRef.current.click()}
                                    >
                                        <span className="upload-icon">📸</span>
                                        <p>Cliquez pour ajouter une photo</p>
                                        <span className="upload-hint">JPG, PNG (Max 5MB)</span>
                                    </div>
                                )}
                            </div>

                            {errors.image && <span className="error-text">{errors.image}</span>}
                        </div>

                        <div className="form-section">
                            <h2>ℹ️ Informations du Produit</h2>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name">Nom du Produit *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Ex: Tomates Bio"
                                        className={errors.name ? 'error' : ''}
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
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
                                        {categories.map(cat => (
                                            <option key={cat.value} value={cat.value}>
                                                {cat.label}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category && <span className="error-text">{errors.category}</span>}
                                </div>

                                <div className="form-group full-width">
                                    <label htmlFor="description">Description *</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Décrivez votre produit (qualité, méthode de culture, etc.)"
                                        rows="4"
                                        className={errors.description ? 'error' : ''}
                                    ></textarea>
                                    {errors.description && <span className="error-text">{errors.description}</span>}
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h2>💰 Prix et Quantité</h2>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="price">Prix *</label>
                                    <div className="input-with-unit">
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                            step="0.01"
                                            min="0"
                                            className={errors.price ? 'error' : ''}
                                        />
                                        <span className="unit-label">€</span>
                                    </div>
                                    {errors.price && <span className="error-text">{errors.price}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="unit">Unité</label>
                                    <select
                                        id="unit"
                                        name="unit"
                                        value={formData.unit}
                                        onChange={handleChange}
                                    >
                                        {units.map(unit => (
                                            <option key={unit.value} value={unit.value}>
                                                {unit.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="quantity">Quantité Disponible *</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        placeholder="0"
                                        min="1"
                                        className={errors.quantity ? 'error' : ''}
                                    />
                                    {errors.quantity && <span className="error-text">{errors.quantity}</span>}
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <h2>📍 Localisation</h2>

                            <div className="form-group">
                                <label htmlFor="location">Localisation *</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Ex: Conakry, Guinée"
                                    className={errors.location ? 'error' : ''}
                                />
                                {errors.location && <span className="error-text">{errors.location}</span>}
                            </div>
                        </div>

                        <div className="form-actions">
                            <button
                                type="button"
                                className="btn-cancel"
                                onClick={() => navigate('/marketplace')}
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                className="btn-submit"
                                disabled={isLoading}
                            >
                                {isLoading ? '⏳ Publication...' : '✅ Publier le Produit'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default SellProductPage;
