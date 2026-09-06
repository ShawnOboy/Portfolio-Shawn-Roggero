import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import '../sass/Header.scss'

import { Link } from "react-router-dom";
import { texts } from '../code/texts';
import { logos } from '../code/images';
import { scrollUpSmooth } from './App';

// ----- Default export for Header -----

// This component receives theme, setTheme, lang and setLang as props from App.jsx to manage the theme and language state
export default function Header({theme, setTheme, lang, setLang}) {

  // Function to toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Function to toggle language between English and French
  const toggleLang = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
  };


  // ----- JSX for Header -----
  return (
    <div className='Header'>
      <FormGroup>
        <FormControlLabel
          onClick={toggleTheme}
          control={<Switch checked={theme === 'dark'} />}
          label={texts[lang].header.theme + texts[lang].header[theme]}
        />
      </FormGroup>
      <Link onClick={scrollUpSmooth} to={"/home"} className='logo'>
        <img src={logos[theme]} alt={texts[lang].header.logo} />
      </Link>
      <FormGroup>
        <FormControlLabel
          onClick={toggleLang}
          control={<Switch checked={lang === 'en'} />}
          label={texts[lang].header.lang + texts[lang].header[lang]}
        />
      </FormGroup>
    </div>
  );
}