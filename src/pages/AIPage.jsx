import { useState, useRef, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import '../styles/AIPage.css';

function AIPage() {
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    'Comment améliorer la fertilité du sol ?',
    'Quand planter mes cultures ?',
    'Comment gérer l\'irrigation ?',
    'Quelles sont les meilleures pratiques bio ?',
    'Comment prévenir les maladies des plantes ?',
    'Quel engrais utiliser ?'
  ];

  /* ... existing code ... */
  const fileInputRef = useRef(null);

  const generateAIResponse = (userMessage) => {
    /* ... existing text logic ... */
    const lowerMessage = userMessage.toLowerCase();

    // Réponses simulées basées sur des mots-clés
    if (lowerMessage.includes('fertilité') || lowerMessage.includes('sol')) {
      return 'Pour améliorer la fertilité du sol, je recommande :\n\n1. Utiliser du compost naturel pour enrichir le sol en matière organique\n2. Pratiquer la rotation des cultures pour éviter l\'épuisement des nutriments\n3. Utiliser des engrais verts comme la moutarde ou le trèfle\n4. Éviter le labour profond qui peut perturber la vie microbienne du sol\n5. Faire des analyses de sol régulières pour adapter vos apports\n\nCes pratiques améliorent la structure du sol et augmentent sa capacité à retenir l\'eau et les nutriments.';
    }

    if (lowerMessage.includes('planter') || lowerMessage.includes('plantation')) {
      return 'Le moment de plantation dépend de plusieurs facteurs :\n\n• **Type de culture** : Les cultures de printemps (maïs, tournesol) se plantent entre mars et mai\n• **Climat local** : Consultez les dates de gelées locales\n• **Température du sol** : Attendez que le sol atteigne 10-12°C pour la plupart des cultures\n• **Calendrier lunaire** : Certains agriculteurs suivent les phases de la lune\n\nJe recommande de consulter un calendrier agricole spécifique à votre région pour des dates précises.';
    }

    if (lowerMessage.includes('irrigation') || lowerMessage.includes('eau')) {
      return 'Pour une gestion optimale de l\'irrigation :\n\n💧 **Systèmes recommandés** :\n- Goutte à goutte : Économique en eau, idéal pour les cultures en ligne\n- Aspersion : Bon pour les grandes surfaces\n- Irrigation de surface : Traditionnelle mais moins efficace\n\n📊 **Bonnes pratiques** :\n- Arrosez tôt le matin ou en fin de journée\n- Évitez l\'évaporation excessive\n- Surveillez l\'humidité du sol\n- Adaptez selon les besoins de chaque culture\n\n💡 **Astuce** : Un système d\'irrigation intelligente avec capteurs peut réduire la consommation d\'eau de 30%.';
    }

    if (lowerMessage.includes('bio') || lowerMessage.includes('biologique')) {
      return 'L\'agriculture biologique repose sur plusieurs principes :\n\n🌱 **Fertilisation** :\n- Compost et fumier naturel\n- Engrais verts\n- Rotation des cultures\n\n🛡️ **Protection des cultures** :\n- Prévention plutôt que traitement\n- Utilisation de produits naturels autorisés\n- Association de cultures bénéfiques\n- Lutte biologique avec des auxiliaires\n\n✅ **Certification** :\n- Période de conversion de 2-3 ans\n- Respect du cahier des charges bio\n- Contrôles réguliers par un organisme certifié\n\nC\'est un investissement à long terme qui préserve l\'environnement et la santé.';
    }

    if (lowerMessage.includes('maladie') || lowerMessage.includes('ravageur')) {
      return 'Pour prévenir les maladies et ravageurs :\n\n🔍 **Prévention** :\n- Choisir des variétés résistantes\n- Rotation des cultures\n- Espacement suffisant entre les plants\n- Surveillance régulière des cultures\n\n🌿 **Traitements naturels** :\n- Décoctions de plantes (ortie, prêle)\n- Huiles essentielles (neem, lavande)\n- Pièges à phéromones\n- Introduction d\'insectes auxiliaires\n\n⚠️ **En cas d\'infestation** :\n- Identifier précisément le problème\n- Traiter rapidement avec des produits autorisés\n- Isoler les plantes affectées si possible\n\nLa prévention reste la meilleure stratégie !';
    }

    if (lowerMessage.includes('engrais') || lowerMessage.includes('fertilisant')) {
      return 'Le choix de l\'engrais dépend de vos besoins :\n\n🌾 **Engrais organiques** :\n- Compost : Améliore la structure du sol\n- Fumier : Riche en azote et matière organique\n- Engrais verts : Fixent l\'azote dans le sol\n\n⚗️ **Engrais minéraux** :\n- NPK : Azote, Phosphore, Potassium\n- Adaptez selon l\'analyse de sol\n- Respectez les doses recommandées\n\n📊 **Recommandations** :\n1. Faites une analyse de sol avant d\'apporter des engrais\n2. Respectez les périodes d\'épandage\n3. Privilégiez les engrais organiques pour la durabilité\n4. Évitez les surdosages qui polluent les nappes\n\nUn sol équilibré nécessite moins d\'apports !';
    }

    // Réponse par défaut
    return 'Merci pour votre question ! C\'est une excellente question sur l\'agriculture. Pour vous donner la meilleure réponse, je recommande de :\n\n1. Consulter nos guides pratiques dans la section "Techniques"\n2. Partager votre question sur notre forum pour avoir l\'avis d\'autres agriculteurs\n3. Contacter nos experts directement via la page Contact\n\nJe continue d\'apprendre et d\'améliorer mes réponses. N\'hésitez pas à reformuler votre question ou à être plus spécifique !';
  };

  const generateImageAnalysis = () => {
    // Simulation d'analyse d'image
    const diseases = [
      {
        name: 'Mildiou (Phytophthora infestans)',
        probability: '98%',
        symptoms: 'Taches brunes sur les feuilles, duvet blanc sur la face inférieure.',
        treatment: '1. Couper et brûler les parties atteintes.\n2. Appliquer de la bouillie bordelaise (fongicide cuivre).\n3. Espacer les plants pour une meilleure aération.\n4. Éviter d\'arroser le feuillage.'
      },
      {
        name: 'Oïdium (Maladie du blanc)',
        probability: '95%',
        symptoms: 'Feutrage blanc poudreux sur les feuilles et tiges.',
        treatment: '1. Pulvériser un mélange d\'eau et de lait (10%) ou de bicarbonate de soude.\n2. Supprimer les feuilles très atteintes.\n3. Utiliser du soufre en préventif.'
      },
      {
        name: 'Rouille',
        probability: '92%',
        symptoms: 'Pustules oranges ou rouille sur la face inférieure des feuilles.',
        treatment: '1. Supprimer les feuilles infectées.\n2. Appliquer une décoction de prêle.\n3. Utiliser un fongicide à base de soufre.'
      }
    ];

    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];

    return `🔬 **Analyse d'Image Terminée**\n\n🦠 **Maladie Détectée** : ${randomDisease.name}\n📊 **Confiance** : ${randomDisease.probability}\n\n📝 **Symptômes identifiés** :\n${randomDisease.symptoms}\n\n💊 **Solutions Recommandées** :\n${randomDisease.treatment}\n\n⚠️ *Ceci est une analyse par IA. Confirmez toujours avec un expert.*`;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simuler un délai de réponse de l'IA
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  const handleImageUploadTrigger = () => {
    fileInputRef.current.click();
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      const userMessage = {
        id: messages.length + 1,
        type: 'user',
        content: '📸 Analyse cette image svp.',
        image: imageUrl,
        timestamp: new Date()
      };

      setMessages([...messages, userMessage]);
      setIsLoading(true);

      // Simulation délai analyse image (plus long)
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'ai',
          content: generateImageAnalysis(),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsLoading(false);
      }, 2500);
    }
  };

  return (
    <div className="ai-page">
      <PageHeader
        title="L'Intelligence au Service du Sol"
        subtitle="Diagnostic instantané et conseils personnalisés : votre assistant agricole intelligent."
        icon="🧠"
        images={[
          'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920&h=600&fit=crop',
          'https://images.unsplash.com/photo-1595841696677-5f80e037466d?w=1920&h=600&fit=crop',
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=600&fit=crop'
        ]}
      />

      <section className="ai-content">
        <div className="container">
          <div className="ai-chat-container">
            <div className="chat-header">
              <div className="ai-avatar">
                <span>🤖</span>
              </div>
              <div className="chat-info">
                <h2>Assistant IA</h2>
                <p className="status">En ligne • Prêt à vous aider</p>
              </div>
            </div>

            <div className="chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.type === 'user' ? 'user-message' : 'ai-message'}`}
                >
                  <div className="message-avatar">
                    {message.type === 'user' ? '👤' : '🤖'}
                  </div>
                  <div className="message-content">
                    {message.image && (
                      <div className="message-image-container">
                        <img src={message.image} alt="Upload utilisateur" className="message-image" />
                      </div>
                    )}
                    <div className="message-text">
                      {message.content.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString('fr-FR', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="message ai-message">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>


            <form className="chat-input-form" onSubmit={handleSendMessage}>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                capture="environment"
                style={{ display: 'none' }}
                onChange={handleImageSelect}
              />
              <button
                type="button"
                className="camera-button"
                onClick={handleImageUploadTrigger}
                title="Prendre une photo ou importer"
              >
                📷
              </button>
              <input
                type="text"
                className="chat-input"
                placeholder="Posez votre question ou envoyez une photo..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button type="submit" className="send-button" disabled={isLoading} aria-label="Envoyer">
                {isLoading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                )}
              </button>
            </form>
          </div>

          <div className="ai-info-panel">
            <h3>💡 Comment utiliser l'Assistant IA ?</h3>
            <ul>
              <li>Posez des questions sur les techniques agricoles</li>
              <li>Demandez des conseils sur la gestion des cultures</li>
              <li>Obtenez des informations sur l'irrigation et la fertilisation</li>
              <li>Consultez les meilleures pratiques agricoles</li>
            </ul>

            <h3>📚 Ressources complémentaires</h3>
            <div className="info-links">
              <a href="/techniques">📖 Guide des Techniques</a>
              <a href="/forum">💬 Forum Communautaire</a>
              <a href="/services">🛠️ Nos Services</a>
              <a href="/contact">📞 Contact Expert</a>
            </div>

            <div className="ai-disclaimer">
              <p>⚠️ <strong>Note importante :</strong> Cet assistant IA fournit des conseils généraux. Pour des situations spécifiques, consultez toujours un expert agricole certifié.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIPage;

