import PageHeader from '../components/PageHeader';
import '../styles/TechniquesPage.css';

function TechniquesPage() {
  const techniques = [
    {
      title: 'Agriculture de Conservation',
      description: 'Techniques qui préservent la structure du sol et réduisent l\'érosion.',
      benefits: ['Amélioration de la fertilité', 'Réduction de l\'érosion', 'Meilleure rétention d\'eau']
    },
    {
      title: 'Rotation des Cultures',
      description: 'Planification stratégique de la rotation pour optimiser les rendements.',
      benefits: ['Réduction des maladies', 'Amélioration de la fertilité', 'Diversification des revenus']
    },
    {
      title: 'Agroécologie',
      description: 'Intégration des principes écologiques dans les systèmes agricoles.',
      benefits: ['Biodiversité accrue', 'Résilience aux changements', 'Réduction des intrants']
    },
    {
      title: 'Agriculture de Précision',
      description: 'Utilisation de technologies pour optimiser chaque zone de votre champ.',
      benefits: ['Optimisation des intrants', 'Meilleure gestion', 'Augmentation des rendements']
    },
    {
      title: 'Compostage et Fertilisants Naturels',
      description: 'Production et utilisation de compost pour enrichir naturellement vos sols.',
      benefits: ['Amélioration de la structure du sol', 'Réduction des coûts', 'Durabilité']
    },
    {
      title: 'Gestion Intégrée des Ravageurs',
      description: 'Approche écologique pour contrôler les ravageurs sans pesticides excessifs.',
      benefits: ['Réduction des pesticides', 'Protection de la biodiversité', 'Coûts réduits']
    }
  ];

  return (
    <div className="techniques-page">
      <PageHeader
        title="Conseils & Techniques Agricoles"
        subtitle="Découvrez les méthodes modernes et durables pour améliorer votre production"
        icon="🌾"
      />

      <section className="techniques-content">
        <div className="container">
          <div className="techniques-grid">
            {techniques.map((technique, index) => (
              <div key={index} className="technique-card">
                <div className="technique-image">
                  <img src={`https://images.unsplash.com/photo-${['1464226184884-fa280b87c399', '1625246333195-78d9c38ad449', '1500937386664-56d1dfef3854', '1560493676-04071c5f467b', '1441974231531-c6227db76b6e', '1500937386664-56d1dfef3854'][index]}?w=400&h=250&fit=crop`} alt={technique.title} />
                </div>
                <h3>{technique.title}</h3>
                <p>{technique.description}</p>
                <div className="benefits">
                  <h4>Avantages :</h4>
                  <ul>
                    {technique.benefits.map((benefit, idx) => (
                      <li key={idx}>✓ {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="container">
          <h2>Ressources Complémentaires</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>📖 Guides Pratiques</h3>
              <p>Téléchargez nos guides détaillés sur les différentes techniques agricoles.</p>
            </div>
            <div className="resource-card">
              <h3>🎥 Vidéos Tutoriels</h3>
              <p>Apprenez en visualisant nos tutoriels vidéo pratiques et démonstratifs.</p>
            </div>
            <div className="resource-card">
              <h3>📅 Formations</h3>
              <p>Participez à nos formations en présentiel ou en ligne sur les techniques modernes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechniquesPage;

