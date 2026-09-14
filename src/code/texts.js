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
    header: {
      logo: "Portfolio's Logo",
      theme: "Theme: ",
      lang: "Language: ",
      light: "Light",
      dark: "Dark",
      en: "English"
    },
    heroSection: {
      heroTitle: "Shawn Roggero",
      heroSubtitle: "Tool & Gameplay Programmer | Procedural Generation",
      projectsButton: "Projects",
      cv: "View my Resume",
      downloadCv: "Download my Resume"
    },
    aboutSection: {
      aboutTitle: "About Me",
      currentState: [
        { text: "Completed my college studies in Multimedia Integration (TIM), now studying game programming at university.", done: true },
        { text: "Looking for a tools programming internship to explore the role further and learn from experienced programmers.", done: false },
        { text: "Always eager to learn, share ideas and collaborate on projects that are a little out of the ordinary.", done: true }
      ],
      goals: [
        { text: "Love designing procedural systems, and especially building the tools that allow others to use them.", done: false },
        { text: "Want to keep developing my skills through ambitious projects and new technical challenges.", done: true },
        { text: "Want to contribute to tools that make developers' work simpler, more efficient and more enjoyable.", done: false }
      ],
      enjoyments: [
        { text: "Big fan of electronic music: melodic, dubstep, color bass, future riddim and way too many other subgenres.", done: true },
        { text: "Always up for staying active: climbing, parkour, golf... and interested in urbex.", done: false },
        { text: "Rogue-lite, survival and extraction shooter player... basically a bit of a loot goblin.", done: true }
      ]
    },
    projectSection: {
      featuredTitle: "Featured Projects",
      allProjectsTitle: "All Projects",

      sortingText: {
        sort: "Sort",
        sortOptions: [
          "Date: new to old",
          "Date: old to new",
          "Name: A to Z",
          "Name: Z to A"
        ],

        engine: "Engine",
        engineOptions: [
          "All",
          "Unity Engine",
          "Unreal Engine",
          "JavaScript"
        ],

        dimension: "Dimension",
        dimensionOptions: [
          "All",
          "2D",
          "3D"
        ],

        type: "Type",
        typeOptions: [
          "All",
          "School project",
          "Game jam",
          "Team project",
          "Tool"
        ]
      },

      showMoreButton: "Show more",
    },
    singleProjectSection: {
      backButton: "Back to projects",
      highlightsTitle: "Highlights",
      description: "Description",
      readMoreButton: "Read more",
      readLessButton: "Read less",
      linksTitle: "Check out more",
      metaTitle: [
        "Hide Meta",
        "Show Meta"
      ],
      meta: {
        engine: "Engine",
        dimension: "Dimension",
        role: "Role",
        teamSize: "Team size",
        year: "Year",
        type: "Type",
        highlights: "Meta Highlights"
      },
      screenshotsTitle: "Project images",
      screenshots: [
        "Show less images",
        "Show all images"
      ]
    },
    footer: {
      reachOut: "Reach out",
      socialLinks: "Social links",
      copyright: "© 2026 Shawn Roggero. All rights reserved."
    }
  },

  fr: {
    header: {
      logo: "Logo du Portfolio",
      theme: "Thème: ",
      lang: "Langue: ",
      light: "Clair",
      dark: "Sombre",
      fr: "Français"
    },
    heroSection: {
      heroTitle: "Shawn Roggero",
      heroSubtitle: "Programmeur Tool & Gameplay | Génération procédurale",
      projectsButton: "Projets",
      cv: "Voir mon CV",
      downloadCv: "Télécharger mon CV"
    },
    aboutSection: {
      aboutTitle: "À Propos",
      currentState: [
        { text: "Études collégiales en Technique d'Intégration Multimédia (TIM) terminées, maintenant à l'université en programmation de jeux.", done: true },
        { text: "À la recherche d'un stage en programmation d'outils pour découvrir davantage ce rôle et apprendre auprès de programmeurs expérimentés.", done: false },
        { text: "Toujours partant pour apprendre, partager des idées et collaborer sur des projets qui sortent un peu de l'ordinaire.", done: true }
      ],
      goals: [
        { text: "Adore concevoir des systèmes procéduraux et surtout créer les outils qui permettent aux autres de les utiliser.", done: false },
        { text: "Souhaite continuer à développer ses compétences à travers des projets ambitieux et de nouveaux défis techniques.", done: true },
        { text: "Veut contribuer à des outils qui rendent le travail des développeurs plus simple, efficace et agréable.", done: false }
      ],
      enjoyments: [
        { text: "Grand amateur de musique électronique: mélodique, dubstep, color bass, future riddim et beaucoup trop d'autres sous-genres.", done: true },
        { text: "Toujours partant pour bouger: escalade, parkour, golf... et interessé par l'urbex", done: false },
        { text: "Joueur de rogue-lites, jeux de survie et extraction shooters... un peu comme un loot goblin.", done: true }
      ]
    },
    projectSection: {
      featuredTitle: "Projets en vedette",
      allProjectsTitle: "Tous les projets",

      sortingText: {
        sort: "Trier",
        sortOptions: [
          "Date: du plus récent",
          "Date: du plus ancien",
          "Nom: A à Z",
          "Nom: Z à A"
        ],

        engine: "Moteur de jeu",
        engineOptions: [
          "Tous",
          "Unity Engine",
          "Unreal Engine",
          "JavaScript"
        ],

        dimension: "Dimension",
        dimensionOptions: [
          "Tous",
          "2D",
          "3D"
        ],

        type: "Type",
        typeOptions: [
          "Tous",
          "Projet scolaire",
          "Game jam",
          "Projet d'équipe",
          "Outil"
        ]
      },

      showMoreButton: "Voir plus",
    },
    singleProjectSection: {
      backButton: "Retour aux projets",
      highlightsTitle: "Points forts",
      description: "Description",
      readMoreButton: "Lire plus",
      readLessButton: "Lire moins",
      linksTitle: "Aller voir plus",
      metaTitle: [
        "Cacher Méta",
        "Voir Méta"
      ],
      meta: {
        engine: "Moteur de jeu",
        dimension: "Dimension",
        role: "Rôle",
        teamSize: "Taille de l'équipe",
        year: "Année",
        type: "Type",
        highlights: "Points forts méta"
      },
      screenshotsTitle: "Images du projet",
      screenshots: [
        "Voir moins d'images",
        "Voir tous les images"
      ]
    },
    footer: {
      reachOut: "Me joindre",
      socialLinks: "Réseaux sociaux",
      copyright: "© 2026 Shawn Roggero. Tous droits réservés."
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