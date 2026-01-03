import React, { useState, useEffect } from 'react';
import '../styles/InvestmentModal.css';

function InvestmentModal({ project, isOpen, onClose }) {
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState('');
    const [isSubmitting, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Reset state when closing
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep(1);
                setAmount('');
                setIsSuccess(false);
            }, 300);
        }
    }, [isOpen]);

    if (!isOpen && !isSuccess) return null;

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 2000);
    };

    return (
        <div className={`investment-modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div className="investment-modal-card" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                {!isSuccess ? (
                    <>
                        <div className="modal-header">
                            <span className="step-indicator">Étape {step} sur 3</span>
                            <h2>Investir dans {project.title}</h2>
                            <div className="progress-track">
                                <div className="progress-bar" style={{ width: `${(step / 3) * 100}%` }}></div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="modal-form">
                            {step === 1 && (
                                <div className="step-content animate-in">
                                    <h3>Définissez votre participation</h3>
                                    <p>Soutenez ce projet avec le montant de votre choix.</p>
                                    <div className="amount-input-group">
                                        <span className="currency">GNF</span>
                                        <input
                                            type="number"
                                            placeholder="Ex: 5000"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            required
                                            min="100"
                                        />
                                    </div>
                                    <div className="suggested-amounts">
                                        {[100000, 500000, 1000000].map(val => (
                                            <button
                                                key={val}
                                                type="button"
                                                className="btn-suggestion"
                                                onClick={() => setAmount(val)}
                                            >
                                                +{val.toLocaleString()} GNF
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="step-content animate-in">
                                    <h3>Conditions de l'investissement</h3>
                                    <div className="terms-info">
                                        <div className="info-item">
                                            <span className="label">Type de contribution</span>
                                            <span className="value">Prêt avec Intérêts (ROI)</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="label">Montant sélectionné</span>
                                            <span className="value">{amount.toLocaleString()} GNF</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="label">Éligibilité</span>
                                            <span className="value">Investisseur Accrédité</span>
                                        </div>
                                    </div>
                                    <div className="checkbox-group">
                                        <label>
                                            <input type="checkbox" required />
                                            J'accepte les conditions générales d'utilisation d'AgriPlus.
                                        </label>
                                        <label>
                                            <input type="checkbox" required />
                                            Je confirme avoir pris connaissance des risques liés à ce projet.
                                        </label>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="step-content animate-in">
                                    <h3>Validation Finale</h3>
                                    <div className="confirmation-summary">
                                        <div className="summary-card">
                                            <div className="summary-row">
                                                <span>Projet</span>
                                                <strong>{project.title}</strong>
                                            </div>
                                            <div className="summary-row">
                                                <span>Montant</span>
                                                <strong className="text-highlight">{amount.toLocaleString()} GNF</strong>
                                            </div>
                                        </div>
                                        <p className="summary-note">
                                            En cliquant sur "Confirmer", une notification officielle sera envoyée à <strong>{project.entrepreneur}</strong> pour initier le contrat.
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="modal-actions">
                                {step > 1 && (
                                    <button type="button" className="btn-back" onClick={handleBack}>
                                        Retour
                                    </button>
                                )}
                                {step < 3 ? (
                                    <button type="button" className="btn-next" onClick={handleNext} disabled={!amount}>
                                        Continuer
                                    </button>
                                ) : (
                                    <button type="submit" className="btn-confirm" disabled={isSubmitting}>
                                        {isSubmitting ? <span className="spinner"></span> : "Confirmer l'Investissement"}
                                    </button>
                                )}
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="success-state animate-in">
                        <div className="success-icon">✨</div>
                        <h2>Félicitations !</h2>
                        <p>Votre demande d'investissement de <strong>{amount}€</strong> a été enregistrée avec succès.</p>
                        <div className="success-details">
                            <p>Un email de confirmation a été envoyé. Le porteur de projet, <strong>{project.entrepreneur}</strong>, vous contactera sous 48h professionnelle.</p>
                        </div>
                        <button className="btn-close-final" onClick={onClose}>
                            Retour aux projets
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InvestmentModal;
