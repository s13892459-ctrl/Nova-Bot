/** Toute l'apparence et les IDs du serveur se configurent ici. */
module.exports = {
  botName: 'Nova RP',
  color: 0x6C5CE7,
  successColor: 0x2ECC71,
  errorColor: 0xE74C3C,
  warningColor: 0xF1C40F,
  logo: 'https://i.imgur.com/8Km9tLL.png', // Remplacez par le logo Nova RP
  footer: 'Nova RP • School RP',

  channels: {
    logs: '',              // salon des logs généraux
    moderationLogs: '',    // salon sanctions
    ticketsCategory: '',   // catégorie qui contient les tickets
    applications: '',      // salon réservé aux candidatures
    suggestions: '',       // salon des suggestions
    events: '',            // salon des événements
    announcements: ''      // salon d'annonces (vide = salon de la commande)
  },
  roles: {
    staff: '',
    moderator: '',
    director: '',
    founder: ''
  },
  permissions: {
    staff: ['staff', 'moderator', 'director', 'founder'],
    moderator: ['moderator', 'director', 'founder'],
    director: ['director', 'founder'],
    founder: ['founder']
  },
  economy: {
    currency: 'Nova Coins',
    dailyAmount: 250,
    dailyCooldownHours: 20,
    workMin: 70,
    workMax: 180,
    workCooldownMinutes: 30,
    shop: [
      { id: 'badge_nova', name: 'Badge Nova', price: 1000, description: 'Un badge exclusif sur votre profil.' },
      { id: 'badge_or', name: 'Badge Or', price: 3500, description: 'Une distinction prestigieuse.' }
    ]
  },
  xp: { min: 15, max: 25, cooldownSeconds: 45, baseNeeded: 250 },
  security: {
    antiSpam: true,
    antiLink: false,
    antiRaid: true,
    maxMentions: 5,
    spamMessages: 6,
    spamWindowSeconds: 7,
    raidJoins: 8,
    raidWindowSeconds: 15
  },
  ticketCategories: {
    support: { label: '🆘 Support', description: 'Question ou aide', emoji: '🆘' },
    bug: { label: '🐛 Bug', description: 'Signaler un problème', emoji: '🐛' },
    plainte: { label: '👮 Plainte', description: 'Contacter le staff', emoji: '👮' },
    recrutement: { label: '📋 Recrutement', description: 'Question recrutement', emoji: '📋' },
    partenariat: { label: '🤝 Partenariat', description: 'Proposer un partenariat', emoji: '🤝' },
    suggestion: { label: '💡 Suggestion', description: 'Proposer une idée', emoji: '💡' }
  }
};
