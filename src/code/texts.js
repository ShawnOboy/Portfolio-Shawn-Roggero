// export const texts = {
//   en: {

//     accueil: {
//       titre: "Shawn Roggero's Portfolio",
//       cv: "See my Resume"
//     },

//     header: {
//       logo: "Portfolio's Logo",
//       theme: "Theme: ",
//       lang: "Language: ",
//       light: "Light",
//       dark: "Dark",
//       en: "English"
//     },

//     projets: {
//       games: "My Games",
//       web: "My Web Site",
//       creation: "My Creation"
//     },

//     projet: {
//       plus: "Click to see more",
//       lien: "Link for this project"
//     },

//     propos: {
//       premier_titre: "Presentation:",
//       premier_texte: "Hello, my name is Shawn Roggero, and I am a graduate of the Multimedia Integration Technique (TIM) program at Maisonneuve College. I am passionate about game programming, specifically procedural generation, which greatly interests me. I am a very ambitious and motivated individual, eager to provide high-quality games to players, always striving to learn more to deliver the best.",
//       deuxieme_titre: "My Goals:",
//       deuxieme_texte: "I plan to pursue university studies in game programming and gain experience in various areas such as artificial intelligence, procedural generation, and game physics. My goals include working as a programmer in a game studio to learn more professional working methods and gain valuable work experience.",
//       troisieme_titre: "Life Project:",
//       troisieme_texte: "Once I become a seasoned game programmer, I aspire to open my own game studio to offer players an experience that embodies the wildest ideas I can bring with a team that is as ambitious and passionate as I am."
//     },

//     footer: {
//       infos: {
//         email: "shawnroggero@hotmail.com",
//         phone: "(514) 348-2065"
//       },

//       lien: {
//         linkedin: "LinkedIn",
//         github: "Github",
//         youtube: "Youtube"
//       },

//       nav: {
//         accueil: "Welcome",
//         games: "My Games",
//         web: "My Web Site",
//         creation: "My Creation",
//         cv: "View Resume"
//       }
//     }

//   },

//     fr: {

//     accueil: {
//       titre: "Portfolio Shawn Roggero",
//       cv: "Voir mon CV"
//     },

//     header: {
//       logo: "Logo Portfolio",
//       theme: "Thème: ",
//       lang: "Langue: ",
//       light: "Clair",
//       dark: "Sombre",
//       fr: "Français"
//     },

//     projets: {
//       games: "Mes Jeux",
//       web: "Mes Sites Web",
//       creation: "Mes Créations"
//     },

//     projet: {
//       plus: "Cliquez pour voir plus",
//       lien: "Lien vers le projet"
//     },

//     propos: {
//       premier_titre: "Présentation:",
//       premier_texte: "Bonjour, je m'appelle Shawn Roggero, et je suis diplômé de la Technique d'Intégration Multimédia (TIM) au Cégep de Maisonneuve. Je suis passionné par la programmation de jeux, en particulier la génération procédurale, qui m'attire énormément. Je suis quelqu'un de très ambitieux et motivé, désirant d'offrir des jeux de haute qualité aux joueurs, tout en cherchant constamment à en apprendre davantage pour offrir le meilleur.",
//       deuxieme_titre: "Objectifs:",
//       deuxieme_texte: "Je prévois poursuivre des études universitaires en programmation de jeux et acquérir de l'expérience dans différents domaines tels que l'intelligence artificielle, la génération procédurale et encore la physique en jeux. Mes objectifs incluent de travailler en tant que programmeur au sein d'un studio de jeux pour apprendre des méthodes de travail professionnelles et accumuler une expérience précieuse.",
//       troisieme_titre: "Projet de vie:",
//       troisieme_texte: "Une fois devenu un programmeur chevronné dans l'industrie du jeu vidéo, j'aspire à ouvrir mon propre studio de jeux afin d'offrir aux joueurs une expérience qui incarne au mieux les idées les plus audacieuses que je puisse apporter, le tout avec une équipe aussi ambitieuse et passionnée que moi.",
//     },

//     footer: {
//       infos: {
//         email: "shawnroggero@hotmail.com",
//         phone: "(514) 348-2065"
//       },

//       lien: {
//         linkedin: "LinkedIn",
//         github: "Github",
//         youtube: "Youtube"
//       },

//       nav: {
//         accueil: "Accueil",
//         games: "Mes Jeux",
//         web: "Mes Sites Web",
//         creation: "Mes Créations",
//         cv: "Voir Résumé"
//       }
//     }
    
//   }
// }

export const texts = {
  en: {
    home: {
      heroTitle: "Shawn Roggero",
      heroSubtitle: "Game Programmer — Gameplay · Tools · Procedural",
      projectsButton: "Projects",
      projectsSection: "Featured Projects",
      projectsSectionListTitle: "All Projects",
      cv: "View my Resume",
      downloadCv: "Download",
      aboutSection: "About Me"
    },

    header: {
      logo: "Portfolio's Logo",
      theme: "Theme: ",
      lang: "Language: ",
      light: "Light",
      dark: "Dark",
      en: "English"
    },

    about: {
      currentState: [
        { text: "Finish my college studies in Multimedia Integration Technique (TIM) at Maisonneuve College.", done: true },
        { text: "Finish my university studies in game programming.", done: false },
        { text: "Gain experience in the game industry as a programmer.", done: false }
      ],
      goals: [
        { text: "Work on gameplay systems, tools and procedural generation.", done: false },
        { text: "Ship polished prototypes and learn industry workflows.", done: false },
        { text: "Contribute to team tools and optimization.", done: false }
      ],
      enjoyments: [
        { text: "Gameplay programming and systems design.", done: false },
        { text: "Procedural content and algorithmic solutions.", done: false },
        { text: "Performance tuning and gameplay feel.", done: false }
      ]
    },

    project: {
      linkLabel: "Open project",
      highlightsTitle: "Highlights"
    }
  },

  fr: {
    home: {
      heroTitle: "Shawn Roggero",
      heroSubtitle: "Programmeur de jeux — Gameplay · Outils · Procédural",
      projectsButton: "Projets",
      projectsSection: "Projets en vedette",
      projectsSectionListTitle: "Tous les projets",
      cv: "Voir mon CV",
      downloadCv: "Télécharger",
      aboutSection: "À propos de moi"
    },

    header: {
      logo: "Logo Portfolio",
      theme: "Thème: ",
      lang: "Langue: ",
      light: "Clair",
      dark: "Sombre",
      fr: "Français"
    },

    about: {
      currentState: [
        { text: "Terminer mes études collégiales en Technique d'Intégration Multimédia (TIM).", done: true },
        { text: "Terminer mes études universitaires en programmation de jeux.", done: false },
        { text: "Gagner de l'expérience dans l'industrie du jeu en tant que programmeur.", done: false }
      ],
      goals: [
        { text: "Travailler sur des systèmes de gameplay, outils et génération procédurale.", done: false },
        { text: "Publier des prototypes soignés et apprendre les workflows pro.", done: false },
        { text: "Contribuer aux outils d'équipe et à l'optimisation.", done: false }
      ],
      enjoyments: [
        { text: "Programmation de gameplay et conception de systèmes.", done: false },
        { text: "Génération procédurale et solutions algorithmiques.", done: false },
        { text: "Optimisation et sensations de jeu.", done: false }
      ]
    },

    project: {
      linkLabel: "Ouvrir le projet",
      highlightsTitle: "Points forts"
    }
  },

  contactInfos: {
    email: "shawnroggero@hotmail.com",
    phone: "(514) 348-2065"
  },

  socialLinks: {
    linkedin: "LinkedIn",
    github: "Github",
    itch: "Itch.io"
  }
};