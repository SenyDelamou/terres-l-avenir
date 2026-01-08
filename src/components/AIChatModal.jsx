import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Bot, X, Send, Image as ImageIcon, Camera, Paperclip, ChevronDown, Sparkles } from 'lucide-react';
import '../styles/AIChatModal.css';

function AIChatModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'ai',
            content: 'Bonjour ! Je suis l\'Assistant Expert AgriPulse. \n\nJe peux analyser vos cultures par photo, vous conseiller sur les traitements ou optimiser vos rendements. \n\nComment puis-je vous aider aujourd\'hui ?',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);
    const cameraInputRef = useRef(null);

    const [selectedImage, setSelectedImage] = useState(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen, selectedImage]);

    const generateAIResponse = (userMessage, hasImage) => {
        if (hasImage) {
            return '🔬 **Analyse Visuelle Terminée**\n\nJ\'ai détecté une possible **carence en Azote** sur ce feuillage.\n\n✅ **Action recommandée** :\nApportez un engrais riche en azote ou utilisez du purin d\'ortie pour un traitement naturel rapide.';
        }

        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('fertilité') || lowerMessage.includes('sol')) {
            return 'Pour améliorer la fertilité du sol, voici mon protocole :\n\n1. **Amendement organique** (compost/fumier) à l\'automne.\n2. **Rotation des cultures** sur 4 ans.\n3. **Cultures de couverture** (trèfle, moutarde) en intersaison.';
        }

        if (lowerMessage.includes('planter') || lowerMessage.includes('plantation')) {
            return '📅 **Conseil Plantation** :\n\nCela dépend de votre zone climatique. Pour les semis de printemps, attendez que le sol atteigne **10-12°C** constant. \n\nVoulez-vous les dates pour une culture spécifique ?';
        }

        if (lowerMessage.includes('irrigation') || lowerMessage.includes('eau')) {
            return '💧 **Optimisation Hydrique** :\n\n- Installez un **goutte-à-goutte** pour réduire la consommation de 40%.\n- Arrosez **avant 8h** ou **après 18h**.\n- Paillez le sol pour limiter l\'évaporation.';
        }

        return 'Je prends note de votre demande. Pourriez-vous préciser le type de culture concerné ? Cela m\'aidera à vous donner un conseil expert personnalisé.';
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim() && !selectedImage) return;

        const userMsg = {
            id: Date.now(),
            type: 'user',
            content: inputMessage,
            image: selectedImage,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputMessage('');
        setSelectedImage(null);
        setIsLoading(true);

        // Simulation de délai réseau
        setTimeout(() => {
            const aiResp = {
                id: Date.now() + 1,
                type: 'ai',
                content: generateAIResponse(inputMessage, !!userMsg.image),
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResp]);
            setIsLoading(false);
        }, 1500);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            e.target.value = null;
        }
    };

    const clearSelectedImage = () => {
        setSelectedImage(null);
    };

    return createPortal(
        <div className={`ai-floating-chat ${isOpen ? 'is-open' : ''}`} style={{ zIndex: 9999 }}>

            {/* Chat Window */}
            <div className="chat-window">
                <div className="chat-top-header">
                    <div className="ai-info">
                        <div className="ai-avatar-mini">
                            <Bot size={24} />
                        </div>
                        <div className="ai-status-text">
                            <h4>AgriPulse IA</h4>
                            <p><span></span> Expert connecté</p>
                        </div>
                    </div>
                    <button className="chat-close" onClick={() => setIsOpen(false)}>
                        <ChevronDown size={24} />
                    </button>
                </div>

                <div className="chat-body-messages">
                    {messages.map((m) => (
                        <div key={m.id} className={`chat-message-bubble ${m.type}`}>
                            {m.image && <img src={m.image} alt="upload" className="msg-preview-image" />}
                            <div className="chat-message-text">
                                {m.content && m.content.split('\n').map((line, i) => (
                                    <p key={i} style={{ margin: line ? '0.4rem 0' : '0' }}>{line}</p>
                                ))}
                            </div>
                            <span className="msg-time">
                                {m.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="chat-message-bubble ai loading">
                            <div className="typing-dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Preview Area */}
                {selectedImage && (
                    <div className="image-preview-area">
                        <div className="preview-container">
                            <img src={selectedImage} alt="Preview" />
                            <button type="button" className="btn-remove-preview" onClick={clearSelectedImage}>
                                <X size={12} />
                            </button>
                        </div>
                    </div>
                )}

                <form className="chat-footer-input" onSubmit={handleSendMessage}>
                    <button type="button" className="action-btn gallery" onClick={() => fileInputRef.current.click()} title="Joindre une image">
                        <ImageIcon size={20} />
                    </button>

                    {/* Hidden Standard File Input */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        style={{ display: 'none' }}
                    />

                    <input
                        type="text"
                        placeholder={selectedImage ? "Ajouter une note..." : "Posez une question à l'IA..."}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button type="submit" className="action-btn send" disabled={(!inputMessage.trim() && !selectedImage) || isLoading}>
                        <Send size={18} />
                    </button>
                </form>
            </div>

            {/* Floating Trigger Button (Orb) */}
            {!isOpen && (
                <button className="chat-trigger" onClick={() => setIsOpen(true)}>
                    <div className="trigger-icon">
                        <Sparkles size={28} />
                    </div>
                    {/* <div className="trigger-badge">1</div> */}
                </button>
            )}
        </div>,
        document.body
    );
}

export default AIChatModal;
