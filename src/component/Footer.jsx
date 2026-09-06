import '../sass/Footer.scss'

import Resume from '../Resume_Roggero_Shawn.pdf';
import { texts } from '../code/texts';

export default function Footer({lang}) {
  return (
    <div className='Footer'>
      <div>
        <p>
          <a target='_blank' href="mailto: shawnroggero+professionnel@hotmail.com">
            {texts.contactInfos.email}
          </a>
        </p>
        <p>
          <a target='_blank' href="tel:5143482065">
            {texts.contactInfos.phone}
          </a>
        </p>
      </div>
      <div>
        <p>
          <a target='_blank' href="https://www.linkedin.com/in/shawn-roggero-b37374262/">
            {texts.socialLinks.linkedin}
          </a>
        </p>
        <p>
          <a target='_blank' href="https://github.com/ShawnOboy">
            {texts.socialLinks.github}
          </a>
        </p>
        <p>
          <a target='_blank' href="https://shawnoboy.itch.io/">
            {texts.socialLinks.itch}
          </a>
        </p>
      </div>
    </div>
  );
}