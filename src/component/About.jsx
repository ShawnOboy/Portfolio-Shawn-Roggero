import '../sass/About.scss'
import { texts } from "../code/texts";

// ----- Default export for About Section -----

export default function About({ lang }) {

  // ----- Content for About Section -----
  const about = texts[lang].about;

  // Render one list of items
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
      <h1>{texts[lang].home.aboutSection}</h1>

      <div className="about-block about-currentState">
        {renderList(about.currentState)}
      </div>

      <div className="about-block about-goals">
        {renderList(about.goals)}
      </div>

      <div className="about-block about-enjoyments">
        {renderList(about.enjoyments)}
      </div>
    </div>
  );
}