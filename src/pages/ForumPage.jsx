import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/ForumPage.css';

function ForumPage() {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [showNewTopic, setShowNewTopic] = useState(false);
  const [newTopic, setNewTopic] = useState({ title: '', category: '', content: '' });

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
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      title: 'Rotation des cultures : meilleures pratiques',
      category: 'techniques',
      author: 'Marie Martin',
      replies: 8,
      views: 189,
      lastActivity: 'Il y a 5 heures',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      title: 'Conversion vers le bio : par où commencer ?',
      category: 'bio',
      author: 'Pierre Leroy',
      replies: 15,
      views: 312,
      lastActivity: 'Il y a 1 jour',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      title: 'Système d\'irrigation goutte à goutte : avis ?',
      category: 'irrigation',
      author: 'Sophie Bernard',
      replies: 6,
      views: 156,
      lastActivity: 'Il y a 2 jours',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      title: 'Bien-être animal en élevage bovin',
      category: 'elevage',
      author: 'Marc Dubois',
      replies: 9,
      views: 201,
      lastActivity: 'Il y a 3 jours',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop'
    },
    {
      id: 6,
      title: 'Quel tracteur choisir pour 50 hectares ?',
      category: 'materiel',
      author: 'Luc Moreau',
      replies: 11,
      views: 278,
      lastActivity: 'Il y a 4 jours',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=100&h=100&fit=crop'
    }
  ];

  const filteredTopics = activeCategory === 'tous'
    ? topics
    : topics.filter(topic => topic.category === activeCategory);

  const handleNewTopic = (e) => {
    e.preventDefault();
    alert(`Nouveau sujet créé : ${newTopic.title}`);
    setNewTopic({ title: '', category: '', content: '' });
    setShowNewTopic(false);
  };

  return (
    <div className="forum-page">
      <PageHeader
        title="Forum Agricole"
        subtitle="Échangez avec la communauté et partagez vos expériences"
        icon="💬"
        buttons={[
          {
            label: "Nouveau Sujet",
            icon: "✍️",
            variant: "primary",
            onClick: () => setShowNewTopic(!showNewTopic)
          }
        ]}
      />

      <section className="forum-content">
        <div className="container">
          <div className="forum-header">
            <h2>Discussions</h2>
            <button
              className="btn-new-topic"
              onClick={() => setShowNewTopic(!showNewTopic)}
            >
              + Nouveau sujet
            </button>
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
                <div className="form-actions">
                  <button type="submit" className="btn-submit">Publier</button>
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
                        <span className="topic-category">
                          {categories.find(c => c.id === topic.category)?.icon}
                          {categories.find(c => c.id === topic.category)?.name}
                        </span>
                      </div>
                      <div className="topic-meta">
                        <span className="topic-author">Par {topic.author}</span>
                        <span className="topic-stats">
                          💬 {topic.replies} réponses
                        </span>
                        <span className="topic-stats">
                          👁️ {topic.views} vues
                        </span>
                        <span className="topic-time">{topic.lastActivity}</span>
                      </div>
                    </div>
                    <button className="btn-view-topic">Voir le sujet →</button>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForumPage;

