import '../sass/Footer.scss'

import Resume from '../Resume_Roggero_Shawn.pdf';
import { texts } from '../code/textes';
import { Link } from 'react-router-dom';
import { scrollUp } from './App';

export default function Footer({langue}) {
  return (
    <div className='Footer'>
      <div>
        <p>
          <a target='_blank' href="mailto: shawnroggero+professionnel@hotmail.com">
            {texts[langue].footer.infos.email}
          </a>
        </p>
        <p>
          <a target='_blank' href="tel:5143482065">
            {texts[langue].footer.infos.phone}
          </a>
        </p>
      </div>
      <div>
        <p>
          <a target='_blank' href="https://www.linkedin.com/in/shawn-roggero-b37374262/">
            {texts[langue].footer.lien.linkedin}
          </a>
        </p>
        <p>
          <a target='_blank' href="https://github.com/ShawnOboy">
            {texts[langue].footer.lien.github}
          </a>
        </p>
        <p>
          <a target='_blank' href="https://www.youtube.com/channel/UC2Z_VKlA475KE9HKUQftTGQ">
            {texts[langue].footer.lien.youtube}
          </a>
        </p>
      </div>
      <div>
        <p>
          <Link onClick={scrollUp} to={"/accueil"}>
            {texts[langue].footer.nav.accueil}
          </Link>
        </p>
        <p className='projets-footer'>
          <Link onClick={scrollUp} to={"/projets/jeux"}>
            {texts[langue].footer.nav.jeux}
          </Link>
          <Link onClick={scrollUp} to={"/projets/web"}>
            {texts[langue].footer.nav.web}
          </Link>
          <Link onClick={scrollUp} to={"/projets/creation"}>
            {texts[langue].footer.nav.creation}
          </Link>
        </p>
        <p>
          <a target='_blank' href={Resume}>
            {texts[langue].footer.nav.cv}
          </a>
        </p>
      </div>
    </div>
  );
}