import { FormControlLabel, Switch } from '@mui/material';
import '../sass/Header.scss';

import { Link } from "react-router-dom";
import { texts } from '../code/texts';
import { logos } from '../code/images';
import { scrollUpSmooth } from './App';

// ----- Default export for Header -----

export default function Header({theme, setTheme, lang, setLang}) {

  const headerTexts = texts[lang]?.header ?? texts.en.header;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
  };

  return (
    <header className='Header'>

      <div className='header-control header-theme'>
        <FormControlLabel
          onClick={toggleTheme}
          control={<Switch checked={theme === 'dark'} />}
          label={headerTexts.theme + (theme === 'dark' ? headerTexts.dark : headerTexts.light)}
        />
      </div>

      <Link onClick={scrollUpSmooth} to="/home" className='logo'>
        <img src={logos[theme]} alt={headerTexts.logo} />
      </Link>

      <div className='header-control header-language'>
        <FormControlLabel
          onClick={toggleLang}
          control={<Switch checked={lang === 'en'} />}
          label={headerTexts.lang + (lang === 'en' ? headerTexts.en : headerTexts.fr)}
        />
      </div>

    </header>
  );
}