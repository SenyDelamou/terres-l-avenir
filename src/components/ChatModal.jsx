import { useState, useRef, useEffect } from 'react';
import '../styles/ChatModal.css';

function ChatModal({ isOpen, onClose, seller, product }) {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Message de bienvenue du vendeur
            const welcomeMessage = {
                id: 1,
                sender: 'seller',
                text: `Bonjour ! Je suis ${seller}. Comment puis-je vous aider concernant ${product} ?`,
                timestamp: new Date()
            };
            setMessages([welcomeMessage]);
        }
    }, [isOpen, seller, product, messages.length]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        // Message utilisateur
        const userMessage = {
            id: messages.length + 1,
            sender: 'user',
            text: inputMessage,
            timestamp: new Date()
        };

        setMessages([...messages, userMessage]);
        setInputMessage('');

        // Réponse automatique du vendeur (simulation)
        setTimeout(() => {
            const sellerResponses = [
                "Merci pour votre intérêt ! Le produit est disponible immédiatement.",
                "Oui, je peux vous livrer dans votre zone. Quelle quantité souhaitez-vous ?",
                "Le prix est négociable pour les commandes importantes.",
                "Je peux vous préparer ça pour demain si vous confirmez.",
                "N'hésitez pas si vous avez d'autres questions !"
            ];

            const randomResponse = sellerResponses[Math.floor(Math.random() * sellerResponses.length)];

            const sellerMessage = {
                id: messages.length + 2,
                sender: 'seller',
                text: randomResponse,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, sellerMessage]);
        }, 1000);
    };

    if (!isOpen) return null;

    return (
        <div className="chat-modal-overlay" onClick={onClose}>
            <div className="chat-modal" onClick={(e) => e.stopPropagation()}>
                <div className="chat-header">
                    <div className="chat-header-info">
                        <div className="seller-avatar">{seller.charAt(0)}</div>
                        <div>
                            <h3>{seller}</h3>
                            <span className="chat-status">En ligne</span>
                        </div>
                    </div>
                    <button className="chat-close" onClick={onClose}>✕</button>
                </div>

                <div className="chat-messages">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`chat-message ${message.sender === 'user' ? 'user-message' : 'seller-message'}`}
                        >
                            <div className="message-bubble">
                                <p>{message.text}</p>
                                <span className="message-time">
                                    {message.timestamp.toLocaleTimeString('fr-FR', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </span>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chat-input-form" onSubmit={handleSend}>
                    <input
                        type="text"
                        className="chat-input"
                        placeholder="Votre message..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <button type="submit" className="chat-send-btn" aria-label="Envoyer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatModal;
