import '../sass/About.scss';
import { texts } from "../code/texts";
import { backgrounds } from '../code/images';

// ----- Default export for About Section -----

export default function About({ lang }) {

  const aboutTexts = texts[lang]?.aboutSection ?? texts.en.aboutSection;

  const renderList = (items) => (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className={item.done ? 'done' : ''}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="About">

      <h1>{aboutTexts.aboutTitle}</h1>

      <div className="about-image about-image--top">
        <img src={backgrounds.aboutTopRight} />
      </div>

      <div className="about-block about-currentState">
        {renderList(aboutTexts.currentState)}
      </div>

      <div className="about-block about-goals">
        {renderList(aboutTexts.goals)}
      </div>

      <div className="about-block about-enjoyments">
        {renderList(aboutTexts.enjoyments)}
      </div>

      <div className="about-image about-image--bottom">
        <img src={backgrounds.aboutBottomLeft} />
      </div>

    </div>
  );
}