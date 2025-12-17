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
      description: 'Installation d\'une serre solaire de 500m² pour la production de légumes bio toute l\'année.',
      highlights: [
        'Production locale et durable',
        'Réduction de l\'empreinte carbone',
        'Zéro pesticides chimiques',
        'Marché en pleine expansion'
      ],
      milestones: [
        { date: 'Juin 2024', label: 'Acquisition du terrain' },
        { date: 'Septembre 2024', label: 'Installation de la structure' },
        { date: 'Janvier 2025', label: 'Première récolte' }
      ],
      roi: 'Retour sur investissement prévu en 3 ans.',
      impact: 'Alimentation saine pour 200 familles locales.'
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
      description: 'Création d\'un élevage de 50 chèvres laitières avec fromagerie artisanale.',
      highlights: [
        'Fromagerie certifiée AOP',
        'Vente directe à la ferme',
        'Bien-être animal garanti',
        'Circuits courts locaux'
      ],
      milestones: [
        { date: 'Août 2024', label: 'Construction du bâtiment' },
        { date: 'Octobre 2024', label: 'Arrivée du cheptel' },
        { date: 'Mars 2025', label: 'Lancement des fromages' }
      ],
      roi: 'Dividendes prévus dès la 2ème année.',
      impact: 'Préservation du patrimoine fromager local.'
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
      description: 'Plantation d\'arbres fruitiers et installation de ruches pour production de miel.',
      highlights: [
        'Protection de la biodiversité',
        'Synergie arbres-abeilles',
        'Produits 100% naturels',
        'Projet écologique fort'
      ],
      milestones: [
        { date: 'Novembre 2024', label: 'Plantation des fruitiers' },
        { date: 'Printemps 2025', label: 'Installation des ruches' },
        { date: 'Eté 2025', label: 'Première miellée' }
      ],
      roi: 'Croissance de valeur des terres de 15%.',
      impact: 'Restauration des écosystèmes et pollinisation.'
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
      description: 'Installation d\'un système d\'irrigation connecté with capteurs IoT pour optimiser la consommation d\'eau.',
      highlights: [
        'Economie d\'eau de 40%',
        'Technologie IoT de pointe',
        'Solution évolutive',
        'Haute rentabilité technique'
      ],
      milestones: [
        { date: 'Juillet 2024', label: 'Tests pilotes terminés' },
        { date: 'Décembre 2024', label: 'Déploiement généralisé' },
        { date: 'Avril 2025', label: 'Optimisation data IA' }
      ],
      roi: 'Economies opérationnelles immédiates.',
      impact: 'Préservation des ressources en eau potable.'
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
      description: 'Création d\'un atelier de transformation de fruits locaux en confitures et conserves.',
      highlights: [
        'Valorisation des invendus',
        'Recettes traditionnelles',
        'Label Artisanal',
        'Zéro gaspillage'
      ],
      milestones: [
        { date: 'Septembre 2024', label: 'Aménagement du laboratoire' },
        { date: 'Novembre 2024', label: 'Certification hygiène' },
        { date: 'Décembre 2024', label: 'Première gamme en vente' }
      ],
      roi: 'Marché B2B déjà sécurisé.',
      impact: 'Soutien aux producteurs de fruits régionaux.'
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
      description: 'Ouverture d\'un marché local dédié aux produits bio de la région.',
      highlights: [
        'Produits 100% locaux',
        'Zéro emballage plastique',
        'Prix justes pour les producteurs',
        'Lieu de vie communautaire'
      ],
      milestones: [
        { date: 'Octobre 2024', label: 'Bail commercial signé' },
        { date: 'Décembre 2024', label: 'Travaux d\'aménagement' },
        { date: 'Février 2025', label: 'Inauguration' }
      ],
      roi: 'Point mort atteint après 18 mois.',
      impact: 'Accès facilité au bio pour tout un quartier.'
    }
  ];

  const project = projects.find((p) => p.id === projectId);

  const initialMessages = [
    {
      id: 1,
      senderType: 'investor',
      senderName: 'Investisseur Marie',
      content: 'Bonjour, votre projet me paraît très prometteur. Quelles sont vos garanties en termes de durabilité ?',
      time: 'Il y a 2 heures'
    },
    {
      id: 2,
      senderType: 'owner',
      senderName: project?.entrepreneur || 'Porteur de projet',
      content: 'Bonjour, merci pour votre intérêt ! Nous utilisons exclusivement des techniques certifiées bio et nous sommes accompagnés par des experts agronomes.',
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

              <p className="project-description-large">{project.description}</p>

              <div className="project-details-grid">
                <div className="detail-section">
                  <h3>🌟 Points forts</h3>
                  <ul className="highlights-list">
                    {project.highlights?.map((h, i) => (
                      <li key={i}>✅ {h}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h3>📅 Étapes clés</h3>
                  <div className="milestones-timeline">
                    {project.milestones?.map((m, i) => (
                      <div key={i} className="milestone-item">
                        <span className="milestone-date">{m.date}</span>
                        <span className="milestone-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h3>💰 Rentabilité (ROI)</h3>
                  <p className="roi-text">{project.roi}</p>
                </div>

                <div className="detail-section">
                  <h3>🌍 Impact Social & Écolo</h3>
                  <p className="impact-text">{project.impact}</p>
                </div>
              </div>

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
              <h2>💬 Espace de discussion</h2>
              <p className="chat-subtitle">
                Posez vos questions directement au porteur de projet.
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
                    <label>Nom</label>
                    <input
                      type="text"
                      name="senderName"
                      value={newMessage.senderName}
                      onChange={handleMessageChange}
                      placeholder="Votre nom"
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
                    placeholder="Écrivez votre message..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          <aside className="project-sidebar">
            <div className="invest-card">
              <h3>💎 Investir maintenant</h3>
              <p>Soutenez ce projet et participez à l'agriculture de demain.</p>
              <form
                className="invest-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Merci ! Votre intention d’investissement a été transmise.');
                  e.target.reset();
                }}
              >
                <div className="form-group">
                  <label>Montant (€)</label>
                  <input type="number" min="100" step="50" placeholder="Ex : 1000" required />
                </div>
                <div className="form-group">
                  <label>Message (optionnel)</label>
                  <textarea rows="3" placeholder="Un mot pour le porteur ?"></textarea>
                </div>
                <button type="submit" className="btn-secondary">
                  Proposer mon aide
                </button>
              </form>
            </div>

            <div className="new-project-card">
              <h3>🚀 Un projet ?</h3>
              <p>Publiez votre initiative gratuitement.</p>
              <Link to="/publier-projet" className="btn-primary">
                Publier un projet
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetailPage;
