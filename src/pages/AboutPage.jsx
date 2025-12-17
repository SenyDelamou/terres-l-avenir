import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="page-header" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1>À Propos de Nous</h1>
          <p>Notre mission est de promouvoir une agriculture durable et innovante</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <div className="about-image-text">
              <div className="about-text">
                <h2>Notre Histoire</h2>
                <p>
                  Fondée en 2009, AgriCulture est née d'une passion pour l'agriculture 
                  durable et le respect de l'environnement. Depuis plus de 15 ans, nous 
                  accompagnons les agriculteurs dans leur transition vers des pratiques 
                  plus respectueuses et rentables.
                </p>
                <p>
                  Notre équipe d'experts agronomes, d'ingénieurs et de conseillers 
                  agricoles travaille chaque jour pour développer et partager les meilleures 
                  pratiques agricoles.
                </p>
              </div>
              <div className="about-image">
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop" alt="Champ agricole" />
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Notre Mission</h2>
            <div className="mission-grid">
              <div className="mission-item">
                <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=200&fit=crop" alt="Durabilité" />
                <h3>🌍 Durabilité</h3>
                <p>Promouvoir des pratiques agricoles qui préservent l'environnement pour les générations futures.</p>
              </div>
              <div className="mission-item">
                <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=200&fit=crop" alt="Innovation" />
                <h3>📈 Innovation</h3>
                <p>Intégrer les dernières technologies et techniques pour améliorer la productivité.</p>
              </div>
              <div className="mission-item">
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop" alt="Accompagnement" />
                <h3>🤝 Accompagnement</h3>
                <p>Soutenir les agriculteurs dans leur développement et leur transition écologique.</p>
              </div>
              <div className="mission-item">
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop" alt="Qualité" />
                <h3>🌾 Qualité</h3>
                <p>Garantir des produits de qualité tout en respectant les normes environnementales.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Nos Valeurs</h2>
            <ul className="values-list">
              <li><strong>Respect de l'environnement</strong> - Nous croyons en une agriculture qui préserve la biodiversité</li>
              <li><strong>Innovation continue</strong> - Nous restons à la pointe des nouvelles techniques agricoles</li>
              <li><strong>Transparence</strong> - Nous communiquons clairement sur nos méthodes et résultats</li>
              <li><strong>Solidarité</strong> - Nous soutenons la communauté agricole locale</li>
              <li><strong>Excellence</strong> - Nous visons l'excellence dans tous nos services</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

