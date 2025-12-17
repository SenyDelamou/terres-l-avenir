import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const AppContext = createContext(undefined);

const translationMap = {
  fr: {
    nav: {
      home: 'Accueil',
      diagnostic: 'Diagnostic IA',
      formations: 'Formations',
      communaute: 'Communauté',
      marche: 'Marché',
      investisseurs: 'Investisseurs',
      ressources: 'Ressources',
      contact: 'Contact',
      connexion: 'Connexion',
    },
    notifications: {
      title: 'Notifications',
      empty: 'Toutes vos notifications sont lues. Revenez bientôt !',
      markRead: 'Marquer comme lu',
    },
    home: {
      hero: {
        eyebrow: 'Agroécologie augmentée',
        title: 'La plateforme intelligente pour lancer votre aventure agricole',
        subtitle:
          "Diagnostic IA, formations immersives, marché local et réseau d'investisseurs : tout est réuni pour faire grandir votre ferme ou votre projet agro du premier semis jusqu'à la commercialisation.",
        primaryCta: 'Essayer le diagnostic IA',
        secondaryCta: 'Créer mon compte',
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1300&q=80',
        imageAlt: 'Plantes en pleine croissance',
        badges: ['Conseil terrain', 'Données satellite', 'Réseau paysan'],
        stats: [
          { value: '140+', label: 'fermes accompagnées' },
          { value: '18', label: 'territoires engagés' },
          { value: '92%', label: 'réussite des parcours' },
        ],
        progressLabel: 'Communauté en croissance',
      },
      ecosystem: {
        title: 'Écosystème',
        headline: 'Des outils orchestrés pour apprendre, vendre et financer',
        cards: [
          {
            title: 'Diagnostic intelligent',
            description:
              "L'IA analyse vos photos, identifie la maladie probable et propose un protocole d'action validé par nos agronomes.",
          },
          {
            title: 'Formations guidées',
            description: 'Des parcours immersifs avec vidéos, quiz et missions terrain pour maîtriser chaque geste agricole.',
          },
          {
            title: 'Communauté solidaire',
            description: "Un espace d'entraide avec mentors, salons thématiques et accès direct à de jeunes entrepreneurs agro.",
          },
        ],
      },
      features: {
        title: 'Fonctionnalités',
        headline: 'Tout ce dont vous avez besoin pour piloter vos cultures',
        cards: [
          {
            title: 'Suivi des cultures',
            description: 'Tableau de bord unifié pour consigner vos diagnostics, vos notes terrain et vos observations météo.',
          },
          {
            title: 'Rappels intelligents',
            description: 'Notifications personnalisées pour les traitements, les semis et les étapes clés de vos formations.',
          },
          {
            title: 'Marketplace intégrée',
            description: 'Publiez vos produits, gérez vos commandes et suivez vos stocks en temps réel.',
          },
          {
            title: 'Levée de fonds guidée',
            description: 'Outils de pitch, suivi des investisseurs et accompagnement dédié pour votre projet agro.',
          },
        ],
      },
      highlight: {
        title: 'Un cockpit complet pour piloter votre projet',
        description:
          'Suivez vos diagnostics, vos modules de formation, vos ventes et vos levées de fonds dans un seul tableau de bord, conçu pour les agriculteurs en devenir.',
        tags: ['Tutoriels vidéo', 'Fiches pratiques', 'Rappels personnalisés', 'Investisseurs régionaux'],
        metrics: [
          { value: '1 200+', label: 'diagnostics photo déjà en base' },
          { value: '350', label: 'agrinautes actifs dans la communauté' },
          { value: '24h', label: 'temps moyen pour une réponse mentor' },
        ],
      },
      testimonials: {
        title: 'Ils témoignent',
        headline: 'Pourquoi les agriculteurs novices utilisent Terres d\'Avenir',
        items: [
          {
            quote:
              '« Grâce au diagnostic IA j\'ai soigné mes tomates en deux jours. Les vidéos m\'ont montré exactement quoi faire. »',
            author: 'Fatou • Maraîchage urbain',
          },
          {
            quote:
              '« La communauté répond hyper vite et sans jugement. On se sent accompagné même quand on débute. »',
            author: 'Mathieu • Micro-ferme en reconversion',
          },
        ],
      },
      reach: {
        title: 'Portée du projet',
        headline: 'Mesurez l’impact potentiel de la plateforme sur vos territoires',
        labels: {
          beneficiaries: 'Ménages bénéficiaires estimés',
          skillHours: 'Heures de compétences générées',
          sustainableYield: 'Production durable soutenue (tonnes)',
          investmentVolume: 'Volume d’investissement mobilisable (€)',
        },
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      diagnostic: 'AI Diagnosis',
      formations: 'Training',
      communaute: 'Community',
      marche: 'Marketplace',
      investisseurs: 'Investors',
      ressources: 'Resources',
      contact: 'Contact',
      connexion: 'Sign in',
    },
    notifications: {
      title: 'Notifications',
      empty: 'You are all caught up. Check back soon!',
      markRead: 'Mark as read',
    },
    home: {
      hero: {
        eyebrow: 'Augmented agroecology',
        title: 'The intelligent platform to launch your farming journey',
        subtitle:
          'AI diagnostics, immersive training, local marketplace and investor network: everything you need to grow your farm or agri project from first seed to distribution.',
        primaryCta: 'Try the AI diagnosis',
        secondaryCta: 'Create my account',
        image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1300&q=80',
        imageAlt: 'Plants growing in bright light',
        badges: ['Field advisory', 'Satellite insights', 'Farmer network'],
        stats: [
          { value: '140+', label: 'farms supported' },
          { value: '18', label: 'regions onboarded' },
          { value: '92%', label: 'training completion rate' },
        ],
        progressLabel: 'Community growth',
      },
      ecosystem: {
        title: 'Ecosystem',
        headline: 'Orchestrated tools to learn, trade and raise funds',
        cards: [
          {
            title: 'Intelligent diagnosis',
            description: 'AI inspects your pictures, spots likely diseases and recommends agronomist-approved actions.',
          },
          {
            title: 'Guided training',
            description: 'Immersive learning paths with videos, quizzes and field missions for every farming gesture.',
          },
          {
            title: 'Supportive community',
            description: 'Dedicated spaces with mentors, themed channels and a network of young agri entrepreneurs.',
          },
        ],
      },
      features: {
        title: 'Features',
        headline: 'Everything you need to steer your crops',
        cards: [
          {
            title: 'Crop tracking',
            description: 'Unified dashboard to log diagnostics, field notes and weather observations.',
          },
          {
            title: 'Smart reminders',
            description: 'Personalised notifications for treatments, sowing dates and training milestones.',
          },
          {
            title: 'Integrated marketplace',
            description: 'Publish produce, manage orders and monitor stocks in real time.',
          },
          {
            title: 'Guided fundraising',
            description: 'Pitch tools, investor follow-up and tailored coaching for your agri venture.',
          },
        ],
      },
      highlight: {
        title: 'A full cockpit to pilot your project',
        description:
          'Monitor diagnostics, training progress, sales and funding in one place, crafted for emerging farmers.',
        tags: ['Video tutorials', 'Practical guides', 'Personalised reminders', 'Regional investors'],
        metrics: [
          { value: '1,200+', label: 'photo diagnostics recorded' },
          { value: '350', label: 'active community members' },
          { value: '24h', label: 'average mentor response time' },
        ],
      },
      testimonials: {
        title: 'Success stories',
        headline: 'Why first-time farmers rely on Terres d’Avenir',
        items: [
          {
            quote:
              '“Thanks to the AI diagnosis I treated my tomatoes in two days. The videos showed me exactly what to do.”',
            author: 'Fatou • Urban market gardening',
          },
          {
            quote: '“The community replies fast and without judgment. I never feel alone even as a beginner.”',
            author: 'Mathieu • Micro-farm in transition',
          },
        ],
      },
      reach: {
        title: 'Project reach',
        headline: 'Estimate how far the platform can scale across territories',
        labels: {
          beneficiaries: 'Estimated beneficiary households',
          skillHours: 'Skill hours generated',
          sustainableYield: 'Sustainable yield supported (tons)',
          investmentVolume: 'Mobilised investment volume (€)',
        },
      },
    },
  },
};

const initialNotifications = [
  {
    id: 1,
    title: 'Nouveau diagnostic prêt',
    description: 'Votre analyse sur les tomates de la ferme Horizon est disponible.',
    timestamp: 'Il y a 2 heures',
    read: false,
  },
  {
    id: 2,
    title: 'Mentor assigné',
    description: 'Camille, ingénieure agronome, rejoint votre cercle de suivi.',
    timestamp: 'Hier',
    read: false,
  },
  {
    id: 3,
    title: 'Rappel formation',
    description: 'La session “Irrigation intelligente” commence demain à 9h.',
    timestamp: 'Il y a 3 jours',
    read: true,
  },
];

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && Object.prototype.hasOwnProperty.call(acc, key) ? acc[key] : undefined), obj);
}

export function AppProvider({ children }) {
  const [language, setLanguage] = useState('fr');
  const [notifications, setNotifications] = useState(initialNotifications);
  const [analyticsLog, setAnalyticsLog] = useState([]);

  const t = useCallback(
    (key, fallback = key) => {
      const localized = getNestedValue(translationMap[language] ?? translationMap.fr, key);
      return localized !== undefined ? localized : fallback;
    },
    [language]
  );

  const markNotificationRead = useCallback((id) => {
    setNotifications((prev) => prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)));
  }, []);

  const trackEvent = useCallback((eventName, payload = {}) => {
    const entry = {
      eventName,
      payload,
      timestamp: new Date().toISOString(),
    };
    setAnalyticsLog((prev) => [...prev.slice(-49), entry]);
    if (typeof window !== 'undefined') {
      window.console.info('[analytics]', entry);
    }
  }, []);

  const changeLanguage = useCallback(
    (code) => {
      setLanguage(code);
      trackEvent('language_changed', { code });
    },
    [trackEvent]
  );

  const trackPageView = useCallback(
    (path) => {
      trackEvent('page_view', { path });
    },
    [trackEvent]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      trackPageView(window.location.pathname);
    }
  }, [trackPageView]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      t,
      notifications,
      markNotificationRead,
      analyticsLog,
      trackEvent,
      trackPageView,
    }),
    [language, changeLanguage, t, notifications, markNotificationRead, analyticsLog, trackEvent, trackPageView]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
