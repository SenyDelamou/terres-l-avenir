import React from 'react';

function ProgrammesPage() {
  return (
    <>
      <section className="banner reveal">
        <h1>Programmes tailleurs pour chaque territoire</h1>
        <p>
          Des parcours modulaires articulant diagnostic, accompagnement et suivi d'impact pour accélérer les transitions
          agroécologiques.
        </p>
      </section>

      <section className="section reveal">
        <p className="section-title">Notre approche</p>
        <h2>Des parcours structurés en trois volets</h2>
        <div className="grid">
          <article className="card">
            <h3>Explorer</h3>
            <p>Cartographie des sols, analyse des filières locales et identification des leviers économiques et climatiques.</p>
          </article>
          <article className="card">
            <h3>Expérimenter</h3>
            <p>Création de fermes pilotes, ateliers de co-design, formations techniques et tests de solutions agriTech.</p>
          </article>
          <article className="card">
            <h3>Étendre</h3>
            <p>Structuration de coopérations territoriales, business models inclusifs et suivi longitudinal des indicateurs.</p>
          </article>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Accompagnement complet</h3>
          <p>
            Chaque programme est animé par une équipe pluridisciplinaire combinant agronomes, designers de services, data
            scientists et facilitateurs de transition.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-step">
            <h4>Phase 1 — Immersion</h4>
            <p>Immersion terrain, entretiens d'acteurs et cartographie systémique pour comprendre les dynamiques existantes.</p>
          </div>
          <div className="timeline-step">
            <h4>Phase 2 — Accélération</h4>
            <p>Ateliers de co-création, prototypage de pratiques régénératives et montage des dossiers de financement.</p>
          </div>
          <div className="timeline-step">
            <h4>Phase 3 — Amplification</h4>
            <p>Capitalisation des retours d'expérience, diffusion des outils et transfert de compétences aux acteurs locaux.</p>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <p className="section-title">Quelques exemples</p>
        <h2>Programmes phares 2025</h2>
        <div className="grid">
          <article className="card">
            <h3>Solstice</h3>
            <p>Transition de bassins céréaliers vers l'agriculture régénératrice avec rotation des cultures et cultures couvertes.</p>
          </article>
          <article className="card">
            <h3>Arborea</h3>
            <p>Déploiement d'agroforesterie en viticulture, diversification des revenus et intégration de haies mellifères.</p>
          </article>
          <article className="card">
            <h3>Alma</h3>
            <p>Programme de résilience alimentaire urbaine associant maraîchage circulaire et circuits courts solidaires.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default ProgrammesPage;
