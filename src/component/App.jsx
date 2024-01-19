import { Route, Routes} from 'react-router-dom';

import '../sass/App.scss';

import Accueil from './Accueil';
import Header from './Header';
import Footer from './Footer';
import Page_404 from './Page_404';
import A_Propos from './A_Propos';
import Projets from './Projets';
import Projet from './Projet';
import TitrePage from './TitrePage';
import { useEffect, useState } from 'react';
import { projets } from '../code/projets';

export const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
};

export default function App() {

  const [theme, setTheme] = useState(() => {
    const themeSauvegarde = localStorage.getItem('theme-sr');

    if(themeSauvegarde === "clair" || themeSauvegarde === "sombre") {
      return themeSauvegarde;
    }
    else {
      return "sombre";
    }
  });

  const [langue, setLangue] = useState(() => {
    const langueSauvegarde = localStorage.getItem('langue-sr');

    if(langueSauvegarde === "fr" || langueSauvegarde === "en") {
      return langueSauvegarde;
    }
    else {
      return "fr";
    }
  });

  const [lesProjets, setLesProjets] = useState(null);

  useEffect(() => {
    setLesProjets(projets[langue])
  }, [langue]);

  useEffect(() => {
    localStorage.setItem('theme-sr', theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);
  
  useEffect(() => {
    localStorage.setItem('langue-sr', langue);
  }, [langue]);

  return (
    <div className="App">

      <Header theme={theme} setTheme={setTheme} langue={langue} setLangue={setLangue} />
      <TitrePage langue={langue}/>

      <Routes>
        <Route exact path="/" element={< Accueil langue={langue} />} ></Route> {/*Page par défaut*/}
        <Route exact path="/accueil" element={< Accueil langue={langue} />} ></Route> {/*Page d'accueil*/}

        <Route exact path="/jeux" element={< Projet langue={langue} filtre={"jeux"} lesProjets={lesProjets} />} ></Route> {/*Page de projets jeux*/}
        <Route exact path="/web" element={< Projet langue={langue} filtre={"web"} lesProjets={lesProjets} />} ></Route> {/*Page de projets web*/}
        <Route exact path="/creation" element={< Projet langue={langue} filtre={"creation"} lesProjets={lesProjets} />} ></Route> {/*Page de projets creation*/}

        <Route path="*" element={< Page_404 langue={langue} />} ></Route>
      </Routes>

      <Footer langue={langue} />

    </div>
  );
}