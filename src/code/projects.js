import {
  dashoutImages,
  aregonImages,
  equanimityImages,
  myosotisImages,
  misaryesImages,
  culttuerieImages,
} from "./images";


export const projects = [

  // Dash Out
  {
    id: "dash-out",
    slug: "dash-out",
    status: "active",
    featured: 2,
    images: dashoutImages,
    links: [
      {
        label: { en: "Itch.io", fr: "Itch.io" },
        url: "https://shawnoboy.itch.io/dash-out",
      }
    ],
    meta: {
      engine: "vanilla-js",
      dimension: "2D",
      role: ["everything"],
      teamSize: 1,
      year: 2020,
      type: "school project",
      highlights: [

      ],
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
          "This was my first ever game and it was made in a few weeks as part of a school project, it was a great learning experience, especially in JavaScript, and it exceeded the expectations of the course by its complexity."
        ],
        highlights: [

        ],
      },
      fr: {
        name: "Dash Out",
        description: [
          "Un jeu de rythme réalisé en JavaScript, grandement inspiré par le jeu Just Shapes & Beats.",
          "Vous incarnez un petit cube qui doit esquiver des obstacles apparaissant en synchronisation avec la musique et vous pouvez 'dash' au bon moment pour éviter de vous faire toucher.",
          "C'était mon tout premier jeu et il a été réalisé en quelques semaines dans le cadre d'un projet scolaire, ce fut une excellente expérience d'apprentissage, surtout en JavaScript, et il a dépassé les attentes du cours pour sa complexité."
        ],
        highlights: [

        ],
      },
    },
  },

  // Aregon
  {
    id: "aregon",
    slug: "aregon",
    status: "active",
    featured: null,
    images: aregonImages,
    links: [
      {
        label: {
          en: "Itch.io",
          fr: "Itch.io",
        },
        url: "https://shawnoboy.itch.io/aregon",
      },
    ],
    meta: {
      engine: "Unity",
      dimension: "2D",
      role: ["everything"],
      teamSize: 1,
      year: 2022,
      type: "school project",
      highlights: [
        "Gravity swap mechanic",
        "Energy and armor systems",
        "Three level progression",
      ],
    },
    tags: {
      en: ["unity 2d", "platformer"],
      fr: ["unity 2d", "plateforme"],
    },
    translations: {
      en: {
        name: "Aregon",
        description: [
          "A 2D platformer where you need to reach the end of the level by swapping gravity and managing your energy, life, and armor.",
          "The game includes collectibles and three levels to beat without dying.",
          "The game is not complete, some adjustments need to be made for options and the final boss to be introduced, but this will remain as an unfinished project in my portfolio as it was a great learning experience and I am proud of what I accomplished with it, especially since it was my first time working with Unity and C#."
        ],
        highlights: [
          "Implemented gravity flipping for level traversal.",
          "Built the energy, life, and armor systems.",
        ],
      },
      fr: {
        name: "Aregon",
        description: [
          "Un jeu platformer 2D où vous devez atteindre la fin du niveau en changeant la gravité et en gérant votre énergie, vie et armure.",
          "Le jeu comprend des objets à récolter et trois niveaux à compléter sans mourir.",
          "Le jeu n'est pas terminé et quelques ajustements doivent être faits pour les options et le boss final, mais il restera comme projet inachevé dans mon portfolio, car c'était une excellente expérience d'apprentissage et je suis fier de ce que j'ai accompli avec lui, surtout puisqu'il s'agissait de ma première fois à travailler avec Unity et C#."
        ],
        highlights: [
          "Implémentation du changement de gravité.",
          "Création des systèmes d'énergie, de vie et d'armure.",
        ],
      },
    },
  },

  // Equanimity Travel
  {
    id: "equanimity-travel",
    slug: "equanimity-travel",
    status: "active",
    featured: null,
    images: equanimityImages,
    links: [
      {
        label: {
          en: "Itch.io",
          fr: "Itch.io",
        },
        url: "https://shawnoboy.itch.io/equanimity-travel",
      },
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["everything"],
      teamSize: 1,
      year: 2022,
      type: "school project",
      highlights: [
        "Calm rhythm gameplay",
        "Atmospheric presentation",
      ],
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
          "The game is not finished and is only a prototype.",
          "This project was my first experience with a 3D game and it was the first project that told me optimization is important, I kept adding more and more on the level without thinking about performance and it ended up being very laggy.",
          "It's far from being my best project, but I really enjoyed the simplicity and effectiveness of the atmosphere and I wish to bring something similar in a future project with a more complete and polished experience, especially optimized."
        ],
        highlights: [
          "Focused on atmosphere and emotional pacing.",
          "Built a rhythm prototype around a calm experience."
        ],
      },
      fr: {
        name: "Equanimity Travel",
        description: [
          "Un jeu de rythme qui exprime des émotions à travers la musique et l'atmosphère.",
          "Le jeu n'est pas terminé et n'est qu'un prototype.",
          "Ce projet a été ma première expérience avec un jeu en 3D et c'était le premier projet qui m'a fait comprendre que l'optimisation est importante, j'ai continué à ajouter de plus en plus d'éléments dans le niveau sans penser à la performance et ça a fini par être très lent.",
          "Ce projet n'est pas parmi mes meilleurs, mais j'ai vraiment apprécié la simplicité et l'efficacité de l'atmosphère et j'espère pouvoir créer quelque chose de similaire dans un futur projet avec une expérience plus complète et polie, surtout optimisée."
        ],
        highlights: [
          "Accent mis sur l'ambiance et le rythme émotionnel.",
          "Prototype de jeu de rythme autour d'une expérience calme."
        ],
      },
    },
  },

  // Myosotis Memories
  {
    id: "myosotis-memories",
    slug: "myosotis-memories",
    status: "active",
    featured: null,
    images: myosotisImages,
    links: [
      {
        label: {
          en: "Itch.io",
          fr: "Itch.io",
        },
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
      highlights: [
        "40-hour game jam project",
        "Garden-themed gameplay loop",
      ],
    },
    tags: {
      en: ["unity 2d", "game jam"],
      fr: ["unity 2d", "game jam"],
    },
    translations: {
      en: {
        name: "Myosotis Memories",
        description: [
          "Game created during the Valleyfield Intercollegiate Game Jam in 40 hours.",
          "The goal is to collect puzzle pieces and see the garden bloom with forget-me-nots.",
        ],
        highlights: [
          "Built the core collectible and survival loop.",
          "Worked under a 40-hour game jam deadline.",
        ],
      },
      fr: {
        name: "Myosotis Memories",
        description: [
          "Jeu créé pendant le Game Jam intercollégial de Valleyfield en 40 heures.",
          "Le but est de récupérer des morceaux de casse-tête et de faire fleurir le jardin de myosotis.",
        ],
        highlights: [
          "Création de la boucle principale de collecte et de survie.",
          "Travail réalisé sous contrainte de 40 heures de game jam.",
        ],
      },
    },
  },

  // Misaryes: Subnebula
  {
    id: "misaryes-subnebula",
    slug: "misaryes-subnebula",
    status: "active",
    featured: 1,
    images: misaryesImages,
    links: [
      {
        label: {
          en: "Itch.io",
          fr: "Itch.io",
        },
        url: "https://shawnoboy.itch.io/misaryes-subnebula",
      },
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["programmer"],
      teamSize: 4,
      year: 2023,
      type: "team project",
      highlights: [
        "Open-world gameplay structure",
        "Inventory and healing systems",
        "URP rendering pipeline",
      ],
    },
    tags: {
      en: ["unity 3d", "open-world", "urp"],
      fr: ["unity 3d", "monde-ouvert", "urp"],
    },
    translations: {
      en: {
        name: "Misaryes: Subnebula",
        description: [
          "A large open-world team project with several biomes and many systems.",
          "The game includes inventory management, healing, and environmental interaction.",
        ],
        highlights: [
          "Contributed to large-scale systems and gameplay integration.",
          "Worked on inventory, healing, and environmental interactions.",
        ],
      },
      fr: {
        name: "Misaryes: Subnebula",
        description: [
          "Un grand projet d'équipe en monde ouvert avec plusieurs biomes et de nombreux systèmes.",
          "Le jeu comprend la gestion d'inventaire, des soins et des interactions avec l'environnement.",
        ],
        highlights: [
          "Contribution à des systèmes de grande envergure et à l'intégration du gameplay.",
          "Travail sur l'inventaire, les soins et les interactions avec l'environnement.",
        ],
      },
    },
  },

  // Cult-Tuerie
  {
    id: "cult-tuerie",
    slug: "cult-tuerie",
    status: "active",
    featured: null,
    images: culttuerieImages,
    links: [
      {
        label: {
          en: "Itch.io",
          fr: "Itch.io",
        },
        url: "https://shawnoboy.itch.io/cult-tuerie",
      },
    ],
    meta: {
      engine: "Unity",
      dimension: "3D",
      role: ["programmer"],
      teamSize: 6,
      year: 2024,
      type: "game jam",
      highlights: [
        "Combat-focused game jam project",
        "Progression through collected scraps",
      ],
    },
    tags: {
      en: ["unity 3d", "game jam"],
      fr: ["unity 3d", "game jam"],
    },
    translations: {
      en: {
        name: "Cult-Tuerie",
        description: [
          "A simple shooting game made during the 7th Intercollegiate Valleyfield Game Jam.",
          "The player defeats enemies and collects scraps to improve stats and survive longer.",
        ],
        highlights: [
          "Built the enemy combat loop and progression system.",
          "Delivered the project within a game jam timeframe.",
        ],
      },
      fr: {
        name: "Cult-Tuerie",
        description: [
          "Un jeu de tir simple réalisé pendant la 7e édition du Game Jam intercollégial de Valleyfield.",
          "Le joueur affronte des ennemis et récupère des scraps pour améliorer ses statistiques et survivre plus longtemps.",
        ],
        highlights: [
          "Création de la boucle de combat et du système de progression.",
          "Projet livré dans un cadre de game jam.",
        ],
      },
    },
  },

];

// export const projects = {
  
//   en: {

//     project1: {

//       nom: "Dash Out",
//       description: "A rhythm game made in javascript, my first game inspired by "Just Shapes and Beats," exceeding course expectations in complexity.",
//       img: dashout,
//       lowImg: low_dashout,
//       link: "https://shawnoboy.itch.io/dash-out",
//       tags: ["Javascript", "Rythm", "Programmer", "Individual Project", "School Project"]

//     },

//     project2: {

//       nom: "Aregon",
//       description: "A 2D game incorporating several concepts such as gravity change, an energy bar, life and armor, collectible items, and 3 levels to beat without dying. The game is not complete, some adjustments need to be made for options and the final boss to be introduced.",
//       img: aregon,
//       lowImg: low_aregon,
//       link: "https://shawnoboy.itch.io/aregon",
//       tags: ["Unity 2D", "Platformer", "Programmer", "Artist", "Gravity", "Individual Project", "School Project"]

//     },

//     project3: {

//       nom: "Equanimity Travel",
//       description: "A rhythm game that expresses feelings through music and a calm atmosphere. The game is not finished and is only a prototype.",
//       img: equanimity,
//       lowImg: low_equanimity,
//       link: "https://shawnoboy.itch.io/equanimity-travel",
//       tags: ["Unity 3D", "Rythm", "Atmosphere", "Calm", "Programmer", "Individual Project", "School Project"]

//     },

//     project4: {

//       nom: "Myosotis Memories",
//       description: "Game created during the Valleyfield Intercollegiate Game Jam in 40 hours on the theme of the garden. The goal is to collect puzzle pieces and see the garden bloom with forget-me-nots to avoid ending up in the garden of oblivion. Beware of creatures that appear endlessly, they will try to pull you down.",
//       img: myosotis,
//       lowImg: low_myosotis,
//       link: "https://shawnoboy.itch.io/myosotis-memories",
//       tags: ["Unity 2D", "Game Jam", "Programmer", "Team Project", "School Project"]

//     },

//     project5: {

//       nom: "Misaryes: Subnebula",
//       description: "Team project carried out during a gaming course developed in approximately 3 months. It is an open-world game with 5 zones, each with its own biome. The game introduces several concepts, such as Unity"s URP rendering system, a cursor allowing the player to interact with the environment and collect resources, an inventory system for resource management and crafting, a "Drag & Drop" healing system on injured body parts, a beautiful environment filled with creatures to defeat, a storyline throughout the game, and more. This project has taken many hours of work outside of classes and a high-quality team effort. It is, in fact, my largest project completed during my college years.",
//       img: misaryes,
//       lowImg: low_misaryes,
//       link: "https://shawnoboy.itch.io/misaryes-subnebula",
//       tags: ["Unity 3D", "Open World", "URP", "Programmer", "Team Project", "School Project"]
      
//     },
//     project6: {

//       nom: "Cult-Tuerie",
//       description: "Game created during the 7th edition of the Intercollegiate Valleyfield Game Jam in 40 hours, with the theme of the Cult. A simple shooting game where the player kills cult enemies and collects "Scraps" that will later be used to improve their stats and survive longer.",
//       img: culttuerie,
//       lowImg: low_culttuerie,
//       link: "https://shawnoboy.itch.io/cult-tuerie",
//       tags: ["Unity 3D", "Game Jam", "Programmer", "Team Project", "Game Design"]

//     }

//   },

//   fr: {

//     project1: {

//       nom: "Dash Out",
//       description: "Un jeu de rythme réalisé en javascript, mon premier jeu réalisé inspiré par "Just Shapes and Beats", surpassant les attentes du cours par sa complexité.",
//       img: dashout,
//       lowImg: low_dashout,
//       link: "https://shawnoboy.itch.io/dash-out",
//       tags: ["Javascript", "Rythme", "Programmeur", "Projet Individuel", "Projet d"école"]

//     },
//     project2: {

//       nom: "Aregon",
//       description: "Un jeu 2D apportant plusieurs concepte comme le changement de gravité, une barre d"énergie, vie et armure, des objets à récolter et 3 niveaux à battre sans mourir. Le jeu n"est pas complet, quelques changements à réglé pour les options et le boss final à introduire.",
//       img: aregon,
//       lowImg: low_aregon,
//       link: "https://shawnoboy.itch.io/aregon",
//       tags: ["Unity 2D", "Jeu de plateforme", "Programmeur", "Graphiste", "Gravité", "Projet Individuel", "Projet d"école"]

//     },
//     project3: {

//       nom: "Equanimity Travel",
//       description: "Un jeu de rythme qui exprime des sentiments à travers une musique et un atmosphère calme. Le jeu n"est pas terminé et ce n"est qu"un prototype.",
//       img: equanimity,
//       lowImg: low_equanimity,
//       link: "https://shawnoboy.itch.io/equanimity-travel",
//       tags: ["Unity 3D", "Rythme", "Atmosphère", "Calme", "Programmeur", "Projet Individuel", "Projet d"école"]

//     },
//     project4: {

//       nom: "Myosotis Memories",
//       description: "Jeu fait pendant le Game Jam Intercollégiale de Valleyfield en 40h sur la thématique du Jardin. Le but étant de récupérer des morceaux de casse-tête et voyez le jardin fleurir de myosotis pour ne pas finir dans le jardin de l"oublie, attention aux créatures qui apparaissent infiniment, elle essairont de vous tirer vers le bas.",
//       img: myosotis,
//       lowImg: low_myosotis,
//       link: "https://shawnoboy.itch.io/myosotis-memories",
//       tags: ["Unity 2D", "Game Jam", "Programmeur", "Projet d"équipe", "Projet d"école"]

//     },
//     project5: {

//       nom: "Misaryes: Subnebula",
//       description: "Projet d"équipe réalisé pendant un cours de jeu en plus ou moins 3 mois. C"est un jeu à monde ouvert comprenant 5 zones avec leur propre biome, le jeu introduit plusieur concept comme le système de rendu URP d"Unity, un curseur permettant au joueur d"intéragir avec l"environnement et récolter des ressources, un système d"inventaire permettant au joueur de gérer ses ressources et fabriquer des soins, un système de soins en "Drag & Drop" sur les partie du corps blessé, un environnement magnifique remplie de créature à battre, une histoire tout au long du jeu et encore plus. Ce projet aura prit des dizaines d"heures de travail à l"extérieur des cours et une équipe de travail de qualité. C"est d"ailleurs mon plus grand projet réalisé pendant mon cégep.",
//       img: misaryes,
//       lowImg: low_misaryes,
//       link: "https://shawnoboy.itch.io/misaryes-subnebula",
//       tags: ["Unity 3D", "Monde Ouvert", "URP", "Programmeur", "Projet d"équipe", "Projet d"école"]

//     },
//     project6: {

//       nom: "Cult-Tuerie",
//       description: "Jeu fait pendant la 7e édition du Game Jam Intercollégiale de Valleyfield en 40h sur la thématique du Culte. Un simple jeu de tir où le joueur tue des ennemis du culte et récupère des "Scraps" qui lui serviront par la suite d"améliorer ses stats et de survivre plus longtemps.",
//       img: culttuerie,
//       lowImg: low_culttuerie,
//       link: "https://shawnoboy.itch.io/cult-tuerie",
//       tags: ["Unity 3D", "Game Jam", "Programmeur", "Projet d"équipe", "Game Design"]

//     }
  
//   }
  
// }

// helper functions to get the projects
export function getProjects(lang = "en", { onlyActive = true } = {}) {
  let list = projects.slice();

  if (onlyActive) {
    list = list.filter((project) => project.status === "active");
  }

  return list.map((project) => ({
    id: project.id,
    slug: project.slug,
    status: project.status,
    featured: project.featured,
    images: project.images,
    links: project.links,
    meta: project.meta,
    tags: project.tags,
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


// web: {

//   projet1: {

//     nom: "Memo",
//     description: "Memo is a web project made in "React" and using the "Firebase" database. It is a simple application that allows you to create, sort, and delete tasks with the possibility of marking them as completed by clicking on them.",
//     img: memo,
//     lowImg: low_memo,
//     lien: "https://shawnoboy.github.io/Memo-TP1-React/",
//     tag: ["React", "Firebase", "One-Pager", "Individual Project", "School Project"]

//   },

//   projet2: {

//     nom: "TIM Maisonneuve",
//     description: "This project involves redesigning the website for the Maisonneuve Multimedia Integration Techniques (TIM) department using WordPress. My team and I took this project much further by using React for the front-end and WordPress" CMS for our back-end using their REST API. The project"s challenges include using React and WordPress together, creating an application with multiple pages, introducing several small concepts like language change, theme change, automatically scrolling testimonials, or simply animations that improve navigation so that our users have the best experience and see TIM as the next step in their lives.",
//     img: timweb,
//     lowImg: low_timweb,
//     lien: "https://shawnoboy.github.io/Projet-Web-2023/",
//     tag: ["React", "WordPress", "React-Router-Dom", "Axios", "Programmer", "Team Project", "School Project"]

//   }

// },

// creation: {

//   projet1: {

//     nom: "Talisman",
//     description: "This is a 3D creation of a talisman for a team-created universe. This talisman is represented by a weapon that has magical abilities at night, represented by the lantern, and during the day, the weapon can only be used for non-magical combat, represented by the scythe. The object is made of roots, metals, and magic.",
//     img: talisman,
//     lowImg: low_talisman,
//     lien: "https://www.youtube.com/watch?v=gYSjsJuq6Vk",
//     tag: ["3D", "Maya", "Individual Project", "School Project"]
    
//   },

//   projet2: {

//     nom: "Véhicule",
//     description: "This is a 3D creation of a vehicle for a team-created universe. The vehicle takes on a mechanical appearance, a blend of two living beings, namely the millipede and the ninja lanternshark. This gives it the ability to move with ease in forests and rugged terrain. Also, thanks to its bioluminescence, it blends into its environment, taking its prey by surprise or hiding from its enemies.",
//     img: vehicule,
//     lowImg: low_vehicule,
//     lien: "https://www.youtube.com/watch?v=4eoKbXELx_Y",
//     tag: ["3D", "Maya", "Individual Project", "School Project"]

//   }

// }


// web: {

//   projet1: {

//     nom: "Memo",
//     description: "Memo est un projet web réalisé en "React" et qui utilise la base de données "Firebase". C"est une simple application qui permet de créer, trier et supprimer des tâches avec la possibilité de les afficher comme complété en leur cliquant dessus.",
//     img: memo,
//     lowImg: low_memo,
//     lien: "https://shawnoboy.github.io/Memo-TP1-React/",
//     tag: ["React", "Firebase", "One-Pager", "Projet Individuel", "Projet d"école"]

//   },
//   projet2: {

//     nom: "TIM Maisonneuve",
//     description: "Ce projet consiste à refaire le site web du département de la Technique d"Intégration Multimédia (TIM) de Maisonneuve en utilisant "Wordpress". Mon équipe et moi avons pris ce projet beaucoup plus loin en utilisant nos compétences de "React" pour le "front-end" et le CMS de "Wordpress" pour notre "back-end" en utilisant leur API REST. Les difficultés du projet sont d"utiliser "React" et "Wordpress" ensemble, créer une application qui peut avoir plusieurs pages, introduire plusieur petit concept comme changement de langue, changement de thème, des témoignages qui défilent automatiquement ou simplement des animations qui rendent la navigation meilleur afin que nos utilisateurs aient la meilleur expérience et qu"ils voient le TIM comme la prochaine étape de leur vie.",
//     img: timweb,
//     lowImg: low_timweb,
//     lien: "https://shawnoboy.github.io/Projet-Web-2023/",
//     tag: ["React", "Wordpress", "React-Router-Dom", "Axios", "Programmeur", "Projet d"équipe", "Projet d"école"]

//   }

// },

// creation: {

//   projet1: {

//     nom: "Talisman",
//     description: "Ceci est une création 3D d"un talisman pour un univers créé en équipe. Ce talisman est réprésenté par une arme qui possède des capacités magique la nuit, représenté par la lanterne, et le jour l"arme ne peut être qu"utilisé en combat non magique, représenté par la faux. L"objet est fait de racines, métals et magie.",
//     img: talisman,
//     lowImg: low_talisman,
//     lien: "https://www.youtube.com/watch?v=gYSjsJuq6Vk",
//     tag: ["3D", "Maya", "Projet Individuel", "Projet d"école"]

//   },
//   projet2: {

//     nom: "Véhicule",
//     description: "Ceci est une création 3D d"un véhicule pour un univers créé en équipe. Le véhicule prend une apparance mécanique d"un mélange de deux être vivant, soit le mille-pattes et le requin-lanterne ninja, ceux-ci lui donne la capacité de se déplacer avec aise dans les forêts et sols rigoureux et aussi, grâce à sa bioluminescence, il se fond dans son environnement, et prend sa cible par surprise ou se cache de ses ennemis.",
//     img: vehicule,
//     lowImg: low_vehicule,
//     lien: "https://www.youtube.com/watch?v=4eoKbXELx_Y",
//     tag: ["3D", "Maya", "Projet Individuel", "Projet d"école"]

//   }

// }