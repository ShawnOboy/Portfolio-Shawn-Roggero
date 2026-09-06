import '../sass/HomePage.scss';
import { texts } from '../code/texts';
import { projects as allProjects } from '../code/projects';
import { Link } from 'react-router-dom';
import Resume from '../Resume_Roggero_Shawn.pdf';
import About from './About';
import Projects from './Projects';

// ----- Default export for Home Page -----

export default function HomePage({ lang }) {

  // ----- Content for Home Page -----
  const homeTexts = texts[lang].home ?? texts.en.home;
  const projects = allProjects[lang] ?? allProjects.en;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="HomePage">

      {/* ----- Hero Section ----- */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{homeTexts.heroTitle}</h1>
          <p className="hero-sub">{homeTexts.heroSubtitle}</p>

          <div className="hero-ctas">
            <Link className="btn btn--trapezoid" onClick={scrollToProjects}>
              <span className="btn__shape">{homeTexts.projectsButton}</span>
            </Link>
            {/* <button type="button" className="btn btn-primary trapezoid-button" onClick={scrollToProjects}>
              {homeTexts.projectsButton}
            </button> */}
            <a target="_blank" rel="noopener noreferrer" href={Resume} className="btn btn--ghost-trapezoid">
              <span className="btn__shape">{homeTexts.cv}</span>
            </a>
            {/* <a target="_blank" rel="noopener noreferrer" href={Resume} className="btn btn-outline trapezoid-button">
              {homeTexts.cv}
            </a> */}
          </div>
        </div>
      </header>

      {/* ----- About Section ----- */}
      <section className="home-section">
        <About lang={lang} />
      </section>

      {/* ----- Projects Section ----- */}
      <section id="projects" className="home-section">
        <Projects lang={lang} projects={projects} />
      </section>

      {/* ----- Resume Section ----- */}
      <div className="cv-row">
        <a target="_blank" rel="noopener noreferrer" href={Resume} className="btn btn-primary">
          {homeTexts.cv}
        </a>
        <a href={Resume} download="resume_roggero_shawn.pdf" className="btn btn-ghost">
          {homeTexts.downloadCv}
        </a>
      </div>

    </main>
  );
}