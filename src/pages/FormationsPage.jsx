function FormationsPage() {
  return (
    <>
      <section className="hero reveal">
        <h1>Formations pour une agriculture durable</h1>
        <p>Construisez votre parcours d'apprentissage : des modules courts, des vidéos immersives et des fiches pratiques à imprimer.</p>
        <div className="cta-group">
          <button className="btn btn-primary">Voir le catalogue</button>
          <button className="btn btn-outline">Mon espace apprenant</button>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">Catalogue 2026</div>
        <h2>Des programmes guidés</h2>
        <div className="grid">
          <article className="card">
            <div style={{ padding: '0.5rem', background: 'var(--color-primary-soft)', borderRadius: '8px', display: 'inline-block', marginBottom: '1rem', color: 'var(--color-primary-dark)', fontWeight: 'bold', fontSize: '0.8.rem' }}>DÉBUTANT</div>
            <h3>Premiers semis maraîchers</h3>
            <p>Apprenez à préparer votre sol, choisir vos plants et réussir vos arrosages avec des ressources adaptées.</p>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Découvrir le module</button>
          </article>
          <article className="card">
            <div style={{ padding: '0.5rem', background: 'var(--color-primary-soft)', borderRadius: '8px', display: 'inline-block', marginBottom: '1rem', color: 'var(--color-primary-dark)', fontWeight: 'bold', fontSize: '0.8.rem' }}>INTERMÉDIAIRE</div>
            <h3>Protection naturelle</h3>
            <p>Identifier les ravageurs, fabriquer des purins maison et installer des auxiliaires pour protéger vos plantes.</p>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Découvrir le module</button>
          </article>
          <article className="card">
            <div style={{ padding: '0.5rem', background: 'var(--color-primary-soft)', borderRadius: '8px', display: 'inline-block', marginBottom: '1rem', color: 'var(--color-primary-dark)', fontWeight: 'bold', fontSize: '0.8.rem' }}>AVANCÉ</div>
            <h3>Gestion de l'eau</h3>
            <p>Mettre en place la micro-irrigation, collecter l'eau de pluie et surveiller l'humidité du sol facilement.</p>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Découvrir le module</button>
          </article>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Un apprentissage actif</h3>
          <p>
            Chaque chapitre combine vidéos, pas-à-pas illustrés, quiz auto-correctifs et missions pratiques à réaliser sur votre
            parcelle.
          </p>
          <div className="partners">
            <span className="partner-tag">📺 Vidéos 4K</span>
            <span className="partner-tag">🎓 Coaching mentor</span>
            <span className="partner-tag">📝 Carnet de bord</span>
            <span className="partner-tag">🏅 Certification</span>
          </div>
        </div>
        <div className="metrics">
          <div className="metric">
            <strong>12</strong>
            <span>parcours thématiques</span>
          </div>
          <div className="metric">
            <strong>65%</strong>
            <span>de taux de réussite</span>
          </div>
          <div className="metric">
            <strong>98%</strong>
            <span>de satisfaction</span>
          </div>
          <div className="metric">
            <strong>24/7</strong>
            <span>accès illimité</span>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">Tarifs</div>
        <h2>Formules d'accompagnement</h2>
        <div className="grid">
          <article className="card" style={{ borderTop: '4px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)' }}>Découverte</h3>
            <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 'bold', margin: '0.5rem 0', color: 'var(--color-secondary)' }}>Gratuit</div>
            <p>Accès libre aux modules essentiels, idéal pour se lancer et valider ses bases.</p>
            <button className="btn btn-outline" style={{ marginTop: '2rem', width: '100%' }}>S'inscrire</button>
          </article>
          <article className="card" style={{ borderTop: '4px solid var(--color-primary)', transform: 'scale(1.05)', boxShadow: 'var(--shadow-xl)', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)' }}>Premium</h3>
            <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 'bold', margin: '0.5rem 0', color: 'var(--color-secondary)' }}>29€<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>/mois</span></div>
            <p>Coaching individuel, corrections personnalisées et feuilles de route adaptées.</p>
            <button className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>Essayer gratuitement</button>
          </article>
          <article className="card" style={{ borderTop: '4px solid var(--color-secondary)' }}>
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)' }}>Collectif</h3>
            <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 'bold', margin: '0.5rem 0', color: 'var(--color-secondary)' }}>99€<span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>/mois</span></div>
            <p>Progresser en groupe avec des sessions live, des défis collaboratifs et un mentor.</p>
            <button className="btn btn-outline" style={{ marginTop: '2rem', width: '100%' }}>Contacter</button>
          </article>
        </div>
      </section>
    </>
  );
}

export default FormationsPage;
