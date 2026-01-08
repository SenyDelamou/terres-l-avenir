import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle, MessageSquare } from 'lucide-react';
import '../styles/ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page-premium">
      {/* Parallax Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <MessageSquare size={16} className="hero-icon" />
            <span>Support 24/7</span>
          </div>
          <h1>Parlons de votre <br /> <span className="highlight-text">Projet Agricole</span></h1>
          <p>Notre équipe d'experts est prête à vous accompagner dans votre transition vers une agriculture durable.</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="contact-section">
        <div className="container contact-container">

          {/* Left: Contact Info Cards */}
          <div className="contact-info-column">
            <div className="info-glass-card">
              <div className="icon-box-premium">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h3>Notre Siège</h3>
                <p>Zone Industrielle, Mamou, Guinée</p>
                <span className="info-sub">Au cœur de l'innovation agricole</span>
              </div>
            </div>

            <div className="info-glass-card">
              <div className="icon-box-premium delay-1">
                <Phone size={24} />
              </div>
              <div className="info-text">
                <h3>Service Client</h3>
                <p>+224 623 59 01 51</p>
                <span className="info-sub">Lun-Ven, 8h à 18h</span>
              </div>
            </div>

            <div className="info-glass-card">
              <div className="icon-box-premium delay-2">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h3>Email Pro</h3>
                <p>contact@agripulse.com</p>
                <span className="info-sub">Réponse sous 24h</span>
              </div>
            </div>

            <div className="info-glass-card">
              <div className="icon-box-premium delay-3">
                <Clock size={24} />
              </div>
              <div className="info-text">
                <h3>Horaires</h3>
                <p>Lundi - Vendredi: 08:00 - 17:00</p>
                <p>Samedi: 09:00 - 13:00</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-column">
            <div className="form-glass-panel">
              <div className="form-header">
                <h2>Envoyez-nous un message</h2>
                <p>Remplissez le formulaire ci-dessous et un expert vous recontactera.</p>
              </div>

              {!isSent ? (
                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="form-row">
                    <div className="form-group-premium">
                      <label>Nom complet</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex: Jean Diallo"
                        required
                      />
                    </div>
                    <div className="form-group-premium">
                      <label>Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+224 ..."
                      />
                    </div>
                  </div>

                  <div className="form-group-premium">
                    <label>Email professionnel</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contact@domaine.com"
                      required
                    />
                  </div>

                  <div className="form-group-premium">
                    <label>Sujet</label>
                    <div className="select-wrapper">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Sélectionnez un motif...</option>
                        <option value="partenariat">Demande de Partenariat</option>
                        <option value="support">Support Technique</option>
                        <option value="demo">Demande de Démo</option>
                        <option value="presse">Presse & Médias</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group-premium">
                    <label>Votre message</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Détaillez votre demande..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit-premium" disabled={isLoading}>
                    {isLoading ? <Loader2 className="spinner" size={20} /> : (
                      <>
                        <span>Envoyer le message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="success-message-panel">
                  <div className="success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>Message Envoyé !</h3>
                  <p>Merci de nous avoir contactés. Notre équipe a bien reçu votre demande et reviendra vers vous très rapidement.</p>
                  <button onClick={() => setIsSent(false)} className="btn-reset">Envoyer un autre message</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
