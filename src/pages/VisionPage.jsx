import React from 'react';

function VisionPage() {
  return (
    <>
      <section className="banner reveal">
        <h1>Réinventer l'agriculture pour les générations futures</h1>
        <p>
          Notre vision repose sur un triptyque : régénérer les sols, valoriser les agriculteurs et reconnecter les territoires à une
          chaîne alimentaire durable, résiliente et inclusive.
        </p>
      </section>

      <section className="section reveal">
        <p className="section-title">Nos piliers</p>
        <h2>Agir sur les dimensions écologiques, sociales et économiques</h2>
        <div className="columns">
          <article className="card">
            <h3>Terre régénérée</h3>
            <p>Favoriser la fertilité des sols via des pratiques agroécologiques, l'agroforesterie, les cultures associées et le respect des cycles naturels.</p>
          </article>
          <article className="card">
            <h3>Communautés valorisées</h3>
            <p>Renforcer les compétences, les revenus et la reconnaissance des agriculteurs en développant l'inclusion, l'équité et l'attractivité des métiers.</p>
          </article>
          <article className="card">
            <h3>Systèmes résilients</h3>
            <p>Déployer des systèmes alimentaires circulaires, connectés à des marchés justes, appuyés par la technologie et les données ouvertes.</p>
          </article>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Une trajectoire climatique ambitieuse</h3>
          <p>
            Notre approche s'aligne sur les objectifs des Accords de Paris, visant une réduction de 55 % des émissions agricoles d'ici
            2035 grâce aux pratiques régénératives.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-step">
            <h4>2025 — Diagnostic partagé</h4>
            <p>Co-construire des feuilles de route territoriales avec les acteurs locaux et cartographier les leviers climatiques.</p>
          </div>
          <div className="timeline-step">
            <h4>2027 — Expérimentations pilotes</h4>
            <p>Lancer des fermes vitrines ouvertes, tester les innovations agriTech et capitaliser les données d'impact.</p>
          </div>
          <div className="timeline-step">
            <h4>2030 — Réplication territoriale</h4>
            <p>Élargir l'écosystème, sécuriser des financements hybrides et démocratiser les pratiques régénératrices.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default VisionPage;
