// Données du portfolio AsArt'sDev
// Sections : Livre, CV, Portfolio Subvention, Projets IA

export const portfolioData = {
  sections: [
    {
      id: 'livre',
      icon: '📖',
      title: 'Les trois vies de Asmir',
      description: "Roman autobiographique illustré retraçant trois périodes clés de la vie de l'auteur.",
      status: 'En cours de finalisation',
      folder: 'Livre_Asmir/',
      color: '#FFE5B4'
    },
    {
      id: 'cv',
      icon: '📄',
      title: 'CV & Portfolio Professionnel',
      description: 'CV professionnel et portfolio de créations artistiques et numériques.',
      status: 'Prêt pour envoi',
      folder: 'CV/',
      color: '#D4F1D4'
    },
    {
      id: 'subvention',
      icon: '🎨',
      title: 'Portfolio Subvention',
      description: 'Dossier complet pour demande de subvention : présentation du projet, budget et plan de développement.',
      status: 'Prêt pour envoi',
      folder: 'Portfolio_Subvention/',
      color: '#E6E6FA'
    },
    {
      id: 'ia',
      icon: '🤖',
      title: 'Projets IA & Code Source',
      description: "Projets d'intelligence artificielle : génération d'illustrations, assistant narratif et outils numériques.",
      status: 'En développement',
      folder: 'Projets_IA/',
      color: '#B0E0E6'
    }
  ]
};
