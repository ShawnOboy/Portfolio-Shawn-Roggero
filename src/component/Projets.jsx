import { texts } from '../code/textes';
import '../sass/Projets.scss'

import { Link } from 'react-router-dom';
import { scrollUp } from './App';

export default function Projets({langue}) {

  return (
    <div className='Projets'>
      <Link onClick={scrollUp} to={"/projets/jeux"} className="projets-jeux">
        <h1>{texts[langue].projets.jeux}</h1>
      </Link>

      <Link onClick={scrollUp} to={"/projets/web"} className="projets-web">
        <h1>{texts[langue].projets.web}</h1>
      </Link>

      <Link onClick={scrollUp} to={"/projets/creation"} className="projets-creation">
        <h1>{texts[langue].projets.creation}</h1>
      </Link>
    </div>
  );
}