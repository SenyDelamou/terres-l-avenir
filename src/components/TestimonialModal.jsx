import { useState } from 'react';
import '../styles/TestimonialModal.css';

function TestimonialModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        testimonial: '',
        rating: 5
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulation de l'envoi (à remplacer par un appel API)
        alert(`Merci ${formData.name} pour votre témoignage ! Il sera publié après modération.`);

        // Réinitialiser le formulaire
        setFormData({
            name: '',
            location: '',
            testimonial: '',
            rating: 5
        });

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="testimonial-modal-overlay" onClick={onClose}>
            <div className="testimonial-modal" onClick={(e) => e.stopPropagation()}>
                <div className="testimonial-modal-header">
                    <h2>📝 Partager votre témoignage</h2>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>

                <form className="testimonial-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Votre nom *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ex: Jean Dupont"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Localisation *</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Ex: Agriculteur, Conakry"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rating">Note</label>
                        <div className="rating-selector">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className={`star-btn ${formData.rating >= star ? 'active' : ''}`}
                                    onClick={() => setFormData({ ...formData, rating: star })}
                                >
                                    ⭐
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="testimonial">Votre témoignage *</label>
                        <textarea
                            id="testimonial"
                            name="testimonial"
                            value={formData.testimonial}
                            onChange={handleChange}
                            placeholder="Partagez votre expérience avec AgriPulse..."
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            Annuler
                        </button>
                        <button type="submit" className="btn-submit">
                            Soumettre le témoignage
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TestimonialModal;
