function InvestisseursPage() {
  return (
    <>
      <section className="hero reveal">
        <h1>Semer pour l'avenir</h1>
        <p>Rejoignez le premier cercle d'investisseurs dédié à la transition agricole. Financez des projets à impact réel et mesurable.</p>
        <div className="cta-group">
          <button className="btn btn-primary">Découvrir les projets</button>
          <button className="btn btn-outline">Devenir partenaire</button>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">Deal Flow</div>
        <h2>Opportunités d'investissement</h2>
        <div className="grid">
          <article className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="partner-tag" style={{ background: 'var(--color-primary-bg)', color: 'var(--color-primary-dark)', border: 'none' }}>Pays de la Loire</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-text-muted)' }}>Lancement</span>
            </div>
            <h3>Micro-ferme permacole</h3>
            <p>Création d'une ferme de 2 ha avec atelier de transformation végétale et vente directe.</p>
            <div style={{ margin: '1.5rem 0', background: '#e2e8f0', height: '6px', borderRadius: '3px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '30%', background: 'var(--color-primary)', borderRadius: '3px' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 'bold' }}>
              <span>Recherché : 45 k€</span>
              <span style={{ color: 'var(--color-primary)' }}>30% collecté</span>
            </div>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Voir le dossier</button>
          </article>

          <article className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="partner-tag" style={{ background: 'var(--color-primary-bg)', color: 'var(--color-primary-dark)', border: 'none' }}>Occitanie</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-text-muted)' }}>Prototype</span>
            </div>
            <h3>AgriTech Sol Vivant</h3>
            <p>Application IA de suivi microbiologique des sols pour grandes cultures.</p>
            <div style={{ margin: '1.5rem 0', background: '#e2e8f0', height: '6px', borderRadius: '3px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '75%', background: 'var(--color-primary)', borderRadius: '3px' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 'bold' }}>
              <span>Recherché : 120 k€</span>
              <span style={{ color: 'var(--color-primary)' }}>75% collecté</span>
            </div>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Voir le dossier</button>
          </article>

          <article className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="partner-tag" style={{ background: 'var(--color-primary-bg)', color: 'var(--color-primary-dark)', border: 'none' }}>Auvergne</span>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-text-muted)' }}>Extension</span>
            </div>
            <h3>Laiterie Coopérative</h3>
            <p>Fromagerie mobile mutualisée pour trois éleveurs en conversion bio.</p>
            <div style={{ margin: '1.5rem 0', background: '#e2e8f0', height: '6px', borderRadius: '3px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '15%', background: 'var(--color-accent)', borderRadius: '3px' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 'bold' }}>
              <span>Recherché : 80 k€</span>
              <span style={{ color: 'var(--color-accent)' }}>15% collecté</span>
            </div>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Voir le dossier</button>
          </article>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Accompagnement Expert</h3>
          <p>Nous préparons les porteurs de projet à la rencontre avec les investisseurs : pitch, business plan, métriques d'impact.</p>
          <div className="partners">
            <span className="partner-tag">Coaching Pitch</span>
            <span className="partner-tag">Audit Financier</span>
            <span className="partner-tag">Due Diligence</span>
          </div>
        </div>
        <div className="metrics" style={{ gridTemplateColumns: '1fr' }}>
          <div className="metric">
            <strong>2.5 M€</strong>
            <span>Levés pour l'agriculture régénératrice en 2024</span>
          </div>
          <div className="metric">
            <strong>45</strong>
            <span>Projets financés avec succès</span>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-title">Candidater</div>
        <h2>Soumettre votre projet</h2>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <form className="pitch-form" onSubmit={(event) => event.preventDefault()} style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nom du projet</label>
                <input className="input" type="text" placeholder="Ferme Bio..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Stade</label>
                <select className="input" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                  <option value="idee">Idée</option>
                  <option value="prototype">Prototype</option>
                  <option value="demarrage">Démarrage</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Besoin de financement</label>
              <input className="input" type="text" placeholder="Ex : 60 000 €" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Pitch court</label>
              <textarea className="input" placeholder="Décrivez votre vision en quelques lignes..." rows="4" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontFamily: 'inherit' }} />
            </div>

            <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
              Envoyer le dossier
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default InvestisseursPage;
