import { useState, useRef, useEffect } from 'react';
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

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const generateAIResponse = (userMessage) => {
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
        if (!inputMessage.trim()) return;

        const userMsg = {
            id: Date.now(),
            type: 'user',
            content: inputMessage,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputMessage('');
        setIsLoading(true);

        setTimeout(() => {
            const aiResp = {
                id: Date.now() + 1,
                type: 'ai',
                content: generateAIResponse(inputMessage),
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResp]);
            setIsLoading(false);
        }, 1000);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            const userMsg = {
                id: Date.now(),
                type: 'user',
                content: '📸 Analyse d\'image...',
                image: imageUrl,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, userMsg]);
            setIsLoading(true);

            setTimeout(() => {
                const aiResp = {
                    id: Date.now() + 1,
                    type: 'ai',
                    content: '🔬 **Analyse Terminée**\n\nJ\'ai détecté des signes potentiels de Mildiou. \n\n✅ **Recommandation** : Supprimez les zones atteintes et appliquez un traitement à base de cuivre.',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, aiResp]);
                setIsLoading(false);
            }, 2000);
        }
    };

    return (
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
                                {m.content.split('\n').map((line, i) => (
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

                <form className="chat-footer-input" onSubmit={handleSendMessage}>
                    <button type="button" className="action-btn camera" onClick={() => fileInputRef.current.click()}>
                        📸
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                    <input
                        type="text"
                        placeholder="Écrivez votre message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button type="submit" className="action-btn send" disabled={!inputMessage.trim() || isLoading}>
                        ✈️
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AIChatModal;
