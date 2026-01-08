import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/ForumPage.css';

function ForumPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeCategory, setActiveCategory] = useState('tous');
  const [showNewTopic, setShowNewTopic] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [paidTopics, setPaidTopics] = useState([]);
  const [newTopic, setNewTopic] = useState({ title: '', category: '', content: '', price: '' });

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const user = JSON.parse(userData);
      setIsAdmin(user.role === 'Admin' || user.email === 'admin@agriplus.com');
    }
  }, []);

  const categories = [
    { id: 'tous', name: 'Tous les sujets', icon: '📋' },
    { id: 'techniques', name: 'Techniques Agricoles', icon: '🌾' },
    { id: 'bio', name: 'Agriculture Bio', icon: '🌱' },
    { id: 'irrigation', name: 'Irrigation', icon: '💧' },
    { id: 'elevage', name: 'Élevage', icon: '🐄' },
    { id: 'materiel', name: 'Matériel', icon: '🚜' },
    { id: 'vente', name: 'Vente & Marché', icon: '💰' },
    { id: 'aide', name: 'Aide & Support', icon: '❓' }
  ];

  const topics = [
    {
      id: 1,
      title: 'Comment améliorer la fertilité du sol naturellement ?',
      category: 'techniques',
      author: 'Jean Dupont',
      replies: 12,
      views: 245,
      lastActivity: 'Il y a 2 heures',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop',
      price: 0,
      fullContent: 'La fertilité des sols est le pilier d\'une production agricole durable. Cette discussion explore les méthodes organiques pour restaurer la vie microbienne du sol, l\'utilisation du compostage aérobie et l\'intégration des légumineuses fixatrices d\'azote. Idéal pour les petits exploitants cherchant à réduire leur dépendance aux engrais chimiques.',
      conferenciers: [
        { name: 'Dr. Thierno Diallo', role: 'Agronome', expertise: 'Santé des sols', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
        { name: 'Mme. Fatoumata Condé', role: 'Experte Bio', expertise: 'Compostage', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' }
      ]
    },
    {
      id: 2,
      title: 'Rotation des cultures : meilleures pratiques',
      category: 'techniques',
      author: 'Marie Martin',
      replies: 8,
      views: 189,
      lastActivity: 'Il y a 5 heures',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop',
      price: 25000,
      fullContent: 'Découvrez comment planifier vos cycles de culture pour briser le cycle des ravageurs et optimiser l\'utilisation des nutriments. Nous aborderons les associations céréales-légumineuses et les cultures de couverture.',
      conferenciers: [
        { name: 'Ibrahima Sory Camara', role: 'Ingénieur Rural', expertise: 'Planification', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' }
      ]
    },
    {
      id: 3,
      title: 'Conversion vers le bio : par où commencer ?',
      category: 'bio',
      author: 'Pierre Leroy',
      replies: 15,
      views: 312,
      lastActivity: 'Il y a 1 jour',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
      price: 50000,
      fullContent: 'La transition vers l\'agriculture biologique est un défi technique et administratif. Ce sujet traite des normes de certification en vigueur en Guinée, des techniques de lutte biologique et de la valorisation commerciale des produits certifiés.',
      conferenciers: [
        { name: 'Saran Kéita', role: 'Certificatrice', expertise: 'Normes Bio', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop' },
        { name: 'Moussa Sylla', role: 'Agriculteur Pilote', expertise: 'Transition terrain', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' }
      ]
    },
    {
      id: 4,
      title: 'Système d\'irrigation goutte à goutte : avis ?',
      category: 'irrigation',
      author: 'Sophie Bernard',
      replies: 6,
      views: 156,
      lastActivity: 'Il y a 2 jours',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop',
      price: 0,
      fullContent: 'L\'irrigation de précision est la clé face au changement climatique. Nous discutons de l\'installation de kits solaires, de la maintenance des tuyaux et de l\'économie d\'eau réalisée sur une saison maraîchère.',
      conferenciers: [
        { name: 'Ansoumane Bangoura', role: 'Hydrologue', expertise: 'Énergie Solaire', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&h=100&fit=crop' }
      ]
    },
    {
      id: 5,
      title: 'Bien-être animal en élevage bovin',
      category: 'elevage',
      author: 'Marc Dubois',
      replies: 9,
      views: 201,
      lastActivity: 'Il y a 3 jours',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      price: 0,
      fullContent: 'L\'élevage moderne demande une attention particulière au confort des bovins. Ce sujet explore l\'aménagement des étables, la santé vétérinaire préventive et l\'impact du bien-être sur la production laitière.',
      conferenciers: [
        { name: 'Dr. Ousmane Sow', role: 'Vétérinaire', expertise: 'Pathologie Bovine', image: 'https://images.unsplash.com/photo-1492562080023-ab3dbdf9bbbd?w=100&h=100&fit=crop' }
      ]
    },
    {
      id: 6,
      title: 'Quel tracteur choisir pour 50 hectares ?',
      category: 'materiel',
      author: 'Luc Moreau',
      replies: 11,
      views: 278,
      lastActivity: 'Il y a 4 jours',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop',
      price: 150000,
      fullContent: 'La mécanisation est un investissement lourd. Guide sur le choix de la puissance, la disponibilité des pièces de rechange localement et le calcul du retour sur investissement.',
      conferenciers: [
        { name: 'Alpha Touré', role: 'Expert Mécanisation', expertise: 'Maintenance', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop' }
      ]
    }
  ];

  const filteredTopics = activeCategory === 'tous'
    ? topics
    : topics.filter(topic => topic.category === activeCategory);

  const handleNewTopic = (e) => {
    e.preventDefault();
    alert(`Nouveau sujet créé : ${newTopic.title}`);
    setNewTopic({ title: '', category: '', content: '', price: '' });
    setShowNewTopic(false);
  };

  const handleViewTopic = (topic) => {
    setSelectedTopic(topic);
    setShowDetailModal(true);
  };

  const handleParticipate = (topic) => {
    if (topic.price === 0 || paidTopics.includes(topic.id)) {
      alert('Redirection vers la discussion...');
      // Logique réelle de participation ici
    } else {
      setShowPaymentModal(true);
    }
  };

  const confirmPayment = () => {
    // Dans une app réelle, on intègre une API de paiement ici
    setPaidTopics([...paidTopics, selectedTopic.id]);
    setShowPaymentModal(false);
    alert('Paiement réussi ! Vous avez désormais accès à ce sujet.');
  };

  return (
    <div className="forum-page">
      <PageHeader
        title="Cercle d'Échange & de Savoir"
        subtitle="Partagez vos connaissances, posez vos questions et grandissez au sein de notre communauté."
        icon="💬"
        buttons={isAdmin ? [
          {
            label: "Nouveau Sujet",
            icon: "✍️",
            variant: "primary",
            onClick: () => setShowNewTopic(!showNewTopic)
          }
        ] : []}
      />

      <section className="forum-content">
        <div className="container">
          <div className="forum-header">
            <h2>Discussions</h2>
            {isAdmin && (
              <button
                className="btn-new-topic"
                onClick={() => setShowNewTopic(!showNewTopic)}
              >
                + Lancer un sujet
              </button>
            )}
          </div>

          {showNewTopic && (
            <div className="new-topic-form">
              <h3>Créer un nouveau sujet</h3>
              <form onSubmit={handleNewTopic}>
                <div className="form-group">
                  <label>Titre du sujet *</label>
                  <input
                    type="text"
                    value={newTopic.title}
                    onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                    required
                    placeholder="Ex: Comment améliorer mes rendements ?"
                  />
                </div>
                <div className="form-group">
                  <label>Catégorie *</label>
                  <select
                    value={newTopic.category}
                    onChange={(e) => setNewTopic({ ...newTopic, category: e.target.value })}
                    required
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    {categories.filter(cat => cat.id !== 'tous').map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    value={newTopic.content}
                    onChange={(e) => setNewTopic({ ...newTopic, content: e.target.value })}
                    required
                    rows="5"
                    placeholder="Décrivez votre question ou votre sujet de discussion..."
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Prix de participation (GNF) - 0 pour gratuit</label>
                  <input
                    type="number"
                    value={newTopic.price}
                    onChange={(e) => setNewTopic({ ...newTopic, price: e.target.value })}
                    placeholder="Ex: 50000"
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-submit">Publier le sujet</button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => setShowNewTopic(false)}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="forum-layout">
            <aside className="forum-sidebar">
              <h3>Catégories</h3>
              <ul className="category-list">
                {categories.map(category => (
                  <li
                    key={category.id}
                    className={activeCategory === category.id ? 'active' : ''}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.name}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <main className="forum-main">
              <div className="topics-list">
                {filteredTopics.map(topic => (
                  <div key={topic.id} className="topic-card">
                    <div className="topic-image">
                      <img src={topic.image} alt={topic.title} />
                    </div>
                    <div className="topic-content">
                      <div className="topic-header">
                        <h3>{topic.title}</h3>
                        <div className="topic-badges">
                          <span className="topic-category">
                            {categories.find(c => c.id === topic.category)?.icon}
                            {categories.find(c => c.id === topic.category)?.name}
                          </span>
                          <span className={`price-badge ${topic.price === 0 ? 'free' : 'paid'}`}>
                            {topic.price === 0 ? 'Gratuit' : `${topic.price.toLocaleString()} GNF`}
                          </span>
                        </div>
                      </div>
                      <div className="topic-meta">
                        <span className="topic-author">
                          <span className="meta-icon">👤</span>
                          <span>Par <strong>{topic.author}</strong></span>
                        </span>
                        <span className="topic-stats">
                          <span className="meta-icon">💬</span>
                          <span>{topic.replies} <span className="hide-mobile">réponses</span></span>
                        </span>
                        <span className="topic-stats">
                          <span className="meta-icon">👁️</span>
                          <span>{topic.views} <span className="hide-mobile">vues</span></span>
                        </span>
                        <span className="topic-time">
                          <span className="meta-icon">🕒</span>
                          <span>{topic.lastActivity}</span>
                        </span>
                      </div>
                    </div>
                    <button
                      className="btn-view-topic"
                      onClick={() => handleViewTopic(topic)}
                    >
                      <span>Explorer</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>

      {showDetailModal && selectedTopic && (
        <div className="modal-overlay" onClick={() => setShowDetailModal(false)}>
          <div className="topic-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDetailModal(false)}>×</button>
            <div className="modal-header">
              <span className="topic-category">
                {categories.find(c => c.id === selectedTopic.category)?.icon}
                {categories.find(c => c.id === selectedTopic.category)?.name}
              </span>
              <h2>{selectedTopic.title}</h2>
              <div className="topic-meta">
                <span>👤 Par {selectedTopic.author}</span>
                <span>🕒 {selectedTopic.lastActivity}</span>
                <span>💬 {selectedTopic.replies} réponses</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="topic-full-image">
                <img src={selectedTopic.image} alt={selectedTopic.title} />
              </div>

              <div className="topic-description">
                <h3>À propos de ce sujet</h3>
                <p>{selectedTopic.fullContent}</p>
              </div>

              <div className="conferenciers-section">
                <h3>🎤 Experts & Conférenciers</h3>
                <div className="conferenciers-grid">
                  {selectedTopic.conferenciers.map((conf, idx) => (
                    <div key={idx} className="conferencier-card">
                      <div className="conf-image">
                        <img src={conf.image} alt={conf.name} />
                      </div>
                      <div className="conf-info">
                        <h4>{conf.name}</h4>
                        <span className="conf-role">{conf.role}</span>
                        <span className="conf-expertise">Expertise : {conf.expertise}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="modal-pricing">
                {selectedTopic.price > 0 && !paidTopics.includes(selectedTopic.id) ? (
                  <div className="price-info">
                    <span className="label">Frais de participation :</span>
                    <span className="value">{selectedTopic.price.toLocaleString()} GNF</span>
                  </div>
                ) : (
                  <span className="access-info">✓ Accès autorisé</span>
                )}
              </div>
              <button
                className={`btn-participate ${paidTopics.includes(selectedTopic.id) ? 'joined' : ''}`}
                onClick={() => handleParticipate(selectedTopic)}
              >
                {selectedTopic.price === 0 || paidTopics.includes(selectedTopic.id)
                  ? 'Accéder à la discussion'
                  : `Payer et Participer (${selectedTopic.price.toLocaleString()} GNF)`}
              </button>
            </div>
          </div>
        </div>
      )}

      {showPaymentModal && selectedTopic && (
        <div className="modal-overlay" onClick={() => setShowPaymentModal(false)}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Confirmer la participation</h2>
            <div className="payment-summary">
              <div className="summary-item">
                <span>Sujet :</span>
                <strong>{selectedTopic.title}</strong>
              </div>
              <div className="summary-item">
                <span>Montant à payer :</span>
                <strong className="amount">{selectedTopic.price.toLocaleString()} GNF</strong>
              </div>
            </div>

            <div className="payment-methods">
              <p>Choisissez votre mode de paiement :</p>
              <div className="methods-grid">
                <button className="method-btn">Orange Money</button>
                <button className="method-btn">MTN Mobile Money</button>
                <button className="method-btn">Carte Bancaire</button>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn-confirm-pay" onClick={confirmPayment}>
                Confirmer le paiement
              </button>
              <button className="btn-cancel" onClick={() => setShowPaymentModal(false)}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForumPage;
