import { Route, Routes } from 'react-router-dom';
import '../sass/App.scss';

import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import Page_404 from './Page_404';
import SingleProject from './SingleProject';
import TitlePage from './TitlePage';
import { useEffect, useState } from 'react';


// ----- Exported scroll to top functions -----
export const scrollUpSmooth = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const scrollUpInstant = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });
};

// ----- Default export for App -----

export default function App() {

  // ----- State for theme and language -----

  // Theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme-sr');

    if(savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    else {
      return "dark";
    }
  });

  // Language
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem('lang-sr');

    if(savedLang === "fr" || savedLang === "en") {
      return savedLang;
    }
    else {
      return "en";
    }
  });


  // ----- UseEffects for theme and language -----

  // Update localStorage and body class when theme changes
  useEffect(() => {
    localStorage.setItem('theme-sr', theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('lang-sr', lang);
  }, [lang]);


  // ----- JSX for App -----
  return (
    <div className="App">
      {/* ----- Header and Title (These will be displayed on all pages) ----- */}
      <Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <TitlePage lang={lang} />

      {/* ----- Routes for different pages ----- */}
      <Routes>
        <Route path="/" element={<HomePage lang={lang} />} />
        <Route path="/home" element={<HomePage lang={lang} />} />

        {/* future detail route */}
        <Route path="/projects/:slug" element={<SingleProject lang={lang} />} />

        {/* Page 404 Route */}
        <Route path="*" element={<Page_404 lang={lang} />} />
      </Routes>

      {/* ----- Footer (This will be displayed on all pages) ----- */}
      <Footer lang={lang} />
    </div>
  );
}