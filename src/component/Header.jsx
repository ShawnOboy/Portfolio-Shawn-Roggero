import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import '../sass/Header.scss'

import { Link } from "react-router-dom";
import { texts } from '../code/textes';

export default function Header({theme, setTheme, langue, setLangue}) {

  const toggleTheme = () => {
    setTheme(theme === 'clair' ? 'sombre' : 'clair');
  };

  const toggleLangue = () => {
    setLangue(langue === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className='Header'>
      <Link to={"/Portfolio-Shawn-Roggero/accueil"} className='logo'>
        <img src="" alt={texts[langue].header.logo} />
      </Link>
      <FormGroup>
        <FormControlLabel
          onClick={toggleTheme}
          control={<Switch checked={theme === 'sombre'} />}
          label={texts[langue].header.theme + texts[langue].header[theme]}
        />

        <FormControlLabel
          onClick={toggleLangue}
          control={<Switch checked={langue === 'en'} />}
          label={texts[langue].header.langue + texts[langue].header[langue]}
        />
      </FormGroup>
    </div>
  );
}