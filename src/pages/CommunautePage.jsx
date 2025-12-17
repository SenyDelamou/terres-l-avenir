import React from 'react';

function CommunautePage() {
  return (
    <>
      <section className="hero reveal">
        <h1>La communauté qui grandit ensemble</h1>
        <p>Discutez avec d'autres agriculteurs novices, trouvez un mentor et partagez vos réussites comme vos questions du quotidien.</p>
        <div className="cta-group">
          <button className="btn btn-primary">Rejoindre un cercle</button>
          <button className="btn btn-outline">Trouver un mentor</button>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">Espace d'entraide</div>
        <h2>Des salons pour chaque culture</h2>
        <div className="grid">
          <article className="card">
            <h3>Potager débutant</h3>
            <p>Questions sur les semis, choix des variétés, calendrier des premières plantations.</p>
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-primary)' }}>
              <span>● 12 membres en ligne</span>
            </div>
          </article>
          <article className="card">
            <h3>Plantes médicinales</h3>
            <p>Échanges autour des tisanes, huiles essentielles et recettes traditionnelles.</p>
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-primary)' }}>
              <span>● 5 membres en ligne</span>
            </div>
          </article>
          <article className="card">
            <h3>Diagnostic collaboratif</h3>
            <p>Postez vos photos, comparez-les aux cas similaires et obtenez des avis d'experts.</p>
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-primary)' }}>
              <span>● 24 membres en ligne</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Accélérer l'entraide</h3>
          <p>
            Chaque membre peut rejoindre un cercle local, participer à des visios mensuelles ou co-construire des fiches pratiques
            avec nos mentors.
          </p>
          <div className="partners">
            <span className="partner-tag">📍 Cercles régionaux</span>
            <span className="partner-tag">🎥 Visios hebdo</span>
            <span className="partner-tag">🚜 Partage matériel</span>
            <span className="partner-tag">💬 Groupes privés</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '16px', borderTopLeftRadius: '2px' }}>
            <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.5rem' }}>Jean-Pierre • Il y a 2 min</div>
            « Coucou ! comment gérer l'oïdium sur les courgettes sans produit chimique ? »
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '16px', borderTopRightRadius: '2px', marginLeft: '2rem' }}>
            <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.5rem' }}>Sarah (Mentor) • À l'instant</div>
            « Salut Jean-Pierre ! Tu as essayé le mélange lait/eau à 10% ? C'est très efficace en préventif ! »
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '1.5rem', borderRadius: '16px', borderTopLeftRadius: '2px' }}>
            <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.5rem' }}>Marie • Il y a 5 min</div>
            « Je cherche un binôme dans le Lot-et-Garonne pour tester la permaculture sur butte. »
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">Actions Terrain</div>
        <h2>Rencontrez-vous pour de vrai</h2>
        <div className="grid">
          <a href="#" className="card" style={{ textDecoration: 'none' }}>
            <h3>📅 Calendrier</h3>
            <p>Voir les prochaines rencontres locales et ateliers près de chez vous.</p>
          </a>
          <a href="#" className="card" style={{ textDecoration: 'none' }}>
            <h3>🗺️ Carte des mentors</h3>
            <p>Localiser les experts disponibles pour une visite de ferme.</p>
          </a>
          <a href="#" className="card" style={{ textDecoration: 'none' }}>
            <h3>✨ Ateliers collectifs</h3>
            <p>Organiser ou rejoindre un chantier participatif.</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default CommunautePage;
