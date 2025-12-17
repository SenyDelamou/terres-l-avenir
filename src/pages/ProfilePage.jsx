import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfilePage.css';

function ProfilePage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@example.com',
    phone: '+33 6 12 34 56 78',
    address: '123 Rue de la Ferme',
    city: 'Rouen',
    postalCode: '76000',
    region: 'Normandie',
    country: 'France',
    bio: 'Agriculteur passionné depuis 15 ans, spécialisé dans l\'agriculture biologique et durable.',
    farmType: 'Céréales',
    farmSize: '50',
    experience: '15',
    website: '',
    socialMedia: {
      facebook: '',
      twitter: '',
      linkedin: ''
    }
  });

  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social_')) {
      const socialKey = name.replace('social_', '');
      setFormData({
        ...formData,
        socialMedia: {
          ...formData.socialMedia,
          [socialKey]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSaving(true);

    // Simuler la sauvegarde
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      alert('Vos informations ont été mises à jour avec succès !');
    }, 1500);
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    if (!passwordData.currentPassword) {
      alert('Veuillez entrer votre mot de passe actuel');
      return;
    }

    if (!passwordData.newPassword || passwordData.newPassword.length < 6) {
      alert('Le nouveau mot de passe doit contenir au moins 6 caractères');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    // Simuler la mise à jour
    setTimeout(() => {
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      alert('Votre mot de passe a été modifié avec succès !');
    }, 1500);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Simuler l'upload
      alert('Photo de profil mise à jour !');
    }
  };

  return (
    <div className="profile-page">
      <section className="page-header">
        <div className="container">
          <h1>Mon Profil</h1>
          <p>Gérez vos informations personnelles et votre compte</p>
        </div>
      </section>

      <section className="profile-content">
        <div className="container">
          <div className="profile-layout">
            <aside className="profile-sidebar">
              <div className="profile-card">
                <div className="profile-avatar-section">
                  <div className="profile-avatar">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Profil" />
                    <label className="avatar-upload">
                      <input type="file" accept="image/*" onChange={handleImageUpload} />
                      <span className="upload-icon">📷</span>
                    </label>
                  </div>
                  <h2>{formData.firstName} {formData.lastName}</h2>
                  <p className="profile-role">Agriculteur</p>
                  <div className="profile-stats">
                    <div className="stat-item">
                      <span className="stat-value">3</span>
                      <span className="stat-label">Projets</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">12</span>
                      <span className="stat-label">Messages</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">5</span>
                      <span className="stat-label">Années</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-menu">
                <button 
                  className={!isEditing ? 'active' : ''}
                  onClick={() => setIsEditing(false)}
                >
                  <span>👤</span> Informations
                </button>
                <button 
                  className={isEditing ? 'active' : ''}
                  onClick={() => setIsEditing(true)}
                >
                  <span>✏️</span> Modifier
                </button>
                <button onClick={() => navigate('/dashboard')}>
                  <span>📊</span> Dashboard
                </button>
              </div>
            </aside>

            <main className="profile-main">
              {!isEditing ? (
                <div className="profile-view">
                  <div className="profile-section">
                    <h3>Informations Personnelles</h3>
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="info-label">Prénom</span>
                        <span className="info-value">{formData.firstName}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Nom</span>
                        <span className="info-value">{formData.lastName}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Email</span>
                        <span className="info-value">{formData.email}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Téléphone</span>
                        <span className="info-value">{formData.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="profile-section">
                    <h3>Adresse</h3>
                    <div className="info-grid">
                      <div className="info-item full-width">
                        <span className="info-label">Adresse</span>
                        <span className="info-value">{formData.address}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Ville</span>
                        <span className="info-value">{formData.city}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Code Postal</span>
                        <span className="info-value">{formData.postalCode}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Région</span>
                        <span className="info-value">{formData.region}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Pays</span>
                        <span className="info-value">{formData.country}</span>
                      </div>
                    </div>
                  </div>

                  <div className="profile-section">
                    <h3>Informations Professionnelles</h3>
                    <div className="info-grid">
                      <div className="info-item">
                        <span className="info-label">Type d'exploitation</span>
                        <span className="info-value">{formData.farmType}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Taille (hectares)</span>
                        <span className="info-value">{formData.farmSize} ha</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">Expérience</span>
                        <span className="info-value">{formData.experience} ans</span>
                      </div>
                    </div>
                  </div>

                  <div className="profile-section">
                    <h3>À propos</h3>
                    <p className="bio-text">{formData.bio}</p>
                  </div>

                  <button className="btn-edit-profile" onClick={() => setIsEditing(true)}>
                    ✏️ Modifier mes informations
                  </button>
                </div>
              ) : (
                <div className="profile-edit">
                  <form onSubmit={handleSave} className="profile-form">
                    <div className="form-section">
                      <h3>Informations Personnelles</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="firstName">Prénom *</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={errors.firstName ? 'error' : ''}
                          />
                          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Nom *</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={errors.lastName ? 'error' : ''}
                          />
                          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                          />
                          {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Téléphone *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={errors.phone ? 'error' : ''}
                          />
                          {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>
                      </div>
                    </div>

                    <div className="form-section">
                      <h3>Adresse</h3>
                      <div className="form-group">
                        <label htmlFor="address">Adresse</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="city">Ville</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="postalCode">Code Postal</label>
                          <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="region">Région</label>
                          <input
                            type="text"
                            id="region"
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="country">Pays</label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-section">
                      <h3>Informations Professionnelles</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="farmType">Type d'exploitation</label>
                          <select
                            id="farmType"
                            name="farmType"
                            value={formData.farmType}
                            onChange={handleChange}
                          >
                            <option value="Céréales">Céréales</option>
                            <option value="Élevage">Élevage</option>
                            <option value="Maraîchage">Maraîchage</option>
                            <option value="Viticulture">Viticulture</option>
                            <option value="Arboriculture">Arboriculture</option>
                            <option value="Polyculture">Polyculture</option>
                            <option value="Autre">Autre</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="farmSize">Taille (hectares)</label>
                          <input
                            type="number"
                            id="farmSize"
                            name="farmSize"
                            value={formData.farmSize}
                            onChange={handleChange}
                            min="0"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="experience">Années d'expérience</label>
                          <input
                            type="number"
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            min="0"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-section">
                      <h3>À propos</h3>
                      <div className="form-group">
                        <label htmlFor="bio">Biographie</label>
                        <textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          rows="5"
                          placeholder="Parlez-nous de vous et de votre exploitation..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="form-section">
                      <h3>Réseaux Sociaux (optionnel)</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="social_facebook">Facebook</label>
                          <input
                            type="url"
                            id="social_facebook"
                            name="social_facebook"
                            value={formData.socialMedia.facebook}
                            onChange={handleChange}
                            placeholder="https://facebook.com/..."
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="social_twitter">Twitter</label>
                          <input
                            type="url"
                            id="social_twitter"
                            name="social_twitter"
                            value={formData.socialMedia.twitter}
                            onChange={handleChange}
                            placeholder="https://twitter.com/..."
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="social_linkedin">LinkedIn</label>
                          <input
                            type="url"
                            id="social_linkedin"
                            name="social_linkedin"
                            value={formData.socialMedia.linkedin}
                            onChange={handleChange}
                            placeholder="https://linkedin.com/in/..."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-actions">
                      <button type="submit" className="btn-save" disabled={isSaving}>
                        {isSaving ? (
                          <>
                            <span className="spinner"></span>
                            Enregistrement...
                          </>
                        ) : (
                          'Enregistrer les modifications'
                        )}
                      </button>
                      <button 
                        type="button" 
                        className="btn-cancel"
                        onClick={() => setIsEditing(false)}
                      >
                        Annuler
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="password-section">
                <h3>Changer le Mot de Passe</h3>
                <form onSubmit={handlePasswordUpdate} className="password-form">
                  <div className="form-group">
                    <label htmlFor="currentPassword">Mot de passe actuel</label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="newPassword">Nouveau mot de passe</label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        minLength="6"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        minLength="6"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-update-password">
                    Mettre à jour le mot de passe
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;

