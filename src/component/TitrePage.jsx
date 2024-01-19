import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TitrePage({ langue }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let titre = ' | Shawn Roggero';
    let nouveauTitre = "";

    switch (path) {
      case '/':
        nouveauTitre = langue == "fr" ? 'Portfolio' + titre: 'Portfolio' + titre;
        break;
      case '/accueil':
        nouveauTitre = langue == "fr" ? 'Portfolio' + titre: 'Portfolio' + titre;
        break;
      case '/jeux':
        nouveauTitre = langue == "fr" ? 'Mes Jeux' + titre: 'My Games' + titre;
        break;
      case '/web':
        nouveauTitre = langue == "fr" ? 'Mes Sites Web' + titre: 'My Websites' + titre;
        break;
      case '/creation':
        nouveauTitre = langue == "fr" ? 'Mes Créations' + titre: 'My Creations' + titre;
        break;
      default:
        nouveauTitre = langue == "fr" ? 'Erreur 404' + titre: 'Error 404' + titre;
        break;
    }

    document.title = nouveauTitre;
  }, [location]);

  return null;
}