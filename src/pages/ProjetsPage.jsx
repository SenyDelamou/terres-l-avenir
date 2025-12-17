import React from 'react';

function ProjetsPage() {
  return (
    <>
      <section className="banner reveal">
        <h1>Des projets qui transforment les territoires</h1>
        <p>Découvrez nos réalisations en cours et les impacts mesurés sur les sols, les communautés rurales et les écosystèmes.</p>
      </section>

      <section className="section reveal">
        <p className="section-title">Études de cas</p>
        <h2>Résultats tangibles et inspirants</h2>
        <div className="grid">
          <article className="card">
            <h3>Ferme Pionnière de la Saône</h3>
            <p>
              Transition d'une exploitation laitière vers une rotation agroécologique, réduction de 42 % des intrants et
              revalorisation des prairies.
            </p>
          </article>
          <article className="card">
            <h3>Territoire estuaire 2030</h3>
            <p>Plan de restauration des zones humides couplé à une filière horticole locale résiliente face aux sécheresses.</p>
          </article>
          <article className="card">
            <h3>Alliance Graines & Légumineuses</h3>
            <p>Collectif de 48 agriculteurs mutualisant les investissements pour développer des cultures associées.</p>
          </article>
        </div>
      </section>

      <section className="section highlight reveal">
        <div>
          <h3>Focus sur nos métriques d'impact</h3>
          <p>Chaque projet intègre un cadre de mesure aligné sur les Objectifs de Développement Durable et les normes carbone européennes.</p>
        </div>
        <div className="metrics">
          <div className="metric">
            <strong>4 200 ha</strong>
            <span>de surfaces converties en pratiques régénératives</span>
          </div>
          <div className="metric">
            <strong>960</strong>
            <span>agriculteurs formés</span>
          </div>
          <div className="metric">
            <strong>1 800 t</strong>
            <span>de CO₂ évitées ou stockées</span>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <p className="section-title">Projets en développement</p>
        <h2>Rejoindre les prochaines cohortes</h2>
        <div className="grid">
          <article className="card">
            <h3>CAP Maraîchage Nord</h3>
            <p>
              Soutien à 65 maraîchers pour intégrer des serres bioclimatiques et des techniques d'irrigation économe.
            </p>
          </article>
          <article className="card">
            <h3>Océanica</h3>
            <p>Programme littoral liant conchyliculture responsable et production d'algues pour la biomasse.</p>
          </article>
          <article className="card">
            <h3>Récoltes Solidaires</h3>
            <p>Coopération interrégionale pour l'inclusion de publics éloignés de l'emploi dans les travaux agricoles saisonniers.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default ProjetsPage;
