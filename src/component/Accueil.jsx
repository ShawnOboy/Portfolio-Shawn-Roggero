import '../sass/Accueil.scss'

import DownloadIcon from '@mui/icons-material/Download';
import A_Propos from './A_Propos';
import Projets from './Projets';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { texts } from '../code/textes';

export default function Accueil({langue}) {

  return (
    <div className='Accueil'>

      <h1>{texts[langue].accueil.titre}</h1>

      <A_Propos langue={langue} />
      <Projets langue={langue} />

      <div className='cv'>
        <div className='cv_ouvrir'>
          {texts[langue].accueil.cv}
        </div>
        <div className='cv_download'>
          <DownloadIcon />
        </div>
      </div>
    </div>
  );
}