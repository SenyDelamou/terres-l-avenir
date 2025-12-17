import '../styles/NewsPage.css';

function NewsPage() {
  const articles = [
    {
      id: 1,
      title: 'Nouvelles Techniques de Rotation des Cultures',
      date: '15 Mars 2024',
      excerpt: 'Découvrez comment optimiser votre rotation des cultures pour améliorer la fertilité de vos sols et augmenter vos rendements...',
      category: 'Techniques'
    },
    {
      id: 2,
      title: 'L\'Agriculture Biologique en 2024',
      date: '10 Mars 2024',
      excerpt: 'Les tendances et évolutions de l\'agriculture biologique cette année, avec un focus sur les nouvelles réglementations...',
      category: 'Actualités'
    },
    {
      id: 3,
      title: 'Gestion de l\'Eau : Solutions Innovantes',
      date: '5 Mars 2024',
      excerpt: 'Des systèmes d\'irrigation intelligents qui permettent d\'économiser jusqu\'à 30% d\'eau tout en maintenant les rendements...',
      category: 'Innovation'
    },
    {
      id: 4,
      title: 'Formation : Introduction à l\'Agroforesterie',
      date: '28 Février 2024',
      excerpt: 'Nouvelle session de formation sur l\'agroforesterie. Apprenez à intégrer les arbres dans vos systèmes agricoles...',
      category: 'Formation'
    },
    {
      id: 5,
      title: 'Témoignage : Conversion Bio Réussie',
      date: '20 Février 2024',
      excerpt: 'Rencontre avec Jean Dupont, agriculteur qui a réussi sa conversion vers l\'agriculture biologique avec notre accompagnement...',
      category: 'Témoignage'
    },
    {
      id: 6,
      title: 'Les Avantages de l\'Agriculture de Conservation',
      date: '12 Février 2024',
      excerpt: 'Une étude approfondie sur les bénéfices à long terme de l\'agriculture de conservation pour vos sols...',
      category: 'Recherche'
    }
  ];

  return (
    <div className="news-page">
      <section className="page-header" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1>Actualités & Blog</h1>
          <p>Restez informé des dernières nouvelles et tendances en agriculture</p>
        </div>
      </section>

      <section className="news-content">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <img src={`https://images.unsplash.com/photo-${['1464226184884-fa280b87c399', '1625246333195-78d9c38ad449', '1500937386664-56d1dfef3854', '1560493676-04071c5f467b', '1441974231531-c6227db76b6e', '1500937386664-56d1dfef3854'][article.id - 1]}?w=400&h=250&fit=crop`} alt={article.title} />
                </div>
                <div className="article-category">{article.category}</div>
                <h3>{article.title}</h3>
                <div className="article-meta">
                  <span className="article-date">📅 {article.date}</span>
                </div>
                <p>{article.excerpt}</p>
                <a href="#" className="article-link">Lire la suite →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <h2>📧 Restez informé</h2>
            <p>Abonnez-vous à notre newsletter pour recevoir les dernières actualités et conseils agricoles.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">S'abonner</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsPage;

