import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenue sur AgriPulse</h1>
            <p className="hero-subtitle">La plateforme complète pour agriculteurs novices</p>
            <p className="hero-description">
              Apprenez, partagez, vendez, financez vos projets et obtenez de l'aide IA pour diagnostiquer les maladies de vos plantes
            </p>
            <div className="hero-buttons">
              <Link to="/inscription" className="btn-hero-primary">
                <span>🚀</span>
                <span>Commencer Gratuitement</span>
              </Link>
              <Link to="/assistant-ia" className="btn-hero-secondary">
                <span>🤖</span>
                <span>Essayer l'Assistant IA</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Main Features */}
      <section className="main-features">
        <div className="container">
          <h2 className="section-title">Tout ce dont vous avez besoin, en un seul endroit</h2>
          <p className="section-subtitle">5 fonctionnalités essentielles pour réussir en agriculture</p>

          <div className="features-grid">
            <Link to="/techniques" className="feature-card feature-conseils">
              <div className="feature-icon-large">🌾</div>
              <h3>Conseils & Techniques</h3>
              <p>Accédez à des guides pratiques, des tutoriels vidéo et des conseils d'experts pour maîtriser les techniques agricoles modernes</p>
              <div className="feature-badge">Pour Débutants</div>
              <span className="feature-arrow">→</span>
            </Link>

            <Link to="/forum" className="feature-card feature-forum">
              <div className="feature-icon-large">💬</div>
              <h3>Forum Communautaire</h3>
              <p>Posez vos questions, partagez vos expériences et apprenez des autres agriculteurs de la communauté</p>
              <div className="feature-badge">Entraide</div>
              <span className="feature-arrow">→</span>
            </Link>

            <Link to="/marketplace" className="feature-card feature-marketplace">
              <div className="feature-icon-large">🛒</div>
              <h3>Marketplace</h3>
              <p>Vendez vos produits agricoles directement aux acheteurs locaux et développez votre activité commerciale</p>
              <div className="feature-badge">Nouveau !</div>
              <span className="feature-arrow">→</span>
            </Link>

            <Link to="/projets-financement" className="feature-card feature-projets">
              <div className="feature-icon-large">💰</div>
              <h3>Financement de Projets</h3>
              <p>Présentez vos projets agricoles et trouvez des investisseurs prêts à financer vos ambitions</p>
              <div className="feature-badge">Investisseurs</div>
              <span className="feature-arrow">→</span>
            </Link>

            <Link to="/assistant-ia" className="feature-card feature-ia">
              <div className="feature-icon-large">🤖</div>
              <h3>Assistant IA Maladies</h3>
              <p>Prenez une photo de votre plante malade et obtenez un diagnostic instantané avec des solutions de traitement</p>
              <div className="feature-badge">IA Avancée</div>
              <span className="feature-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">Comment ça marche ?</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">📝</div>
              <h3>Créez votre compte</h3>
              <p>Inscription gratuite en quelques secondes</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">📚</div>
              <h3>Explorez les ressources</h3>
              <p>Guides, forum, marketplace à votre disposition</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">🚀</div>
              <h3>Développez votre activité</h3>
              <p>Vendez, trouvez des investisseurs, utilisez l'IA</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon">🏆</div>
              <h3>Réussissez ensemble</h3>
              <p>Rejoignez une communauté d'agriculteurs passionnés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <div className="container">
          <h2 className="section-title">AgriPulse en chiffres</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Agriculteurs actifs</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-number">150+</div>
              <div className="stat-label">Projets financés</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🛒</div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Produits vendus</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🤖</div>
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Maladies diagnostiquées</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Ce que disent nos utilisateurs</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-avatar">AM</div>
              <p className="testimonial-text">
                "Grâce à l'assistant IA, j'ai pu identifier et traiter le mildiou sur mes tomates en moins de 24h. Incroyable !"
              </p>
              <div className="testimonial-author">
                <strong>Amadou M.</strong>
                <span>Agriculteur, Dakar</span>
              </div>
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-avatar">FS</div>
              <p className="testimonial-text">
                "J'ai vendu toute ma récolte de mangues via la Marketplace. Les prix sont meilleurs qu'au marché local !"
              </p>
              <div className="testimonial-author">
                <strong>Fatou S.</strong>
                <span>Productrice, Thiès</span>
              </div>
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-avatar">IB</div>
              <p className="testimonial-text">
                "Mon projet d'irrigation a été financé en 2 semaines grâce à AgriPulse. Merci à la communauté !"
              </p>
              <div className="testimonial-author">
                <strong>Ibrahima B.</strong>
                <span>Entrepreneur agricole, Saint-Louis</span>
              </div>
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à transformer votre agriculture ?</h2>
            <p>Rejoignez des milliers d'agriculteurs qui utilisent AgriPulse pour réussir</p>
            <Link to="/inscription" className="btn-cta-large">
              <span>Créer mon compte gratuit</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
