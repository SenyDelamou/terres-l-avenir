import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProjectDetailPage.css';

function ProjectDetailPage() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  // Même base de données que la page des projets de financement (version simplifiée)
  const projects = [
    {
      id: 1,
      title: 'Serre Solaire pour Production Bio',
      entrepreneur: 'Marie Dubois',
      category: 'Agriculture Biologique',
      amount: 45000,
      raised: 28000,
      investors: 12,
      daysLeft: 25,
      location: 'Normandie, France',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=600&fit=crop',
      description: 'Installation d\'une serre solaire de 500m² pour la production de légumes bio toute l\'année.'
    },
    {
      id: 2,
      title: 'Élevage de Chèvres Laitières',
      entrepreneur: 'Jean Martin',
      category: 'Élevage',
      amount: 60000,
      raised: 35000,
      investors: 18,
      daysLeft: 42,
      location: 'Auvergne, France',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=600&fit=crop',
      description: 'Création d\'un élevage de 50 chèvres laitières avec fromagerie artisanale.'
    },
    {
      id: 3,
      title: 'Agroforesterie et Apiculture',
      entrepreneur: 'Sophie Leroy',
      category: 'Agroforesterie',
      amount: 35000,
      raised: 12000,
      investors: 8,
      daysLeft: 18,
      location: 'Provence, France',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
      description: 'Plantation d\'arbres fruitiers et installation de ruches pour production de miel.'
    },
    {
      id: 4,
      title: 'Système d\'Irrigation Intelligent',
      entrepreneur: 'Pierre Bernard',
      category: 'Technologies Agricoles',
      amount: 80000,
      raised: 55000,
      investors: 25,
      daysLeft: 30,
      location: 'Centre, France',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
      description: 'Installation d\'un système d\'irrigation connecté avec capteurs IoT pour optimiser la consommation d\'eau.'
    },
    {
      id: 5,
      title: 'Transformation de Fruits en Conserves',
      entrepreneur: 'Luc Moreau',
      category: 'Transformation de Produits',
      amount: 55000,
      raised: 20000,
      investors: 10,
      daysLeft: 35,
      location: 'Aquitaine, France',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&h=600&fit=crop',
      description: 'Création d\'un atelier de transformation de fruits locaux en confitures et conserves.'
    },
    {
      id: 6,
      title: 'Marché Local Bio',
      entrepreneur: 'Emma Rousseau',
      category: 'Commerce & Distribution',
      amount: 40000,
      raised: 15000,
      investors: 7,
      daysLeft: 20,
      location: 'Île-de-France, France',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=600&fit=crop',
      description: 'Ouverture d\'un marché local dédié aux produits bio de la région.'
    }
  ];

  const project = projects.find((p) => p.id === projectId);

  const initialMessages = [
    {
      id: 1,
      senderType: 'investor',
      senderName: 'Investisseur Marie',
      content: 'Bonjour, votre projet de serre solaire m\'intéresse beaucoup. Pouvez-vous détailler l\'utilisation des fonds ?',
      time: 'Il y a 2 heures'
    },
    {
      id: 2,
      senderType: 'owner',
      senderName: 'Marie Dubois',
      content: 'Bonjour, merci pour votre intérêt ! Les fonds serviront à financer la structure de la serre, le système d\'irrigation et l\'achat des premiers plants.',
      time: 'Il y a 1 heure'
    }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState({
    senderType: 'owner',
    senderName: '',
    content: ''
  });

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setNewMessage((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.content.trim()) return;

    const senderName =
      newMessage.senderName.trim() ||
      (newMessage.senderType === 'owner'
        ? project?.entrepreneur || 'Porteur de projet'
        : 'Investisseur');

    const newMsg = {
      id: messages.length + 1,
      senderType: newMessage.senderType,
      senderName,
      content: newMessage.content.trim(),
      time: 'À l’instant'
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage({
      senderType: newMessage.senderType,
      senderName: '',
      content: ''
    });
  };

  if (!project) {
    return (
      <div className="project-detail-page">
        <section className="page-header no-project">
          <div className="container">
            <h1>Projet introuvable</h1>
            <p>Le projet que vous recherchez n’existe pas ou plus.</p>
            <Link to="/projets-financement" className="btn-primary">
              ← Retour aux projets de financement
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const progress = (project.raised / project.amount) * 100;

  return (
    <div className="project-detail-page">
      <section
        className="page-header"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1>{project.title}</h1>
          <p>
            Un projet de <strong>{project.entrepreneur}</strong> – {project.location}
          </p>
        </div>
      </section>

      <section className="project-detail-content">
        <div className="container project-detail-layout">
          <div className="project-main">
            <div className="project-summary-card">
              <div className="project-summary-header">
                <span className="project-category-tag">{project.category}</span>
                <span className="project-days-left">{project.daysLeft} jours restants</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-funding-summary">
                <div className="funding-amounts">
                  <div>
                    <span className="label">Collecté</span>
                    <span className="value">{project.raised.toLocaleString()} €</span>
                  </div>
                  <div>
                    <span className="label">Objectif</span>
                    <span className="value">{project.amount.toLocaleString()} €</span>
                  </div>
                  <div>
                    <span className="label">Investisseurs</span>
                    <span className="value">{project.investors}</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="progress-info">
                  <span>{Math.round(progress)}% financé</span>
                  <span>{project.daysLeft} jours restants</span>
                </div>
              </div>
            </div>

            <div className="project-chat-card">
              <h2>Espace de discussion</h2>
              <p className="chat-subtitle">
                Permettez au porteur de projet et aux investisseurs d’échanger directement.
              </p>

              <div className="chat-messages">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`chat-message ${msg.senderType === 'owner' ? 'owner' : 'investor'}`}
                  >
                    <div className="chat-message-header">
                      <span className="chat-sender">
                        {msg.senderType === 'owner' ? '👨‍🌾 ' : '💼 '}
                        {msg.senderName}
                      </span>
                      <span className="chat-time">{msg.time}</span>
                    </div>
                    <p className="chat-content">{msg.content}</p>
                  </div>
                ))}

                {messages.length === 0 && (
                  <p className="chat-empty">
                    Aucune discussion pour le moment. Soyez le premier à poser une question ou à
                    donner une réponse.
                  </p>
                )}
              </div>

              <form className="chat-form" onSubmit={handleSendMessage}>
                <div className="chat-form-row">
                  <div className="form-group">
                    <label>Je suis</label>
                    <select
                      name="senderType"
                      value={newMessage.senderType}
                      onChange={handleMessageChange}
                    >
                      <option value="owner">Porteur de projet</option>
                      <option value="investor">Investisseur</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Nom (optionnel)</label>
                    <input
                      type="text"
                      name="senderName"
                      value={newMessage.senderName}
                      onChange={handleMessageChange}
                      placeholder="Votre nom ou société"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="content"
                    rows="3"
                    value={newMessage.content}
                    onChange={handleMessageChange}
                    placeholder="Écrivez votre question, commentaire ou réponse..."
                    required
                  ></textarea>
                </div>
                <div className="chat-form-actions">
                  <button type="submit" className="btn-primary">
                    Envoyer le message
                  </button>
                  <span className="chat-help-text">
                    Cet espace est une messagerie simplifiée pour faciliter les échanges autour du
                    projet.
                  </span>
                </div>
              </form>
            </div>
          </div>

          <aside className="project-sidebar">
            <div className="invest-card">
              <h3>Investir dans ce projet</h3>
              <p>
                Indiquez le montant que vous souhaitez investir et envoyez un message au porteur de
                projet.
              </p>
              <form
                className="invest-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    'Votre intention d’investissement a été envoyée au porteur de projet. Il vous répondra prochainement.'
                  );
                  e.target.reset();
                }}
              >
                <div className="form-group">
                  <label>Montant envisagé (€)</label>
                  <input type="number" min="100" step="50" placeholder="Ex : 1 000" required />
                </div>
                <div className="form-group">
                  <label>Message au porteur de projet</label>
                  <textarea
                    rows="3"
                    placeholder="Présentez-vous et expliquez votre intérêt pour ce projet..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-secondary">
                  Envoyer ma proposition
                </button>
              </form>
            </div>

            <div className="new-project-card">
              <h3>Publier un nouveau projet</h3>
              <p>
                Vous êtes porteur de projet ? Présentez votre initiative et trouvez des
                investisseurs.
              </p>
              <Link to="/publier-projet" className="btn-primary">
                + Créer un nouveau projet
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetailPage;


