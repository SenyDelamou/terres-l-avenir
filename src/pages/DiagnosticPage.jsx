import { useState } from 'react';

function DiagnosticPage() {
  const [fileName, setFileName] = useState('Aucune photo sélectionnée pour le moment');
  const [notes, setNotes] = useState('');

  return (
    <>
      <section className="section reveal">
        <div style={{ textAlign: 'center', marginBottom: '3rem', background: 'radial-gradient(circle at 50% 50%, var(--color-primary-bg), transparent)', padding: '3rem', borderRadius: 'var(--radius-xl)' }}>
          <h1>Diagnostic IA des maladies des plantes</h1>
          <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
            Importez une photo de votre culture pour identifier en quelques secondes la maladie probable, comprendre ses causes et
            découvrir des solutions adaptées.
          </p>
        </div>
      </section>

      <section className="section reveal">
        <p className="section-title">Comment ça marche</p>
        <h2>Un diagnostic guidé en trois étapes simples</h2>
        <div className="grid">
          <div className="card">
            <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <strong>Photographier</strong> la plante en s'assurant que les symptômes sont bien visibles (lumière naturelle).
              </li>
              <li>
                <strong>Importer</strong> l'image ou prendre une photo depuis votre smartphone directement depuis cette page.
              </li>
              <li>
                <strong>Analyser</strong> pour accéder aux résultats, aux recommandations d'actions et aux retours d'autres agriculteurs.
              </li>
            </ol>
            <p style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
              <strong>Astuce :</strong> prenez plusieurs photos (feuilles, tiges, fruits) pour un diagnostic plus précis.
            </p>
          </div>
          <div className="card">
            <form style={{ display: 'grid', gap: '1.5rem' }} onSubmit={(event) => event.preventDefault()}>
              <label
                htmlFor="plant-photo"
                style={{
                  border: '2px dashed var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
                onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <span className="partner-tag" style={{ background: 'var(--color-primary-bg)', color: 'var(--color-primary)' }}>Étape suivante</span>
                <strong>Déposer ou téléverser une photo</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>{fileName}</span>
              </label>
              <input
                id="plant-photo"
                name="plant-photo"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => {
                  const [file] = event.target.files || [];
                  setFileName(file ? file.name : 'Photo sélectionnée');
                }}
              />
              <textarea
                placeholder="Ajoutez des notes : variété, âge de la plante, météo récente..."
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                style={{
                  width: '100%',
                  minHeight: '100px',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)'
                }}
              />
              <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>
                Lancer l'analyse IA (bientôt disponible)
              </button>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textAlign: 'center' }}>
                Cette fonctionnalité est en cours d'intégration. Les analyses seront calculées via un modèle de vision spécialisé
                et validées par notre comité agronomique.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Résultats attendus</h3>
          <p>
            Lors du lancement, votre tableau de bord affichera le nom de la maladie probable, son niveau de gravité, les causes
            identifiées et les actions recommandées à court, moyen et long terme.
          </p>
        </div>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <article style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Diagnostic</h3>
            <p style={{ fontSize: '0.95rem' }}>Nom de la maladie, précision du modèle et symptômes typiques détectés sur votre photo.</p>
          </article>
          <article style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Plan d'action</h3>
            <p style={{ fontSize: '0.95rem' }}>Premières mesures à prendre, prévention, produits ou solutions naturelles à privilégier.</p>
          </article>
          <article style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Échanges</h3>
            <p style={{ fontSize: '0.95rem' }}>Liens directs vers les discussions de la communauté pour partager conseils et retours d'expérience.</p>
          </article>
        </div>
      </section>

      <section className="section reveal">
        <p className="section-title">Pour une photo efficace</p>
        <h2>Checklist rapide avant d'envoyer votre image</h2>
        <div className="partners">
          <span className="partner-tag">Bonne luminosité</span>
          <span className="partner-tag">Pas de flou</span>
          <span className="partner-tag">Symptômes nets</span>
          <span className="partner-tag">Contexte de culture</span>
          <span className="partner-tag">Plusieurs angles</span>
        </div>
      </section>
    </>
  );
}

export default DiagnosticPage;
