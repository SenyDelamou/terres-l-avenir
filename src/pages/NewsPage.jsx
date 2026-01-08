import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, ChevronRight, Mail } from 'lucide-react';
import '../styles/NewsPage.css';

function NewsPage() {
  const [email, setEmail] = useState('');

  const featuredArticle = {
    id: 1,
    title: 'Agriculture 4.0 : La Révolution des Données en Afrique de l\'Ouest',
    date: '15 Mars 2024',
    readTime: '5 min',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=600&fit=crop',
    excerpt: 'Comment l\'IoT et l\'intelligence artificielle transforment le quotidien des petits exploitants agricoles en Guinée et au-delà.'
  };

  const articles = [
    {
      id: 2,
      title: 'Techniques de Rotation : Guide Complet 2024',
      date: '10 Mars 2024',
      readTime: '8 min',
      category: 'Technique',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
      excerpt: 'Optimisez la fertilité de vos sols grâce à ces nouvelles séquences de culture testées par nos agronomes.'
    },
    {
      id: 3,
      title: 'Success Story : De 1 à 10 Hectares en 2 ans',
      date: '05 Mars 2024',
      readTime: '4 min',
      category: 'Témoignage',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop',
      excerpt: 'Rencontre avec Mamadou, qui a su tirer parti du financement participatif AgriPulse pour changer d\'échelle.'
    },
    {
      id: 4,
      title: 'Irrigation Solaire : Rentabilité Calculée',
      date: '28 Fév 2024',
      readTime: '6 min',
      category: 'Énergie',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
      excerpt: 'Analyse coûts-bénéfices de l\'installation de pompes solaires face aux générateurs diesel.'
    },
    {
      id: 5,
      title: 'Les Nouveaux Marchés du Bio à Conakry',
      date: '20 Fév 2024',
      readTime: '3 min',
      category: 'Marché',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop',
      excerpt: 'La demande pour les produits sains explose. Voici comment positionner votre production.'
    },
    {
      id: 6,
      title: 'Formation : Maîtriser le Greffage',
      date: '15 Fév 2024',
      readTime: '2 min',
      category: 'Formation',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop',
      excerpt: 'Retour en images sur notre dernier atelier pratique à Kindia.'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Merci de votre inscription à la newsletter !');
    setEmail('');
  };

  return (
    <div className="news-page-premium">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge-glass">
            <span>Le Journal AgriPulse</span>
          </div>
          <h1>L'Actualité de <br /><span className="text-highlight">La Terre</span></h1>
          <p>Tendances, conseils techniques et histoires inspirantes pour l'agriculteur moderne.</p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-card-glass">
            <div className="featured-image">
              <img src={featuredArticle.image} alt={featuredArticle.title} />
              <span className="category-badge heavy">{featuredArticle.category}</span>
            </div>
            <div className="featured-content">
              <div className="meta-row">
                <span className="meta-item"><Calendar size={16} /> {featuredArticle.date}</span>
                <span className="meta-item"><Clock size={16} /> {featuredArticle.readTime}</span>
              </div>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <a href="#" className="read-more-btn">
                Lire l'article complet <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Articles Grid */}
      <section className="articles-list-section">
        <div className="container">
          <div className="section-header-left">
            <h2>Derniers Articles</h2>
            <div className="header-line"></div>
          </div>

          <div className="articles-grid-premium">
            {articles.map((article) => (
              <div key={article.id} className="article-card-glass">
                <div className="article-image-wrapper">
                  <img src={article.image} alt={article.title} />
                  <span className="category-badge small">{article.category}</span>
                </div>
                <div className="article-body">
                  <div className="article-meta-mini">
                    <span>{article.date}</span>
                    <span className="dot">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <a href="#" className="link-arrow">
                    Lire la suite <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section-premium">
        <div className="newsletter-glass-container">
          <div className="newsletter-icon">
            <Mail size={40} />
          </div>
          <div className="newsletter-text">
            <h2>Ne manquez aucune récolte d'infos</h2>
            <p>Rejoignez 5000+ agriculteurs et recevez nos meilleurs conseils chaque semaine.</p>
          </div>
          <form onSubmit={handleSubscribe} className="newsletter-form-premium">
            <input
              type="email"
              placeholder="Votre adresse email pro"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">S'abonner</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default NewsPage;
