import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import '../styles/LegalNoticePage.css';

function LegalNoticePage() {
  const sections = [
    {
      id: 'identification',
      title: 'Identification du Site',
      icon: '🏢',
      content: [
        { label: 'Raison Sociale', value: 'AgriPulse - Plateforme Agricole Innovante' },
        { label: 'Type', value: 'Plateforme de Financement et Services Agricoles' },
        { label: 'Adresse', value: 'Conakry, Guinée' },
        { label: 'Téléphone', value: '+224 XXX XX XX XX' },
        { label: 'Email', value: 'contact@agripulse.com' },
      ]
    },
    {
      id: 'hebergement',
      title: 'Hébergement',
      icon: '🖥️',
      content: [
        { label: 'Hébergeur', value: 'Vercel Inc.' },
        { label: 'Adresse', value: 'San Francisco, États-Unis' },
        { label: 'Site', value: 'www.vercel.com' },
        { label: 'Services', value: 'Infrastructure Cloud Computing et CDN Global' },
      ]
    },
    {
      id: 'propriete',
      title: 'Propriété Intellectuelle',
      icon: '©️',
      content: [
        { 
          label: 'Droits d\'auteur',
          text: 'Tous les contenus du site AgriPulse (textes, images, logos, vidéos) sont protégés par les droits d\'auteur et les lois sur la propriété intellectuelle. Toute reproduction, adaptation ou exploitation sans autorisation écrite est interdite.'
        },
        { 
          label: 'Marques Déposées',
          text: 'AgriPulse, le logo AgriPulse et tous les éléments visuels associés sont des marques déposées. Leur utilisation sans permission est strictement interdite.'
        },
      ]
    },
    {
      id: 'responsabilite',
      title: 'Responsabilité',
      icon: '⚖️',
      content: [
        { 
          label: 'Contenu du Site',
          text: 'AgriPulse met en œuvre tous les efforts pour assurer l\'exactitude des informations publiées. Cependant, nous ne pouvons garantir l\'exactitude, la complétude ou l\'actualité des contenus.'
        },
        { 
          label: 'Liens Externes',
          text: 'Les liens vers des sites tiers ne signifient pas une approbation. AgriPulse ne peut être tenu responsable du contenu de ces sites externes.'
        },
        { 
          label: 'Indisponibilité du Service',
          text: 'Bien que nous faisons tout pour assurer la disponibilité du service, AGriPulse n\'assume aucune responsabilité en cas d\'indisponibilité du site.'
        },
      ]
    },
    {
      id: 'donnees',
      title: 'Protection des Données',
      icon: '🔒',
      content: [
        { 
          label: 'Collecte de Données',
          text: 'AgriPulse collecte les données personnelles nécessaires au fonctionnement de la plateforme, conformément au RGPD et aux lois locales applicables.'
        },
        { 
          label: 'Utilisation des Données',
          text: 'Vos données personnelles sont utilisées uniquement aux fins déclarées et ne sont jamais vendues à des tiers sans votre consentement explicite.'
        },
        { 
          label: 'Sécurité',
          text: 'Nous mettons en place des mesures de sécurité appropriées pour protéger vos données contre l\'accès non autorisé.'
        },
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies et Suivi',
      icon: '🍪',
      content: [
        { 
          label: 'Utilisation des Cookies',
          text: 'AgriPulse utilise des cookies pour améliorer votre expérience utilisateur et mémoriser vos préférences.'
        },
        { 
          label: 'Consentement',
          text: 'En continuant à utiliser le site, vous consentez à l\'utilisation de cookies conformément à notre politique de confidentialité.'
        },
      ]
    },
    {
      id: 'conditions',
      title: 'Conditions d\'Utilisation',
      icon: '📋',
      content: [
        { 
          label: 'Acceptation des Conditions',
          text: 'L\'accès au site AgriPulse implique l\'acceptation des présentes conditions d\'utilisation.'
        },
        { 
          label: 'Utilisation Licite',
          text: 'Vous vous engagez à utiliser le site de manière légale et conforme à la loi. Tout contenu illégal, offensant ou nuisible est strictement interdit.'
        },
        { 
          label: 'Restriction d\'Accès',
          text: 'AgriPulse se réserve le droit de refuser l\'accès à toute personne qui violerait les conditions d\'utilisation.'
        },
      ]
    },
    {
      id: 'limitation',
      title: 'Limitation de Responsabilité',
      icon: '⚠️',
      content: [
        { 
          label: 'Clauses Limitatives',
          text: 'En aucun cas, AgriPulse ne peut être tenue responsable des dommages directs, indirects, spéciaux ou consécutifs résultant de l\'utilisation du site.'
        },
        { 
          label: 'Force Majeure',
          text: 'AgriPulse n\'assume aucune responsabilité en cas d\'événement de force majeure affectant la disponibilité du service.'
        },
      ]
    },
    {
      id: 'modifications',
      title: 'Modifications des Mentions Légales',
      icon: '📝',
      content: [
        { 
          label: 'Droit de Modifier',
          text: 'AgriPulse se réserve le droit de modifier les présentes mentions légales à tout moment. Les modifications entrent en vigueur dès leur publication.'
        },
        { 
          label: 'Notification',
          text: 'Les modifications importantes seront communiquées par email ou via une notification sur le site.'
        },
      ]
    },
  ];

  return (
    <div className="legal-notice-page">
      <PageHeader 
        title="Mentions Légales" 
        subtitle="Informations légales et réglementaires d'AgriPulse"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop"
      />

      <div className="legal-container">
        {/* Table des matières */}
        <div className="legal-toc">
          <h2>Sommaire</h2>
          <ul>
            {sections.map(section => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.icon} {section.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections en cartes */}
        <div className="legal-sections">
          {sections.map(section => (
            <section key={section.id} id={section.id} className="legal-card">
              <div className="card-header">
                <div className="card-icon">{section.icon}</div>
                <h2>{section.title}</h2>
              </div>

              <div className="card-content">
                {section.content.map((item, idx) => (
                  <div key={idx} className="content-item">
                    <h3>{item.label}</h3>
                    {item.value && <p className="value">{item.value}</p>}
                    {item.text && <p className="text">{item.text}</p>}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact pour questions légales */}
        <div className="legal-contact">
          <h2>Questions Légales?</h2>
          <p>Pour toute question relative à ces mentions légales, veuillez nous contacter :</p>
          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">📧 Email :</span>
              <a href="mailto:legal@agripulse.com">legal@agripulse.com</a>
            </div>
            <div className="info-item">
              <span className="info-label">📞 Téléphone :</span>
              <a href="tel:+224">+224 XXX XX XX XX</a>
            </div>
            <div className="info-item">
              <span className="info-label">📋 Voir aussi :</span>
              <Link to="/contact">Formulaire de Contact</Link>
            </div>
          </div>
        </div>

        {/* Dernière mise à jour */}
        <div className="legal-footer">
          <p>Dernière mise à jour : <strong>9 janvier 2026</strong></p>
          <p>Ces mentions légales sont conformes aux lois et réglementations applicables.</p>
        </div>
      </div>
    </div>
  );
}

export default LegalNoticePage;
