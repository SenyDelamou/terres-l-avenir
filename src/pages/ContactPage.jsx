function ContactPage() {
  return (
    <>
      <section className="hero reveal">
        <h1>Cultivons le lien</h1>
        <p>Une question sur nos programmes ? Un projet de territoire ? Notre équipe vous répond sous 48h, au rythme des saisons.</p>
      </section>

      <section className="section reveal">
        <div className="grid" style={{ gridTemplateColumns: '1fr 1.2fr', alignItems: 'start', gap: '4rem' }}>
          {/* Left Column: Info */}
          <div>
            <div className="section-title" style={{ justifyContent: 'flex-start' }}>Nous trouver</div>
            <h2 style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.5rem' }}>Nos bureaux</h2>

            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span> Paris (Siège)
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-secondary)', fontWeight: '500', marginBottom: '0.5rem' }}>45 Rue des Horizons, 75011 Paris</p>
              <p>Ouvert du Lundi au Vendredi, 9h - 18h</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="mailto:contact@terresdavenir.org" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: '500' }}>
                  ✉️ contact@terresdavenir.org
                </a>
                <a href="tel:+33184256290" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: '500' }}>
                  📞 +33 1 84 25 62 90
                </a>
              </div>
            </div>

            <div className="card">
              <h3>Sujets d'échange</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <span style={{ background: 'var(--color-primary-soft)', padding: '0.3rem', borderRadius: '50%', color: 'var(--color-primary)' }}>✓</span> Transition agroécologique
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <span style={{ background: 'var(--color-primary-soft)', padding: '0.3rem', borderRadius: '50%', color: 'var(--color-primary)' }}>✓</span> Projets territoriaux
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <span style={{ background: 'var(--color-primary-soft)', padding: '0.3rem', borderRadius: '50%', color: 'var(--color-primary)' }}>✓</span> Financement à impact
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="card" style={{ boxShadow: 'var(--shadow-xl)', borderTop: '4px solid var(--color-primary)' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Envoyez-nous un message</h3>
            <form style={{ display: 'grid', gap: '1.5rem' }} onSubmit={(event) => event.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Nom complet</label>
                  <input type="text" className="input" placeholder="Votre nom" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Email</label>
                  <input type="email" className="input" placeholder="vous@exemple.fr" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)' }} required />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Sujet</label>
                <select className="input" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
                  <option value="diagnostic">Diagnostic / Audit</option>
                  <option value="programme">Formation</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Message</label>
                <textarea className="input" rows="5" placeholder="Dites-nous en plus sur votre projet..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', fontFamily: 'inherit' }}></textarea>
              </div>

              <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Envoyer le message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Rencontrons-nous sur le terrain</h3>
          <p>
            Rien ne vaut une visite de ferme pour comprendre vos enjeux. Nos experts se déplacent dans toute la France.
          </p>
          <div className="partners">
            <span className="partner-tag">🚙 Visites express (72h)</span>
            <span className="partner-tag">🤝 Ateliers co-design</span>
            <span className="partner-tag">📅 Suivi annuel</span>
          </div>
        </div>
        <div style={{ position: 'relative', height: '100%', minHeight: '300px', borderRadius: '16px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" alt="Rencontre sur le terrain" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', color: 'white' }}>
            <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>150+</div>
            <div>Visites réalisées cette année</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
