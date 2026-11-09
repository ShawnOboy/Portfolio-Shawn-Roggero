import {
  dashoutImages,
  aregonImages,
  equanimityImages,
  myosotisImages,
  misaryesImages,
  dungenImages,
  culttuerieImages,
  wizardMontrealGameJamImages,
  wizardMontrealImages,
  impoliteGuestsImages,
  allAboutMooImages,
  slynkyImages,
  worldMakingToolImages
} from "./images";


export const projects = [

  // -----------------------------------------
  // Dash Out
  // -----------------------------------------
  {
    id: "dash-out",
    slug: "dash-out",
    status: "active",
    featured: null,
    images: dashoutImages,
    links: [
      {
        label: { en: "Play in browser on Itch.io", fr: "Jouer dans le navigateur sur Itch.io" },
        url: "https://shawnoboy.itch.io/dash-out",
      },
      {
        label: { en: "Music used: Shiver by NeoLegacy", fr: "Musique utilisée : Shiver par NeoLegacy" },
        url: "https://youtu.be/GIJ_vPXsGTk?si=UwlweRDJsMdxNgwv",
      }
    ],
    meta: {
      engine: "vanilla-js",
      dimension: "2D",
      role: ["solo developer"],
      teamSize: 1,
      year: 2020,
      type: "school project",
      highlights: {
        en: [
          "First game project",
          "Rhythm-based gameplay"
        ],
        fr: [
          "Premier projet de jeu",
          "Gameplay basé sur le rythme"
        ]
      },
    },
    tags: {
      en: ["javascript", "rhythm"],
      fr: ["javascript", "rythme"],
    },
    translations: {
      en: {
        name: "Dash Out",
        description: [
          "A rhythm game made in JavaScript inspired by the game Just Shapes & Beats.",
          "You play a little cube that needs to dodge obstacles appearing in sync with the music and you can dash through them at the right time to avoid getting hit.",
          "This was my first ever game and it was made in a few weeks as part of a school project, it was a great learning experience, especially in JavaScript, and it exceeded the expectations of the course by its complexity.",
          "It was one of my greatest leanrning experiences for what I knew about game development at the time, especially because it was not using any real game engine, so I defined every box collision, movement and events based on time past since the start of the game."
        ],
        highlights: [
          "A rhythm-based game made in vanilla JavaScript.",
          "First game project and learning experience."
        ],
      },
      fr: {
        name: "Dash Out",
        description: [
          "Un jeu de rythme réalisé en JavaScript, grandement inspiré par le jeu Just Shapes & Beats.",
          "Vous incarnez un petit cube qui doit esquiver des obstacles apparaissant en synchronisation avec la musique et vous pouvez 'dash' au bon moment pour éviter de vous faire toucher.",
          "C'était mon tout premier jeu et il a été réalisé en quelques semaines dans le cadre d'un projet scolaire, ce fut une excellente expérience d'apprentissage, surtout en JavaScript, et il a dépassé les attentes du cours pour sa complexité.",
          "C'était l'une de mes plus grandes expériences d'apprentissage pour ce que je connaissais du développement de jeux à l'époque, surtout parce qu'il n'utilisait aucun moteur de jeu réel, donc j'ai défini chaque collision, mouvement et événements en fonction du temps écoulé depuis le début du jeu."
        ],
        highlights: [
          "Un jeu basé sur le rythme réalisé en JavaScript pur.",
          "Premier projet de jeu et expérience d'apprentissage."
        ],
      },
    },
  },

  // -----------------------------------------
  // Aregon
  // -----------------------------------------
  {
    id: "aregon",
    slug: "aregon",
    status: "active",
    featured: null,
    images: aregonImages,
    links: [
      {
        label: { en: "Download on Itch.io", fr: "Télécharger sur Itch.io" },
        url: "https://shawnoboy.itch.io/aregon",
      },
    ],
    meta: {
      engine: "Unity",
      dimension: "2D",
      role: ["solo developer"],
      teamSize: 1,
      year: 2022,
      type: "school project",
      highlights: {
        en: [
          "Gravity swap mechanic",
          "Energy and armor systems",
          "Three level progression",
        ],
        fr: [
          "Mécanique de changement de gravité",
          "Systèmes d'énergie et d'armure",
          "Progression à travers trois niveaux",
        ]
      },
    },
    tags: {
      en: ["unity 2d", "platformer", "gravity swap"],
      fr: ["unity 2d", "plateforme", "changement de gravité"],
    },
    translations: {
      en: {
        name: "Aregon",
        description: [
          "A 2D platformer where you need to reach the end of the level by swapping gravity and managing your energy, life, and armor.",
          "The game includes collectibles and three levels to beat without dying, keeping your health and armor through the levels.",
          "This was my first time working with Unity and C# and it was a great learning experience. I wanted to introduce more to this game, but didn't have the time to do so as it was already pretty time consuming to make the arts, animations, levels and systems, learning tons of new things along the way.",
          "The will remain unfinished, but I am proud of what I accomplished with it, especially since it was my first time working with a game engine."
        ],
        highlights: [
          "Implemented a gravity flipping mechanic required for level completion.",
          "Built the energy, life, and armor systems.",
          "Drew and animated all the art assets for the game.",
          "Recorded and implemented the sound effects for the game.",
          "Designed and built the three levels of the game.",
        ],
      },
      fr: {
        name: "Aregon",
        description: [
          "Un jeu platformer 2D où vous devez atteindre la fin du niveau en changeant la gravité et en gérant votre énergie, vie et armure.",
          "Le jeu comprend des objets à récolter et trois niveaux à compléter sans mourir, en conservant votre santé et votre armure à travers les niveaux.",
          "C'était ma première expérience avec Unity et C# et ce fut une excellente expérience d'apprentissage. Je voulais introduire plus de contenu dans ce jeu, mais je n'avais pas le temps de le faire, car il était déjà assez demandant de créer les arts, animations, niveaux et systèmes, en apprenant beaucoup de nouvelles choses en cours de route.",
          "Le jeu restera inachevé, mais je suis fier de ce que j'ai accompli avec lui, surtout que c'était ma première expérience avec un moteur de jeu."
        ],
        highlights: [
          "Implémentation d'une mécanique de changement de gravité nécessaire pour compléter les niveaux.",
          "Création des systèmes d'énergie, de vie et d'armure.",
          "Création et animation de tous les assets graphiques du jeu.",
          "Enregistrement et implémentation des effets sonores du jeu.",
          "Conception et construction des trois niveaux du jeu.",
        ],
      },
    },
  },

  // -----------------------------------------
  // Equanimity Travel
  // -----------------------------------------
  {
    id: "equanimity-travel",
    slug: "equanimity-travel",
    status: "active",
    featured: null,
    images: equanimityImages,
    links: [
      {
        label: { en: "Play in browser on Itch.io", fr: "Jouer dans le navigateur sur Itch.io" },
        url: "https://shawnoboy.itch.io/equanimity-travel",
      },
      {
        label: { en: "Music used: Eternal Equanimity by Tokzick on SoundCloud", fr: "Musique utilisée: Eternal Equanimity par Tokzick sur SoundCloud" },
        url: "https://soundcloud.com/tokzick/tokzick-eternal-equanimity",
      },
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["solo developer"],
      teamSize: 1,
      year: 2022,
      type: "school project",
      highlights: {
        en: [
          "Calm rhythm gameplay",
          "Atmospheric presentation",
        ],
        fr: [
          "Jeu de rythme calme",
          "Présentation atmosphérique",
        ],
      },
    },
    tags: {
      en: ["unity 3d", "rhythm", "atmosphere", "calm"],
      fr: ["unity 3d", "rythme", "atmosphère", "calme"],
    },
    translations: {
      en: {
        name: "Equanimity Travel",
        description: [
          "A rhythm game that expresses feelings through music and atmosphere.",
          "Sadly, this game is unfinished and learned my lesson that a game should not be made only in a few days.",
          "This project was my first experience on a 3D game and it was the project that told me optimization is important, I kept adding more and more on the level without thinking about performance, and the more I added the slower it became, meaning the music would desynchronize with the gameplay and it would be unplayable.",
          "Thinking of what I should have done differently, I should have made a system that would spawn object based on the rhythm of the music, and despawn them after they are no longer needed, instead of having everything in the scene at once. The worst part is that the level expanded to something like 15k units, and that's usually not a good idea.",
          "It's far from being my best project, probably even on the list of my worst projects, but I really enjoyed the simplicity and effectiveness of the atmosphere and I wish to bring something similar in a future project with a more complete and polished experience, especially optimized."
        ],
        highlights: [
          "Focused on atmosphere and emotional pacing.",
          "Built a rhythm prototype around a calm experience.",
          "Learned the importance of optimization in 3D game development."
        ],
      },
      fr: {
        name: "Equanimity Travel",
        description: [
          "Un jeu de rythme qui exprime des émotions à travers la musique et l'atmosphère.",
          "Malheureusement, ce jeu est inachevé et j'ai appris que je ne devrais pas créer un jeu en quelques jours seulement.",
          "Ce projet a été ma première expérience avec un jeu en 3D et c'était le premier projet qui m'a fait comprendre que l'optimisation est importante, j'ai continué à ajouter de plus en plus d'éléments dans le niveau sans penser à la performance et ça a fini par être lent et désynchronisé, rendant le jeu injouable.",
          "En y repensant, j'aurais dû créer un système qui génère les objets en fonction du rythme de la musique et les supprime lorsqu'ils ne sont plus nécessaires, au lieu d'avoir tout dans la scène en même temps. Le pire, c'est que le niveau s'est étendu à quelque chose comme 15k unités, ce qui n'est généralement pas une bonne idée.",
          "Ce projet n'est pas parmi mes meilleurs, même parmis mes pire, mais j'ai vraiment apprécié la simplicité et l'efficacité de l'atmosphère et j'espère pouvoir créer quelque chose de similaire dans un futur projet avec une expérience plus complète et polie, surtout optimisée."
        ],
        highlights: [
          "Accent mis sur l'ambiance et le rythme émotionnel.",
          "Prototype de jeu de rythme autour d'une expérience calme.",
          "Apprentissage de l'importance de l'optimisation dans le développement de jeux 3D."
        ],
      },
    },
  },

  // -----------------------------------------
  // Myosotis Memories
  // -----------------------------------------
  {
    id: "myosotis-memories",
    slug: "myosotis-memories",
    status: "active",
    featured: null,
    images: myosotisImages,
    links: [
      {
        label: { en: "Download on Itch.io", fr: "Télécharger sur Itch.io" },
        url: "https://shawnoboy.itch.io/myosotis-memories",
      },
    ],
    meta: {
      engine: "Unity",
      dimension: "2D",
      role: ["programmer"],
      teamSize: 4,
      year: 2023,
      type: "game jam",
      highlights: {
        en: [
          "40-hour game jam project",
          "Garden-themed gameplay loop",
        ],
        fr: [
          "Projet de game jam de 40 heures",
          "Boucle de jeu thématique sur le jardin",
        ],
      },
    },
    tags: {
      en: ["unity 2d", "game jam", "garden"],
      fr: ["unity 2d", "game jam", "jardin"],
    },
    translations: {
      en: {
        name: "Myosotis Memories",
        description: [
          "A game created during the Valleyfield Intercollege Game Jam 7th edition in 40 hours under the theme 'garden'.",
          "The goal is to collect puzzle pieces and make the myosotis garden bloom.",
          "The inspiration for the game came from the forget-me-not flower, which symbolizes remembrance and memory, and our representation of the garden is a metaphor for the secret garden.",
          "This game was one of my first team projects and I learned a lot about communication and collaboration in video game development. I also learned to work under pressure and manage my time effectively to meet the game jam deadlines.",
        ],
        highlights: [
          "Built the core collectible and survival loop.",
          "Worked under a 40-hour game jam deadline.",
          "Learned to use Github for team collaboration and version control."
        ],
      },
      fr: {
        name: "Myosotis Memories",
        description: [
          "Jeu créé pendant le Game Jam intercollégial de Valleyfield 7ème édition en 40 heures sous la thématique 'jardin'.",
          "Le but est de récupérer des morceaux de casse-tête et de faire fleurir le jardin de myosotis.",
          "L'inspiration pour le jeu est venue de la fleur du myosotis, qui symbolise le souvenir et la mémoire, et notre représentation du jardin est la métaphore du jardin secret.",
          "Ce jeu était d'ailleurs un de mes premiers projets d'équipe et j'ai beaucoup appris sur la communication et la collaboration dans un projet de jeu vidéo. J'ai aussi appris à travailler sous pression et à gérer mon temps efficacement pour respecter les délais du game jam.",
        ],
        highlights: [
          "Création de la boucle principale de collecte et de survie.",
          "Travail réalisé sous contrainte de 40 heures de game jam.",
          "Utilisation de Github pour la collaboration d'équipe et le contrôle de version."
        ],
      },
    },
  },

  // -----------------------------------------
  // Misaryes: Subnebula
  // -----------------------------------------
  {
    id: "misaryes-subnebula",
    slug: "misaryes-subnebula",
    status: "active",
    featured: 5,
    images: misaryesImages,
    links: [
      {
        label: { en: "Download on Itch.io", fr: "Télécharger sur Itch.io" },
        url: "https://shawnoboy.itch.io/misaryes-subnebula",
      },
      {
        label: { en: "Project Presentation video", fr: "Vidéo de présentation du projet" },
        url: "https://youtu.be/Gal3VnpplaQ?si=_UeMSkCUAPUPPKDX",
      }
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["programmer"],
      teamSize: 4,
      year: 2023,
      type: "team project",
      highlights: {
        en: [
          "Zone-based open-world game",
          "Inventory and healing systems",
          "URP rendering pipeline",
          "Telemetry system shown as an in-game book",
          "Basic combat system and enemy AI"
        ],
        fr: [
          "Jeu en monde ouvert basé sur des zones",
          "Systèmes d'inventaire et de soins",
          "Pipeline de rendu URP",
          "Système de télémétrie présenté sous forme de livre en jeu",
          "Système de combat de base et IA ennemie"
        ],
      },
    },
    tags: {
      en: ["unity 3d", "open-world", "urp", "exploration", "inventory", "telemetry", "combat", "team project"],
      fr: ["unity 3d", "monde-ouvert", "urp", "exploration", "inventaire", "télémétrie", "combat", "projet d'équipe"],
    },
    translations: {
      en: {
        name: "Misaryes: Subnebula",
        description: [
          "A zone-based survival open-world game, where players must survive and fight against enemies, collect resources and clues to progress through the game.",
          "This project was my first major team project and was the first one where I had to apply my acquired knowledge from previous errors. The first thing I did was to make sure it is optimized by only rendering what is needed and not everything at once, and I also made sure to have a telemetry system to keep track of the player's progress and objectives.",
          "The game features an in-game book that keeps track of the player's progress and objectives, as well as an inventory system, healing system, and basic combat system with enemy AI.",
          "My biggest learning experience from this project, in matters of programming, was with the interaction system, which was very bad, everything was hardcoded and in a single script, looking for every interaction through tags. I learned my lesson, and I now know about Interfaces and how to use them to make a more flexible and scalable interaction system.",
          "I also learned a lot about working in a team, especially with communication and collaboration. We've been working with daily scrum meetings, learning about agile methodologies, doing team retrospectives and sprint planning, which are how professional game development teams achieve their goals.",
          "I have also gained more knowledge about Github, with branching, pull requests, etc., this way I was able to keep track on what was going on in the project as the only technical lead and programmer."
        ],
        highlights: [
          "World is separated into five major zones with different visuals and gameplay",
          "Optimization and performance improvements by hiding unseen objects",
          "Interaction system, inventory system, healing system and basic crafting system",
          "Working in-game book system to keep track of the player's progress and objectives",
          "Combat system with basic AI and enemy behaviors",
          "Project is built on the Universal Render Pipeline (URP)",
        ],
      },
      fr: {
        name: "Misaryes: Subnebula",
        description: [
          "Un jeu de survie en monde ouvert basé sur des zones, où les joueurs doivent survivre et combattre des ennemis, collecter des ressources et des indices pour progresser dans le jeu.",
          "Ce projet était mon premier projet d'équipe majeur et c'était le premier où j'ai dû appliquer mes connaissances acquises à partir d'erreurs précédentes. La première chose que j'ai faite a été de m'assurer qu'il est optimisé en ne rendant que ce qui est nécessaire et pas tout en même temps, et je me suis également assuré d'avoir un système de télémétrie pour suivre la progression et les objectifs du joueur.",
          "Le jeu propose un livre en jeu qui suit la progression et les objectifs du joueur, ainsi qu'un système d'inventaire, un système de soins et un système de combat de base avec une IA ennemie.",
          "Ma plus grande expérience d'apprentissage de ce projet, en matière de programmation, a été avec le système d'interaction, qui était très mauvais, tout était 'hardcodé' et dans un seul script, en appliquant chaque interaction à travers des tags. J'ai appris ma leçon et je sais maintenant comment utiliser les interfaces pour créer un système d'interaction plus flexible et 'scalable'.",
          "J'ai également beaucoup appris sur le travail en équipe, notamment en matière de communication et de collaboration. Nous avons travaillé avec des réunions quotidiennes de type 'daily scrum', en apprenant les méthodologies agiles, en faisant des rétrospectives d'équipe et la planification de sprint, qui sont la façon dont les équipes de développement de jeux professionnelles atteignent leurs objectifs.",
          "J'ai également acquis plus de connaissances sur Github, avec la gestion des branches, les pull requests, etc., ce qui m'a permis de suivre l'évolution du projet en tant que seul lead technique et programmeur."
        ],
        highlights: [
          "Le monde est divisé en cinq grandes zones avec des visuels et un gameplay différents",
          "Optimisation et amélioration des performances en cachant les objets non visibles",
          "Systèmes d'interaction, d'inventaire, de soins et système de fabrication de base",
          "Système de livre en jeu pour suivre la progression et les objectifs du joueur",
          "Système de combat avec IA de base et comportements ennemis",
          "Projet construit sur le Universal Render Pipeline (URP)",
        ],
      },
    },
  },

  // -----------------------------------------
  // Cult-Tuerie
  // -----------------------------------------
  {
    id: "cult-tuerie",
    slug: "cult-tuerie",
    status: "active",
    featured: null,
    images: culttuerieImages,
    links: [
      {
        label: { en: "Download on Itch.io", fr: "Télécharger sur Itch.io" },
        url: "https://shawnoboy.itch.io/cult-tuerie",
      },
      {
        label: { en: "Cult-Tuerie Trailer", fr: "Bande-annonce de Cult-Tuerie" },
        url: "https://youtu.be/RqnUdLYAfvw?si=Mso4-fwbi0b8ebGE",
      },
      {
        label: { en: "LinkedIn post", fr: "Publication sur LinkedIn" },
        url: "https://www.linkedin.com/posts/shawn-roggero_cult-tuerie-by-shawnoboy-sirvanminh-yehyus-activity-7153482894462582784-EGWn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEB7XFsBQxyclvENvlABKmw3NO9P48jMnjk",
      }
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["programmer"],
      teamSize: 6,
      year: 2024,
      type: "game jam",
      highlights: {
        en: [
          "Combat-focused game",
          "Wave-based enemy combat loop",
          "Progression through collected scraps",
          "Card selection upgrade system"
        ],
        fr: [
          "Jeu axé sur le combat",
          "Boucle de combat basée sur des vagues d'ennemis",
          "Progression à travers la collecte de 'scraps'",
          "Système de sélection de cartes pour les améliorations"
        ]
      }
    },
    tags: {
      en: ["unity 3d", "game jam"],
      fr: ["unity 3d", "game jam"],
    },
    translations: {
      en: {
        name: "Cult-Tuerie",
        description: [
          "A game created during the Valleyfield Intercollege Game Jam 8th edition in 40 hours under the theme 'cult'.",
          "It's a fast-paced fps where you keep your momentum when moving around shooting enemies, who are  and collecting scraps that are spent to upgrade your stats and survive longer after each waves of enemies.",
          "It was a project I enjoyed working on, because I had been thinking of an upgrade system for a while, and I was able to implement it in this game, which was a great learning experience for me. I was able to implement it in a way that is scalable since I could easily create new upgrades and add them to the right places.",
          "During the game jam, there was 3 challenges revealed every few hours, and we were able to implement them all. One of them was to implement Steamboat Willie how we wanted (which had just entered the public domain), so we made it an upgrade, another was to have an animal to pet (so we hid a sheep), and the third was a settings that can be changed, but we already had mouse sensitivity settings, so it was already implemented.",
          "It was again a good learning experience as for Github, where I learned to add branch restrictions because we had some issues at some point, this was also the biggest team I had worked with."
        ],
        highlights: [
          "Built the enemy combat loop and progression system.",
          "Implemented a scalable upgrade system.",
          "Worked under pressure in a 40-hour project.",
          "Completed all the challenges revealed during the game jam."
        ],
      },
      fr: {
        name: "Cult-Tuerie",
        description: [
          "Un jeu créé pendant le Game Jam intercollégial de Valleyfield 8ème édition en 40 heures sous la thématique 'culte'.",
          "C'est un fps rapide où vous gardez votre 'momentum' en vous déplaçant et en tirant sur les ennemis, tout en collectant des 'scraps' qui sont dépensés pour améliorer vos stats et survivre plus longtemps après chaque vague d'ennemis.",
          "C'était un projet sur lequel j'ai aimé travailler, car je pensais à un système d'amélioration depuis un certain temps, et j'ai pu l'implémenter dans ce jeu, ce qui a été une excellente expérience d'apprentissage pour moi. J'ai pu l'implémenter de manière 'scalable' puisque je pouvais facilement créer de nouvelles améliorations et les ajouter aux bons endroits.",
          "Pendant le game jam, il y avait 3 défis révélés toutes les quelques heures, et nous avons pu tous les implémenter. L'un d'eux était d'implémenter Steamboat Willie comme nous le voulions (à cause de son passage au domaine public), donc nous en avons fait une amélioration, un autre était d'avoir un animal à flatter (donc nous avons caché un mouton), et le troisième était un paramètre qui peut être modifié, mais nous avions déjà des paramètres de sensibilité de la souris, donc c'était déjà implémenté.",
          "C'était encore une bonne expérience d'apprentissage pour Github, où j'ai appris à ajouter des restrictions de branche, car nous avons eu quelques problèmes à un moment donné, c'était aussi la plus grande équipe avec laquelle j'avais travaillé."
        ],
        highlights: [
          "Création de la boucle de combat des ennemis et du système de progression.",
          "Implémentation d'un système d'amélioration 'scalable'.",
          "Travail sous pression dans un projet de 40 heures.",
          "Complétion de tous les défis révélés pendant le game jam."
        ],
      },
    },
  },

  // -----------------------------------------
  // Dungen
  // -----------------------------------------
  {
    id: "dungen",
    slug: "dungen",
    status: "active",
    featured: 4,
    images: dungenImages,
    links: [
      {
        label: { en: "Early development LinkedIn post", fr: "Publication LinkedIn en début de développement" },
        url: "https://www.linkedin.com/posts/shawn-roggero_procedural-algorithms-gamedev-activity-7137237556177309697-kGzj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEB7XFsBQxyclvENvlABKmw3NO9P48jMnjk",
      },
      {
        label: { en: "Final project presentation", fr: "Présentation du projet final" },
        url: "https://canva.link/77v7c9etdo61ikn",
      },
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["solo developer"],
      teamSize: 1,
      year: 2024,
      type: "tool",
      highlights: {
        en: [
          "Node-based procedural dungeon generation tool",
          "User-friendly interface"
        ],
        fr: [
          "Outil de génération procédurale de donjons basé sur des nœuds",
          "Interface conviviale"
        ]
      },
    },
    tags: {
      en: ["unity 3d", "tool", "procedural generation", "node-based system"],
      fr: ["unity 3d", "outil", "génération procédurale", "système basé sur des nœuds"],
    },
    translations: {
      en: {
        name: "3D Dungen",
        description: [
          "3D Dungen is a procedural dungeon generation tool that allows users to create dungeons with a node-based system.",
          "The tool provides a user-friendly interface for designing and customizing dungeons, making it easy to generate unique layouts for games.",
          "The tool was developed as a solo project and showcases my skills in Unity, C#, and procedural generation techniques. And it was pushed further as a final project of my collegial program with actual visual and proper usage of the tool, with the remaking of the technique used to generate the dungeons.",
          "This was my biggest solo project and first one towards my goal of getting into the industry making complex tools and systems for games, and I learned a lot about procedural generation, node-based systems, and user interface design.",
        ],
        highlights: [
          "Developed a procedural dungeon generation tool with a node-based system.",
          "Implemented a user-friendly interface for designing and customizing dungeons.",
          "Showcased skills in Unity, C#, and procedural generation techniques.",
          "Final project of my collegial program, demonstrating advanced tool usage and visual design.",
        ],
      },
      fr: {
        name: "3D Dungen",
        description: [
          "3D Dungen est un outil de génération procédurale de donjons en 3D qui permet aux utilisateurs de créer des donjons avec un système basé sur des nœuds.",
          "L'outil offre une interface conviviale pour concevoir et personnaliser les donjons, rendant facile la génération de layouts uniques pour les jeux.",
          "L'outil a été développé comme projet solo et met en valeur mes compétences en Unity, C#, et techniques de génération procédurale. Et il a été poussé plus loin comme projet final de mon programme au cégep avec des visuels et l'utilisation propre à l'outil, avec la refonte de la technique utilisée pour générer les donjons.",
          "C'était mon plus grand projet solo et le premier vers mon objectif d'intégrer l'industrie en créant des outils et systèmes complexes pour les jeux, et j'ai beaucoup appris sur la génération procédurale, les systèmes basés sur des nœuds, et la conception d'interfaces utilisateur.",
        ],
        highlights: [
          "Développement d'un outil de génération procédurale de donjons avec un système basé sur des nœuds.",
          "Implémentation d'une interface conviviale pour concevoir et personnaliser les donjons.",
          "Mise en valeur des compétences en Unity, C#, et techniques de génération procédurale.",
          "Projet final de mon programme au cégep, démontrant l'utilisation avancée de l'outil et la conception visuelle.",
        ],
      },
    },
  },

  // -----------------------------------------
  // Wizard in Montreal Game Jam
  // -----------------------------------------
  {
    id: "wizard-in-montreal-game-jam",
    slug: "wizard-in-montreal-game-jam",
    status: "active",
    featured: null,
    images: wizardMontrealGameJamImages,
    links: [
      // {
      //   label: { en: "", fr: "" },
      //   url: "",
      // }
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["programmer"],
      teamSize: 7,
      year: 2025,
      type: "game jam",
      highlights: {
        en: [

        ],
        fr: [

        ]
      },
    },
    tags: {
      en: ["unity 3d"],
      fr: ["unity 3d"],
    },
    translations: {
      en: {
        name: "Wizard in Montreal | Game Jam",
        description: [
          "More details about this project will be added soon.",
        ],
        highlights: [

        ],
      },
      fr: {
        name: "Wizard in Montreal | Game Jam",
        description: [
          "Plus de détails sur ce projet seront ajoutés bientôt.",
        ],
        highlights: [

        ],
      },
    },
  },

  // -----------------------------------------
  // Wizard in Montreal
  // -----------------------------------------
  {
    id: "wizard-in-montreal",
    slug: "wizard-in-montreal",
    status: "active",
    featured: 3,
    images: wizardMontrealImages,
    links: [
      // {
      //   label: { en: "", fr: "" },
      //   url: "",
      // }
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["programmer"],
      teamSize: 6,
      year: 2025,
      type: "tool",
      highlights: {
        en: [

        ],
        fr: [

        ]
      },
    },
    tags: {
      en: ["unity 3d"],
      fr: ["unity 3d"],
    },
    translations: {
      en: {
        name: "Wizard in Montreal",
        description: [
          "More details about this project will be added soon.",
        ],
        highlights: [

        ],
      },
      fr: {
        name: "Wizard in Montreal",
        description: [
          "Plus de détails sur ce projet seront ajoutés bientôt.",
        ],
        highlights: [

        ],
      },
    },
  },

  // -----------------------------------------
  // IMPolite Guests
  // -----------------------------------------
  {
    id: "impolite-guests",
    slug: "impolite-guests",
    status: "active",
    featured: null,
    images: impoliteGuestsImages,
    links: [
      // {
      //   label: { en: "", fr: "" },
      //   url: "",
      // }
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["programmer"],
      teamSize: 7,
      year: 2026,
      type: "game jam",
      highlights: {
        en: [

        ],
        fr: [

        ]
      },
    },
    tags: {
      en: ["unity 3d"],
      fr: ["unity 3d"],
    },
    translations: {
      en: {
        name: "IMPolite Guests",
        description: [
          "More details about this project will be added soon.",
        ],
        highlights: [

        ],
      },
      fr: {
        name: "IMPolite Guests",
        description: [
          "Plus de détails sur ce projet seront ajoutés bientôt.",
        ],
        highlights: [

        ],
      },
    },
  },

  // -----------------------------------------
  // All About Moo
  // -----------------------------------------
  {
    id: "all-about-moo",
    slug: "all-about-moo",
    status: "active",
    featured: null,
    images: allAboutMooImages,
    links: [
      // {
      //   label: { en: "", fr: "" },
      //   url: "",
      // }
    ],
    meta: {
      engine: "Unreal",
      dimension: "3D",
      role: ["programmer"],
      teamSize: 10,
      year: 2026,
      type: "team project",
      highlights: {
        en: [

        ],
        fr: [

        ]
      },
    },
    tags: {
      en: ["unity 3d"],
      fr: ["unity 3d"],
    },
    translations: {
      en: {
        name: "All About Moo",
        description: [
          "More details about this project will be added soon.",
        ],
        highlights: [

        ],
      },
      fr: {
        name: "Tout est Meuh",
        description: [
          "Plus de détails sur ce projet seront ajoutés bientôt.",
        ],
        highlights: [

        ],
      },
    },
  },

  // -----------------------------------------
  // Sly n Ky
  // -----------------------------------------
  {
    id: "sly-n-ky",
    slug: "sly-n-ky",
    status: "active",
    featured: 1,
    images: slynkyImages,
    links: [
      {
        label: { en: "Download on Itch.io", fr: "Télécharger sur Itch.io" },
        url: "https://shawnoboy.itch.io/sly-n-ky",
      },
      {
        label: { en: "LinkedIn post", fr: "Publication LinkedIn" },
        url: "https://lnkd.in/p/gAen7Vup",
      },
      {
        label: { en: "Game Lab Competion Website", fr: "Site web du Concours Ubisoft" },
        url: "https://montreal.ubisoft.com/en/our-commitments/education/game-lab-competition/",
      },
      {
        label: { en: "Game Lab Competion recap video", fr: "Vidéo de récapitulatif du Concours Ubisoft" },
        url: "https://youtu.be/X2IXpiQqP4w?si=JPXKWKK3stHdE6bZ",
      },
      {
        label: { en: "Thank you speech", fr: "Discours de remerciements" },
        url: "https://youtu.be/CPfn4SqEluo?si=KZXwfF-iym0gnb3E",
      }
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["programmer"],
      teamSize: 8,
      year: 2026,
      type: "team project",
      highlights: {
        en: [

        ],
        fr: [

        ]
      },
    },
    tags: {
      en: ["unity 3d", "award-winning", "team project", "puzzle", "platformer", "co-op", "retro-style", "slinky", "physics", "ubisoft"],
      fr: ["unity 3d", "prix remporté", "projet d'équipe", "puzzle", "plateforme", "coopératif", "style rétro", "slinky", "physique", "ubisoft"],
    },
    translations: {
      en: {
        name: "Sly n' Ky: Jouet 2 en 1",
        description: [
          "Sly n' Ky is a local couch co-op game where you can jump, chomp, propel yourself and collect candies.",
          "The game was created during the Ubisoft Game Lab competition with the givent theme of 80s-90s years vibe, so we made a retro-style game with a slinky played by two players, where each one controls one end of the slinky, and they must work together to solve puzzles and progress through the levels.",
          "The game was awarded the Best Prototype award and was nominated in five other categories, including Best quality of the 3C, Best User Experience, Best Creativity and Integration of the Theme, Best Game Design and Best Technical Challenge and Innovation.",
          "I was designated as the lead programmer of the team, and have been working along with two other programmers. I was responsible for implementing the core gameplay mechanics of the slinky, working tightly with the other programmers that worked on the character controllers and on most interactive objects and puzzles.",
          "I also worked on lesser features like the UI, screenshots feature and fixing many bugs and issues to make sure the game was polished and ready for the competition.",
          "This is the project I am most proud of, it was one of the most intense moment I had lived, lots of stress and pressure during the reveal that meant that what we've accomplished was good enough to be recognized by Ubisoft, turns out it was!",
          "I learned a lot about working with the team, we had highs and lows, but we managed to work together and make a great game, and I am proud of what we've accomplished, and I don't know how much I can say it to express how proud I am of this project.",
          "The hardest part was to keep being motivated as we were working two projects simultaneously and school courses, so it was a battle of time management and motivation."
        ],
        highlights: [
          "Best Prototype award and five other nominations in the Ubisoft Game Lab competition.",
          "Implemented the core gameplay mechanics of the slinky.",
          "Worked on the UI, screenshots feature and fixing many bugs and issues.",
          "Learned a lot about working in a team and managing time and motivation."
        ],
      },
      fr: {
        name: "Sly n' Ky: Jouet 2 en 1",
        description: [
          "Sly n' Ky est un jeu coopératif local où vous pouvez sauter, mordre, vous propulser et collecter des bonbons.",
          "Le jeu a été créé pendant le concours Ubisoft avec le thème donné du vibe des années 80-90, donc nous avons fait un jeu de style rétro avec un slinky joué par deux joueurs, où chacun contrôle une extrémité du slinky, et ils doivent travailler ensemble pour résoudre des énigmes et progresser dans les niveaux.",
          "Le jeu a remporté le prix du Meilleur Prototype et a été nominé dans cinq autres catégories, y compris la Meilleure qualité des 3C, la Meilleure expérience utilisateur, la Meilleure créativité et intégration du thème, le Meilleur game design et le Meilleur défi technique et innovation.",
          "J'ai été désigné comme le lead programmeur de l'équipe et j'ai travaillé avec deux autres programmeurs. J'étais responsable de l'implémentation de la mécanique de jeu principale du slinky, travaillant en collaboration avec les autres programmeurs qui travaillaient sur les contrôles du personnages et sur la plupart des objets interactifs et des énigmes.",
          "J'ai également travaillé sur des fonctionnalités moins importantes comme le UI, la fonction de capture d'écran et la correction de nombreux bugs et problèmes pour m'assurer que le jeu était poli et prêt pour le concours.",
          "C'est le projet dont je suis le plus fier, c'était l'un des moments les plus intenses que j'ai vécus, beaucoup de stress et de pression pendant la révélation qui signifiait que ce que nous avons accompli était suffisamment bon pour être reconnu par Ubisoft, et c'était bien le cas!",
          "J'ai beaucoup appris avec mon équipe, nous avons eu des hauts et des bas, mais nous avons réussi à travailler ensemble et à créer un excellent jeu, et je suis fier de ce que nous avons accompli, et je ne sais pas combien je peux le dire pour exprimer à quel point je suis fier de ce projet.",
          "La partie la plus difficile a été de rester motivé alors que nous travaillions sur deux projets simultanément en plus des cours scolaires, donc c'était une bataille de gestion du temps et de motivation."
        ],
        highlights: [
          "Prix du Meilleur Prototype et cinq autres nominations dans le concours Ubisoft.",
          "Implémentation de la mécanique de jeu principale du slinky.",
          "Travail sur le UI, la fonction de capture d'écran et la correction de nombreux bugs et problèmes.",
          "Beaucoup appris sur le travail en équipe et la gestion du temps et de la motivation."
        ],
      },
    },
  },

  // -----------------------------------------
  // World Maker Tool
  // -----------------------------------------
  {
    id: "world-maker-tool",
    slug: "world-maker-tool",
    status: "active",
    featured: 2,
    images: worldMakingToolImages,
    links: [
      // {
      //   label: { en: "", fr: "" },
      //   url: "",
      // }
    ],
    meta: {
      engine: "Unreal",
      dimension: "3D",
      role: ["solo developer"],
      teamSize: 1,
      year: 2026,
      type: "tool",
      highlights: {
        en: [
          "Graph Generation",
          "Modular Components",
          "Generation Pipeline",
          "Procedural Terrain",
          "Dynamic Loading",
          "Graph Visualization"
        ],
        fr: [
          "Graphes procéduraux",
          "Composants modulaires",
          "Pipeline de génération",
          "Terrain procédural",
          "Chargement dynamique",
          "Visualisation des graphes"
        ]
      },
    },
    tags: {
      en: ["unreal engine", "tool", "procedural generation", "modular architecture", "component-based system", "plugin"],
      fr: ["unreal engine", "outil", "génération procédurale", "architecture modulaire", "système à base de composants", "plugin"],
    },
    translations: {
      en: {
        name: "World Maker Tool - Work in Progress",
        description: [
          "World Maker Tool is a tool that allows users to create worlds from a component-based system, designed as a reusable plugin for future projects.",
          "Its core concept is designed to create and manage a network of interconnected procedural worlds, each with their own characteristics, generation settings and connections to other worlds.",
          "The reason for making this at first was to start developing the foundation for a potential game, which is 'Non-euclidean multiverse with interconnected procedurally generated worlds and seamless portal travel between them', and that sounds very cool, and allows many ideas to emerge from it.",
          "The idea with this tool was to have a modular architecture, using data-driven world generation and a component-based system, this way it's easier to create new components without breaking already existing worlds, and allows an easy approach for designers that creates these world, adding the components they need and changing their settings.",
          "As I already said, the idea is to support a non-euclidean multiverse where a player can seamlessly travel between worlds, so the tool already supports a dynamic loading system and currently only renders the current world.",
          "Something that will be added in the future is the rendering of the connected worlds through portals, but that a challenge for another time."
        ],
        highlights: [
          "Procedural World Graph Generation",
          "Modular World Component System",
          "Scalable Generation Pipeline",
          "Custom Procedural Terrain Generation",
          "World Graph Visualization",
        ],
      },
      fr: {
        name: "World Maker Tool - Travail en cours",
        description: [
          "World Maker Tool est un outil de création de mondes qui permet aux utilisateurs de créer des mondes à partir d'un système basé sur des composants et est développé sous forme de plugin réutilisable pour des projets futurs.",
          "Son concept principal consiste à créer et à gérer un réseau de mondes procéduraux interconnectés, chacun possédant ses propres caractéristiques, paramètres de génération et connexions avec d'autres mondes.",
          "Au début, ce projet avait pour objectif de faire les bases d'un jeu potentiel, qui serait un 'multivers non-euclidien composé de mondes générés procéduralement et interconnectés', entre lesquels le joueur pourrait voyager de manière fluide à travers des portails. C'est un concept qui m'intéresse beaucoup, parce qu'il permet plusieurs possibilités de gameplay.",
          "L'outil suit une architecture modulaire qui combine une génération de mondes basée sur du data et un système de composants. C'est une approche qui facilite l'ajout de nouvelles fonctionnalités sans briser les mondes existants, et en offrant aux designers une manière intuitive de créer des mondes en sélectionnant les composants nécessaires et en ajustant leurs paramètres.",
          "Comme mentionné, le but est de permettre au joueur de voyager librement entre les mondes de ce multivers non-euclidien, donc l'outil intègre déjà un système de chargement dynamique et n'affiche actuellement que le monde dans lequel se trouve le joueur.",
          "Une prochaine étape sera de permettre l'affichage des mondes connectés à travers les portails, un défi à explorer plus tard."
        ],
        highlights: [
          "Génération procédurale de graphes de mondes",
          "Système modulaire de composants de monde",
          "Pipeline de génération évolutif",
          "Génération de terrains procéduraux personnalisés",
          "Visualisation des graphes de mondes"
        ],
      },
    },
  },

  // -----------------------------------------
  // Perseids
  // -----------------------------------------

];



























// ----------------------------------------------------------------------------
// helper functions to get the projects
// ----------------------------------------------------------------------------

export function getProjects(lang = "en", { onlyActive = true } = {}) {
  let list = projects.slice();

  if (onlyActive) {
    list = list.filter((project) => project.status === "active");
  }

  return list.map((project, index) => ({
    id: project.id,
    slug: project.slug,
    status: project.status,
    featured: project.featured,
    images: project.images,
    links: project.links,
    meta: project.meta,
    tags: project.tags,

    order: index,

    name: project.translations[lang]?.name ?? project.translations.en.name,
    description: project.translations[lang]?.description ?? project.translations.en.description,
    highlights: project.translations[lang]?.highlights ?? project.meta?.highlights ?? [],
  }));
}

export function getFeaturedProjects(lang = "en") {
  return getProjects(lang)
    .filter((project) => Number.isFinite(project.featured))
    .sort((left, right) => left.featured - right.featured);
}

export function getProjectBySlug(slug, lang = "en") {
  const project = getProjects(lang, { onlyActive: false }).find((item) => item.slug === slug);

  if (project) {
    return project;
  }

  console.warn(`Project with slug "${slug}" not found.`);
  return null;
}