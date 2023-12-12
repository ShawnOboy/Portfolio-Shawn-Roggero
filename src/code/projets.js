// Jeux
import misaryes from '../img/misaryes.png'
import myosotis from '../img/myosotis.png'
import aregon from '../img/aregon.png'
import equanimity from '../img/equanimity.png'
import dashout from '../img/dashout.png'

import low_misaryes from '../img/Low Quality/misaryes.png'
import low_myosotis from '../img/Low Quality/myosotis.png'
import low_aregon from '../img/Low Quality/aregon.png'
import low_equanimity from '../img/Low Quality/equanimity.png'
import low_dashout from '../img/Low Quality/dashout.png'

// Web
import memo from '../img/memo.png'
import timweb from '../img/TIM_Web.png'

import low_memo from '../img/Low Quality/memo.png'
import low_timweb from '../img/Low Quality/TIM_Web.png'

// Création
import talisman from '../img/talisman.jpg'
import vehicule from '../img/vehicule.png'

import low_talisman from '../img/Low Quality/talisman.png'
import low_vehicule from '../img/Low Quality/vehicule.png'

export const projets = {
  
  fr: {

    jeux: {
  
      projet1: {
  
        nom: "Dash Out",
        description: "Un jeu de rythme réalisé en javascript, mon premier jeu réalisé inspiré par 'Just Shapes and Beats', surpassant les attentes du cours par sa complexité.",
        img: dashout,
        lowImg: low_dashout,
        lien: "https://shawnoboy.itch.io/dash-out",
        tag: ["Javascript", "Rythme", "Programmeur", "Projet Individuel", "Projet d'école"]
  
      },
      projet2: {
  
        nom: "Aregon",
        description: "Un jeu 2D apportant plusieurs concepte comme le changement de gravité, une barre d'énergie, vie et armure, des objets à récolter et 3 niveaux à battre sans mourir. Le jeu n'est pas complet, quelques changements à réglé pour les options et le boss final à introduire.",
        img: aregon,
        lowImg: low_aregon,
        lien: "https://shawnoboy.itch.io/aregon",
        tag: ["Unity 2D", "Jeu de plateforme", "Programmeur", "Graphiste", "Gravité", "Projet Individuel", "Projet d'école"]
  
      },
      projet3: {
  
        nom: "Equanimity Travel",
        description: "Un jeu de rythme qui exprime des sentiments à travers une musique et un atmosphère calme. Le jeu n'est pas terminé et ce n'est qu'un prototype.",
        img: equanimity,
        lowImg: low_equanimity,
        lien: "https://shawnoboy.itch.io/equanimity-travel",
        tag: ["Unity 3D", "Rythme", "Atmosphère", "Calme", "Programmeur", "Projet Individuel", "Projet d'école"]
  
      },
      projet4: {
  
        nom: "Myosotis Memories",
        description: "Jeu fait pendant le Game Jam Intercollégiale de Valleyfield en 40h sur la thématique du Jardin. Le but étant de récupérer des morceaux de casse-tête et voyez le jardin fleurir de myosotis pour ne pas finir dans le jardin de l'oublie, attention aux créatures qui apparaissent infiniment, elle essairont de vous tirer vers le bas.",
        img: myosotis,
        lowImg: low_myosotis,
        lien: "https://shawnoboy.itch.io/myosotis-memories",
        tag: ["Unity 2D", "Game Jam", "Programmeur", "Projet d'équipe", "Projet d'école"]
  
      },
      projet5: {
  
        nom: "Misaryes: Subnebula",
        description: "Projet d'équipe réalisé pendant un cours de jeu en plus ou moins 3 mois. C'est un jeu à monde ouvert comprenant 5 zones avec leur propre biome, le jeu introduit plusieur concept comme le système de rendu URP d'Unity, un curseur permettant au joueur d'intéragir avec l'environnement et récolter des ressources, un système d'inventaire permettant au joueur de gérer ses ressources et fabriquer des soins, un système de soins en 'Drag & Drop' sur les partie du corps blessé, un environnement magnifique remplie de créature à battre, une histoire tout au long du jeu et encore plus. Ce projet aura prit des dizaines d'heures de travail à l'extérieur des cours et une équipe de travail de qualité. C'est d'ailleurs mon plus grand projet réalisé pendant mon cégep.",
        img: misaryes,
        lowImg: low_misaryes,
        lien: "https://shawnoboy.itch.io/misaryes-subnebula",
        tag: ["Unity 3D", "Monde Ouvert", "URP", "Programmeur", "Projet d'équipe", "Projet d'école"]
  
      }
  
    },
  
    web: {
  
      projet1: {
  
        nom: "Memo",
        description: "Memo est un projet web réalisé en 'React' et qui utilise la base de données 'Firebase'. C'est une simple application qui permet de créer, trier et supprimer des tâches avec la possibilité de les afficher comme complété en leur cliquant dessus.",
        img: memo,
        lowImg: low_memo,
        lien: "https://shawnoboy.github.io/Memo-TP1-React/",
        tag: ["React", "Firebase", "One-Pager", "Projet Individuel", "Projet d'école"]
  
      },
      projet2: {
  
        nom: "TIM Maisonneuve",
        description: "Ce projet consiste à refaire le site web du département de la Technique d'Intégration Multimédia (TIM) de Maisonneuve en utilisant 'Wordpress'. Mon équipe et moi avons pris ce projet beaucoup plus loin en utilisant nos compétences de 'React' pour le 'front-end' et le CMS de 'Wordpress' pour notre 'back-end' en utilisant leur API REST. Les difficultés du projet sont d'utiliser 'React' et 'Wordpress' ensemble, créer une application qui peut avoir plusieurs pages, introduire plusieur petit concept comme changement de langue, changement de thème, des témoignages qui défilent automatiquement ou simplement des animations qui rendent la navigation meilleur afin que nos utilisateurs aient la meilleur expérience et qu'ils voient le TIM comme la prochaine étape de leur vie.",
        img: timweb,
        lowImg: low_timweb,
        lien: "https://shawnoboy.github.io/Projet-Web-2023/",
        tag: ["React", "Wordpress", "React-Router-Dom", "Axios", "Programmeur", "Projet d'équipe", "Projet d'école"]
  
      }
  
    },
  
    creation: {
  
      projet1: {
  
        nom: "Talisman",
        description: "Ceci est une création 3D d'un talisman pour un univers créé en équipe. Ce talisman est réprésenté par une arme qui possède des capacités magique la nuit, représenté par la lanterne, et le jour l'arme ne peut être qu'utilisé en combat non magique, représenté par la faux. L'objet est fait de racines, métals et magie.",
        img: talisman,
        lowImg: low_talisman,
        lien: "https://www.youtube.com/watch?v=gYSjsJuq6Vk",
        tag: ["3D", "Maya", "Projet Individuel", "Projet d'école"]
  
      },
      projet2: {
  
        nom: "Véhicule",
        description: "Ceci est une création 3D d'un véhicule pour un univers créé en équipe. Le véhicule prend une apparance mécanique d'un mélange de deux être vivant, soit le mille-pattes et le requin-lanterne ninja, ceux-ci lui donne la capacité de se déplacer avec aise dans les forêts et sols rigoureux et aussi, grâce à sa bioluminescence, il se fond dans son environnement, et prend sa cible par surprise ou se cache de ses ennemis.",
        img: vehicule,
        lowImg: low_vehicule,
        lien: "https://www.youtube.com/watch?v=4eoKbXELx_Y",
        tag: ["3D", "Maya", "Projet Individuel", "Projet d'école"]
  
      }
  
    }
  
  },

  en: {

    jeux: {

      projet1: {

        nom: "Dash Out",
        description: "A rhythm game made in javascript, my first game inspired by 'Just Shapes and Beats,' exceeding course expectations in complexity.",
        img: dashout,
        lowImg: low_dashout,
        lien: "https://shawnoboy.itch.io/dash-out",
        tag: ["Javascript", "Rythm", "Programmer", "Individual Project", "School Project"]

      },

      projet2: {

        nom: "Aregon",
        description: "A 2D game incorporating several concepts such as gravity change, an energy bar, life and armor, collectible items, and 3 levels to beat without dying. The game is not complete, some adjustments need to be made for options and the final boss to be introduced.",
        img: aregon,
        lowImg: low_aregon,
        lien: "https://shawnoboy.itch.io/aregon",
        tag: ["Unity 2D", "Platformer", "Programmer", "Artist", "Gravity", "Individual Project", "School Project"]

      },

      projet3: {

        nom: "Equanimity Travel",
        description: "A rhythm game that expresses feelings through music and a calm atmosphere. The game is not finished and is only a prototype.",
        img: equanimity,
        lowImg: low_equanimity,
        lien: "https://shawnoboy.itch.io/equanimity-travel",
        tag: ["Unity 3D", "Rythm", "Atmosphere", "Calm", "Programmer", "Individual Project", "School Project"]

      },

      projet4: {

        nom: "Myosotis Memories",
        description: "Game created during the Valleyfield Intercollegiate Game Jam in 40 hours on the theme of the garden. The goal is to collect puzzle pieces and see the garden bloom with forget-me-nots to avoid ending up in the garden of oblivion. Beware of creatures that appear endlessly, they will try to pull you down.",
        img: myosotis,
        lowImg: low_myosotis,
        lien: "https://shawnoboy.itch.io/myosotis-memories",
        tag: ["Unity 2D", "Game Jam", "Programmer", "Team Project", "School Project"]

      },

      projet5: {

        nom: "Misaryes: Subnebula",
        description: "Team project carried out during a gaming course developed in approximately 3 months. It is an open-world game with 5 zones, each with its own biome. The game introduces several concepts, such as Unity's URP rendering system, a cursor allowing the player to interact with the environment and collect resources, an inventory system for resource management and crafting, a 'Drag & Drop' healing system on injured body parts, a beautiful environment filled with creatures to defeat, a storyline throughout the game, and more. This project has taken many hours of work outside of classes and a high-quality team effort. It is, in fact, my largest project completed during my college years.",
        img: misaryes,
        lowImg: low_misaryes,
        lien: "https://shawnoboy.itch.io/misaryes-subnebula",
        tag: ["Unity 3D", "Open World", "URP", "Programmer", "Team Project", "School Project"]
        
      }

    },

    web: {

      projet1: {

        nom: "Memo",
        description: "Memo is a web project made in 'React' and using the 'Firebase' database. It is a simple application that allows you to create, sort, and delete tasks with the possibility of marking them as completed by clicking on them.",
        img: memo,
        lowImg: low_memo,
        lien: "https://shawnoboy.github.io/Memo-TP1-React/",
        tag: ["React", "Firebase", "One-Pager", "Individual Project", "School Project"]

      },

      projet2: {

        nom: "TIM Maisonneuve",
        description: "This project involves redesigning the website for the Maisonneuve Multimedia Integration Techniques (TIM) department using WordPress. My team and I took this project much further by using React for the front-end and WordPress' CMS for our back-end using their REST API. The project's challenges include using React and WordPress together, creating an application with multiple pages, introducing several small concepts like language change, theme change, automatically scrolling testimonials, or simply animations that improve navigation so that our users have the best experience and see TIM as the next step in their lives.",
        img: timweb,
        lowImg: low_timweb,
        lien: "https://shawnoboy.github.io/Projet-Web-2023/",
        tag: ["React", "WordPress", "React-Router-Dom", "Axios", "Programmer", "Team Project", "School Project"]

      }

    },

    creation: {

      projet1: {

        nom: "Talisman",
        description: "This is a 3D creation of a talisman for a team-created universe. This talisman is represented by a weapon that has magical abilities at night, represented by the lantern, and during the day, the weapon can only be used for non-magical combat, represented by the scythe. The object is made of roots, metals, and magic.",
        img: talisman,
        lowImg: low_talisman,
        lien: "https://www.youtube.com/watch?v=gYSjsJuq6Vk",
        tag: ["3D", "Maya", "Individual Project", "School Project"]
        
      },

      projet2: {

        nom: "Véhicule",
        description: "This is a 3D creation of a vehicle for a team-created universe. The vehicle takes on a mechanical appearance, a blend of two living beings, namely the millipede and the ninja lanternshark. This gives it the ability to move with ease in forests and rugged terrain. Also, thanks to its bioluminescence, it blends into its environment, taking its prey by surprise or hiding from its enemies.",
        img: vehicule,
        lowImg: low_vehicule,
        lien: "https://www.youtube.com/watch?v=4eoKbXELx_Y",
        tag: ["3D", "Maya", "Individual Project", "School Project"]

      }

    }

  }
  
}