import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../styles/AIChatModal.css';

function AIChatModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'ai',
            content: 'Bonjour ! Je suis votre assistant IA agricole. Je peux vous aider avec des questions sur les techniques agricoles, la gestion des cultures, l\'irrigation, l\'élevage et bien plus encore. Posez-moi une question !',
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
            return '🔬 **Analyse Terminée**\n\nJ\'ai détecté des signes potentiels de Mildiou. \n\n✅ **Recommandation** : Supprimez les zones atteintes et appliquez un traitement à base de cuivre.';
        }

        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('fertilité') || lowerMessage.includes('sol')) {
            return 'Pour améliorer la fertilité du sol, je recommande :\n\n1. Utiliser du compost naturel\n2. Pratiquer la rotation des cultures\n3. Utiliser des engrais verts\n4. Faire des analyses de sol régulières.';
        }

        if (lowerMessage.includes('planter') || lowerMessage.includes('plantation')) {
            return 'Le moment de plantation dépend de :\n\n• **Type de culture**\n• **Climat local**\n• **Température du sol** (visez 10-12°C).';
        }

        if (lowerMessage.includes('irrigation') || lowerMessage.includes('eau')) {
            return '💧 **Gestion de l\'eau** :\n- Privilégiez le goutte à goutte pour l\'économie.\n- Arrosez tôt le matin ou tard le soir.\n- Utilisez des capteurs d\'humidité.';
        }

        if (lowerMessage.includes('bio') || lowerMessage.includes('biologique')) {
            return '🌱 **Principes Bio** :\n- Fertilisation naturelle uniquement.\n- Prévention par association de cultures.\n- Période de conversion de 2-3 ans.';
        }

        return 'Merci pour votre question ! Je suis là pour vous aider avec vos défis agricoles. N\'hésitez pas à être plus spécifique !';
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

        setTimeout(() => {
            const aiResp = {
                id: Date.now() + 1,
                type: 'ai',
                content: generateAIResponse(inputMessage, !!userMsg.image),
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResp]);
            setIsLoading(false);
        }, 2000);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            // Reset file input to allow re-selecting same file if cleared
            e.target.value = null;
        }
    };

    const clearSelectedImage = () => {
        setSelectedImage(null);
    };

    // Use Portal to render outside of any CSS stacking contexts
    return createPortal(
        <div className={`ai-floating-chat ${isOpen ? 'is-open' : ''}`}>
            {/* Floating Trigger Button */}
            {!isOpen && (
                <button className="chat-trigger" onClick={() => setIsOpen(true)}>
                    <div className="trigger-icon">🧠</div>
                    <div className="trigger-badge">Pro</div>
                </button>
            )}

            {/* Chat Window */}
            <div className="chat-window">
                <div className="chat-top-header">
                    <div className="ai-info">
                        <span className="ai-avatar-mini">🤖</span>
                        <div className="ai-status-text">
                            <h4>AgriBot IA</h4>
                            <p><span></span> En ligne</p>
                        </div>
                    </div>
                    <button className="chat-close" onClick={() => setIsOpen(false)}>×</button>
                </div>

                <div className="chat-body-messages">
                    {messages.map((m) => (
                        <div key={m.id} className={`chat-message-bubble ${m.type}`}>
                            {m.image && <img src={m.image} alt="upload" className="msg-preview-image" />}
                            <div className="chat-message-text">
                                {m.content && m.content.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
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
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                    </div>
                )}

                <form className="chat-footer-input" onSubmit={handleSendMessage}>
                    {/* Gallery Button */}
                    <button type="button" className="action-btn gallery" onClick={() => fileInputRef.current.click()} title="Galerie">
                        <i className="fa-solid fa-image"></i>
                    </button>
                    {/* Camera Button */}
                    <button type="button" className="action-btn camera" onClick={() => cameraInputRef.current.click()} title="Prendre une photo">
                        <i className="fa-solid fa-camera"></i>
                    </button>

                    {/* Hidden Standard File Input (Gallery) */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                    {/* Hidden Camera Input (Direct Capture) */}
                    <input
                        type="file"
                        ref={cameraInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        capture="environment"
                        style={{ display: 'none' }}
                    />
                    <input
                        type="text"
                        placeholder={selectedImage ? "Ajouter une légende..." : "Écrivez votre message..."}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button type="submit" className="action-btn send" disabled={(!inputMessage.trim() && !selectedImage) || isLoading}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
}

export default AIChatModal;
