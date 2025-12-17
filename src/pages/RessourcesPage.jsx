function RessourcesPage() {
  return (
    <>
      <section className="hero reveal">
        <h1>La bibliothèque des savoirs</h1>
        <p>Guides pratiques, modèles économiques et fiches techniques pour réussir votre transition.</p>
        <div className="cta-group">
          <button className="btn btn-primary">Parcourir les thèmes</button>
          <button className="btn btn-outline">Derniers ajouts</button>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">Guides Stratégiques</div>
        <h2>Comprendre et planifier</h2>
        <div className="grid">
          <article className="card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
            <h3>Carbone & Climat</h3>
            <p>Mesurer, réduire et compenser vos émissions grâce à notre feuille de route en 8 étapes.</p>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Télécharger le PDF</button>
          </article>
          <article className="card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌳</div>
            <h3>Agroforesterie</h3>
            <p>Implantation de haies, choix des essences et modèles économiques pour rentabiliser vos arbres.</p>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Voir le guide</button>
          </article>
          <article className="card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💧</div>
            <h3>Hydrologie Régénérative</h3>
            <p>Techniques de keyline design et de stockage de l'eau dans les sols pour résister aux sécheresses.</p>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Lire l'article</button>
          </article>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Ressources Multimédias</h3>
          <p>Plongez au cœur des fermes innovantes grâce à notre vidéothèque exclusive.</p>
          <div className="partners">
            <span className="partner-tag">Webinaires (Replay)</span>
            <span className="partner-tag">Podcasts</span>
            <span className="partner-tag">Tutos Vidéo</span>
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="card" style={{ background: 'rgba(255,255,255,0.1)', border: 'none' }}>
            <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Webinaires Mensuels</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Chaque premier mardi du mois, un expert décrypte une thématique.</p>
          </div>
          <div className="card" style={{ background: 'rgba(255,255,255,0.1)', border: 'none' }}>
            <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Masterclass</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Des cours approfondis de 2h sur des sujets techniques pointus.</p>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">Open Source</div>
        <h2>Outils partagés par la communauté</h2>
        <div className="grid">
          <article className="card">
            <h3>🛠️ Boîte à outils</h3>
            <p>Tableaux Excel de suivi de trésorerie, plans de bâtiments et contrats types.</p>
          </article>
          <article className="card">
            <h3>🧪 Lab Low-Tech</h3>
            <p>Plans de construction pour outils autoconstruits (séchoirs, semoirs...).</p>
          </article>
          <article className="card">
            <h3>📊 Données Ouvertes</h3>
            <p>Base de données de rendements comparés en bio vs conventionnel.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default RessourcesPage;
