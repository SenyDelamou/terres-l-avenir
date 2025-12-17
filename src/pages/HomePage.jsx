import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&h=800&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">L'Agriculture de Demain</h1>
            <p className="hero-description">
              Découvrez des techniques innovantes et durables pour une agriculture 
              respectueuse de l'environnement et productive.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Nos Services
              </Link>
              <Link to="/techniques" className="btn btn-secondary">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Nos Domaines d'Expertise</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop" alt="Agriculture biologique" />
              </div>
              <div className="feature-icon">🌱</div>
              <h3>Agriculture Biologique</h3>
              <p>Des méthodes naturelles pour une production saine et respectueuse de l'environnement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop" alt="Gestion de l'eau" />
              </div>
              <div className="feature-icon">💧</div>
              <h3>Gestion de l'Eau</h3>
              <p>Optimisation de l'irrigation et techniques de conservation de l'eau.</p>
            </div>
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop" alt="Production céréalière" />
              </div>
              <div className="feature-icon">🌾</div>
              <h3>Production Céréalière</h3>
              <p>Conseils et accompagnement pour améliorer vos rendements céréaliers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop" alt="Élevage durable" />
              </div>
              <div className="feature-icon">🐄</div>
              <h3>Élevage Durable</h3>
              <p>Pratiques d'élevage respectueuses du bien-être animal et de l'environnement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop" alt="Agroforesterie" />
              </div>
              <div className="feature-icon">🌳</div>
              <h3>Agroforesterie</h3>
              <p>Intégration des arbres dans les systèmes agricoles pour plus de biodiversité.</p>
            </div>
            <div className="feature-card">
              <div className="feature-image">
                <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop" alt="Conseil agricole" />
              </div>
              <div className="feature-icon">📊</div>
              <h3>Conseil Agricole</h3>
              <p>Accompagnement personnalisé pour optimiser votre exploitation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Pourquoi Choisir AgriCulture ?</h2>
          <div className="why-choose-grid">
            <div className="why-item">
              <div className="why-icon">🎯</div>
              <h3>Expertise Reconnue</h3>
              <p>Plus de 15 ans d'expérience dans l'accompagnement des agriculteurs vers des pratiques durables et rentables.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🤝</div>
              <h3>Accompagnement Personnalisé</h3>
              <p>Chaque exploitation est unique. Nous adaptons nos conseils à vos besoins spécifiques et à votre contexte local.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🌱</div>
              <h3>Approche Durable</h3>
              <p>Nous privilégions des solutions respectueuses de l'environnement qui préservent vos terres pour les générations futures.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">💡</div>
              <h3>Innovation Continue</h3>
              <p>Nous restons à la pointe des dernières techniques et technologies agricoles pour vous offrir les meilleures solutions.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📚</div>
              <h3>Ressources Complètes</h3>
              <p>Accédez à une bibliothèque de guides, formations et outils pour développer vos compétences agricoles.</p>
            </div>
            <div className="why-item">
              <div className="why-icon">👥</div>
              <h3>Communauté Active</h3>
              <p>Rejoignez un réseau d'agriculteurs passionnés qui partagent leurs expériences et s'entraident.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="functionalities">
        <div className="container">
          <h2 className="section-title">Nos Fonctionnalités</h2>
          <div className="functionalities-content">
            <div className="functionality-item">
              <div className="functionality-image">
                <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop" alt="Forum communautaire" />
              </div>
              <div className="functionality-text">
                <h3>💬 Forum Communautaire</h3>
                <p>Échangez avec d'autres agriculteurs, posez vos questions et partagez vos expériences. Une communauté active prête à vous aider.</p>
                <ul>
                  <li>Discussions par catégories</li>
                  <li>Réponses d'experts</li>
                  <li>Partage de bonnes pratiques</li>
                </ul>
                <Link to="/forum" className="btn-functionality">Accéder au Forum</Link>
              </div>
            </div>
            <div className="functionality-item reverse">
              <div className="functionality-image">
                <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop" alt="Assistant IA" />
              </div>
              <div className="functionality-text">
                <h3>🤖 Assistant IA Agricole</h3>
                <p>Obtenez des réponses instantanées à vos questions sur l'agriculture. Notre IA vous guide 24/7 avec des conseils personnalisés.</p>
                <ul>
                  <li>Réponses en temps réel</li>
                  <li>Conseils personnalisés</li>
                  <li>Disponible 24/7</li>
                </ul>
                <Link to="/assistant-ia" className="btn-functionality">Essayer l'Assistant IA</Link>
              </div>
            </div>
            <div className="functionality-item">
              <div className="functionality-image">
                <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop" alt="Guides techniques" />
              </div>
              <div className="functionality-text">
                <h3>📖 Guides Techniques</h3>
                <p>Accédez à une bibliothèque complète de guides pratiques sur toutes les techniques agricoles modernes et durables.</p>
                <ul>
                  <li>Guides détaillés</li>
                  <li>Vidéos tutoriels</li>
                  <li>Cas pratiques</li>
                </ul>
                <Link to="/techniques" className="btn-functionality">Découvrir les Guides</Link>
              </div>
            </div>
            <div className="functionality-item reverse">
              <div className="functionality-image">
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop" alt="Actualités" />
              </div>
              <div className="functionality-text">
                <h3>📰 Actualités & Tendances</h3>
                <p>Restez informé des dernières nouvelles, innovations et tendances du secteur agricole avec notre blog régulièrement mis à jour.</p>
                <ul>
                  <li>Articles hebdomadaires</li>
                  <li>Analyses de marché</li>
                  <li>Newsletter gratuite</li>
                </ul>
                <Link to="/actualites" className="btn-functionality">Lire les Actualités</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Témoignages de Nos Clients</h2>
          <p className="section-subtitle">Découvrez ce que nos agriculteurs partenaires disent de nous</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Jean Dupont" />
                </div>
                <div className="testimonial-info">
                  <h4>Jean Dupont</h4>
                  <p className="testimonial-role">Agriculteur Céréalier, Normandie</p>
                  <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="testimonial-text">
                "Grâce à AgriCulture, j'ai pu convertir mon exploitation en bio avec un accompagnement exceptionnel. 
                Les conseils personnalisés et le forum m'ont beaucoup aidé. Mes rendements ont même augmenté de 15% !"
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Marie Martin" />
                </div>
                <div className="testimonial-info">
                  <h4>Marie Martin</h4>
                  <p className="testimonial-role">Éleveuse Bovine, Auvergne</p>
                  <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="testimonial-text">
                "L'assistant IA est incroyable ! Je peux poser mes questions à tout moment et obtenir des réponses pertinentes. 
                La communauté du forum est également très active et bienveillante. Je recommande vivement !"
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Pierre Leroy" />
                </div>
                <div className="testimonial-info">
                  <h4>Pierre Leroy</h4>
                  <p className="testimonial-role">Maraîcher Bio, Provence</p>
                  <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="testimonial-text">
                "Les guides techniques sont très complets et faciles à comprendre. J'ai appris beaucoup sur l'agroforesterie 
                et j'ai pu l'appliquer sur mon exploitation. Un vrai gain de temps et d'efficacité !"
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Sophie Bernard" />
                </div>
                <div className="testimonial-info">
                  <h4>Sophie Bernard</h4>
                  <p className="testimonial-role">Viticultrice, Bordeaux</p>
                  <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="testimonial-text">
                "L'accompagnement personnalisé a transformé ma façon de travailler. Les experts sont à l'écoute et 
                proposent des solutions adaptées. Mon exploitation est maintenant plus rentable et plus durable."
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Marc Dubois" />
                </div>
                <div className="testimonial-info">
                  <h4>Marc Dubois</h4>
                  <p className="testimonial-role">Polyculteur, Centre</p>
                  <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="testimonial-text">
                "Le système d'irrigation optimisé que j'ai mis en place grâce aux conseils d'AgriCulture m'a permis 
                d'économiser 30% d'eau. C'est impressionnant et très bénéfique pour l'environnement !"
              </p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Luc Moreau" />
                </div>
                <div className="testimonial-info">
                  <h4>Luc Moreau</h4>
                  <p className="testimonial-role">Jeune Agriculteur, Bretagne</p>
                  <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="testimonial-text">
                "En tant que jeune agriculteur, j'apprécie énormément les ressources disponibles. Les formations et 
                le forum m'ont aidé à démarrer mon activité avec les bonnes pratiques dès le début."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Exploitations accompagnées</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Années d'expérience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Clients satisfaits</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Experts à votre service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
