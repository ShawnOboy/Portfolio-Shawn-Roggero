import '../sass/Footer.scss'

import Resume from '../Resume_Roggero_Shawn.pdf';
import { texts } from '../code/texts';

export default function Footer({lang}) {

  const footerTexts = texts[lang]?.footer ?? texts.en.footer;
  const contactTexts = texts.contactInfos;
  const socialTexts = texts.socialLinks;

  return (
    <div className='Footer'>
      <div>
        <p>
          <a target='_blank' href="mailto: shawnroggero+professionnel@hotmail.com">
            {contactTexts.email}
          </a>
        </p>
        <p>
          <a target='_blank' href="tel:5143482065">
            {contactTexts.phone}
          </a>
        </p>
      </div>
      <div>
        <p>
          <a target='_blank' href="https://www.linkedin.com/in/shawn-roggero-b37374262/">
            {socialTexts.linkedin}
          </a>
        </p>
        <p>
          <a target='_blank' href="https://github.com/ShawnOboy">
            {socialTexts.github}
          </a>
        </p>
        <p>
          <a target='_blank' href="https://shawnoboy.itch.io/">
            {socialTexts.itch}
          </a>
        </p>
      </div>
    </div>
  );
}