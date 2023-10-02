import '../sass/Accueil.scss'

import DownloadIcon from '@mui/icons-material/Download';
import A_Propos from './A_Propos';
import Projets from './Projets';
import { texts } from '../code/textes';

import Resume from '../Resume_Roggero_Shawn.pdf';

export default function Accueil({langue}) {

  return (
    <div className='Accueil'>

      <h1>{texts[langue].accueil.titre}</h1>

      <A_Propos langue={langue} />
      <Projets langue={langue} />

      <div className='cv'>
        <a target='_blank' href={Resume} className='cv_ouvrir'>
          {texts[langue].accueil.cv}
        </a>
        <a href={Resume} download="resume_roggero_shawn.pdf" className='cv_download'>
          <DownloadIcon />
        </ a>
      </div>
    </div>
  );
}