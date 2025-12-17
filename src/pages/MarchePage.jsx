function MarchePage() {
  return (
    <>
      <section className="hero reveal">
        <h1>Le Marché Terres d'Avenir</h1>
        <p>Connectez-vous directement avec des acheteurs locaux et valorisez vos récoltes au prix juste.</p>
        <div className="cta-group">
          <button className="btn btn-primary">Publier une annonce</button>
          <button className="btn btn-outline">Voir les offres</button>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">Vendre vos produits</div>
        <h2>Une mise en ligne simple</h2>
        <div className="grid" style={{ alignItems: 'start' }}>
          <div className="card">
            <h3>Informations essentielles</h3>
            <p>Saisissez le nom du produit, la quantité disponible, le mode de livraison et le prix conseillé.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem', display: 'grid', gap: '0.8rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-primary)' }}>✓</span> Visibilité garantie
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-primary)' }}>✓</span> Paiement sécurisé
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--color-primary)' }}>✓</span> Gestion des stocks
              </li>
            </ul>
          </div>
          <form className="card" onSubmit={(event) => event.preventDefault()}>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nom du produit</label>
                <input className="input" type="text" placeholder="Ex: Tomates anciennes..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Quantité & Prix</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input className="input" type="text" placeholder="Ex: 50 kg" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} />
                  <input className="input" type="text" placeholder="Ex: 4€/kg" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} />
                </div>
              </div>
              <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
                Publier l'annonce
              </button>
            </div>
            <p className="disclaimer" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
              Les annonces sont vérifiées par notre équipe avant publication.
            </p>
          </form>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Produits à la une</h3>
          <p>Découvrez une sélection de publications récentes issues de fermes engagées dans une démarche durable.</p>
        </div>
        <div className="grid">
          <article style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', padding: 0 }}>
            <div style={{ height: '200px', background: '#e2e8f0', backgroundImage: 'url(https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=600&q=80)', backgroundSize: 'cover' }}></div>
            <div style={{ padding: '1.5rem', color: 'var(--color-text-main)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Panier légumes d'été</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Ferme du Moulin • 20 paniers</p>
              <span className="badge" style={{ marginTop: '0.5rem', display: 'inline-block', background: 'var(--color-primary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.85rem' }}>18 €</span>
            </div>
          </article>
          <article style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', padding: 0 }}>
            <div style={{ height: '200px', background: '#e2e8f0', backgroundImage: 'url(https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=600&q=80)', backgroundSize: 'cover' }}></div>
            <div style={{ padding: '1.5rem', color: 'var(--color-text-main)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Miel d'acacia</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Ruche & Co • 120 pots</p>
              <span className="badge" style={{ marginTop: '0.5rem', display: 'inline-block', background: 'var(--color-primary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.85rem' }}>7,90 €</span>
            </div>
          </article>
          <article style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', padding: 0 }}>
            <div style={{ height: '200px', background: '#e2e8f0', backgroundImage: 'url(https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=600&q=80)', backgroundSize: 'cover' }}></div>
            <div style={{ padding: '1.5rem', color: 'var(--color-text-main)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Fromages fermiers</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Gaec des Prés • 60 plateaux</p>
              <span className="badge" style={{ marginTop: '0.5rem', display: 'inline-block', background: 'var(--color-primary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.85rem' }}>28 €</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">Transparence</div>
        <h2>Nos engagements qualité</h2>
        <div className="partners">
          <span className="partner-tag">✨ Charte qualité</span>
          <span className="partner-tag">📍 Traçabilité</span>
          <span className="partner-tag">✅ Avis vérifiés</span>
          <span className="partner-tag">🔒 Paiement sécurisé</span>
          <span className="partner-tag">📦 Suivi logistique</span>
        </div>
      </section>
    </>
  );
}

export default MarchePage;
