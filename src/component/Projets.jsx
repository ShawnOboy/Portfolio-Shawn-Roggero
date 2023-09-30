import { texts } from '../code/textes';
import '../sass/Projets.scss'

import { Link } from 'react-router-dom';

export default function Projets({langue}) {

  return (
    <div className='Projets'>
      <Link to={"/Portfolio-Shawn-Roggero/projets/jeux"} className="projets-jeux">
        <h1>{texts[langue].projets.jeux}</h1>
      </Link>

      <Link to={"/Portfolio-Shawn-Roggero/projets/web"} className="projets-web">
        <h1>{texts[langue].projets.web}</h1>
      </Link>

      <Link to={"/Portfolio-Shawn-Roggero/projets/creation"} className="projets-creation">
        <h1>{texts[langue].projets.creation}</h1>
      </Link>
    </div>
  );
}