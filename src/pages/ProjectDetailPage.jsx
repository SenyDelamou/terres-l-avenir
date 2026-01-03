import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import InvestmentModal from '../components/InvestmentModal';
import '../styles/ProjectDetailPage.css';

function ProjectDetailPage() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Même base de données que la page des projets de financement (version simplifiée)
  const projects = [
    {
      id: 1,
      title: 'Serre Solaire pour Production Bio',
      entrepreneur: 'Marie Dubois',
      category: 'Agriculture Biologique',
      amount: 450000000,
      raised: 280000000,
      investors: 12,
      daysLeft: 25,
      location: 'Kindia, Guinée',
      isVerified: true,
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
      financialBreakdown: [
        { label: 'Équipement Solaire', value: 45 },
        { label: 'Infrastructures Serre', value: 30 },
        { label: 'Systèmes d\'Irrigation', value: 15 },
        { label: 'Main d\'œuvre & Formation', value: 10 }
      ],
      risks: [
        { level: 'Modéré', factor: 'Conditions climatiques extrêmes', mitigation: 'Structure renforcée et systèmes de régulation thermique.' },
        { level: 'Faible', factor: 'Fluctuation du prix des semences', mitigation: 'Contrats d\'approvisionnement à long terme avec prix fixes.' }
      ],
      documents: [
        { name: 'Business Plan 2024.pdf', size: '2.4 MB' },
        { name: 'Audit Technique Solaire.pdf', size: '1.8 MB' },
        { name: 'Certificat de Titre Foncier.pdf', size: '1.2 MB' }
      ],
      roi: 'Retour sur investissement prévu en 3 ans.',
      impact: 'Alimentation saine pour 200 familles locales.'
    },
    {
      id: 2,
      title: 'Élevage de Chèvres Laitières',
      entrepreneur: 'Jean Martin',
      category: 'Élevage',
      amount: 600000000,
      raised: 350000000,
      investors: 18,
      daysLeft: 42,
      location: 'Mamou, Guinée',
      isVerified: true,
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
      financialBreakdown: [
        { label: 'Achat du Cheptel', value: 40 },
        { label: 'Construction Fromagerie', value: 35 },
        { label: 'Matériel de Transformation', value: 15 },
        { label: 'Marketing & Distribution', value: 10 }
      ],
      risks: [
        { level: 'Élevé', factor: 'Épidémies sanitaires', mitigation: 'Suivi vétérinaire hebdomadaire et protocoles d\'hygiène stricts.' },
        { level: 'Modéré', factor: 'Hausse du coût du fourrage', mitigation: 'Culture d\'autonomie fourragère sur 30% du terrain.' }
      ],
      documents: [
        { name: 'Dossier Sanitaire Vétérinaire.pdf', size: '1.5 MB' },
        { name: 'Plan d\'Aménagement Fromagerie.pdf', size: '3.1 MB' }
      ],
      roi: 'Dividendes prévus dès la 2ème année.',
      impact: 'Préservation du patrimoine fromager local.'
    },
    {
      id: 3,
      title: 'Agroforesterie et Apiculture',
      entrepreneur: 'Sophie Leroy',
      category: 'Agroforesterie',
      amount: 350000000,
      raised: 120000000,
      investors: 8,
      daysLeft: 18,
      location: 'Labé, Guinée',
      isVerified: false,
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
      financialBreakdown: [
        { label: 'Plants & Semences', value: 50 },
        { label: 'Matériel Apicole', value: 30 },
        { label: 'Système d\'Arrosage', value: 10 },
        { label: 'Clôture de Sécurité', value: 10 }
      ],
      risks: [
        { level: 'Modéré', factor: 'Mortalité des abeilles', mitigation: 'Diversification des essences mellifères et suivi expert.' },
        { level: 'Faible', factor: 'Périodes de gel tardif', mitigation: 'Sélection de variétés fruitières résistantes.' }
      ],
      documents: [
        { name: 'Étude d\'Impact Écologique.pdf', size: '2.1 MB' },
        { name: 'Inventaire des Essences.pdf', size: '1.4 MB' }
      ],
      roi: 'Croissance de valeur des terres de 15%.',
      impact: 'Restauration des écosystèmes et pollinisation.'
    },
    {
      id: 4,
      title: 'Système d\'Irrigation Intelligent',
      entrepreneur: 'Pierre Bernard',
      category: 'Technologies Agricoles',
      amount: 800000000,
      raised: 550000000,
      investors: 25,
      daysLeft: 30,
      location: 'Kankan, Guinée',
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
      financialBreakdown: [
        { label: 'Matériel IoT', value: 45 },
        { label: 'Logiciel & Data', value: 30 },
        { label: 'Installation Terrain', value: 15 },
        { label: 'Service Client', value: 10 }
      ],
      risks: [
        { level: 'Modéré', factor: 'Connectivité réseau', mitigation: 'Utilisation de routeurs de secours et stockage local des données.' },
        { level: 'Faible', factor: 'Maintenance technique', mitigation: 'Équipes locales formées et système d\'auto-diagnostic.' }
      ],
      documents: [
        { name: 'Architecture IoT.pdf', size: '3.4 MB' },
        { name: 'Spécifications Capteurs.pdf', size: '1.2 MB' }
      ],
      roi: 'Economies opérationnelles immédiates.',
      impact: 'Préservation des ressources en eau potable.'
    },
    {
      id: 5,
      title: 'Transformation de Fruits en Conserves',
      entrepreneur: 'Luc Moreau',
      category: 'Transformation de Produits',
      amount: 550000000,
      raised: 200000000,
      investors: 10,
      daysLeft: 35,
      location: 'Nzérékoré, Guinée',
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
      financialBreakdown: [
        { label: 'Laboratoire Transformation', value: 50 },
        { label: 'Conditionnement', value: 25 },
        { label: 'Stockage Froid', value: 15 },
        { label: 'Certification Qualité', value: 10 }
      ],
      risks: [
        { level: 'Modéré', factor: 'Dépassement des coûts d\'énergie', mitigation: 'Passage partiel à l\'énergie solaire pour l\'atelier.' },
        { level: 'Faible', factor: 'Concurrence locale', mitigation: 'Accentuation sur le label Artisanal et circuits ultra-courts.' }
      ],
      documents: [
        { name: 'Plan Hygiène HACCP.pdf', size: '2.8 MB' },
        { name: 'Catalogue Produits.pdf', size: '4.5 MB' }
      ],
      roi: 'Marché B2B déjà sécurisé.',
      impact: 'Soutien aux producteurs de fruits régionaux.'
    },
    {
      id: 6,
      title: 'Marché Local Bio',
      entrepreneur: 'Emma Rousseau',
      category: 'Commerce & Distribution',
      amount: 400000000,
      raised: 150000000,
      investors: 7,
      daysLeft: 20,
      location: 'Conakry, Guinée',
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
      financialBreakdown: [
        { label: 'Aménagement Local', value: 40 },
        { label: 'Premier Stock Bio', value: 30 },
        { label: 'Marketing de Lancement', value: 20 },
        { label: 'Fonds de Roulement', value: 10 }
      ],
      risks: [
        { level: 'Modéré', factor: 'Variation saisonnière', mitigation: 'Contrats avec des producteurs sur différentes zones climatiques.' },
        { level: 'Faible', factor: 'Gestion des périssables', mitigation: 'Logiciel de gestion de stock temps réel et dons solidaires.' }
      ],
      documents: [
        { name: 'Business Plan Marché.pdf', size: '2.9 MB' },
        { name: 'Accord Producteurs locaux.pdf', size: '1.7 MB' }
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
          <h1>
            {project.title}
            {project.isVerified && <span className="verified-badge-inline" title="Projet vérifié par AgriPulse">✓</span>}
          </h1>
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

                {project.financialBreakdown && (
                  <div className="detail-section financial-breakdown-section">
                    <h3>📊 Répartition du Financement</h3>
                    <div className="breakdown-list">
                      {project.financialBreakdown.map((item, i) => (
                        <div key={i} className="breakdown-item">
                          <div className="breakdown-info">
                            <span className="breakdown-label">{item.label}</span>
                            <span className="breakdown-value">{item.value}%</span>
                          </div>
                          <div className="breakdown-bar-bg">
                            <div className="breakdown-bar-fill" style={{ width: `${item.value}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="detail-section">
                  <h3>💰 Rentabilité (ROI)</h3>
                  <p className="roi-text">{project.roi}</p>
                </div>

                <div className="detail-section">
                  <h3>🌍 Impact Social & Écolo</h3>
                  <p className="impact-text">{project.impact}</p>
                </div>

                {project.risks && (
                  <div className="detail-section risks-section">
                    <h3>⚠️ Facteurs de Risques</h3>
                    <div className="risks-list">
                      {project.risks.map((risk, i) => (
                        <div key={i} className="risk-item">
                          <div className="risk-header">
                            <span className={`risk-level ${risk.level.toLowerCase()}`}>{risk.level}</span>
                            <strong>{risk.factor}</strong>
                          </div>
                          <p className="risk-mitigation"><em>Atténuation:</em> {risk.mitigation}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.documents && (
                  <div className="detail-section documents-section">
                    <h3>📁 Dossier Investisseur</h3>
                    <div className="documents-list">
                      {project.documents.map((doc, i) => (
                        <div key={i} className="document-item">
                          <div className="document-icon">📄</div>
                          <div className="document-info">
                            <span className="document-name">{doc.name}</span>
                            <span className="document-size">{doc.size}</span>
                          </div>
                          <button className="btn-download-doc" title="Télécharger">⬇️</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="project-funding-summary">
                <div className="funding-amounts">
                  <div>
                    <span className="label">Collecté</span>
                    <span className="value">{project.raised.toLocaleString()} GNF</span>
                  </div>
                  <div>
                    <span className="label">Objectif</span>
                    <span className="value">{project.amount.toLocaleString()} GNF</span>
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
              <div className="chat-header-standard">
                <h2>💬 Espace de discussion</h2>
                <p className="chat-subtitle">
                  Posez vos questions directement au porteur de projet.
                </p>
              </div>
              <div className="professional-chat-wrapper">
                <div className="chat-messages-container">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`chat-bubble-row ${msg.senderType === 'owner' ? 'owner-row' : 'investor-row'}`}
                    >
                      <div className="chat-avatar">
                        {msg.senderType === 'owner' ? '👨‍🌾' : '💼'}
                      </div>
                      <div className="chat-bubble-content">
                        <div className="bubble-header">
                          <span className="bubble-role">{msg.senderType === 'owner' ? 'Porteur de projet' : 'Investisseur'}</span>
                          <span className="bubble-name">{msg.senderName}</span>
                        </div>
                        <div className="bubble-text">
                          <p>{msg.content}</p>
                        </div>
                        <div className="bubble-footer">
                          <span className="bubble-time">{msg.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <form className="professional-chat-form" onSubmit={handleSendMessage}>
                  <div className="chat-form-top">
                    <div className="input-group">
                      <label>JE SUIS</label>
                      <select
                        name="senderType"
                        value={newMessage.senderType}
                        onChange={handleMessageChange}
                      >
                        <option value="owner">Porteur de projet</option>
                        <option value="investor">Investisseur</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label>VOTRE NOM</label>
                      <input
                        type="text"
                        name="senderName"
                        value={newMessage.senderName}
                        onChange={handleMessageChange}
                        placeholder="Ex: Jean Dupont"
                      />
                    </div>
                  </div>
                  <div className="chat-form-bottom">
                    <textarea
                      name="content"
                      rows="2"
                      value={newMessage.content}
                      onChange={handleMessageChange}
                      placeholder="Écrivez votre message ici..."
                      required
                    ></textarea>
                    <button type="submit" className="btn-chat-send">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <aside className="project-sidebar">
            <div className="invest-card">
              <h3>💎 Investir maintenant</h3>
              <p>Soutenez ce projet et participez à l'agriculture de demain.</p>
              <button
                className="btn-secondary w-full"
                style={{ width: '100%', marginTop: '1rem', padding: '1.2rem' }}
                onClick={() => setIsModalOpen(true)}
              >
                Commencer l'investissement
              </button>
              <p className="sidebar-note">Votre demande sera traitée sous 48h.</p>
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

      <InvestmentModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default ProjectDetailPage;
