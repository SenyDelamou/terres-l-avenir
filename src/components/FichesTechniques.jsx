import { useState } from 'react';
import { Download, FileText, Eye, X, Share2, BookOpen, Printer } from 'lucide-react';
import fichesTechniques from '../constants/fichesTechniques';
import '../styles/FichesTechniques.css';

function FichesTechniques() {
  const [selectedFiche, setSelectedFiche] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Services', 'Technologies', 'Formation', 'Financement'];

  const filteredFiches = fichesTechniques.filter(fiche => {
    const matchSearch = fiche.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        fiche.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'all' || fiche.categorie === selectedCategory;
    return matchSearch && matchCategory;
  });

  // Fonction pour télécharger en PDF
  const downloadPDF = (fiche) => {
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="font-family: Arial, sans-serif; padding: 40px; background: white;">
        <h1 style="color: #2d7a4a; border-bottom: 3px solid #d4a574; padding-bottom: 10px;">
          ${fiche.titre}
        </h1>
        <p style="color: #666; margin: 10px 0; font-size: 14px;">
          Catégorie: <strong>${fiche.categorie}</strong>
        </p>
        <p style="color: #666; margin: 10px 0; font-size: 14px;">
          Date: ${new Date().toLocaleDateString('fr-FR')}
        </p>
        
        <div style="margin-top: 20px; color: #333; line-height: 1.8; white-space: pre-wrap; font-size: 12px;">
          ${fiche.contenu}
        </div>
        
        <div style="margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px; color: #999; font-size: 11px;">
          <p>© AgriPulse 2024 - Tous droits réservés</p>
          <p>Document généré le ${new Date().toLocaleString('fr-FR')}</p>
        </div>
      </div>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(element.innerHTML);
    printWindow.document.close();
    
    // Auto-print to PDF
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  // Fonction pour télécharger en TXT
  const downloadTXT = (fiche) => {
    const content = `
AGRIPULSE - FICHE TECHNIQUE
${'='.repeat(50)}

TITRE: ${fiche.titre}
CATÉGORIE: ${fiche.categorie}
DATE: ${new Date().toLocaleDateString('fr-FR')}

${'='.repeat(50)}

${fiche.contenu}

${'='.repeat(50)}
© AgriPulse 2024 - Tous droits réservés
Document généré le ${new Date().toLocaleString('fr-FR')}
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `${fiche.titre.replace(/\s+/g, '_')}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Fonction pour copier le lien
  const copyLink = (fiche) => {
    const link = `${window.location.origin}?fiche=${fiche.id}`;
    navigator.clipboard.writeText(link);
    alert('Lien copié dans le presse-papiers!');
  };

  // Fonction pour imprimer
  const printFiche = (fiche) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${fiche.titre}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            h1 { color: #2d7a4a; border-bottom: 3px solid #d4a574; padding-bottom: 10px; }
            .meta { color: #666; font-size: 14px; margin: 10px 0; }
            .content { margin-top: 20px; color: #333; line-height: 1.8; white-space: pre-wrap; }
            .footer { margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px; color: #999; font-size: 11px; }
          </style>
        </head>
        <body>
          <h1>${fiche.titre}</h1>
          <p class="meta">Catégorie: <strong>${fiche.categorie}</strong></p>
          <p class="meta">Date: ${new Date().toLocaleDateString('fr-FR')}</p>
          <div class="content">${fiche.contenu}</div>
          <div class="footer">
            <p>© AgriPulse 2024 - Tous droits réservés</p>
            <p>Document généré le ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <div className="fiches-techniques-container">
      {/* En-tête */}
      <section className="fiches-hero">
        <div className="hero-overlay"></div>
        <div className="fiches-hero-content">
          <div className="fiches-badge">
            <FileText size={20} />
            <span>Ressources</span>
          </div>
          <h1>Fiches Techniques AgriPulse</h1>
          <p>Accédez à nos fiches techniques complètes, téléchargeables et imprimables</p>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="fiches-main">
        <div className="container">
          {/* Recherche et Filtres */}
          <div className="fiches-controls">
            <div className="search-box-fiches">
              <input
                type="text"
                placeholder="Rechercher une fiche..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="category-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'all' ? 'Toutes' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Fiches */}
          <div className="fiches-grid">
            {filteredFiches.length === 0 ? (
              <div className="no-results">
                <p>Aucune fiche trouvée. Essayez d'autres termes de recherche.</p>
              </div>
            ) : (
              filteredFiches.map(fiche => (
                <div key={fiche.id} className="fiche-card">
                  <div className="fiche-image">
                    <img src={fiche.image} alt={fiche.titre} />
                    <span className="fiche-category-badge">{fiche.categorie}</span>
                  </div>
                  <div className="fiche-content">
                    <h3>{fiche.titre}</h3>
                    <p>{fiche.description}</p>

                    <div className="fiche-actions">
                      <button
                        className="btn-fiche-primary"
                        onClick={() => setSelectedFiche(fiche)}
                        title="Voir la fiche complète"
                      >
                        <Eye size={18} />
                        Lire
                      </button>
                      <button
                        className="btn-fiche-secondary"
                        onClick={() => downloadPDF(fiche)}
                        title="Télécharger en PDF"
                      >
                        <Download size={18} />
                        PDF
                      </button>
                      <button
                        className="btn-fiche-secondary"
                        onClick={() => downloadTXT(fiche)}
                        title="Télécharger en TXT"
                      >
                        <FileText size={18} />
                        TXT
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Modal Détail Fiche */}
      {selectedFiche && (
        <div className="fiche-modal-overlay" onClick={() => setSelectedFiche(null)}>
          <div className="fiche-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-fiche">
              <div className="modal-title-section">
                <h2>{selectedFiche.titre}</h2>
                <span className="modal-category">{selectedFiche.categorie}</span>
              </div>
              <button className="btn-close-fiche" onClick={() => setSelectedFiche(null)}>
                <X size={24} />
              </button>
            </div>

            <div className="modal-body-fiche">
              <div className="fiche-details-content">
                <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', color: '#333', fontSize: '14px' }}>
                  {selectedFiche.contenu}
                </div>
              </div>
            </div>

            <div className="modal-footer-fiche">
              <div className="modal-info">
                <small>📅 {new Date().toLocaleDateString('fr-FR')} | 📄 {selectedFiche.categorie}</small>
              </div>
              <div className="modal-actions-fiche">
                <button
                  className="btn-action-fiche"
                  onClick={() => printFiche(selectedFiche)}
                  title="Imprimer"
                >
                  <Printer size={18} />
                  <span>Imprimer</span>
                </button>
                <button
                  className="btn-action-fiche"
                  onClick={() => downloadPDF(selectedFiche)}
                  title="Télécharger PDF"
                >
                  <Download size={18} />
                  <span>PDF</span>
                </button>
                <button
                  className="btn-action-fiche"
                  onClick={() => downloadTXT(selectedFiche)}
                  title="Télécharger TXT"
                >
                  <FileText size={18} />
                  <span>TXT</span>
                </button>
                <button
                  className="btn-action-fiche"
                  onClick={() => copyLink(selectedFiche)}
                  title="Partager"
                >
                  <Share2 size={18} />
                  <span>Partager</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FichesTechniques;
